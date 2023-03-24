const { Schema, model } = require('mongoose');

const ItemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        size: {
            type: String
        },
        weight: {
            type: Number
        },
        section: {
            type: String,
            ref: 'Section'
        }
    },
    {
        toJSON: {
            // like their own properties but are just mutated data from another
            virtuals: true,
            // the data is immediately mutated and the mutated version becomes the property itself
            getters: true
        },
        toObject: {
            // like their own properties but are just mutated data from another
            virtuals: true,
            // the data is immediately mutated and the mutated version becomes the property itself
            getters: true
        },
        id: false
    }
);

ItemSchema.virtual('length').get(function () {
    if (this.size) {
        return this.size.split('x')[0];
    } else {
        return null
    }
});

ItemSchema.virtual('width').get(function () {
    if (this.size) {
        return this.size.split('x')[1];
    } else {
        return null
    }
});

ItemSchema.virtual('height').get(function () {
    if (this.size) {
        return this.size.split('x')[2];
    } else {
        return null
    }
});

const Item = model('Item', ItemSchema);

module.exports = Item;