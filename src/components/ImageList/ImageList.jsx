import style from './ImagesList.module.css'

export default function ImageList({gallery}){
    return(
        <ul className={style.list}>
            {gallery.map(({thumb}) =>(
                <li key={thumb}>
                    <div className={style.wrapper}>
                        <img src={thumb} alt="truck photo" className={style.itemImg} /> 
                    </div>
                </li>
            ))}
        </ul>
    )
}