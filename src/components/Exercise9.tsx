import { useState, useEffect } from "react";
import styles from '../style/exercise9.module.css';
interface Item{
    avatar: string;
    first_name: string;
    last_name: string;
    employment: Employment;
}
interface Employment{
    title: string;
}
export default function Exercise9(): JSX.Element{
    const [data, setData] = useState<Array<Item>>([]);
    const [error, setError] = useState(null);
    const [isClick, setIsClick] = useState(false);
    useEffect(()=>{
        fetch('https://random-data-api.com/api/users/random_user?size=10').then(response=>{
            if(!response.ok) throw new Error('Connection error');
            return response.json();
        }).then(data => setData(data)).catch(error => {
            setError(error);
            console.error(error);
        });
    }, [isClick]);
    
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles['exercise9-container']}>
            <button onClick={()=>setIsClick(!isClick)} className={styles['exercise9-button']}>FETCH RANDOM</button>
            <div className={styles['exercise9-card-list']}>
                {data.map((item)=>
                    <div className={styles['exercise9-card']}>
                        <img src={item.avatar} alt=""/>
                        <p className={styles['exercise9-p-name']}>{`${item.first_name + " " + item.last_name}`}</p>
                        <p className={styles['exercise9-p-title']}>{item.employment.title}</p>
                    </div>
                )}
            </div>
        </div>
  );
}