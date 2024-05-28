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
                <h3>{title}</h3>
                <h3>{dateDue}</h3>

            </div>
        </div>
    )

    }
