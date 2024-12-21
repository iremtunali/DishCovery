import React from "react";
import Navbar from "@/components/Navbar"; // Navbar bileşeni
import ProfileHeader from "@/components/ProfileHeader";
import PostGrid from "@/components/PostGrid";

const ProfilePage = () => {
    const user = {
        username: "john_doe",
        profilePicture: "/ProfilePhoto.jpg",
        bio: "Food lover, traveler, and photographer 🌍🍴📸",
        postsCount: 34,
        followersCount: 1200,
        followingCount: 200,
    };

    const posts = [
        { imageUrl: "/Post1.jpg" },
        { imageUrl: "/Post2.jpg" },
        { imageUrl: "/Post3.jpg" },
    ];

    return (
        <>
            <Navbar /> {/* Navbar her sayfa için elle eklenir */}
            <div style={{ marginTop: "20px", padding: "20px" }}>
                <ProfileHeader {...user} />
                <PostGrid posts={posts} />
            </div>
        </>
    );
};

export default ProfilePage;
