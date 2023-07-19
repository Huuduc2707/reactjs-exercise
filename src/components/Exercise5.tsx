import React, {useState} from 'react';
import styles from '../style/exercise5.module.css';
let nameRegex: RegExp = /^([a-zA-Z]+\s?)+$/;
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
    async function submitHandler(e: React.FormEvent): Promise<void>{
        e.preventDefault();
        let formattedFirstName:string = await new Promise<string>((resolve)=>resolve(firstName.trim().replaceAll(/\s+/g, "")));
        let formattedLastName:string = await new Promise<string>((resolve)=>resolve(lastName.trim().replaceAll(/\s+/g, "")));
        if(!nameRegex.test(formattedFirstName)){
            setResult('Invalid first name!');
            return;
        }
        if(!nameRegex.test(formattedLastName)){
            setResult('Invalid last name!');
            return;
        }
        setResult(`Hello, ${formattedFirstName} ${formattedLastName}!`);
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