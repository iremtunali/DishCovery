const PostSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    content: String,
});

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
