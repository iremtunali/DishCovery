const RestaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
});

module.exports = mongoose.models.Restaurant || mongoose.model('Restaurant', RestaurantSchema);