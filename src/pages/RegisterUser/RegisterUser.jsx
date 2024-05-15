import React from 'react';
import './RegisterUser.scss';
import UserRegistration from '../../components/UserRegistration/UserRegistration';
import returnIcon from'../../assets/icons/arrow_back-24px.svg';
import { useParams, useNavigate } from "react-router-dom";

const RegisterUser = () => {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
      }

    return (
        <div className="register-user">
            <h2 className='register-user__title'>
                <img className='register-user__return' src={returnIcon} onClick={handleBackClick} alt="return to the main page" />
                User Registration
            </h2>
            <UserRegistration />
        </div>

       
    );
};

export default RegisterUser;