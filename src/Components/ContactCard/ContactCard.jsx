'use client'

import styles from './ContactCard.module.scss';
import Contact from "@/Components/Contact/Contact";

export default function ContactCard( { contacts } ) {
    return (
        <div className={styles.contactCardBody}>
            {contacts.map( ( contact ) => (
                <Contact
                    key={contact.phone}
                    email={contact.email}
                    imgURL={contact.imgURL}
                    name={contact.name}
                    phone={contact.phone}
                />
            ) )
            }
        </div>
    );
}
