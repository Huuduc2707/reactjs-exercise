import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise6 from "./components/Exercise6";
import Exercise7 from "./components/Exercise7";
import Exercise8 from "./components/Exercise8";
import Exercise9 from "./components/Exercise9";
import styles from './app.module.css';
export default function App(): JSX.Element{
    return(
        <Router>
            <div className={styles['navbar-container']}>
                <nav className={styles['navbar']}>
                    <ul className={styles['link-list']}>
                        <li><Link to='/'>Exercise 1</Link></li>
                        <li><Link to='/exercise2'>Exercise 2</Link></li>
                        <li><Link to='/exercise3'>Exercise 3</Link></li>
                        <li><Link to='/exercise4'>Exercise 4</Link></li>
                        <li><Link to='/exercise5'>Exercise 5</Link></li>
                        <li><Link to='/exercise6'>Exercise 6</Link></li>
                        <li><Link to='/exercise7'>Exercise 7</Link></li>
                        <li><Link to='/exercise8'>Exercise 8</Link></li>
                        <li><Link to='/exercise9'>Exercise 9</Link></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Exercise1/>}/>
                <Route path='/exercise2' element={<Exercise2/>}/>
                <Route path='/exercise3' element={<Exercise3/>}/>
                <Route path='/exercise4' element={<Exercise4/>}/>
                <Route path='/exercise5' element={<Exercise5/>}/>
                <Route path='/exercise6' element={<Exercise6/>}/>
                <Route path='/exercise7' element={<Exercise7/>}/>
                <Route path='/exercise8' element={<Exercise8/>}/>
                <Route path='/exercise9' element={<Exercise9/>}/>
            </Routes>
        </Router>
    );
}