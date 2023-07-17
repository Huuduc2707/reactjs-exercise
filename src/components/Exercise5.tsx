import '../style/exercise5.css';
export default function Exercise5(): JSX.Element{
    function displayText(): void{
        let inputList = document.getElementsByTagName('input');
        if(!inputList[0].value || !inputList[1].value) document.getElementById('display-result')!.innerHTML = 'Missing information!';
        else document.getElementById('display-result')!.innerHTML = `Hello, ${inputList[0].value} ${inputList[1].value}`;
    }
    return(
        <div>
            <form onSubmit={(e: React.FormEvent):void => e.preventDefault()}>
                <input type="text" placeholder="First name"/>
                <input type="text" placeholder="Last name" />
                <input type="submit" value="GREET ME" onClick={displayText}/>
            </form>
            <p id="display-result"></p>
        </div>
    );
}