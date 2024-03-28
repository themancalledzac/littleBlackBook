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
  return (
    <div className="main">
      <div className={styles.header}>
        <div className="headerTitle">
          <h1>Header Title</h1>
        </div>
        <div className="headerMenu">
          menu
        </div>
      </div>
      <div className="body">
        <div className="bodyHeaderWrapper">
          <div className="profilePic">
            <p>this will be an img</p>
          </div>
        </div>
        <div className="bodyModuleWrapper">
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              name={contact.name}
              img={contact.imgURL}
              tel={contact.phone}
              email={contact.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
    const [moduleList, setModuleList] = useState( ["module1", "module2", "module3"] )
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState( false );
    return (
        <div className="main">
            <Header
                dropdownMenuOpen={dropdownMenuOpen} // pass header dropdown boolean value as param
                setDropdownMenuOpen={setDropdownMenuOpen} // pass header dropdown function as param
            />
            <div className="body">
                <div className="bodyHeaderWrapper">
                    <div className="profilePic">
                        <p>this will be an img</p>
                    </div>
                </div>
                <div className="bodyModuleWrapper">
                    {moduleList.map( ( module ) => (
                        <div key={module}>
                            {module}
                        </div>
                    ) )}
                </div>
            </div>
            {dropdownMenuOpen && (
                <DropdownMenu/>
            )}
        </div>
    );
}


const contact = [
    {name: 'beyonce', img: 'something', phone: 'illegal'},
    {name: 'beyonce', img: 'something', phone: 'illegal'},
    {name: 'beyonce', img: 'something', phone: 'illegal'},
];


Card( contact );
