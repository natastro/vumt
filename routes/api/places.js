const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth')
const place = require('../../middleware/place')
const Place = require('../../models/Place');
const handleValidationError = require('../../lib/handleValidationError')

const attrAccessible = (req) => {
    const attrAccessible = req.place ? req.place : {}
    const allowed = ['name','location','isOrigin','isDestination','parkingCapacity','timezone']
    allowed.filter((key) => Object.keys(req.body).includes(key)).
        forEach((key) => {
            attrAccessible[key] = req.body[key]
        })
    return attrAccessible
}

// @route GET api/places
// @desc Get all places
// @access Public
// @route GET api/places/origins
// @desc Get places that can be starting points for visits
// @access Public
router.get('/:type?', async (req, res) => {
    let criteria = {}
    switch(req.params.type) {
        case 'origins':
            criteria.isOrigin = true
            break
        case 'destinations':
            criteria.isDestination = true
            break
    }
    try {
        const places = await Place
            .find(criteria)
            .sort({name: 1})
        return res.json(places)
    }
    catch(err) {
        console.log(err)
    }
});

// @route POST api/places
// @desc Create a new place
// @access Private
router.post('/', auth({roles:['admin']}), async (req, res) => {
    const newPlace = new Place(attrAccessible(req))
    try {
        return res.status(201).json(await newPlace.save())
    }
    catch(err) {
        if (err.name === 'ValidationError') {
            return handleValidationError(err,res)
        }
        else {
            throw err
        }
    }
})

// @route PUT api/places/:placeId
// @desc Update an existing place
// @access Private
router.put('/:placeId', auth({roles:['admin']}), place(), async (req, res) => {
    attrAccessible(req)
    try {
        return res.status(200).json(await req.place.save())
    }
    catch(err) {
        if (err.name === 'ValidationError') {
            return handleValidationError(err,res)
        }
        else {
            throw err
        }
    }
})

// @route DELETE api/places
// @desc Delete an existing place
// @access Private
router.delete('/:placeId', auth({roles: ['admin']}), place(), async (req, res) => {
    try {
        await req.place.deleteOne()
        return res.json({success: true})
    }
    catch(err) {
        return res
            .status(404)
            .json({success: false});
    }
})

module.exports = router;