import React, {useEffect, useState} from 'react';
import cl from './Counter.module.scss'
import style from "../../common/commonStyle.module.css";
//ref={() => alert('asd')}
const CounterBlock = () => {
    return (
        <>
            <div className={`${style.container} ${cl.container}`}>
                <Counter counterName={'Recipes Available'} start={1000} finish={23567}/>
                <Counter counterName={'Active Users'} start={1200} finish={431729}/>
                <Counter counterName={'Positive Reviews '} start={1100} finish={892173}/>
                <Counter counterName={'Photos & Videos'} start={1000} finish={56581}/>
                <Counter counterName={'Spices and Herbs '} start={500} finish={3182}/>
            </div>
            <div className={cl.footer}>
                <div className={`${style.container} ${cl.wrap}`}>
                    <p>©2014 Fudi. All Rights Reserved.</p>
                    <h3><span>DESIGN BY:</span> WWW.BEKADES.COM</h3>
                </div>
            </div>
        </>
    );
};
export default CounterBlock;

type CounterPropsType = {
    counterName: string
    start: number
    finish: number
}
export const Counter = (props: CounterPropsType) => {
    let [value, setValue] = useState<number>(props.start)

    useEffect(() => {
        const counterStart = setInterval(() => {
            setValue(value + 1)
        }, 5)
        if (value === props.finish) {
            clearInterval(counterStart)
        }
        return () => clearInterval(counterStart)
    })
    return (
        <div className={cl.itemCounter}>
            <h5>{value}</h5>
            <p>{props.counterName}</p>
        </div>
    );
};
