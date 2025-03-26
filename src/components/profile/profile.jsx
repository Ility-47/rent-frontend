import { SassColor } from 'sass';
import s from './profile.module.scss';

const SettingData = ({props, customClass}) =>{
    return(
        <button className={s.setting}>
            <div className={s.setting__info}>
                <i className={props.icon  + ' ' + customClass}></i>
                <div className={s.setting__wrapper}>
                    <h5 className={s.setting__title + ' ' + customClass}>{props.title}</h5>
                    <h6 className={s.setting__subtitle + ' ' + customClass}>{props.subtitle}</h6>
                </div>
            </div>
            <i className={"fa-solid fa-angle-right"  + ' ' + customClass}></i>
        </button>
    )
}

const Profile = () =>{
    let profile_settings = [
     {
        icon: "fa-solid fa-phone",
        title: "Номер телефона",
        subtitle: 88005553535
     },
     {
        icon: "fa-solid fa-envelope",
        title: "Email",
        subtitle: "test@gmail.com"
     },   
     {
        icon: "fa-solid fa-credit-card",
        title: "Способы оплаты",
        subtitle: "*** 1234"
     },   
    ]
    return(
        <div className={s.profile}>
            <h1>Имя Фамилия Отчество</h1>
            <div className={s.profile__wrapper}>
                {profile_settings.map((item, key) =>(
                    <SettingData props={item} key={key}/>
                ))}
            </div>
            <div className={s.profile__wrapper}>
            <SettingData props={
                {
                    icon: "fa-solid fa-trash",
                    title: "Удалить аккаунт",      
                } 
            }
            customClass={s.redBtn} 
            />
            <SettingData props={
                {
                    icon: "fa-solid fa-xmark",
                    title: "Выйти из аккаунта",      
                } 
            } 
            />
            </div>
        </div>
    )
}

export default Profile;