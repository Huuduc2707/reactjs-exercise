import '../style/exercise7.css';
let fruits: Array<string> = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
export default function Exercise7(): JSX.Element{
    function suggest(text: string): void{
        let suggestionList: HTMLElement|null = document.getElementById('suggest-text');
        let suggestions: string = "";
        fruits.forEach((fruit: string): void => {
            if(text && fruit.toLowerCase().includes(text.toLowerCase())) suggestions += `${fruit}<br>`;
        });
        suggestionList!.innerHTML = suggestions;
    }
    return (
        <div>
            <p>Search: </p>
            <input type="search" onChange={():void=>suggest(document.getElementsByTagName('input')[0].value)}/>
            <p id="suggest-text"></p>
        </div>
    );
}