const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o esquema
const ActiveSchema = new Schema({
    hostname: { type: String, required: true },
    equipmentType: { type: String, required: true },
    model: { type: String, required: true },
    manufacturer: { type: String, required: true },
    serialNumber: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    status: { type: String, required: true }
});

// Criando o modelo a partir do esquema
const Active = mongoose.model('Active', ActiveSchema);

module.exports = Active;
