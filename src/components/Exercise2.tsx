import styles from '../style/exercise2.module.css';
let animals: Array<string> = ['🐶 dog', '🐱 cat', '🐔 chicken', '🐮 cow', '🐑 sheep', '🐴 horse'];
export default function Exercise2(): JSX.Element{
    return (
        <div className={styles['exercise2-container']}>
            <ul className={styles['exercise2-ul']}>
                {animals.map((animal) => <li>{animal}</li>)}
            </ul>
        </div>
    );
}