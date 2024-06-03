'use client'

// import styles from './List.module.scss';

/**
 * ToDO List Item - definition
 * @param {String} title - Name of todo item, such as 'cleaning'.
 * @param {String} dateDue - Due Date.
 * @returns {JSX.Element}
 * @constructor
 */
export default function ToDoListItem( { title, dateDue } ) {
    return (
        <div>
            <div key={title}>
                <h1>{title}</h1>
                <h2>Due Date: {dateDue}</h2>

            </div>
        </div>
    )

    }
