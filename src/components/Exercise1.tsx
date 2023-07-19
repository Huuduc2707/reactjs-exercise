import styles from '../style/exercise1.module.css'
export default function Exercise1(): JSX.Element{
    return(
        <div className={styles['exercise1-container']}>
            <p className={styles['exercise1-p']}>Hello, World!</p>
        </div>
    );
}