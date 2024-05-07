'use client'
import { useState } from "react";

export default function ListSimpleItem({ groceryItem }) {
    const [isStrikethrough, setIsStriketrough] = useState(false);

    const toggleStrikethrough = () => {
        setIsStriketrough(!isStrikethrough);
    };

    return (

        <li
            key={groceryItem}
            onClick={toggleStrikethrough}
            style={{ textDecoration: isStrikethrough ? 'line-through' : 'none' }}>{groceryItem}
        </li>
    )
}