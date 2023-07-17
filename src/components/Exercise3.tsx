import {useState} from 'react';
import '../style/exercise3.css';
let list: Array<string> = ['Apple', 'Banana', 'Tea', 'Coofee'];
interface CheckboxProp{
    itemName: string;
}
function Checkbox({itemName}: CheckboxProp){
    const[check, setCheck] = useState(false);
    function checkingHandler(): void{
        let checkedList: HTMLElement|null = document.getElementById('display-list');
        if(!check){
            setCheck(true);
            if(checkedList!.textContent === 'Your choice: ') checkedList!.innerHTML += `${itemName}`;
            else checkedList!.innerHTML += `, ${itemName}`;
        }
        else{
            setCheck(false);
            let str: string|null = checkedList!.textContent;
            let startIndex: number = str!.indexOf(`${itemName}`);
            if(startIndex !== 13) checkedList!.innerHTML = str!.slice(0, startIndex - 2) + str!.slice(startIndex + itemName.length);
            else checkedList!.innerHTML = str!.slice(0, 13) + str!.slice(startIndex + itemName.length + 2);
        }
    }
    return <input type="checkbox" checked={check} onChange={checkingHandler}/>;
}
export default function Exercise3(): JSX.Element{
    return (
        <div>
            <p>Your Checklist:</p>
            <ul>
                {list.map((item) =>
                    <li>
                        <Checkbox itemName = {item}/>
                        {item}
                    </li>
                )}
            </ul>
            <p id='display-list'>Your choice: </p>
        </div>
    );
}