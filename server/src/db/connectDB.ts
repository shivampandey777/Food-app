// mongopassword=hQ1VSiZML6TEr1xk
// shivampandey99242

import mongoose from 'mongoose';
 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log('Error:', error);
    }
}
export default connectDB;



