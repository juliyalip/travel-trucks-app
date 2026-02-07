import Star from '../../icons/star.svg?react'
import style from './RaitingStar.module.css'

export default function RatingStar({ countStar }) {

    return (<div className={style.container}>
        {[...Array(5)].map((_, index) => (
            <Star className={style.star} key={index} style={{ color: index < countStar ? '#ffc531' : '#f2f4f7' }} />
        ))}
    </div>)
}