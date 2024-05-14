'use client'
import { useState } from "react";

export default function GroceryListItem( { title } ) {
    const [isStrikethrough, setIsStriketrough] = useState( false );

    const toggleStrikethrough = () => {
        setIsStriketrough( !isStrikethrough );
    };

    return (

        <li
            key={title}
            onClick={toggleStrikethrough}
            style={{ textDecoration: isStrikethrough ? 'line-through' : 'none' }}>{title}
        </li>
    )
}