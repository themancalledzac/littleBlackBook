'use client'
import ListSimpleItem from "../ListSimpleItem/ListSimpleItem";

// import styles from './List.module.scss';

export default function ListSimple({ list }) {

    return (
        <ul>
            {list.map((groceryItem) => (
            <ListSimpleItem groceryItem={groceryItem} />
            ))}
        </ul>
    )
}