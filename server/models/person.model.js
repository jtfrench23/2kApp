const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PersonSchema = new mongoose.Schema({
    gamertag: { type: String },
    email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    }
    },
}, { timestamps: true });

PersonSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

PersonSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value);

module.exports = mongoose.model('Person', PersonSchema);