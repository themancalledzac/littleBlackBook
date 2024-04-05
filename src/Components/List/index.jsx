'use client'

import styles from './List.module.scss';
import ListSimple from "@/Components/ListSimple";

export default function List( { module } ) {
    return (
        <div className={styles.listCardBody}>
            {module.list_type === "todo" &&
                // todo: make own component
                module.data.map( ( item ) => (
                    // Assuming `item` has `title` and `dateDue` properties
                    <div key={item.name}>
                        <h1>{item.name}</h1>
                        <h3>{item.dateDue}</h3>
                    </div>
                ) )
            }
            {module.list_type === "grocery" &&
                <ListSimple list={module.data}/>
            }
        </div>
    );
}

//if module is title: "contact" then it should look one way
//if module is title:"author" then it should look one way