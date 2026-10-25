import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactUs.module.css'

const ContactUs = () => {
    const form = useRef();
    const [emailStatus, setEmailStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_u9ij5gv', 'template_nr5qb7u', form.current, {
                publicKey: 'h26G4dRCe-Bd1FBc1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setEmailStatus('Contact email successfully sent!')

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setEmailStatus('Contact form failed :(')
                },
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" className={styles.messageInput}/>
                <input className={styles.submitButton} type="submit" value="Send Email" />
            </form>

            <h3>{emailStatus}</h3>
        </div>

    );
};

export default ContactUs;