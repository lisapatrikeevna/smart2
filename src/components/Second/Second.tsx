import React from 'react';
import cl from './Second.module.scss'
import style from "../../common/commonStyle.module.css";
import Vector1 from './../../img/Vector1.png';
import Vector2 from './../../img/Vector2.png';
import Vector3 from './../../img/Vector3.png';
import mobile from './../../img/Green.png';
import mobileApp from './../../img/Layer3.png';


export const SecondSection = () => {
    return (
        <div className={cl.Second} id='second'>
            <div className={`${style.container} ${cl.container}`}>
                <Main/>
            </div>
            <FudiApp/>
        </div>
    )
}
export const Main = () => {
    const items = [
        {
            img: Vector3,
            name: "GET INSPIRED",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat",
        },
        {
            img: Vector2,
            name: "GET REWARDED",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat",
        },
        {
            img: Vector1,
            name: "GET SOCIAL",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat",
        }
    ]
    return (
        <div className={cl.all}>
            {items.map(s => {
                    return <div className={cl.wrapItems}>
                        <span className={cl.borderImg}><img src={s.img} alt=""/></span>
                        <p className={cl.uppercase}>{s.name}</p>
                        <div className={cl.textItem}>{s.desc}</div>
                    </div>
                }
            )}
        </div>
    )
}
export const FudiApp = () => {
    return (
        <div className={cl.fudi}>
            <div className={style.container}>
                <img src={mobile} className={cl.mobileImg}/>
                <div className={cl.wrapFudi}>
                    <h4 className={cl.fudiTitle}><span>INTRODUCING </span>THE FUDI APP</h4>
                    <div className={cl.desc}>
                        <p>Morbi eget posuere dolor. Pellentesque cursus aliquet aliquet. Aeneanet
                            felis sit amet diam mollis ullamcorper. Nullam consequat sem a ante vest
                            ibulum tristique. Suspendisse tristique lacus ac mattis porta. </p>
                        <p>Vivamus ligula quam, vehicula non lacinia sed, faucibus sit amet libero. In
                            libero dui, eleifend eu nisi id, egestas fringilla odio. In varius quam a mas
                            sa hendrerit ullamcorper a eu justo. Suspendisse porta mattis convallis.
                            Aenean tempus ligula ac odio rhoncus, quis aliquam dolor accumsan. </p>
                        <p>Suspendisse aliquet felis consectetur libero congue, sed pulvinar diam
                            malesuada. Duis vehicula a nibh id hendrerit. Donec sit amet ultrices
                            ante, a mattis massa. </p>
                        <img src={mobileApp} className={cl.mobileApp}/>
                    </div>
                </div>
            </div>
        </div>
    )
}