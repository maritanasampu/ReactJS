import React, {useState} from 'react';
import './App.scss';
import { Login, Register } from "./componenets/login/index.jsx"

const AppWithHooks = () => {

    const [isLoginActive, setLoginActive] = useState(true);

    const current = isLoginActive ? 'Register' : 'Login';
    const rightSideClassName = isLoginActive ? 'right' : 'left';

    const changeState = () => setLoginActive(!isLoginActive);

    return (
        <div className="app">
            <div className="login">
                <div className="container">
                    {isLoginActive && <Login/>}
                    {!isLoginActive && <Register/>}
                </div>
                <RightSide
                    className={rightSideClassName}
                    current={current}
                    onClick={changeState} />
            </div>
        </div>
    )
};

const RightSide = props => {
    const className = `right-side ${props.className}`;

    return (
        <div className={className} onClick={props.onClick}>
            <div className="inner-container">
                <div className="text">{props.current}</div>
            </div>
        </div>
    );
};

export default AppWithHooks;


