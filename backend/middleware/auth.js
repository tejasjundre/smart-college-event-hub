const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = async function (req, res, next) {
const token = req.header('Authorization')?.replace('Bearer ', '') || req.query.token;
if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = await User.findById(decoded.id).select('-password');
next();
} catch (err) {
console.error(err.message);
res.status(401).json({ msg: 'Token is not valid' });
}
};