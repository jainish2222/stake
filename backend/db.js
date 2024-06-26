const mongoose = require('mongoose');
// const { MONGODB_URL } = require("./config");

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://jainishkoladiya1:obLneH3HlmqBkiIY@cluster0.14fh7js.mongodb.net/?tls=true');
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};
connectToMongoDB();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        // ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});
// const bitSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId, // Reference to User model
//         ref: 'User',
//         required: true
//     },
//     bit: {
//         type: Number,
//         required: true
//     }
// });

const User = mongoose.model('Userpaytm', userSchema);
const Account = mongoose.model('Account', accountSchema);
// const bit = mongoose.model('bit', bitSchema);
module.exports = {
	User,
    Account
    // bit
};

