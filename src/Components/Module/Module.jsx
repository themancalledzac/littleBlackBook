'use client'

import styles from './Module.module.scss';
import ModuleItem from "@/Components/ModuleItem/ModuleItem";
import Contact from "@/Components/Contact/Contact";
import GroceryListItem from "@/Components/ListSimpleItem/GroceryListItem";
import ComplexListItem from "@/Components/ListComplicated/ComplexListItem";

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
                        {/*TODO: update todo from ComplextListItem to ToDoListItem(new Component)*/}
                        {module.module_type === 'todo' && <ComplexListItem moduleItem={moduleItem}/>}
                        {/*TODO: update todo from ComplextListItem to recipeListItem(new Component)*/}
                        {module.module_type === 'recipe' && <ComplexListItem moduleItem={moduleItem}/>}
                    </>
                ) )}
            </div>
        </div>
    );
}

