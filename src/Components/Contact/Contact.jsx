'use client'

import styles from './Contact.module.scss';
import { useState } from "react";

export default function Contact( { name, imgURL, phone, email } ) {
    const [contactOpen, setContactOpen] = useState( false );

    return (
        <div className={styles.contactBody} onClick={() => setContactOpen( !contactOpen )}>
            <div className="top">
                <h2 className="name">{name}</h2>
                <p className="info">{phone}</p>
            </div>
            {contactOpen && (
                <div className="bottom">
                    <img className="circle-img" src={imgURL} alt="avatar_img"/>
                    <p className="info">{email}</p>
                </div>
            )}
        </div>
    );
}
