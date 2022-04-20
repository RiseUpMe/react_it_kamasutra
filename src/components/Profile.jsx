import React from 'react';
import classes from './Profil.module.css';
const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://www.nlspacecampus.eu/cache/3/1920x1080/mob-shutterstock-481251031-20210610135721_1920x1080.jpg'/>
        </div>
        <div >
            <img className={classes.logo}  src='https://flyclipart.com/thumb2/personagem-star-wars-png-png-image-355623.png'/>
        </div>
        <div>
            <div className={classes.item}>
                My post
            </div>

            <div className={classes.item}>
                new post
            </div>
            <div className={classes.item}>
                post1
            </div>
            <div className={classes.item}>
                post2
            </div>
        </div>
    </div>

}
export default Profile;