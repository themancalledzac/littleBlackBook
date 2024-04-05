'use client'

// import styles from './List.module.scss';

export default function ListSimple( { list } ) {
    return (
        <ul>
            {list.map( ( groceryItem ) => (
                <li key={groceryItem}>{groceryItem}</li>
            ) )}
        </ul>
    )
}