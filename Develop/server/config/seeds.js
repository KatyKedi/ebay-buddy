const db = require('./connection');
const { User, Section, Item } = require('../models');

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

    const items = await Item.insertMany([


        {
            name: 'Nightmare Before Christmas OOGIE BOOGIE Silhouetted Glass Votive Holder Candle',
            size: '8x7x7',
            weight: 1.2,
            section: '2B'
        },
        {
            name: 'Nightmare Before Christmas ZERO Ceramic 3D Mug Walgreens Exclusive 2021 NWT',
            size: '8x7x7',
            weight: 1.2,
            section: '1A'
        },
        {
            name: 'Commonwealth HUG-A-PLUSH 8" CHRISTMAS PENGUIN with Tags and Case Vintage',
            size: '8x7x6',
            weight: 0.6,
            section: '1A'
        },
        {
            name: 'Margaret Le Van Priss Alley Cats LITTLE PRIS MUFFET Retired',
            size: '8x7x5',
            weight: 0.7,
            section: '1A'
        },
        {
            name: 'Nightmare Before Christmas Hallmark Ornaments JACK SALLY OOGIE LOCK SHOCK BARREL',
            size: '10x8x6',
            weight: 1.5,
            section: '1A'
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON Snow Water Globe Musical Walgreens',
            size: '9x7x7',
            weight: 2.7,
            section: '1A'
        },
        {
            name: 'Nightmare Before Christmas 9" Plush Doll JACK SALLY MAYOR ZERO OOGIE DR. FINKLE',
            size: '11x9x9',
            weight: 1.6,
            section: '1B'
        },
        {
            name: 'Vintage Bombay Company Chinoiserie Asian Pagoda Style Lidded',
            size: '15x11x12',
            weight: 8.5,
            section: '1X'
        },
        {
            name: 'Gemmy Airblown Inflatable 101 Dalmatians 5ft MALEFICENT Lights Up LED New',
            size: '15x13x8',
            weight: 4.3,
            section: '1C'
        },
        {
            name: 'Disney Hocus Pocus WINIFRED SANDERSON w/ Book Door Greeter Plush Walmart NWT',
            size: '24x17x9',
            weight: 3.8,
            section: 'Z'
        },

        {
            name: 'RARE! Disneyana Nightmare Before Christmas Cookie Jar 12" Limited Edition of 350',
            size: '16x14x14',
            weight: 10.6,
            section: '2B'
        },

        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll Set of 4 NWT',
            size: '24x17x9',
            weight: 5.8,
            section: '2C'
        },
        {
            name: 'CHI-Volumizer 4-in-1 Blowout Brush Nozzle Paddle Brush Diffuser and Round Brush',
            size: '15x10x5',
            weight: 2.5,
            section: '2C'
        },
        {
            name: 'Nightmare Before Christmas Jack Skellington & Sally NOW & FOREVER Backpack NWT',
            section: '2C'
        },
        {
            name: 'Squishmallows Kellytoys Disney STAR WARS 5" R2-D2 The Child and BB-8 Set NWT',
            size: '9x7x6',
            weight: 0.6,
            section: '2D'
        },
        {
            name: 'Franklin Uniform Set 5pc NCAA Collegiate Football Mississippi State Bulldogs YM',
            size: '12x10x12',
            weight: 3.2,
            section: '2D'
        },
        {
            name: 'Funko POP! Deluxe: Dug Days #1098 DUG WITH PUPPIES Target Exclusive New',
            size: '10x9x7',
            weight: 1.4,
            section: '3C'
        },
        {
            name: 'Funko Pop! Movies: THE LOST BOYS - FROG BROTHERS 2-pack FUNKO SHOP EXCLUSIVE NIB',
            size: '10x8x6',
            weight: 0.9,
            section: '4A'
        },
        {
            name: 'Funko A Day With Pikachu SPLASHING AWAY SUMMER Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.7,
            section: '4A'
        },
        {
            name: 'Funko Pokemon Holiday PIKACHU Pokemon Exclusive NIB',
            size: '9x7x6',
            weight: 0.6,
            section: '4A'
        },
        {
            name: 'SDCC 2020 PX Previews Exclusive Funko #336 Comic Moments RED HOOD vs DEATHSTROKE',
            size: '10x8x7',
            weight: 1.7,
            section: '4A'
        },
        {
            name: 'Hallmark Christmas Ornament Disney Villains CRUELLA DE VIL 101 Dalmatians New',
            size: '7x5x4',
            weight: 0.4,
            section: '4A'
        },
        {
            name: 'Funko Pop Retro Toys Mystifying Oracle OUIJA PLANCHETTE #102 - BAM! Exclusive',
            size: '7x5x4',
            weight: 0.4,
            section: '4B'
        },
        {
            name: 'Funko A Day With Pikachu ONE LUCKY DAY Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.8,
            section: '4C'
        },
        {
            name: 'Corelle SHADOW IRIS Purple Flower Green Rim Dinner/Salad Plates Lot Of 16 EUC',
            size: '13x13x7',
            weight: 10.4,
            section: '3C'
        },
        {
            name: 'Vintage Double Sided Hand Drum-Made Leather Hide-Wood Gut Primitive-Tribal Tan',
            size: '7x8x3',
            weight: 0.3,
            section: '3C'
        },
        {
            name: `Vintage 80'S Saxton Hall Quilted Long Puffer Coat 44" Tan Womans Size Small`,
            size: '20x14x7',
            weight: 3.6,
            section: '3D'
        },
        {
            name: 'Funko Soda HEAT MISER The Year Without A Santa Claus CHASE & COMMON',
            size: '6x5x7',
            weight: 1.0,
            section: '3B'
        },
        {
            name: '1960s Couroc of Monterey DANCING FROGS Platter Tray Barware Midcentury 15"x10"',
            section: '3B'
        },
        {
            name: 'Stranger Things Coke Coca Cola 1985 Limited Edition Collectors Pack + Bonus',
            size: '10x7x9',
            weight: 5.9,
            section: '3B'
        },
        {
            name: 'Funko Pop! Funkon 2021 Exclusive THE ROCKETEER #1068 Mint',
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: '2018 Funko POP! Marvel Venom "CARNAGE" #367',
            size: '7x5x4',
            weight: 0.4,
            section: '1A'
        },
        {
            name: `Funko POP! Star Wars Art Series DARTH VADER 515 Mustafar 516 Hoth 517 Endor Set`,
            section : '4B'
        },
        {
            name: `Funko Pop! XANATHAR (w/D20) #785 Dungeons & Dragons 2021 Summer Convention LE`,
            section : '4C'
        },
        {
            name: 'Vintage Silver Plates Set (10) 9" Round & (4) 7" Etched Trivet Made In England',
            size: '11x10x11',
            weight: 10.8,
            section: '3A'
        },
        {
            name: `Funko Pop! Heroes DC Batman RED HOOD #372 PIAB Exclusive`,
            size: '7x5x4',
            weight: 0.9,
            section: '4A'
        },
        {
            name: `Nightmare Before Christmas Door Greeter JACK OOGIE MAYOR ZERO SALLY FINKELSTEIN`,
            size: '25x17x6',
            weight: 10.4,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas JACK SKELLINGTON & ZERO Snow Globe Water Globe New`,
            size: '10x9x7',
            weight: 3.1,
            section: '1A'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            section: '3B'
        },
        {
            name: `Nightmare Before Christmas Airblown Inflatable Jack Zero Scary Teddy 5.5FT LED`,
            section: '3D'
        },
        {
            name: `Funko Pop! Movies: THE LOST BOYS - FROG BROTHERS 2-pack FUNKO SHOP EXCLUSIVE NIB`,
            size: '10x9x7',
            weight: 1.0,
            section: '4A'
        },
        {
            name: `Disney Airblown Gemmy Inflatable Nightmare Before Christmas 4.5ft ZERO LED NIB`,
            size: '11x8x6',
            weight: 3.3,
            section: '3B'
        },
        {
            name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
            size: '12x12x9',
            weight: 3.1,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            size: '8x8x10',
            weight: 4.1,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            size: '8x8x10',
            weight: 4.1,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            size: '8x8x10',
            weight: 4.1,
            section: 'Z'
        },
        {
            name: `Obi-Wan Kenobi Frosted Flakes - Star Wars Celebration 2022 Set of 2 RARE CEREAL`,
            size: '13x11x6',
            weight: 2.5,
            section: '3C'
        },
        {
            name: `Nightmare Before Christmas Oogie Boogie Neon Green Backpack - Hot Topic NWT`,
            size: '18x14x5',
            weight: 2.2,
            section: '1B'
        },
        {
            name: `Disney The Nightmare Before Christmas Succulents Toy Duck Walgreens Exclusive`,
            size: '7x6x5',
            weight: 0.7,
            section: '4C'
        },
        {
            name: `Philips Halloween Spooky Jack O Lantern Orange Pumpkin Motion Projector LED`,
            size: '11x8x6',
            weight: 1.5,
            section: '1D'
        },
        {
            name: `NYCC Exclusive Nightmare Before Christmas Dr. FINKELSTEIN Mini Backpack SEALED`,
            size: '12x12x8',
            weight: 2.8,
            section: '2C'
        },


        {
            name: `FUNKO POP! MOVIES #1203 GANDALF THE WHITE LORD OF RINGS GLOWS BOXLUNCH EXCLUSIVE`,
            size: '7x5x4',
            weight: 0.6,
            section: '4C'
        },
        {
            name: `Funko Pop! Loungefly Disney MICKEY MOUSE Pin Trader Cosplay Mini Backpack NWT`,
            size: '12x10x10',
            weight: 2.3,
            section: '2B'
        },
        {
            name: `Hunter X Hunter KILLUA ZOLDYCK Funko Pop! AX 2022 Anime Expo Exclusive`,
            size: '7x5x4',
            weight: 0.5,
            section: '4C'
        },
        {
            name: `Jim Shore Peanuts SNOOPY and WOODSTOCK HALLOWEEN 2021 BEWITCHING BEAGLE 6008964`,
            size: '9x7x8',
            weight: 1.5,
            section: '2B'
        },
        {
            name: `Joseph's Studio by Roman 2PC Santa And Reindeer Stocking Holders 9.25" 37011 New`,
            size: '16x10x12',
            weight: 4.9,
            section: '2A'
        },
        {
            name: `Loungefly Disney MINNIE MOUSE GHOST Glow-in-the-Dark Mini BACKPACK & WALLET NWT`,
            size: '14x10x7',
            weight: 2.1,
            section: '1C'
        },
        {
            name: `Dr. Seuss THE GRINCH CAR BUDDY Airblown Inflatable 3.5ft Gemmy Walmart Exclusive`,
            size: '11x11x6',
            weight: 2.0,
            section: '2C'
        },
        {
            name: `Hallmark National Lampoons Vacation Cousin Eddie's RV Christmas Ornament NEW`,
            size: '7x5x4',
            weight: 0.5,
            section: '4B',
        },
        {
            name: `Grinch Snowglobe`,
            size: '7x5x4',
            weight: 0.5,
            section: '4B'
        },
        {
            name: `Funko Pop! TV: The Golden Girls In Robes 4 Pack Walmart EXCLUSIVE In Hand`,
            section: '1A'
        },
        {
            name: `Animated Singing Santa`,
            section: '1D'
        },
        {
            name: `Funko Pop! Game of Thrones #65 BERIC DONDARRION 2018 Fall Convention Exclusive`,
            size: '7x5x4',
            weight: 0.5,
            section: '2A'
        },
        {
            name: `Loungefly Disney Minnie Mouse Daisies Cosplay Mini Backpack + Wallet New Sealed`,
            size: '12x11x11',
            weight: 3.1,
            section: '5A'
        },

        {
            name: `Funko Creators`,
            size: '11x10x7',
            weight: 1.3,
            section: '2A'
        },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },

    ]);

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