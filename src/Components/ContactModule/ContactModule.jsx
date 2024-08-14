'use client'

import styles from './ContactModule.module.scss';
import ContactItem from "@/Components/ContactItem/ContactItem";
import CreateContactModule from "@/Components/CreateContactModule/CreateContactModule";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function ContactModule({ module }) {
    const [selectedContact, setSelectedContact] = useState(null);
    const [createNew, setCreateNew] = useState(false);
    // const selectedContact = module.data.find( contact => contact.id === currentChoice );


    /**
     * Takes contact ID and sets SelecteContact as that associated Contact Object,
     * @param {*} id - Contact ID
     */
    const updateSelectedContact = (id) => {
        const contactObject = module.data.find(contact => contact.id === id);
        setSelectedContact(contactObject);
    };

    return (
        <div className={styles.contactModuleWrapper}>
            {selectedContact !== null ? (
                <ContactItem moduleItem={selectedContact} setSelectedContact={setSelectedContact} />
            ) : (createNew ? (
                <CreateContactModule setCreateNew={setCreateNew}  />
            ) : (

                <div>
                    <div className={styles.moduleHeader}>
                        <h1 className={styles.moduleTitle}>{module.title}</h1>
                        <Plus className={styles.lucide} onClick={() => setCreateNew(!createNew)}/>
                    </div>
                    <div className={styles.dataList}>
                        {module.data.map((contact) => (
                            <div id={contact.uuid} className={styles.dataItem} onClick={() => updateSelectedContact(contact.id)}>
                                <h2>{contact.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
}
