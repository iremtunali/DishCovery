import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    category: { type: String },
    description: { type: String },
    likes: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

export default mongoose.models.Restaurant || mongoose.model('Restaurant', RestaurantSchema);
