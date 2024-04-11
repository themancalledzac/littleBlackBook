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
            <h1 className={styles.headerTitle}>Little <span style={{ color: 'black' }}> Black < /span> Book</h1>
            <h3 className={styles.item} onClick={handleClick}>Menu</h3>
        </div>
    )
}