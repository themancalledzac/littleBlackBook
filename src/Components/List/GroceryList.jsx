'use client'

import styles from './List.module.scss';
import ListSimple from "@/Components/ListSimple/ListSimple";
import complexListItem from '../ListComplicated/ComplexListItem';


export default function GroceryList( { module } ) {

    return (
        <div className={styles.listCardBody}>
            {module.list_type === "todo" &&
                <complexListItem data={module.data}/>
            }
            {module.list_type === "grocery" &&
                <ListSimple list={module.data}/>
            }
        </div>
    );
}


//if module is title: "contact" then it should look one way
//if module is title:"author" then it should look one way