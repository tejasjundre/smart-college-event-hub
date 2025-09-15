const Event = require('../models/Event');
const Registration = require('../models/Registration');
const QRCode = require('qrcode');


exports.listEvents = async (req, res) => {
try {
const events = await Event.find().sort({ date: 1 });
res.json(events);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
};


exports.createEvent = async (req, res) => {
try {
const ev = new Event({ ...req.body, createdBy: req.user._id });
await ev.save();
res.json(ev);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
};


exports.registerForEvent = async (req, res) => {
try {
const { eventId } = req.params;
const event = await Event.findById(eventId);
if (!event) return res.status(404).json({ msg: 'Event not found' });
const existing = await Registration.findOne({ user: req.user._id, event: eventId });
if (existing) return res.status(400).json({ msg: 'Already registered' });
const reg = new Registration({ user: req.user._id, event: eventId });
// generate QR code dataURL with basic payload
const payload = JSON.stringify({ registrationId: reg._id.toString(), userId: req.user._id.toString(), eventId });
const qrDataUrl = await QRCode.toDataURL(payload);
reg.qrCodeDataUrl = qrDataUrl;
await reg.save();
res.json({ registration: reg });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
};