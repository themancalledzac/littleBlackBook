'use client'

import styles from './Module.module.scss';
import ContactItem from "@/Components/ContactItem/ContactItem";
import GroceryListItem from "@/Components/ListSimpleItem/GroceryListItem";
import ToDoListItem from "@/Components/ToDoListItem/ToDoListItem";
import RecipeListItem from "@/Components/RecipeListItem/RecipeListItem";
import { useState } from "react";

export default function Module( { module } ) {
    const [currentChoice, setCurrentChoice] = useState( null );


    // On Click Button, Add New {moduleItem} based on module_type

    return (
        <div className={styles.moduleWrapper}>
            <h1 className={styles.moduleTitle}>{module.title}</h1>
            <button>Add New</button>
            <div className={styles.dataList}>
                {module.data.map( ( moduleItem ) => (
                    <>
                        {module.module_type === "contact" &&
                            <ContactItem moduleItem={moduleItem} currentChoice={currentChoice}
                                         setCurrentChoice={setCurrentChoice}/>}
                        {module.module_type === 'grocery' && <GroceryListItem title={moduleItem.title}/>}
                        {module.module_type === 'todo' &&
                            <ToDoListItem title={moduleItem.title} dateDue={moduleItem.dateDue}/>}
                        {module.module_type === 'recipe' &&
                            <RecipeListItem title={moduleItem.title} instructions={moduleItem.instructions}
                                            ingredients={moduleItem.ingredients}/>}
                    </>
                ) )}
            </div>
        </div>
    );
}
