import dbConnect from '../../../utils/dbConnect';
import Restaurant from '../../../models/Restaurant';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {
            const restaurants = await Restaurant.find({});
            res.status(200).json({ success: true, data: restaurants });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}


