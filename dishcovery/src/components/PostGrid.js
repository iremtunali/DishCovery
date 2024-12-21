import React from "react";
import styles from "./PostGrid.module.css";

const PostGrid = ({ posts }) => {
    return (
        <div className={styles.postGrid}>
            {posts.map((post, index) => (
                <div key={index} className={styles.post}>
                    <img src={post.imageUrl} alt={`Post ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default PostGrid;
