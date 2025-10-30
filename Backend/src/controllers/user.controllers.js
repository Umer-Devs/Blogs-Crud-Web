import { User } from "../models/user.models.js";

const userSignIn = async (req, res) => {
    try {
        const signIndata = req.body;



        const tableData = new User(signIndata);
        const saveMyData = await tableData.save();
        console.log('User Save Data:', saveMyData);

        res.status(200).json({
            success: true,
            message: 'User sign-in data received successfully!',
            data: { signIndata },
        });

    } catch (error) {
        console.error('❌ Failed to process sign-in request:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save data in the database',
        });
    }
};

export { userSignIn }
