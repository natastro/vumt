import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Button,
    ButtonGroup,
    Container,
    Input,
    Form,
    FormFeedback,
    FormGroup,
    Label
} from 'reactstrap';
import {
    AsyncTypeahead,
    Highlighter,
    Typeahead
} from 'react-bootstrap-typeahead'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import useValidationErrors from '../../hooks/useValidationErrors'
import useTimezone from '../../hooks/useTimezone'
import useZonedDateTime from '../../hooks/useZonedDateTime'
import locales from '../../locales'
import advisoryContexts from '../../lib/advisoryContexts'

export default function AdvisoryEditor({advisory,onSave,saving}) {
    const { t } = useTranslation('advisory')
    const history = useHistory()

    const [ label, setLabel ] = useState('')
    useEffect(() => {
        setLabel(advisory.label)
    },[advisory.label,setLabel])
    const [ startOn, setStartOn ] = useState('')
    const [ timezone ] = useTimezone()
    const [ startOnDate, setStartOnDate, startOnTime, setStartOnTime
    ] = useZonedDateTime(timezone,advisory.startOn,setStartOn)
    const [ endOn, setEndOn ] = useState('')
    const [ endOnDate, setEndOnDate, endOnTime, setEndOnTime
    ] = useZonedDateTime(timezone,advisory.endOn,setEndOn)
    const [ districts, setDistricts ] = useState([])
    useEffect(() => {
        if (!advisory.districts) {return}
        const vDistricts = advisory.districts.map((d) => {
            return {id: d._id, label: d.name}
        })
        setDistrictOptions(vDistricts)
        setDistricts(vDistricts)
    },[advisory.districts])
    const districtsRef = useRef()
    const [ districtOptions, setDistrictOptions ] = useState([])
    const [ districtLoading, setDistrictLoading ] = useState(false)
    const districtSearch = useCallback((query) => {
        setDistrictLoading(true)
        axios
            .get('/api/districts')
            .then((res) => {
                setDistrictOptions(res.data.map((district) => {
                    return {id: district._id, label: district.name}
                }))
                setDistrictLoading(false)
            })
    },[setDistrictLoading,setDistrictOptions])
    const initDistrictSearch = useCallback(() => {
        if (districtOptions.length > 0) return
        districtSearch()
    },[districtOptions,districtSearch])
    const renderDistricts = (option, props, index) => {
        return [
            <Highlighter key="label" search={props.text}>
                {option.label}
            </Highlighter>
        ]
    }
    const [ contexts, setContexts ] = useState([])
    useEffect(() => {
        if (!advisory.contexts) { return }
        const vContexts = advisory.contexts.map((c) => {
            return {id: c, label: t(`advisoryContext:${c}`)}
        })
        setContexts(vContexts)
    },[advisory.contexts,t])
    const [contextOptions, setContextOptions] = useState(advisoryContexts.map(c => {
        return {id: c, label: t(`advisoryContext:${c}`)}
    }))
    useEffect(() => {
        setContextOptions(advisoryContexts.map(c => {
            return {id: c, label: t(`advisoryContext:${c}`)}
        }))
    }, [setContextOptions,t])
    const [prompts,setPrompts] = useState([])
    useEffect(() => {
        if (!advisory.prompts) {return}
        setPrompts(advisory.prompts)
    },[advisory.prompts])
    const updatePrompt = (index,field) => {
        return (e) => {
            const newVal = {...prompts[index]}
            newVal[field] = e.target.value
            setPrompts([
                ...prompts.slice(0,index),
                newVal,
                ...prompts.slice(index+1)
            ])
        }
    }
    const appendPrompt = (e) => {
        setPrompts([...prompts, {language: e.target.value, translation: ''}])
    }
    const removePrompt = (index) => {
        return () => {
            setPrompts(prompts.filter((prompt,i) => {return i !== index}))
        }
    }
    const [missingLocales,setMissingLocales] = useState([])
    useEffect(() => {
        const presentLocales = prompts.map((prompt) => {
            return prompt.language
        })
        setMissingLocales(locales.filter(({code}) => {
            return !presentLocales.includes(code)
        }))
    },[prompts,setMissingLocales])

    const { register, handleSubmit, setError, clearError, errors } = useForm()

    const onChange = (setter) => (e) => {
        const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
        setter(value)
    }
    const onSubmit = () => {
        if (saving) return
        clearError()
        if (startOn && endOn && startOn > endOn) {
            setError("startOnDate","afterEndOn",t('mustBeBeforeEndOn'))
            return
        }
        const newAdvisory = {
            _id: advisory._id,
            label,
            prompts,
            startOn,
            endOn,
            districts: districts.map((d) => {
                return {
                    "_id": d.id
                }
            }),
            contexts: contexts.map((c) => {
                return c.id
            })
        }
        onSave(newAdvisory)
    }

    useValidationErrors({setError})

    return <div>
        <Container>
            <h1>{advisory._id ? t('editAdvisory') : t('newAdvisory')}</h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
            >
                <p>{t('translation:timesAreLocal',{timezone})}</p>
                <FormGroup>
                    <Label for="label">{t('label')}</Label>
                    <Input
                        type="text"
                        name="label"
                        id="label"
                        placeholder={t('label')}
                        innerRef={register({required: true})}
                        value={label}
                        onChange={onChange(setLabel)}
                        invalid={errors.label ? true : false}
                    />
                    {errors.label && errors.label.type === 'required' &&
                        <FormFeedback>{t('commonForms:invalidRequired')}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="startOnDate">{t('startOnDate')}</Label>
                    <Input
                        id="startOnDate"
                        name="startOnDate"
                        type="date"
                        value={startOnDate}
                        onChange={onChange(setStartOnDate)}
                        invalid={errors.startOnDate ? true : false}
                    />
                    {errors.startOnDate && errors.startOnDate.type === 'afterEndOn' &&
                        <FormFeedback>{t('mustBeBeforeEndOn')}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="startOnTime">{t('startOnTime')}</Label>
                    <Input
                        id="startOnTime"
                        name="startOnTime"
                        type="time"
                        value={startOnTime}
                        onChange={onChange(setStartOnTime)}
                        innerRef={register()}
                        invalid={errors.startOnTime ? true : false}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="endOnDate">{t('endOnDate')}</Label>
                    <Input
                        id="endOnDate"
                        name="endOnDate"
                        type="date"
                        value={endOnDate}
                        onChange={onChange(setEndOnDate)}
                        invalid={errors.endOnDate ? true : false}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="endOnTime">{t('endOnTime')}</Label>
                    <Input
                        id="endOnTime"
                        name="endOnTime"
                        type="time"
                        value={endOnTime}
                        onChange={onChange(setEndOnTime)}
                        innerRef={register()}
                        invalid={errors.endOnTime ? true : false}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="districts">{t('districts')}</Label>
                    <AsyncTypeahead
                        id="districts"
                        name="districts"
                        multiple
                        selected={districts}
                        placeholder={t('districtsPlaceholder')}
                        options={districtOptions}
                        isLoading={districtLoading}
                        onSearch={districtSearch}
                        onChange={(selected) => setDistricts(selected)}
                        onFocus={initDistrictSearch}
                        renderMenuItemChildren={renderDistricts}
                        ref={districtsRef}
                        delay={200}
                        minLength={0}
                        clearButton={true}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="contexts">{t('contexts')}</Label>
                    <Typeahead
                        id="contexts"
                        name="contexts"
                        multiple
                        selected={contexts}
                        placeholder={t('contextsPlaceholder')}
                        options={contextOptions}
                        onChange={(selected) => setContexts(selected)}
                        clearButton={true}
                    />
                </FormGroup>
                <h2>{t('prompts')}</h2>
                {prompts.map((prompt,index) => {
                    return <FormGroup key={index}>
                        <Label for={`prompts[${index}].translation`}>{locales.find((locale) => {
                            return locale.code === prompt.language
                        }).name}</Label>
                        <Input
                            type="text"
                            name={`prompts[${index}].translation`}
                            placeholder={t('translation:translation')}
                            innerRef={register({required: true})}
                            value={prompt.translation}
                            onChange={updatePrompt(index,'translation')}
                            invalid={
                                errors.prompts && 
                                errors.prompts[index] &&
                                errors.prompts[index].translation ? true : false}
                        />
                        <Button
                            color="danger"
                            onClick={removePrompt(index)}
                        >{t('removePrompt')}</Button>
                        {
                            errors.prompts &&
                            errors.prompts[index] &&
                            errors.prompts[index].translation &&
                            errors.prompts[index].translation.type === 'required' &&
                            <FormFeedback>{t('commonForms:invalidRequired')}</FormFeedback>}
                    </FormGroup>
                })}
                {missingLocales.length > 0 ? <FormGroup>
                    <Label for="addPrompt">{t('addPrompt')}</Label>
                    <Input
                        type="select"
                        name="addPrompt"
                        value=""
                        onChange={appendPrompt}
                    >
                        <option value="">{t('translation:selectLanguage')}</option>
                        {missingLocales.map(({code,name},index) => {
                            return <option key={index} value={code}>{name}</option>
                        })}
                    </Input>
                </FormGroup> : ''}
                <ButtonGroup>
                    <Button
                        color="primary"
                        block
                    >{advisory._id ? t('updateAdvisory') : t('addAdvisory')}</Button>
                    <Button color="secondary"
                        onClick={() => history.goBack()}
                    >{t('commonForms:cancel')}</Button>
                </ButtonGroup>
            </Form>
        </Container>
    </div>
}
