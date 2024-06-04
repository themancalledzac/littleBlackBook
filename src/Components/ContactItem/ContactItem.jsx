'use client'

import styles from './ContactItem.module.scss';

export default function ContactItem( { moduleItem, setCurrentChoice } ) {
    const { title, phone, imgURL, email } = moduleItem;

    return (
        <div className={styles.contactBody}>
            <h2 onClick={() => setCurrentChoice( null )}>Close</h2>
            <div className="top">
                <h2 className="name">{title}</h2>
                <p className="info">{phone}</p>
            </div>
            <div className="bottom">
                <img className="circle-img" src={imgURL} alt="avatar_img"/>
                <p className="info">{email}</p>
            </div>
        </div>
    );
}

