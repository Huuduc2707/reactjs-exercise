import React, {useState} from 'react';
import styles from '../style/exercise5.module.css';
export default function Exercise5(): JSX.Element{
    const [result, setResult] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    function updateFirstName(e: React.ChangeEvent<HTMLInputElement>): void{
        setFirstName(e.target.value);
    }
    function updateLastName(e: React.ChangeEvent<HTMLInputElement>): void{
        setLastName(e.target.value);
    }
    function submitHandler(e: React.FormEvent): void{
        e.preventDefault();
        if(!firstName || !lastName) setResult('Missing information!');
        else setResult(`Hello, ${firstName} ${lastName}!`);
    }
    return(
        <div className={styles['exercise5-container']}>
            <form onSubmit={(e)=>submitHandler(e)} className={styles['exercise5-form']}>
                <input type="text" placeholder='First name' onChange={(e)=>updateFirstName(e)}/>
                <input type="text" placeholder='Last name' onChange={(e)=>updateLastName(e)}/>
                <input type="submit" value="GREET ME"/>
            </form>
            <p id="display-result" className={styles['exercise5-p']}>{result}</p>
        </div>
    );
}