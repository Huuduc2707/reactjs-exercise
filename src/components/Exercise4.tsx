import {useState} from 'react';
import '../style/exercise4.css';
export default function Exercise4(): JSX.Element{
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Button has been clicked: {count} times</p>
            <button onClick={(): void => setCount(count+1)}>Click Me</button>
        </div>
    );
}