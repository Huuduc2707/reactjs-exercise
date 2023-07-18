import { useState, useEffect } from 'react';
import '../style/exercise8.css';
let imgLink: Array<string> = ['https://kenwheeler.github.io/slick/img/fonz3.png', 'https://kenwheeler.github.io/slick/img/fonz2.png', 'https://kenwheeler.github.io/slick/img/fonz1.png'];
export default function Exercise8(): JSX.Element{
    const [index, setIndex] = useState(0);
    const [style, setStyle] = useState({transform: `translateX(calc(-165.8% * ${index})`});
    useEffect(()=>{
        setStyle({transform: `translateX(calc(-165.8% * ${index})`});
        let miniSlide: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
        Array.from(miniSlide).forEach((value, i) => {
            console.log(i);
            if(i === index + 3) value.style.borderColor = 'lightblue';
            else value.style.borderColor = 'white';
        });
    },[index]);
    function moveForward(): void{
        if(index + 1 > imgLink.length - 1) setIndex(0);
        else setIndex(index + 1);
    }
    function moveBackward(): void{
        if(index - 1 < 0) setIndex(0);
        else setIndex(index - 1);
    }
    return(
        <div className="container">
            <button className="change-slide-button" onClick={moveBackward}><i className="fa-solid fa-chevron-left"></i></button>
            <div className="slide-show">
                <div className="slide">
                    {imgLink.map((link: string, index: number): JSX.Element => <img src={link} alt={`${index+1}`} style={style}/>)}
                </div>
                <div className="mini-slide">
                    {imgLink.map((link:string, index:number): JSX.Element => <img src={link} alt={`${index+1}`} />)}
                </div>
            </div>
            <button className="change-slide-button" onClick={moveForward}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    );
}