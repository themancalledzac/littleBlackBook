'use client'
import { useState } from "react";
import user from "../../Utils/user.json";
import styles from './user.module.scss';
import Header from "@/Components/Header/Header";
import DropdownMenu from "@/Components/DropdownMenu/DropdownMenu";
import Module from "@/Components/Module/Module";
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
                <div className={styles.moduleWrapper}>
                    {userModules && (
                        userModules.map( ( module ) => (
                            <Module module={module}/>
                        ) ) )
                    }
                </div>
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

