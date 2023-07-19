import {useState} from 'react';
import styles from '../style/exercise4.module.css';
export default function Exercise4(): JSX.Element{
    const [count, setCount] = useState(0);
    return(
        <div className={styles['exercise4-container']}>
            <p className={styles['exercise4-p']}>Button has been clicked: {count} times</p>
            <button onClick={() => setCount(count+1)} className={styles['exercise4-button']}>Click Me</button>
        </div>
    );
}