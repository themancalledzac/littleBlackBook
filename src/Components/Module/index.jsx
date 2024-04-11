'use client'

import styles from './Module.module.scss';
import ContactCard from "@/Components/ContactCard";
import List from "@/Components/List";

export default function Module( { module } ) {
    console.log('Module function, line 8: ');
    console.log(module);
    return (
        <div className={styles.moduleWrapper}>
            <h1>{module.title}</h1>
            {module.module_type === "contacts" && (
                <ContactCard contacts={module.data}/>
            )}
            {module.module_type === "list" && (
                // why is it module={modle} ?
                <List module={module}/>
            )}

        </div>
    );
}

//if module is title: "contact" then it should look one way
//if module is title:"author" then it should look one way