const mongoose = require('mongoose');


const RegistrationSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
status: { type: String, enum: ['pending','approved','rejected'], default: 'pending' },
qrCodeDataUrl: { type: String }
}, { timestamps: true });


module.exports = mongoose.model('Registration', RegistrationSchema);