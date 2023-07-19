import React, { useState } from 'react';
import styles from '../style/exercise7.module.css';
let fruits: Array<string> = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
export default function Exercise7(): JSX.Element{
    const [suggestion, setSuggestion] = useState('');
    function suggest(e: React.ChangeEvent<HTMLInputElement>): void{
        e.target.value.replaceAll(/\s/g, "")?setSuggestion(fruits.filter((fruit)=>fruit.toLowerCase().includes(e.target.value.replaceAll(/\s/g, "").toLowerCase())).join("\n")):setSuggestion('');
    }
    return (
        <div className={styles['exercise7-container']}>
            <p className={styles['exercise7-p']}>Search: </p>
            <input type="search" onChange={(e)=>suggest(e)} className={styles['exercise7-input']}/>
            <p id={styles['suggest-text']} className={styles['exercise7-p']}>{suggestion}</p>
        </div>
    );
}