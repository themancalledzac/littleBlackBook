'use client'
import { useState } from "react";
import user from "../../Utils/user.json";
import styles from './user.module.scss';
import Header from "@/Components/Header";
import DropdownMenu from "@/Components/DropdownMenu";
import Module from "@/Components/Module";
import fetchData from "../../Utils/fetchData.json";

/**
 * Default Page for Logged in User.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function User() {
    // const [moduleList, setModuleList] = useState( ["module1", "module2", "module3"] )
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState( false );
    const [userModules, setUserModules] = useState( fetchData );
    return (
        <div className={styles.main}>
            <Header
                dropdownMenuOpen={dropdownMenuOpen} // pass header dropdown boolean value as param
                setDropdownMenuOpen={setDropdownMenuOpen} // pass header dropdown function as param
            />
            <div className={styles.bodyWrapper}>
                <div className={styles.profileWrapper}>
                    <div className={styles.userProfile}>
                        <h1>{user.name}</h1>
                        <h3>{user.phone_number}</h3>
                        <p>this will be an img</p>
                    </div>
                </div>
                {userModules && (
                    userModules.map( ( module ) => (
                        <Module module={module}/>
                    ) ) )
                }
            </div>
            {dropdownMenuOpen && (
                <DropdownMenu
                    dropdownMenuOpen={dropdownMenuOpen}
                    setDropdownMenuOpen={setDropdownMenuOpen}
                />
            )}
        </div>
    );
}

