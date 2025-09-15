const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.register = async (req, res) => {
const { name, email, password, role, interests } = req.body;
try {
let user = await User.findOne({ email });
if (user) return res.status(400).json({ msg: 'User already exists' });
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(password, salt);
user = new User({ name, email, password: hashed, role, interests });
await user.save();
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
};


exports.login = async (req, res) => {
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
};