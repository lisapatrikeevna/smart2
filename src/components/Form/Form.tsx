import React from "react";
import {Input} from "../../common/Input";
import cl from "./form.module.scss";

export const Form = () => {
    const sendler=()=>{
        alert('send')
    }
    return (
        <div id={'contact'} className={cl.contacts}>
                <form className={cl.form}>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'name'}/></div>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'mail'}/></div>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'password'}/></div>
                  <div className={cl.inputWrap}>  <Input type={'text'} placeholder={'telegram'}/></div>
                   <div className={cl.btnWrap}> <button className={cl.btn} onClick={sendler}>send</button></div>
                </form>

        </div>
    )
}
export const FormIn = () => {
    const sendler=()=>{
        alert('send')
    }
    return (
        <div id={'contact'} className={cl.contacts}>
                <form className={cl.form}>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'mail'}/></div>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'password'}/></div>
                   <div className={cl.btnWrap}> <button className={cl.btn} onClick={sendler}>send</button></div>
                </form>

        </div>
    )
}