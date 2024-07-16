'use client'

import styles from './ContactItem.module.scss';
import { X } from "lucide-react";

export default function ContactItem( { moduleItem, setSelectedContact } ) {
    const { title, phone, email } = moduleItem;

    return (
        <div className={styles.contactBody}>
            <div className={styles.nameContainer}>
                <h2 className={styles.name}>{title}</h2>
                <X className={styles.lucide}onClick={() => setSelectedContact( null )}/>
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

