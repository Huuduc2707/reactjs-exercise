import '../style/exercise2.css';
let animals: Array<string> = ['🐶 dog', '🐱 cat', '🐔 chicken', '🐮 cow', '🐑 sheep', '🐴 horse'];
export default function Exercise2(): JSX.Element{
    return (
        <ul>
            {animals.map((animal) => <li>{animal}</li>)}
        </ul>
    );
}