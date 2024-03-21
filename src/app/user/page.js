'use client'
import { useState } from "react";
import styles from '../../styles/User.module.scss';

export default function User() {
  const [moduleList, setModuleList] = useState(["module1", "module2", "module3"])
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
          {moduleList.map((module) => (
            <div key={module}>
              {module}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}