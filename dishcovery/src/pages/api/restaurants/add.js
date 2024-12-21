import dbConnect from '../../../utils/dbConnect';
import Comment from '../../../models/Comment';
import Restaurant from '../../../models/Restaurant';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { content, userId, restaurantId } = req.body;

        const newComment = await Comment.create({ content, user: userId, restaurant: restaurantId });

        await Restaurant.findByIdAndUpdate(restaurantId, {
            $push: { comments: newComment._id },
        });

        res.status(201).json(newComment);
    }
}
