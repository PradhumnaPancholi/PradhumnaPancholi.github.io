import { TextField, Typography } from '@material-ui/core';
import React from 'react';

const ContactForm = () => {

    const contactFormDetails = ['First Name', 'Last Name', 'Email', 'Message']
    return(
        <div className='contact-form'>
            <Typography className='section-header'>Get In Touch</Typography>
            <hr className='under-line' />
            {/* actual contact form */}
            <form autoComplete='on' defaultValue>
                {contactFormDetails.map((item) => (
                    <div>
                        <TextField className='contact-form-field' id="filled-basic" label={item} variant="filled" />
                    </div>
                ))}
            </form>
        </div>
    )
}

export default ContactForm