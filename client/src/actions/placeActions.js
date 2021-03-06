import axios from 'axios';
import {
    GET_PLACES,
    ADD_PLACE,
    UPDATE_PLACE,
    SAVING_PLACE,
    SAVING_PLACE_CANCEL,
    DELETE_PLACE,
    PLACES_LOADING
 } from './types';
import { tokenConfig } from './authActions'
import { returnErrors, clearErrors } from './errorActions'

const parseDates = ({createdAt, updatedAt}) => {
    return {
        createdAt: Date.parse(createdAt),
        updatedAt: Date.parse(updatedAt)
    }
}

export const getPlaces = () => (dispatch, getState) => {
    dispatch(setPlacesLoading())
    axios
        .get('/api/places',tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PLACES,
                payload: res.data.map((place) => {
                    return {
                        ...place,
                        ...parseDates(place)
                    }
                })
            })
        })
    .catch(err => {
        dispatch(returnErrors(err.response.data,err.response.status))
    });
};

export const deletePlace = id => (dispatch, getState) => {
    axios
        .delete(`/api/places/${id}`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PLACE,
                payload: id
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status))
        })
};

export const savePlace = (place, history) => async (dispatch, getState) => {
    dispatch({ type: SAVING_PLACE })
    dispatch(clearErrors())
    try {
        const res = place._id ? await axios
            .put('/api/places/' + place._id, place, tokenConfig(getState)) : 
            await axios
            .post('/api/places', place, tokenConfig(getState))
        dispatch({
            type: place._id ? UPDATE_PLACE : ADD_PLACE,
            payload: {
                ...res.data,
                ...parseDates(res.data)
            }
        })
        history.push('/places')
    }
    catch(err) {
        dispatch({type: SAVING_PLACE_CANCEL})
        dispatch(returnErrors(err.response.data,err.response.status))
    }
}

export const setPlacesLoading = () => {
    return {
        type: PLACES_LOADING
    }
}