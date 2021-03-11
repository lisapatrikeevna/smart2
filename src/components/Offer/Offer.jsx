import React from 'react';
import cl from './offer.module.scss';
import {Link} from "react-scroll";

export const Offer = () => {
    return (
        <div className={`${cl.offer} `}>
            <div className={cl.textBlock}>
                <h4>Find your Favorite</h4>
                <h1>RECIPES</h1>
                <button className={cl.btn}>GET STARTED</button>
                <h6>OR SEND US YOUR OWN RECIPES AND <span>GET REWARDED</span>!</h6>
            </div>
        </div>)
}
