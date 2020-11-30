import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { login, cancelLogin } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function LoginManager() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState(null)

    const error = useSelector(state => state.error)
 
    const dispatch = useDispatch()
    const history = useHistory()
    
    const { t } = useTranslation('AppNavbar')

    const onChange = (setter) => (e) => {
        setter(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        dispatch(clearErrors())
        dispatch(login(user,history))
    }
    const onCancel = (e) => {
        e.preventDefault()
        dispatch(clearErrors())
        dispatch(cancelLogin(history))
    }

    useEffect(() => {
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg)
        } else {
            setMsg(null)
        }
    },[error])

    return <Container>
        <h1>{t('login')}</h1>
        {msg ? <Alert color="danger">{msg}</Alert> : null }
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label for="email">{t('commonForms:email')}</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t('commonForms:emailPlaceholder')}
                    onChange={onChange(setEmail)}
                    className="mb-3"
                />
                <Label for="password">{t('commonForms:password')}</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder={t('commonForms:password')}
                    onChange={onChange(setPassword)}
                    className="mb-3"
                />
                <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    block
                >{t('login')}</Button>
                <Button color="link" onClick={onCancel}>{t('cancel')}</Button>
            </FormGroup>
        </Form>
        <p>{t('forgotPassword')} <Link to="/resetPassword">{t('resetPassword')}</Link></p>
    </Container>
}

export default LoginManager;