'use client'

import styles from './TodoListModule.module.scss';
import ToDoListItem from "@/Components/ToDoListItem/ToDoListItem";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function TodoListModule( { module } ) {
    const [currentChoice, setCurrentChoice] = useState( null );


    // On Click Button, Add New {moduleItem} based on module_type

    return (
        <div className={styles.todoListModuleWrapper}>
            <div className={styles.moduleHeader}>
            <h1 className={styles.moduleTitle}>{module.title}</h1>
            <Plus className={styles.lucide} />
            </div>
            <div className={styles.dataList}>
                {module.data.map( ( moduleItem ) => (
                    <ToDoListItem title={moduleItem.title} dateDue={moduleItem.dateDue}/>
                ) )}
            </div>
        </div>
    );
}
