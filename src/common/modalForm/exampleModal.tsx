import React, {useState} from 'react';
import cl from './modal.module.css';
import Portal from "../Portal";

type propsType = {
    modalHeader?: string
    modalFooter?: string
    collapse: boolean
    // onSubmitHandler: () => void
    closed: () => void
    children: any
}
const defaultProps: propsType = {
    modalHeader: 'some Title',
    modalFooter: '',
    collapse: false ,
    // onSubmitHandler: () => {
    // },
    closed: () => {    },
    children: null,
}
export const ExampleModal = (props = defaultProps) => {
const onChange=()=>{
    props.closed()
}
    return (
        <>{props.collapse &&
        <Portal>
            <div className={cl.ModalOverlay} >
                <div className={cl.ModalContent}>
                    <div className={cl.modalWindow}>
                        <div className={cl.modalHeader}>
                            <div className={cl.title}><h3>{props.modalHeader}</h3></div>
                        </div>
                        <div className={cl.modalBody}>
                            {props.children}
                        </div>
                        <div className={cl.modalFooter}>
                            {props.modalFooter}
                            <button onClick={onChange} style={{float: 'right'}}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
        }
        </>
    )
}

