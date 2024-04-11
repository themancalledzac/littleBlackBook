'use client'

// import styles from './List.module.scss';

export default function ListComplicated({ data }) {
    return (
        <div>
            {data.map((item) => (
                // Assuming `item` has `title` and `dateDue` properties
                <div key={item.name}>
                    <h1>{item.name}</h1>
                    <h3>{item.dateDue}</h3>
                </div>
            ))}
        </div>
    )
}