import React from "react";
import styles from "./Favorites.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

const Favorites = ({ favorites }) => {
    return (
        <div className={styles.favorites}>
            <h2 className={styles.heading}>
                <FavoriteIcon sx={{ color: "red", fontSize: 30, marginRight: 1 }} />
                Favorites
            </h2>
            <div className={styles.favoriteGrid}>
                {favorites.map((item, index) => (
                    <Link href={`/restaurant/${index}`} key={index} passHref>
                        <div className={styles.favoriteItem}>
                            <img src={item.imageUrl} alt={item.name} />
                            <p className={styles.favoriteName}>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
