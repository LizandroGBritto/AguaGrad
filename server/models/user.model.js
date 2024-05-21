const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "First name is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas deben coincidir');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


UserSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });



module.exports.UserModel = mongoose.model('User', UserSchema);