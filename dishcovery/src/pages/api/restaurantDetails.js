export default async function handler(req, res) {
    const { id } = req.query; // URL'deki 'id' parametresi çağırıyoruz
    const apiKey = process.env.GOOGLE_API_KEY; // .env.local'daki Google API anahtarı

    if (!id) {
        return res.status(400).json({ error: "Restoran ID'si eksik." });
    }

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error_message) {
            return res.status(500).json({ error: data.error_message });
        }

        // Restoran detaylarını formatlıyoruz ki ham veri yapıları okunabilir ve uygulama içinde kullanılabilir hale gelsin
        const restaurant = {
            id: data.result.place_id,
            name: data.result.name,
            address: data.result.formatted_address,
            rating: data.result.rating,
            totalRatings: data.result.user_ratings_total,
            phone: data.result.formatted_phone_number || null,
            website: data.result.website || null,
            priceLevel: data.result.price_level || null,
            openingHours: data.result.opening_hours?.weekday_text || null,
            reviews: data.result.reviews?.map(review => ({
                authorName: review.author_name,
                rating: review.rating,
                text: review.text,
            })) || null,
            photoUrl: data.result.photos?.[0]?.photo_reference
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.result.photos[0].photo_reference}&key=${apiKey}`
                : '/placeholder.jpg', // Varsayılan resim
        };

        return res.status(200).json(restaurant);
    } catch (error) {
        console.error("Google Places API çağrısı başarısız:", error);
        return res.status(500).json({ error: "Bir hata oluştu." });
    }
}
