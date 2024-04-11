'use client'

import styles from './Module.module.scss';
import ContactCard from "@/Components/ContactCard/ContactCard";
import List from "@/Components/List/List";

export default function Module( { module } ) {
    return (
        <div className={styles.moduleWrapper}>
            <h1>{module.title}</h1>
            {module.module_type === "contacts" && (
                <ContactCard contacts={module.data}/>
            )}
            {module.module_type === "list" && (
                <List module={module}/>
            )}

        </div>
    );
}

//if module is title: "contact" then it should look one way
//if module is title:"author" then it should look one way