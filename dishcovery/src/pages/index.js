import React from "react";
import Layout from "@/components/Layout";

const HomePage = () => {
    const popularPosts = [
        { id: 1, name: "Pizza Delight", imageUrl: "/Post1.jpg" },
        { id: 2, name: "Sushi Haven", imageUrl: "/Post2.jpg" },
        { id: 3, name: "Burger Fiesta", imageUrl: "/Post3.jpg" },
    ];

    return (
        <Layout>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Popüler Restoranlar</h1>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                {popularPosts.map((post) => (
                    <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                        <img src={post.imageUrl} alt={post.name} style={{ width: "100%" }} />
                        <h3 style={{ textAlign: "center" }}>{post.name}</h3>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default HomePage;
