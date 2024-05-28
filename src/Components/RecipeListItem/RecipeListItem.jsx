'use client'

// import styles from './List.module.scss';

export default function RecipeListItem( { title } ) {
    return (
        <div>
            <div key={title}>
                <h3>{title}</h3>
                {/*<h3>{item.dateDue}</h3>*/}

            </div>
        </div>
    )
}
