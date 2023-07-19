import {useState} from 'react';
import styles from '../style/exercise3.module.css';
let list: Array<string> = ['Apple', 'Banana', 'Tea', 'Coofee'];
interface CheckboxProps{
    itemName: string;
    text: string;
    setText: (text: string)=>void;
}
function Checkbox({itemName, text, setText}: CheckboxProps){
    const [check, setCheck] = useState(false);
    function checkingHandler(): void{
        if(!check){
            setCheck(true);
            if(text === 'Your choice: ') setText(`${text}${itemName}`);
            else setText(`${text}, ${itemName}`);
        }
        else{
            setCheck(false);
            let startIndex: number = text.indexOf(`${itemName}`);
            if(startIndex !== 13) setText(text.slice(0, startIndex - 2) + text.slice(startIndex + itemName.length));
            else setText(text.slice(0, 13) + text.slice(startIndex + itemName.length + 2));
        }
    }
    return <input type="checkbox" checked={check} onChange={checkingHandler} className={styles['exercise3-checkbox']}/>;
}
export default function Exercise3(): JSX.Element{
    const [text, setText] = useState('Your choice: ');
    return (
        <div className={styles['exercise3-container']}>
            <p className={styles['exercise3-p']}>Your Checklist:</p>
            <ul className={styles['exercise3-ul']}>
                {list.map((item) =>
                    <li>
                        <Checkbox itemName = {item} text = {text} setText = {(text:string)=>setText(text)}/>
                        {item}
                    </li>
                )}
            </ul>
            <p id={styles['display-list']} className={styles['exercise3-p']}>{text}</p>
        </div>
    );
}