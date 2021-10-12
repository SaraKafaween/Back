import React, { Component } from 'react'
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LanguagesSchema = new Schema;

const Language = mongoose.model("Language", LanguagesSchema);

module.exports = Language;

