import styles from '../style/exercise6.module.css';
interface Input{
    id?:string;
    setup:string;
    punchline:string;
}
let inputs: Array<Input> = [
    {id: '1', setup: 'What\'s the best thing about a Boolean?', punchline: 'Even if you\'re wrong, you\'re only off by a bit'},
    {id: '2', setup: 'Why do programmers wear glasses?', punchline: 'Because they need to C#'}
]
function Box({setup, punchline}: Input): JSX.Element{
    return (
        <div className={styles['exercise6-box']}>
            <h4>{setup}</h4>
            <p>{punchline}</p>
        </div>
    );
}
export default function Exercise6(): JSX.Element{
    return (
        <div className={styles['exercise6-container']}>
            {inputs.map((input: Input):JSX.Element => <Box setup={input.setup} punchline={input.punchline}/>)}
        </div>
    );
}