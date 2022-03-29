import React, {useState} from 'react';
import classes from './Modal.module.css'

const Modal = ({active, setActive, children}) => {

    // const [active, setActive] = useState(false)

    console.log(active)
    return (
        <div className={active ? classes.modal.active : classes.modal} onClick={() => setActive(false)}>
            <div className={classes.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;