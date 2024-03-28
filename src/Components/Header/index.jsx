'use client'
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";


/**
 * Header bar component which includes title and menu dropdown button
 *
 * @param {boolean} dropdownMenuOpen - Boolean value of IF Menu is Open ( <DropdownMenu /> )
 * @param {function} setDropdownMenuOpen - Function to change dropdownMenuOpen value ( true/false)
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header( { dropdownMenuOpen, setDropdownMenuOpen } ) {
    const handleClick = () => {
        setDropdownMenuOpen( !dropdownMenuOpen );
    };

    return (
        <div className={styles.headerMain}>
            <h1 className={styles.headerTitle}>Header Title</h1>
            <h2 className={styles.item}>Menu Item 1</h2>
            <h2 className={styles.item}>Menu Item 2</h2>
            <h3 className={styles.item} onClick={handleClick}>General Menu</h3>
        </div>
    )
}