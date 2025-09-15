const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
title: { type: String, required: true },
description: { type: String },
category: { type: String },
tags: { type: [String], default: [] },
date: { type: Date, required: true },
venue: { type: String },
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
capacity: { type: Number, default: 0 }
}, { timestamps: true });


module.exports = mongoose.model('Event', EventSchema);