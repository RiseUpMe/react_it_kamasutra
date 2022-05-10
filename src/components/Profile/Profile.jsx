import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost/MyPost";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img
                src='https://www.nlspacecampus.eu/cache/3/1920x1080/mob-shutterstock-481251031-20210610135721_1920x1080.jpg'/>
        </div>
        <div className={classes.item2}>
            ava
            <img className={classes.logo}
                 src='https://flyclipart.com/thumb2/personagem-star-wars-png-png-image-355623.png'/>
        </div>
        <MyPost/>
    </div>

}
export default Profile;