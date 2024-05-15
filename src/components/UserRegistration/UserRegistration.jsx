import React from 'react';
import './UserRegistration.scss';

const UserRegistration = () => {
    return (
        <div>
            <div className="user-registration">
                <div className="user-registration__details">
                    <div className="user-registration__Fname form-field">
                        <label className="label">First Name</label><br />
                        <input type="text" name="firstName" className="user-registration__input"></input>
                    </div>
                    <div className="user-registration__Lname form-field">
                        <label className="label">Last Name</label><br />
                        <input type="text" name="lastName" className="user-registration__input"></input>
                    </div>
                    <div className="user-registration__gender form-field">
                        <label className="label">Gender
                            <div className="user-registration__gender-radio">
                                <input type="radio" name="gender" value='male' className="add_radio" />Male
                                <input type="radio" name="gender" className="add_radio add_radio1" value='Female' /> Female
                            </div>
                        </label>
                    </div>
                </div>
                <div className="user-registration__contact">
                    <div className="user-registration__age form-field">
                        <label className="label">Age</label><br />
                        <input type="text" name="age" className="user-registration__input"></input>
                    </div>
                    <div className="user-registration__phoneNumber form-field">
                        <label className="label">Phone Number</label><br />
                        <input type="text" name="phone number" className="user-registration__input"></input>
                    </div>
                    <div className="user-registration__email form-field">
                        <label className="label">Email</label><br />
                        <input type="text" name="email" className="user-registration__input"></input>
                    </div>
                </div>
            </div>
            <div className="user-registration__buttons">
                <button className="user-registration__button-save" type="button">
                    <h3 className="user-registration__button-text">Save</h3>
                </button>
                <button className="user-registration__button-cancel" type="button">
                    <h3 className="user-registration__button-text">Cancel</h3>
                </button>
            </div>
        </div>
    );
};

export default UserRegistration;