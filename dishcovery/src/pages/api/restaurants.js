export default async function handler(req, res) {
    const { query } = req.query; // Kullanıcının arama yaptığı şehir veya anahtar kelime
    const apiKey = process.env.GOOGLE_API_KEY; // API anahtarı

    if (!query) {
        return res.status(400).json({ error: "Query parametresi eksik." });
    }

    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${query}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error_message) {
            return res.status(500).json({ error: data.error_message });
        }

        // İlgili restoran verilerini seçiyoruz
        const restaurants = data.results.map((place) => ({
            id: place.place_id,
            name: place.name,
            address: place.formatted_address,
            rating: place.rating,
            totalRatings: place.user_ratings_total,
        }));

        return res.status(200).json(restaurants);
    } catch (error) {
        console.error("Google Places API çağrısı başarısız:", error);
        return res.status(500).json({ error: "Bir hata oluştu." });
    }
}
