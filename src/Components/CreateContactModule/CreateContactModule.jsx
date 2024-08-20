'use client'
import { X } from "lucide-react";
import styles from './CreateContactModule.module.scss';
import { useState } from "react";

export default function CreateContactModule({ setCreateNew }) {
    const [contact, setContact] = useState({
        'firstName': '',
        'lastName': '',
        'phoneNumber': '',
        'email': ''
    });

    function updateContact(e) {
        const { name, value } = e.target;

        setContact(contact => ({
            ...contact,
            [name]: value,
        }))
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        //ToDO: verify all keyvalue pairs are valid
        //TODo: send API request (try/catch)
        //ToDO: if success go back to contact list
    }


    return (
        <div className={styles.contactBody}>
            <div className={styles.nameContainer}>
                <h2 className={styles.name}>Create Contact</h2>
                <X className={styles.lucide} onClick={() => setCreateNew(false)} />
            </div>
            <form className={styles.formContainer} onSubmit={handleFormSubmit}>
                <label className={styles.label}>
                    First Name:
                    <input className={styles.input}
                        type="text"
                        name="firstName"
                        value={contact.firstName}
                        onChange={updateContact} />
                </label>
                <label className={styles.label}>
                    Last Name:
                    <input className={styles.input}
                        type="text"
                        name="lastName"
                        value={contact.lastName}
                        onChange={updateContact} />
                </label>
                <label className={styles.label}>
                    Phone:
                    <input className={styles.input}
                        type="text"
                        name="phoneNumber"
                        value={contact.phoneNumber}
                        onChange={updateContact} />
                </label>
                <label className={styles.label}>
                    Email:
                    <input className={styles.input}
                        type="text"
                        name="email"
                        value={contact.email}
                        onChange={updateContact} />
                </label>
                <button className={styles.input}
                    type="submit"
                    value="Done">
                    Submit
                </button>
            </form>
        </div>
    )
};