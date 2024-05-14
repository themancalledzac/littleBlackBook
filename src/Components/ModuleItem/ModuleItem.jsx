'use client'

// import styles from './Contact.module.scss';
import { useState } from "react";
import ComplexListItem from "@/Components/ListComplicated/ComplexListItem";

export default function ModuleItem( { moduleItem, moduleType } ) {
    const [isStrikethrough, setIsStrikethrough] = useState( false );

    console.log( moduleItem );
    // const [contactOpen, setContactOpen] = useState( false );

    const toggleStrikethrough = () => {
        setIsStrikethrough( !isStrikethrough );
    };

    return (
        <div>
            <h1 onClick={toggleStrikethrough}
                style={{ textDecoration: isStrikethrough && moduleType === 'simple' ? 'line-through' : 'none' }}>
                {moduleItem.title}
            </h1>

            {moduleType === 'recipe' || moduleType === 'todo' || moduleType === 'contact'
                && (
                    <ComplexListItem moduleItem={moduleItem} moduleType={moduleType}/>
                )}
        </div>
    );
}