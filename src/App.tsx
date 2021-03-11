import React from 'react';
import './App.css';
import {Header} from "./common/Header";
import {Offer} from "./components/Offer/Offer";
import {SecondSection} from "./components/Second/Second";
import CaroselQ from "./components/carousel/carousel";
import ImageBlock from "./components/Counter/imageBlock";



function App() {
    return (
        <>
            <Header/>
            <Offer/>
            <SecondSection/>
            <CaroselQ/>
            <ImageBlock/>
        </>
    );
}

export default App;
