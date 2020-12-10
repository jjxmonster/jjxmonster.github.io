import { Component } from 'react';
import DelayLink from 'react-delay-link';
import emailjs from 'emailjs-com';
import BackButton from './BackButton'
import { AppContext } from '../context/context.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { animationsOnMount, animationsOnUnMount } from '../gsap/contactPageAnimations'
import '../styles/contact.css'

class Contact extends Component {
    state = {
        from_name: "",
        email: "",
        message: "",
        nameError: null,
        mailError: null,
        messageError: null,
        showErrors: false
    }
    static contextType = AppContext

    errorMessages = {
        name: "Name can't contain a number and is required.",
        mail: "Please enter a valid email.",
        message: "Please enter some message."
    }
    handleShowErrors () {
        this.formValidation()
        this.setState({
            showErrors: true
        })
    }
    componentDidMount () {
        this.context.handleMoveChange()
        animationsOnMount()
    }

    formValidation () {
        const { from_name, email, message } = this.state

        if (/\d/.test(from_name) || from_name === "") {
            this.setState({
                nameError: true
            })
        } else {
            this.setState({
                nameError: false
            })
        }
        if (email.indexOf('@') !== -1) {
            this.setState({
                mailError: false
            })
        } else {
            this.setState({
                mailError: true
            })
        }
        if (message.length > 5) {
            this.setState({
                messageError: false
            })
        } else {
            this.setState({
                messageError: true
            })
        }
    }

    sendEmail (e) {
        e.preventDefault();
        const { nameError, mailError, messageError } = this.state

        if (nameError === false && mailError === false && messageError === false) {
            emailjs.sendForm('service_ljad4dc', 'template_cez2xe7', e.target, 'user_c3tVKssssylv8IrSad9b0')
                .then((result) => {
                    console.log(result.text);
                    alert("Thank you, your message was sent. I will write back as soon as possible.")

                }, (error) => {
                    console.log(error.text);
                    alert("Ooops! something went wrong! Try again later.")
                });

            this.setState({
                from_name: "",
                email: "",
                message: "",
                nameError: null,
                mailError: null,
                messageError: null,
            })
        }
    }


    handleChange (e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
        this.formValidation()
    }

    render () {
        const { from_name, email, message, nameError, mailError, messageError, showErrors } = this.state
        return (

            <div className="contactPage" >
                <div className="contactHeader">
                    <div className="welcomeContact">
                        <div>
                            <h1></h1>
                        </div>
                        <div>
                            <h2></h2>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="contactWrapper">

                    <div className="contactForm">
                        <form onSubmit={ this.sendEmail.bind(this) }>
                            <div className="formName">
                                <input className="input"
                                    type="text"
                                    name="from_name"
                                    placeholder="Name"
                                    onChange={ this.handleChange.bind(this) }
                                    value={ from_name }>
                                </input>
                                { showErrors ? <p>{ nameError ? this.errorMessages.name : null }</p> : null }
                            </div>

                            <div className="formMail">
                                <input className="input"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={ this.handleChange.bind(this) }
                                    value={ email }>
                                </input>

                                { showErrors ? <p>{ mailError ? this.errorMessages.mail : null }</p> : null }
                            </div>

                            <div className="formArea">
                                <textarea name="message"
                                    placeholder="Message"
                                    onChange={ this.handleChange.bind(this) }
                                    value={ message }
                                    cols="30"
                                    rows="10">
                                </textarea>
                                { showErrors ? <p>{ messageError ? this.errorMessages.message : null }</p> : null }
                            </div>

                            <input onClick={ this.handleShowErrors.bind(this) } className="formSubmit" type="submit" value="Submit" />

                        </form>
                    </div>
                    <div className="contactText">
                        <h3>If you have any questions or offer, you can send me a message via form, or contact me on email.</h3>
                        <a href="mailTo:kuba.tarabasz@wp.pl"><span><FontAwesomeIcon icon={ faEnvelope } /></span> kuba.tarabasz@wp.pl</a>
                    </div>
                </div>
                <DelayLink delay={ 1500 } to="/" replace={ false }>
                    <BackButton onUnMountFunction={ animationsOnUnMount } />
                </DelayLink>
            </div>
        );
    }
}

export default Contact;


