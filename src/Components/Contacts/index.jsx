'use client'

import styles from './Contacts.module.scss';

export default function Contacts( { name, imgURL, phone, email } ) {
    return (
        <div className={styles.contactBody}>
            <div className="top">
                <h2 className="name">{name}</h2>
                <img className="circle-img" src={imgURL} alt="avatar_img"/>
            </div>
            <div className="bottom">
                <p className="info">{phone}</p>
                <p className="info">{email}</p>
            </div>
        </div>
    );
}
