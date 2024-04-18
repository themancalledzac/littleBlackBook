'use client'
import styles from "./dropdownMenu.module.scss";
import React from "react";
import user from "@/Utils/user.json";

export default function DropdownMenu( { setDropdownMenuOpen, dropdownMenuOpen } ) {

    const randy = ( e ) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.menuDropdownWrapper} onClick={() => setDropdownMenuOpen( false )}>

            <div className={styles.menuDropdown} onClick={( e ) => e.stopPropagation()}>
                <ul className={styles.menuButtons}>
                    <li className={styles.menuButton}>dropdown item 1</li>
                    <li className={styles.menuButton}>dropdown item 2</li>
                    <li className={styles.menuButton}>dropdown item 3</li>
                </ul>
                <div className={styles.profileWrapper}>
                    <div className={styles.userProfile}>
                        <h1>{user.name}</h1>
                        <h3>{user.phone_number}</h3>
                        <p>this will be an img</p>
                    </div>
                </div>
            </div>
        </div>
    )

}