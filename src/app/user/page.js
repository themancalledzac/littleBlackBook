'use client'
import { useState } from "react";
import Card from "../components/card";
import contacts from "../contacts";
import styles from './user.module.scss';
import Header from "@/Components/Header";
import DropdownMenu from "@/Components/DropdownMenu";

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
    <div className="main">
      <div className={styles.header}>
        <Header
                dropdownMenuOpen={dropdownMenuOpen} // pass header dropdown boolean value as param
                setDropdownMenuOpen={setDropdownMenuOpen} // pass header dropdown function as param
            />
      </div>
      <div className="body">
                <div className="bodyHeaderWrapper">
                    <div className="profilePic">
                        <p>this will be an img</p>
                    </div>
                </div>
                <div className="bodyModuleWrapper">
                    {contacts.map(Card) 
                    }
                </div>
            </div>
            {dropdownMenuOpen && (
                <DropdownMenu/>
            )}
        </div>
  );
            }

