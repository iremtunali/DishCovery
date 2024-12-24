import React from "react";
import Layout from "@/components/Layout";

const ProfilePage = () => {
    const user = {
        username: "john_doe",
        profilePicture: "/ProfilePhoto.jpg",
        bio: "Food lover, traveler, and photographer 🌍🍴📸",
        postsCount: 34,
        followersCount: 1200,
        followingCount: 200,
    };

    const favorites = [
        { id: 1, name: "Pizza Paradise", imageUrl: "/Post1.jpg" },
        { id: 2, name: "Sushi Heaven", imageUrl: "/Post2.jpg" },
        { id: 3, name: "Burger Town", imageUrl: "/Post3.jpg" },
    ];

    return (
        <Layout>
            <div style={{ textAlign: "center", margin: "20px 0" }}>
                <img src={user.profilePicture} alt="Profile" style={{ width: "100px", borderRadius: "50%" }} />
                <h2>{user.username}</h2>
                <p>{user.bio}</p>
                <div>
                    <strong>{user.postsCount}</strong> Posts | <strong>{user.followersCount}</strong> Followers |{" "}
                    <strong>{user.followingCount}</strong> Following
                </div>
            </div>
            <h3 style={{ margin: "20px 0" }}>❤️ Favorites</h3>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                {favorites.map((favorite) => (
                    <div key={favorite.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                        <img src={favorite.imageUrl} alt={favorite.name} style={{ width: "100%" }} />
                        <h4>{favorite.name}</h4>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default ProfilePage;
