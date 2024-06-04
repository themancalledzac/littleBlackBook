'use client'

import styles from './TodoListModule.module.scss';
import ToDoListItem from "@/Components/ToDoListItem/ToDoListItem";
import { useState } from "react";

export default function TodoListModule( { module } ) {
    const [currentChoice, setCurrentChoice] = useState( null );


    // On Click Button, Add New {moduleItem} based on module_type

    return (
        <div className={styles.todoListModuleWrapper}>
            <h1 className={styles.moduleTitle}>{module.title}</h1>
            <button>Add New</button>
            <div className={styles.dataList}>
                {module.data.map( ( moduleItem ) => (
                    <ToDoListItem title={moduleItem.title} dateDue={moduleItem.dateDue}/>
                ) )}
            </div>
        </div>
    );
}
