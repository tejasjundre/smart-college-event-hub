const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
role: { type: String, enum: ['student','organizer','admin'], default: 'student' },
interests: { type: [String], default: [] }
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);