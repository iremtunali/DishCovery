import React from "react";
import styles from "./ProfileHeader.module.css";

const ProfileHeader = ({ username, profilePicture, bio, postsCount, followersCount, followingCount }) => {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.profileInfo}>
                <img
                    className={styles.profilePicture}
                    src={profilePicture || "/default-profile.png"}
                    alt={`${username}'s profile`}
                />
                <div className={styles.userInfo}>
                    <h2 className={styles.username}>{username}</h2>
                    <p className={styles.bio}>{bio}</p>
                </div>
            </div>
            <div className={styles.profileStats}>
                <div>
                    <strong>{postsCount}</strong> Posts
                </div>
                <div>
                    <strong>{followersCount}</strong> Followers
                </div>
                <div>
                    <strong>{followingCount}</strong> Following
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
