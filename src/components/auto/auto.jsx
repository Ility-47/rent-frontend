import s from './auto.module.scss'

const AutoCard = () =>{
    return(
        <div className={s.auto}>
            <div className={s.auto__info}>
                <h5 className={s.auto__info__name}>
                    Volkswagen Polo
                </h5>
                <h6 className={s.auto__info__num}>
                    е777кх71
                </h6>
            </div>
            <div className={s.auto__price}>
                <div className={s.auto__price__wrapper}>
                    <span>Цена за минуту</span>
                    <span>24 <i className="fa-solid fa-ruble-sign"></i></span>
                </div>
                <div className={s.auto__price__wrapper}>
                    <span>Цена за час</span>
                    <span>350 <i className="fa-solid fa-ruble-sign"></i></span>
                </div>
                <div className={s.auto__price__wrapper}>
                    <span>Цена за день</span>
                    <span>1200 <i className="fa-solid fa-ruble-sign"></i></span>
                </div>
            </div>
            <img src="./VWPolo.png" alt="" />            
        </div>
    )
}

const Auto = () =>{
    return(
        <section className={s.container}>
            <h1>Доступные автомобили</h1>
            <div className={s.list}>
                <AutoCard />
                <AutoCard />
                <AutoCard />
                <AutoCard />
            </div>
        </section>
    )
}

export default Auto;