const db = require('./connection');
const { User, Section, Item } = require('../models');
const itemData = require('./items')

db.once('open', async () => {

    await Section.deleteMany();

    const sections = await Section.insertMany([
        { name: '1A' },
        { name: '2A' },
        { name: '3A' },
        { name: '4A' },
        { name: '1B' },
        { name: '2B' },
        { name: '3B' },
        { name: '4B' },
        { name: '1C' },
        { name: '2C' },
        { name: '3C' },
        { name: '4C' },
        { name: '1D' },
        { name: '2D' },
        { name: '3D' },
        { name: '1X' },
        { name: '2X' },
        { name: 'Z' },
        { name: '5A' },
        { name: '5B'}
    ]);

    console.log('sections seeded');

    await Item.deleteMany();

    const items = await Item.insertMany(itemData)

    console.log('items seeded');

    items.forEach(async item => {
        await Section.findOneAndUpdate(
            { name: item.section },
            { $addToSet: { items: item } }
        )
    })

    await User.deleteMany();

    await User.create({
        email: 'caingain@comcast.net',
        password: 'Dizzydog#1',
        sections: sections,
        items: items
    });

    console.log('users seeded');

    process.exit();
});