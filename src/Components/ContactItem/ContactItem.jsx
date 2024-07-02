'use client'

import styles from './ContactItem.module.scss';
import { X } from "lucide-react";

export default function ContactItem( { moduleItem, setCurrentChoice } ) {
    const { title, phone, imgURL, email } = moduleItem;

    return (
        <div className={styles.contactBody}>
            <div className={styles.nameContainer}>
                <h2 className="name">{title}</h2>
                <X onClick={() => setCurrentChoice( null )}/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.bottomContainer}>
                    <p className="info">{phone}</p>
                    <p className="info">{email}</p>
                </div>
            </div>
        </div>
    );
}

