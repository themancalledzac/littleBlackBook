'use client'

// import styles from './List.module.scss';

export default function ComplexListItem( { moduleItem, moduleType } ) {
    return (
        <div>
            <div key={moduleItem.title}>
                <h3>{moduleItem.title}</h3>
                {/*<h3>{item.dateDue}</h3>*/}

            </div>
        </div>
    )
}