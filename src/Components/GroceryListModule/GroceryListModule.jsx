'use client'

import styles from './GroceryListModule.module.scss';
import GroceryListItem from "@/Components/ListSimpleItem/GroceryListItem";
import { useState } from "react";

export default function GroceryListModule( { module } ) {

    return (
        <div className={styles.groceryModuleWrapper}>
            <h1 className={styles.moduleTitle}>{module.title}</h1>
            <button>Add New</button>
            <div className={styles.dataList}>
                <ul>

                    {module.data.map( ( moduleItem ) => (
                        <GroceryListItem title={moduleItem.title}/>
                    ) )}
                </ul>
            </div>
        </div>
    );
}
