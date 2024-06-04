'use client'

import styles from './RecipeListModule.module.scss';
import RecipeListItem from "@/Components/RecipeListItem/RecipeListItem";
import { useState } from "react";

export default function RecipeListModule( { module } ) {
    const [currentChoice, setCurrentChoice] = useState( null );


    // On Click Button, Add New {moduleItem} based on module_type

    return (
        <div className={styles.recipeModuleWrapper}>
            <h1 className={styles.moduleTitle}>{module.title}</h1>
            <button>Add New</button>
            <div className={styles.dataList}>
                {module.data.map( ( moduleItem ) => (
                    <RecipeListItem title={moduleItem.title} instructions={moduleItem.instructions}
                                    ingredients={moduleItem.ingredients}/>
                ) )}
            </div>
        </div>
    );
}

