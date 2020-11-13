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
                type: String,
                required: true
            },
            rotations: {
                type: String,
                required: true
            },
            windDirection: {
                type: String,
                required: true
            },
            shaking: {
                type: String,
                required: true
            },
            powerOutput: {
                type: String,
                required: true
            }
        },
        {
            timestamps: true
        }
    );
    this.Data = connection.model('data', DataSchema);
}
