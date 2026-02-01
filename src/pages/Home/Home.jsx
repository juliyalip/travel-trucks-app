import style from './Home.module.css'
import Button from '../../components/Button/Button'

export default function Home(){
    return(<div className={style.hero}>
        <div className={style.contentContainer}>
            <h1 className={style.title}>Campers of your dreams</h1>
            <p className={style.subtitle}>You can find everything you want in our catalog</p>
             <Button>View Now</Button>
        </div>
       
    </div>)
}