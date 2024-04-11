'use client'

import styles from './List.module.scss';
import ListSimple from "@/Components/ListSimple";
import ListComplicated from '../ListComplicated/listComplicated';


export default function List( { module } ) {

    return (
        <div className={styles.listCardBody}>
            {module.list_type === "todo" &&
                <ListComplicated data={module.data}/>
            }
            {module.list_type === "grocery" &&
                <ListSimple list={module.data}/>
            }
        </div>
    );
}


//if module is title: "contact" then it should look one way
//if module is title:"author" then it should look one way