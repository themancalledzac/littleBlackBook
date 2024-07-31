'use client'

import styles from './GroceryListModule.module.scss';
import GroceryListItem from "@/Components/ListSimpleItem/GroceryListItem";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function GroceryListModule( { module } ) {

    return (
        <div className={styles.groceryModuleWrapper}>
            <div className={styles.moduleHeader}>
            <h1 className={styles.moduleTitle}>{module.title}</h1>
            <Plus className={styles.lucide} />
            </div>
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
