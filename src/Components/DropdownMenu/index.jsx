'use client'
import styles from "./dropdownMenu.module.scss";
import React from "react";

export default function DropdownMenu( params ) {

    return (
        <div className={styles.menuDropdownWrapper} onClick={() => params.setDropdownMenuOpen( false )}>

            <div className={styles.menuDropdown}>
                <ul className={styles.menuButtons}>
                    <li className={styles.menuButton}>dropdown item 1</li>
                    <li className={styles.menuButton}>dropdown item 2</li>
                    <li className={styles.menuButton}>dropdown item 3</li>
                </ul>
            </div>
        </div>
    )

}