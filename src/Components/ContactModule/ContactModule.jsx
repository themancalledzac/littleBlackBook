'use client'

import styles from './ContactModule.module.scss';
import ContactItem from "@/Components/ContactItem/ContactItem";
import { useState } from "react";

export default function ContactModule( { module } ) {
    const [currentChoice, setCurrentChoice] = useState( null );
    const selectedContact = module.data.find( contact => contact.id === currentChoice );

    return (
        <div className={styles.contactModuleWrapper}>
            <div className={styles.moduleHeader}>
                <h1 className={styles.moduleTitle}>{module.title}</h1>
                <button>Add New</button>
            </div>
            {!currentChoice ?
                <ul className={styles.dataList}>
                    {module.data.map( ( contact ) => (
                        <li onClick={() => setCurrentChoice( contact.id )}>{contact.title}</li>
                    ) )}

                </ul>
                :
                <ContactItem moduleItem={selectedContact} setCurrentChoice={setCurrentChoice}/>
            }
        </div>
    );
}
