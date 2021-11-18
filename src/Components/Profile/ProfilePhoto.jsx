import React from "react";
import me from "./me.jpg"
import './styles.css';


const ProfilePhoto = () => {
    return(
        <div>
            <img className="img-style" src={me} alt="opps" />
        </div>
    );
};

export default ProfilePhoto;