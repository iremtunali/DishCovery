import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    likedRestaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
