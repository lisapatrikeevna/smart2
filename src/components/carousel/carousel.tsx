import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import hh from './../../img/hh.png';
import  './Carousel.scss';


type itemsType = {
    img: any
    desk: string
    autor:string
}
const CaroselQ = () => {
    const items:itemsType[] = [
        {
            img: hh,
            desk: 'I am so happy because I found this recipe, and it just made my life easier. Thanks  so much for sharing!',
            autor: '- Michael Dawson, San Francisco, CA -'
        },
        {
            img: hh,
            desk: 'I am so happy because I found this recipe, and it just made my life easier. Thanks  so much for sharing!',
            autor: '- Michael Dawson, San Francisco, CA -'
        },
        {
            img: hh,
            desk: 'I am so happy because I found this recipe, and it just made my life easier. Thanks  so much for sharing!',
            autor: '- Michael Dawson, San Francisco, CA -'
        },
    ];
    const item = items.map((i,index) => <div key={index} className="item">
        <img src={i.img}/>
        <div className="legend">{i.desk}</div>
        <p className={'autor'}>{i.autor}</p>
    </div>)
    return (
        <div className={'background'}>
            <Carousel className={'name'}>
                {item}
            </Carousel>
        </div>
    );
}
export default CaroselQ;
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));