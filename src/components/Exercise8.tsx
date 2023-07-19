import { useState, useEffect } from 'react';
import styles from '../style/exercise8.module.css';
let imgLink: Array<string> = ['https://kenwheeler.github.io/slick/img/fonz3.png', 'https://kenwheeler.github.io/slick/img/fonz2.png', 'https://kenwheeler.github.io/slick/img/fonz1.png'];
export default function Exercise8(): JSX.Element{
    const [index, setIndex] = useState(0);
    const [style, setStyle] = useState({transform: `translateX(calc(-165.8% * ${index})`});
    const [isClicked, setIsClicked] = useState(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout>();
    useEffect(()=>{
        setStyle({transform: `translateX(calc(-165.8% * ${index})`});
        let miniSlide: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
        Array.from(miniSlide).forEach((value, i) => {
            if(i === index + 3) value.style.borderColor = 'lightblue';
            else value.style.borderColor = 'white';
        });
        if(isClicked){
            setIsClicked(false);
            clearTimeout(timerId);
        }
        setTimerId(setTimeout(()=>{
            if(index + 1 > imgLink.length - 1) setIndex(0);
            else setIndex(index + 1);
        }, 5000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[index]);
    function moveForward(): void{
        setIsClicked(true);
        if(index + 1 > imgLink.length - 1) setIndex(0);
        else setIndex(index + 1);
    }
    function moveBackward(): void{
        setIsClicked(true);
        if(index - 1 < 0) setIndex(0);
        else setIndex(index - 1);
    }
    return(
        <div className={styles['exercise8-container']}>
            <button className={styles['exercise8-change-slide-button']} onClick={moveBackward}><i className="fa-solid fa-chevron-left"></i></button>
            <div className={styles['exercise8-slide-show']}>
                <div className={styles['exercise8-slide']}>
                    {imgLink.map((link: string, index: number): JSX.Element => <img src={link} alt={`${index+1}`} style={style}/>)}
                </div>
                <div className={styles['exercise8-mini-slide']}>
                    {imgLink.map((link:string, index:number): JSX.Element => <img src={link} alt={`${index+1}`} />)}
                </div>
            </div>
            <button className={styles['exercise8-change-slide-button']} onClick={moveForward}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    );
}