import {useState} from 'react';
import '../style/exercise4.css';
export default function Exercise4(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Button has been clicked: {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    );
}