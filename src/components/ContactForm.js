import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';

const ContactForm = (props) => {

    const contactFormDetails = ['First Name', 'Last Name', 'Email']
    return(
        <div className='contact-form'>
            <Typography className='section-header'>Get In Touch</Typography>
            <hr className='under-line' />
            {/* actual contact form */}
            <form autoComplete='on' defaultValue>
                {/* input feilds */}
                {contactFormDetails.map((item) => (
                    <div className='input'>
                        <TextField 
                            required
                            className='contact-form-field' 
                            id='filled-basic' 
                            label={item} 
                            variant='filled'
                        />
                    </div>
                ))}
                {/* text area for message */}
                <div className='input'>
                    <TextField
                        required
                        multiline
                        id='filled-basic'
                        variant='filled'
                        label='Message'
                        className='contact-form-field'
                        aria-label='message'
                        rows={4}
                    />
                </div>
                {/* send button */}
                <Button>Send</Button>
            </form>
        </div>
    )
}

export default ContactForm