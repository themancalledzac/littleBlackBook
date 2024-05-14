'use client'
import GroceryListItem from "../ListSimpleItem/GroceryListItem";

// import styles from './List.module.scss';

export default function ListSimple({ list }) {

    return (
        <ul>
            {list.map((groceryItem) => (
            <GroceryListItem groceryItem={groceryItem} />
            ))}
        </ul>
    )
}