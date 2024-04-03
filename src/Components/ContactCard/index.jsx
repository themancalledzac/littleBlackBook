'use client'

import styles from './ContactCard.module.scss';
import contacts from "@/app/contacts";
import Contacts from "@/Components/Contacts";

export default function ContactCard( { contacts } ) {
    return (
        <div className={styles.bodyMain}>
            {contacts.map( ( contact ) => (
                <Contacts
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
