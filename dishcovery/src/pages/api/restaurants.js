export default async function handler(req, res) {
    const { query } = req.query; // Kullanıcıdan gelen şehir veya anahtar kelime
    const apiKey = process.env.GOOGLE_API_KEY; // .env.local'dan gelen Google API anahtarı

    if (!query) {
        return res.status(400).json({ error: "Query parametresi eksik." });//Eğer query sağlanmamışsa, HTTP 400 (Bad Request) hatası döndürülür.
    }

    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${query}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error_message) {
            return res.status(500).json({ error: data.error_message });//API'den dönen hata mesajı varsa, istemciye HTTP 500 (Internal Server Error) hatası olarak iletilir.
        }

        // Restoran verilerini formatlıyoruz
        const restaurants = data.results.map((place) => ({
            id: place.place_id,
            name: place.name,
            address: place.formatted_address,
            rating: place.rating,
            totalRatings: place.user_ratings_total,
            photoUrl: place.photos
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${apiKey}`
                : '/placeholder.jpg', // Fotoğraf yoksa yer tutucu resim
        }));
        //http isteği başarılı
        return res.status(200).json(restaurants);//Formatlanan restoran listesi, HTTP 200 (OK) durum kodu ile istemciye JSON formatında döndürülür.
    } catch (error) {
        console.error("Google Places API çağrısı başarısız:", error);
        return res.status(500).json({ error: "Bir hata oluştu." });
    }
}
