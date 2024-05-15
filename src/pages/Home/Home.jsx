import React from 'react';
import "./Home.scss";
import bloodDonation from "../../assets/images/Blood Donation.png";

const Home = () => {
    console.log("in home");
    return (
        <>
            <div className="home-container">
                <div className="home-container__info-div">
                    <h3>
                        A blood donation occurs when a person voluntarilv has blood drawn and used for transfusion and/or made into bio-pharmaceuticals medications bu process called fraction (separation of whole blood components).
                        Donation may be of whole blood, or of specific components directly (apheresis). Blood banks often participate in the collection process as well as the procedure that follow it.
                    </h3>
                </div>
                <div className="home-container__image-div">
                    <img src={bloodDonation} className="home-container__image" alt="bloodDonation" />
                </div>
            </div>
        </>
    );
};

export default Home;