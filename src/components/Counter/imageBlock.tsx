import React from 'react';
import ITALIAN from './../../img/ITALIAN.jpg';
import INDIAN from './../../img/INDIAN.jpg';
import AMERICAN from './../../img/AMERICAN.jpg';
import PIZZA from './../../img/PIZZA.jpg';
import CHINESE from './../../img/CHINESE.jpg';
import MEXICAN from './../../img/MEXICAN.jpg';
import SUSHI from './../../img/SUSHI.jpg';
import SEAFOOD from './../../img/SEAFOOD.jpg';
import STEAKHOUSE from './../../img/STEAKHOUSE.jpg';
import FRENCH from './../../img/FRENCH.jpg';
import cl from './Counter.module.scss'
import CounterBlock from "./Counter";

type someType = {
    img: any
    recipes: string
    name: string
}
const ImageBlock = () => {
    const arr: Array<someType> = [
        {
            img: ITALIAN,
            recipes: '327 Recipes',
            name: 'ITALIAN'
        },
        {
            img: INDIAN,
            recipes: '856 Recipes',
            name: 'INDIAN'
        },
        {
            img: AMERICAN,
            recipes: '1437 Recipes',
            name: 'AMERICAN'
        },
        {
            img: PIZZA,
            recipes: '327 Recipes',
            name: 'PIZZA'
        },
        {
            img: CHINESE,
            recipes: '154 Recipes',
            name: 'CHINESE'
        },
        {
            img: MEXICAN,
            recipes: '529 Recipes',
            name: 'MEXICAN'
        },
        {
            img: SUSHI,
            recipes: '237 Recipes',
            name: 'SUSHI'
        },
        {
            img: SEAFOOD,
            recipes: '856 Recipes',
            name: 'SEAFOOD'
        },
        {
            img: STEAKHOUSE,
            recipes: '147 Recipes',
            name: 'STEAKHOUSE'
        },
        {
            img: FRENCH,
            recipes: '27 Recipes',
            name: 'FRENCH'
        },
    ]
    const item = arr.map((a, index) => {
       return <div key={index} className={cl.itemRes}>
            <img src={a.img} className={cl.bg}/>
            <div className={cl.dataRes}><h6>{a.recipes}</h6>
                <h3>{a.name}</h3></div>
        </div>
    })
    return (
        <div className={cl.ImageBlock}>
            <h4>BROWSE BY CUISINES</h4>
            <div className={cl.wrapRes}>{item}</div>
            <CounterBlock/>
        </div>
    );
};

export default ImageBlock;