const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

const ClientSchema = new mongoose.Schema({
    clientFullName: {
        type: String,
        required: [true, "Nombre y apellido del cliente es requerido"],
        minlength: [3, "El nombre y apellido del cliente debe tener al menos 3 caracteres"]
    },
    clientPhoneNumber: {
        type: String,
        required: [true, "El número de teléfono del cliente es requerido"],
        minlength: [8, "El número de teléfono del cliente debe ser un número valido"]
    },
    clientDirection: {
        type: String,
        required: [true, "Una dirección es requerida"],
        minlength: [5, "La dirección del cliente debe tener al menos 5 caracteres"]
    },
    products: [ProductSchema] 
}, { timestamps: true });

module.exports.ClientModel = mongoose.model('Client', ClientSchema);
