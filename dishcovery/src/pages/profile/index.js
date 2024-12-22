import React from "react";
import Layout from "@/components/Layout"; // Navbar için Layout
import ProfileHeader from "@/components/ProfileHeader";
import Favorites from "@/components/Favorites"; // Favoriler bileşeni

const ProfilePage = () => {
    const user = {
        username: "john_doe",
        profilePicture: "/ProfilePhoto.jpg",
        bio: "Food lover, traveler, and photographer 🌍🍴📸",
        postsCount: 34,
        followersCount: 1200,
        followingCount: 200,
    };

    // Kullanıcının favori restoranları
    const favorites = [
        { id: 1, imageUrl: "/Post1.jpg", name: "Pizza Paradise" },
        { id: 2, imageUrl: "/Post2.jpg", name: "Sushi Heaven" },
        { id: 3, imageUrl: "/Post3.jpg", name: "Burger Town" },
    ];


    return (
        <Layout>
            {/* Kullanıcı bilgilerini gösteren başlık */}
            <ProfileHeader {...user} />
            {/* Sadece favori restoranlar gösteriliyor */}
            <Favorites favorites={favorites} />
        </Layout>
    );
};

export default ProfilePage;
