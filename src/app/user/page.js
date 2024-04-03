'use client'
import { useState } from "react";
import Contacts from "../../Components/Contacts";
import contacts from "../contacts";
import styles from './user.module.scss';
import Header from "@/Components/Header";
import DropdownMenu from "@/Components/DropdownMenu";
import ContactCard from "@/Components/ContactCard";

/**
 * Default Page for Logged in User.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function User() {
    // const [moduleList, setModuleList] = useState( ["module1", "module2", "module3"] )
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState( false );
    return (
        <div className={styles.main}>
            <Header
                dropdownMenuOpen={dropdownMenuOpen} // pass header dropdown boolean value as param
                setDropdownMenuOpen={setDropdownMenuOpen} // pass header dropdown function as param
            />
            <div className={styles.bodyWrapper}>
                <div className={styles.profileWrapper}>
                    <div className="profilePic">
                        <p>this will be an img</p>
                    </div>
                </div>
                <div className={styles.bodyMain}>
                    // TODO: Update a List(mapped) of contacts, instead do a ContactCard, and insi
                    {contacts.map( ( contact ) => (
                        <Contacts
                            key={contact.phone}
                            email={contact.email}
                            imgURL={contact.imgURL}
                            name={contact.name}
                            phone={contact.phone}
                        />
                    ) )
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

