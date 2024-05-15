import React from 'react';
import "./Login.scss"
import loginUser from "../../assets/icons/Login user.png"

const Login = () => {
    return (
        <form>
            <div className="login-container">
                <div className="login-container__image">
                    <img src={loginUser} alt="Login User" className="login-container__img"></img>
                </div>
                <div className="login-container__info">
                    <div>
                        <label className="label">User Name</label><br />
                        <input type="text" name="user_name" className="login-container__input"></input>
                    </div>
                    <div>
                        <label className="label">Password</label><br />
                        <input type="password" name="password" className="login-container__input"></input>
                    </div>
                    <div className="login-container__buttons">
                        <button className="login-container__button-login" type="button">
                            <h3 className="login-container__button-text">Login</h3>
                        </button>
                        <button className="login-container__button-cancel" type="submit">
                            <h3 className="login-container__button-text">Cancel</h3>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;