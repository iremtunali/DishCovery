import React, { useState } from "react";

const FilterBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city.trim() === "") {
            alert("Lütfen bir şehir girin.");
            return;
        }
        onSearch(city); // Şehir bilgisini üst komponentlere gönder
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Şehir adı girin..."
                style={{ padding: "10px", width: "200px", marginRight: "10px" }}
            />
            <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
                Ara
            </button>
        </div>
    );
};

export default FilterBar;