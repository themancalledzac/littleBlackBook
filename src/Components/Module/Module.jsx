'use client'

import styles from './Module.module.scss';
import Contact from "@/Components/Contact/Contact";
import GroceryListItem from "@/Components/ListSimpleItem/GroceryListItem";
import ToDoListItem from "@/Components/ToDoListItem/ToDoListItem";
import RecipeListItem from "@/Components/RecipeListItem/RecipeListItem";

export default function Module( { module } ) {


    // On Click Button, Add New {moduleItem} based on module_type

    return (
        <div className={styles.moduleWrapper}>
            <h1 className={styles.moduleTitle}>{module.title}</h1>
            <button>Add New</button>
            <div className={styles.dataList}>
                {module.data.map( ( moduleItem ) => (
                    <>
                        {module.module_type === "contact" && <Contact moduleItem={moduleItem}/>}
                        {module.module_type === 'grocery' && <GroceryListItem title={moduleItem.title}/>}
                        {module.module_type === 'todo' && <ToDoListItem title={moduleItem.title} dateDue={moduleItem.dateDue}/>}
                        {module.module_type === 'recipe' && <RecipeListItem title={moduleItem.title} instructions={moduleItem.instructions} ingredients={moduleItem.ingredients}/>}
                    </>
                ) )}
            </div>
        </div>
    );
}
