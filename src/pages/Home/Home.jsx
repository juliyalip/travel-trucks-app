import style from './Home.module.css'
import NavButton from '../../components/NavButton/NavButton'

export default function Home(){
    return(<div className={style.hero}>
        <div className={style.contentContainer}>
            <h1 className={style.title}>Campers of your dreams</h1>
            <p className={style.subtitle}>You can find everything you want in our catalog</p>
             <NavButton path="/catalog">View Now</NavButton>
        </div>
       
    </div>)
}