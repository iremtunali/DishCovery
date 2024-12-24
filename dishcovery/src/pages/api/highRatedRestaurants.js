export default async function handler(req, res) {
    const apiKey = process.env.GOOGLE_API_KEY; // Google API anahtarı

    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=popular+restaurants&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error_message) {
            return res.status(500).json({ error: data.error_message });
        }

        // Yüksek puanlı restoranları filtrele ve görselleri düzenle
        const highRatedRestaurants = data.results
            .filter((place) => place.rating >= 4.5) // 4.5 ve üzeri puanı olan restoranlar
            .slice(0, 10) // İlk 10 restoran
            .map((place) => ({
                id: place.place_id,
                name: place.name,
                address: place.formatted_address || place.vicinity,
                rating: place.rating,
                totalRatings: place.user_ratings_total,
                imageUrl: place.photos
                    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${apiKey}`
                    : "/placeholder.jpg", // Görsel yoksa placeholder
            }));

        return res.status(200).json(highRatedRestaurants);
    } catch (error) {
        console.error("Google Places API çağrısı başarısız:", error);
        return res.status(500).json({ error: "Bir hata oluştu." });
    }
}
