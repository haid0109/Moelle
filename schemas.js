const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

module.exports = function(connection){
    const DataSchema = new mongoose.Schema(
        {
            _id: {
                type: String,
                default: () => uuidv4(),
                required: true,
            },
            windSpeed: {
                type: Number,
                required: true
            },
            rotations: {
                type: Number,
                required: true
            },
            windDirection: {
                type: Number,
                required: true
            },
            shaking: {
                type: Number,
                required: true
            },
            powerOutput: {
                type: Number,
                required: true
            }
        },
        {
            timestamps: true
        }
    );
    this.Data = connection.model('data', DataSchema);
}
