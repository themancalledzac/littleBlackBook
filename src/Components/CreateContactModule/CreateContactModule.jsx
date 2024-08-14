'use client'
import { X } from "lucide-react";
import styles from './CreateContactModule.module.scss';

export default function CreateContactModule( { setCreateNew }) {

return (
    <div className={styles.contactBody}>
        <div className={styles.nameContainer}>
            <h2 className={styles.name}>Create Contact</h2>
            <X className={styles.lucide}onClick={() => setCreateNew( false )}/>
        </div>
        <form>
            <label>
                First Name:
                <input type="text" name="firstName" />
            </label>
            <label>
                Last Name:
                <input type="text" name="lastName" />
            </label>
            <label>
                Phone:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
)};