const db = require('./connection');
const { User, Section, Item } = require('../models');

db.once('open', async () => {

    await Section.deleteMany();

    const sections = await Section.insertMany([
        { name: 'A1' },
        { name: 'A2' },
        { name: 'A3' },
        { name: 'A4' },
        { name: 'B1' },
        { name: 'B2' },
        { name: 'B3' },
        { name: 'B4' },
        { name: 'C1' },
        { name: 'C2' },
        { name: 'C3' },
        { name: 'C4' },
        { name: 'D1' },
        { name: 'D2' },
        { name: 'D3' },
        { name: 'X1' },
        { name: 'X2' }
    ]);

    console.log('sections seeded');

    await Item.deleteMany();

    const items = await Item.insertMany([
        {
            name: 'UGG Fluff Yeah Slide Baby Slippers Size S 02/03 6-12 Months Lamb Fur New in Box',
            size: '8x7x7',
            weight: 0.7,
            section: sections[0]._id
        },
        {
            name: 'Hallmark Christmas Ornaments Disney MICKEY & MINNIE Sparkle Ball Ears 2021 New',
            size: '6x6x4',
            weight: 0.8,
            section: sections[0]._id
        },
        {
            name: 'Yeti Abominable Snowman Animated Monster Dances and Sings WHITE CHRISTMAS New',
            size: '9x6x6',
            weight: 1.0,
            section: sections[0]._id
        },
        {
            name: 'Hallmark Christmas Ornaments HARRY POTTER HOGWARTS EXPRESS BOOKS & WAND 2021 New',
            size: '9x6x5',
            weight: 0.9,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas OOGIE BOOGIE Silhouetted Glass Votive Holder Candle',
            size: '8x7x7',
            weight: 1.2,
            section: sections[0]._id
        },
        {
            name: 'Margaret Le Van Alley Cat Figurine KATTY DIVA Purple Gown Retired',
            size: '9x7x5',
            weight: 1.2,
            section: sections[0]._id
        },
        {
            name: 'BREYER HORSES 2021 World Of Breyer Paddock Pals COCO New in Box',
            size: '9x7x6',
            weight: 0.6,
            section: sections[0]._id
        },
        {
            name: 'BREYER HORSES 2021 World Of Breyer Paddock Pals SMOKEY New in Box',
            size: '10x7x5',
            weight: 0.7,
            section: sections[0]._id
        },
        {
            name: 'BREYER HORSES 2021 World Of Breyer Paddock Pals SMOKEY New in Box',
            size: '10x7x6',
            weight: 0.7,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas Mini Succulents Set of 5 JACK SALLY ZERO MAYOR OOGIE',
            size: '10x9x7',
            weight: 2.0,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas ZERO Ceramic 3D Mug Walgreens Exclusive 2021 NWT',
            size: '8x7x7',
            weight: 1.2,
            section: sections[0]._id
        },
        {
            name: 'The Wiggles VHS Lot 4 HOOP DEE DOO MAGICAL ADVENTURE WAKE UP JEFF TOOT TOOT EUC',
            size: '10x7x6',
            weight: 2.4,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas Animated JACK SKELLINGTON in CHIMNEY Plush Walgreens',
            size: '10x8x9',
            weight: 1.3,
            section: sections[0]._id
        },
        {
            name: 'BEETLEJUICE LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW',
            size: '10x9x9',
            weight: 1.5,
            section: sections[0]._id
        },
        {
            name: 'Commonwealth HUG-A-PLUSH 8" CHRISTMAS PENGUIN with Tags and Case Vintage',
            size: '8x7x6',
            weight: 0.6,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas Mini Succulents Set of 4 JACK SALLY MAYOR OOGIE New',
            size: '8x7x6',
            weight: 1.5,
            section: sections[0]._id
        },
        {
            name: 'O.P.I. OPI Infinite Shine System BARE FOR YOU Collection Gift Set of 4 NIB',
            size: '9x6x6',
            weight: 1.4,
            section: sections[0]._id
        },
        {
            name: 'Squishmallows Kellytoy Disney WINNIE THE POOH and PIGLET 5" Stuffed Plush NWT',
            size: '7x6x4',
            weight: 0.5,
            section: sections[0]._id
        },
        {
            name: 'Loungefly Nightmare Before Christmas Jack Skellington PUMPKIN KING Mini Backpack',
            size: '14x9x6',
            weight: 1.3,
            section: sections[0]._id
        },
        {
            name: 'Margaret Le Van Priss Alley Cats LITTLE PRIS MUFFET Retired',
            size: '8x7x5',
            weight: 0.7,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON Ceramic 3D Mug Walgreens 2021 New',
            size: '10x7x6',
            weight: 1.2,
            section: sections[0]._id
        },
        {
            name: 'Hallmark The MANDALORIAN w/ THE CHILD Walgreens Star Wars Christmas Ornament',
            size: '6x6x4',
            weight: 0.5,
            section: sections[0]._id
        },
        {
            name: 'Funko POP! Marvel Avengers Endgame IRON MAN #580 PX Exclusive GITD',
            size: '7x5x4',
            weight: 0.5,
            section: sections[0]._id
        },
        {
            name: 'Wacom Intuos CTL-4100 Small Drawing Tablet - Black For Mac PC Chromebook Android',
            size: '11x8x5',
            weight: 1.6,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas Hallmark Ornaments JACK SALLY OOGIE LOCK SHOCK BARREL',
            size: '10x8x6',
            weight: 1.5,
            section: sections[0]._id
        },
        {
            name: 'NIB Transition Networks J/RS232-TF-01 Just-Convert-It SA Media Converter',
            size: '7x6x4',
            weight: 1.1,
            section: sections[0]._id
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON Snow Water Globe Musical Walgreens',
            size: '9x7x7',
            weight: 2.7,
            section: sections[0]._id
        },
        {
            name: '"From Fibre to Fabric: The Ultimate Guide to Soft Furnishings" Hardcover Sealed',
            section: sections[0]._id
        },
        {
            name: 'Sealed "Bai: The New Language Of Porcelain In China" By Bai Ming ACC Art Books',
            section: sections[0]._id
        },
        {
            name: 'Funko POP! #1237 PEACEMAKER W/ Shield 2022 Wondrous Convention Limited Edition',
            size: '8x5x5',
            weight: 0.5,
            section: sections[0]._id
        },
        {
            name: 'Funko POP! Disney Pixar WALL-E 2022 Wondrous Convention Limited Edition',
            size: '7x6x4',
            weight: 0.6,
            section: sections[0]._id
        },
        {
            name: 'Squishmallows Kellytoy Disney WOODY and BUZZ LIGHTYEAR 5" Plush Stuffed NWT',
            size: '6x7x5',
            weight: 0.5,
            section: sections[0]._id
        },
        {
            name: 'Dept 56 Nightmare Before Christmas Jack, Sally and Zero by Possible Dreams NIB',
            size: '17x14x12',
            weight: 5.4,
            section: sections[4]._id
        },
        {
            name: 'Nickelodeon Paw Patrol The Movie LIBERTY JOINS THE TEAM Target Exclusive New',
            size: '16x13x3',
            weight: 1.5,
            section: sections[4]._id
        },
        {
            name: 'Nightmare Before Christmas 9" Plush Doll JACK SALLY MAYOR ZERO OOGIE DR. FINKLE',
            size: '11x9x9',
            weight: 1.6,
            section: sections[4]._id
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll OOGIE BOOGIE',
            size: '11x8x6',
            weight: 1.1,
            section: sections[4]._id
        },
        {
            name: 'Disney NIGHTMARE BEFORE CHRISTMAS Characters String Lights Walgreens Exclusive',
            size: '14x10x6',
            weight: 1.3,
            section: sections[4]._id
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll BARREL NWT',
            size: '15x10x6',
            weight: 1.6,
            section: sections[4]._id
        },
        {
            name: 'Roblox SERIES 4 Celebrity Collection 24 Pieces Target Exclusive NIB',
            size: '16x14x6',
            weight: 2.0,
            section: sections[4]._id
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll SALLY NWT',
            size: '14x11x7',
            weight: 1.6,
            section: sections[4]._id
        },
        {
            name: 'Funko Shop Exclusive Kellogs Frosted Flakes TONY THE TIGER 10" #70 Factory Box',
            size: '16x11x12',
            weight: 3.6,
            section: sections[4]._id
        },
        {
            name: 'Walgreens Exclusive Nightmare Before Christmas ZERO CANDELABRA Candle Holder New',
            size: '12x11x7',
            weight: 2.7,
            section: sections[4]._id
        },
        {
            name: 'Vintage Bombay Company Chinoiserie Asian Pagoda Style Lidded',
            size: '15x11x12',
            weight: 8.5,
            section: sections[4]._id
        },
        {
            name: '2021 Nightmare Before Christmas Exclusive Resin Presents JACK, SALLY & ZERO New',
            size: '10x10x10',
            weight: 5.5,
            section: sections[4]._id
        },
        {
            name: 'Loungefly Disney MICKEY MOUSE Sketch Lunch Bag Lunchbox Tote Hot Topic NWT',
            size: '13x9x6',
            weight: 1.3,
            section: sections[4]._id
        },
        {
            name: 'Ceramic Siamese Cat and Kitten Pitcher Green/Brown 7"',
            size: '8x7x6',
            weight: 1.8,
            section: sections[4]._id
        },
        {
            name: 'THE YALE & TOWNE MFG CO Padlock Lock Antique With Key USA',
            size: '4x4x4',
            weight: 0.8,
            section: sections[4]._id
        },
        {
            name: 'Funko Shop Exclusive Cereal CAPTAIN CAVEMAN Pocket Pop New in Sealed Box',
            size: '11x8x3',
            weight: 1.0,
            section: sections[4]._id
        },
        {
            name: 'SQUISHMALLOW Nightmare Before Christmas Large 12-14" Set of 8 New with Tags',
            size: '25x18x14',
            weight: 7.3,
            section: sections[8]._id
        },
        {
            name: 'Nightmare Before Christmas Walmart Lot JACK STOCKING DECORATED TREE JACK MUG',
            size: '14x11x5',
            weight: 3.1,
            section: sections[8]._id
        },
        {
            name: 'Dr. Seuss THE GRINCH CAR BUDDY Airblown Inflatable 3.5ft Gemmy Walmart Exclusive',
            size: '11x7x5',
            weight: 2.2,
            section: sections[8]._id
        },
        {
            name: 'Nightmare Before Christmas Squishmallows 14" JACK SKELLINGTON SALLY ZERO OOGIE',
            size: '19x14x9',
            weight: 4.9,
            section: sections[8]._id
        },
        {
            name: 'Gemmy Airblown Inflatable 101 Dalmatians 5ft MALEFICENT Lights Up LED New',
            size: '15x13x8',
            weight: 4.3,
            section: sections[8]._id
        },
        {
            name: 'Dr. Seuss THE GRINCH Lot DECORATED TREE JACK IN THE BOX 6pc COLLECTIBLE FIGURES',
            size: '19x14x7',
            weight: 3.8,
            section: sections[8]._id
        },
        {
            name: 'MICHAEL MYERS PENNYWISE CHUCKY GRADY TWINS Speaking Waddler Halloween Plush NWT',
            size: '15x13x8',
            weight: 3.8,
            section: sections[8]._id
        },
        {
            name: 'The Shining THE GRADY TWINS Animated Plush Spooky Creepy Phrases New with Tags',
            size: '15x11x6',
            weight: 1.9,
            section: sections[8]._id
        },
        {
            name: 'Squishmallows Flip A Mallows Devil DANTE / TALLY Cat 12" Stuffed Plush NWT',
            size: '15x12x10',
            weight: 3.3,
            section: sections[12]._id
        },
        {
            name: 'Disney Traditions Jim Shore OLD ST. MICK 17" Christmas Mickey Mouse Costco NIB',
            size: '20x14x12',
            weight: 9.8,
            section: sections[12]._id
        },
        {
            name: 'Disney Hocus Pocus WINIFRED SANDERSON w/ Book Door Greeter Plush Walmart NWT',
            size: '24x17x9',
            weight: 3.8,
            section: sections[12]._id
        },
        {
            name: "Star Wars GALACTIC SNAKIN' GROGU The Child 9.25-Inch-Tall Animatronic Toy New",
            size: '14x13x6',
            weight: 2.7,
            section: sections[12]._id
        },
        {
            name: 'Funko Pocket POP! BEWARE 13 DAY SPOOKY COUNTDOWN New SEALED Calendar',
            size: '15x11x5',
            weight: 1.8,
            section: sections[12]._id
        },
        {
            name: 'Loungefly WINNIE THE POOH Bee Bundle w/ Funko Box Lunch #1034 and Enamel Pin NEW',
            size: '16x11x9',
            weight: 3.1,
            section: sections[1]._id
        },
        {
            name: 'ROBLOX Classics Series 6 Action Figures 23pcs 12 Virtual Codes Target Exclusive',
            size: '15x13x6',
            weight: 0.4,
            section: sections[1]._id
        },
        {
            name: 'Walgreens Nightmare Before Christmas Posable Doll Plush SALLY OOGIE PUMPKIN KING',
            size: '14x11x7',
            weight: 2.0,
            section: sections[1]._id
        },
        {
            name: 'Vintage Thanksgiving Duck Set of 3 Carved Wood TII Collection Figurines',
            size: '13x10x4',
            weight: 2.2,
            section: sections[1]._id
        },
        {
            name: 'Gemmy 4FT Wide Airblown Inflatable Disney Blinking Hanging MICKEY MOUSE SPIDER',
            size: '10x8x6',
            weight: 1.6,
            section: sections[1]._id
        },
        {
            name: 'Funko Pop! Enamel Pin Set of 5 HARRY POTTER HERMIONE RON DUMBLEDORE HEDWIG',
            size: '11x8x7',
            weight: 1.6,
            section: sections[1]._id
        },
        {
            name: 'Gemmy Airblown Inflatable 101 Dalmatians 5ft CRUELLA DE VIL LED New',
            size: '14x10x7',
            weight: 4.4,
            section: sections[1]._id
        },
        {
            name: 'Disney Airblown Gemmy Inflatable Nightmare Before Christmas 4.5ft ZERO LED NIB',
            size: '12x10x7',
            weight: 4.0,
            section: sections[1]._id
        },
        {
            name: 'FRIDAY 13TH JASON VOORHEES LED ROTATING SHADOW PROJECTION LIGHT TABLETOP GEMMY',
            size: '12x9x9',
            weight: 1.5,
            section: sections[1]._id
        },
        {
            name: 'Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON and SALLY',
            size: '12x10x9',
            weight: 7.0,
            section: sections[1]._id
        },
        {
            name: 'Gemmy Airblown Inflatable Nightmare Before Christmas 3.5ft Sally W/ Pumpkin LED',
            size: '10x9x9',
            weight: 3.8,
            section: sections[1]._id
        },
        {
            name: 'Disney Nightmare Before Christmas THE MASTER OF FRIGHT Jack Picture 3D 10x8"',
            size: '13x10x6',
            weight: 1.5,
            section: sections[1]._id
        },
        {
            name: 'Airblown Gemmy Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON NIB',
            size: '11x10x7',
            weight: 3.7,
            description: 'welcome to halloween town',
            section: sections[1]._id
        },
        {
            name: 'Nickelodeon PAW Patrol CHASE 4.5 Ft. Gemmy Airblown Lighted Inflatable Walmart',
            size: '11x7x9',
            weight: 3.8,
            section: sections[1]._id
        },
        {
            name: 'Funko Nightmare Before Christmas JACK SKELLINGTON 18" Backpack New with Tags',
            section: sections[1]._id
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON One-Piece Hood PJs Pajamas XL 16/18',
            section: sections[1]._id
        },
        {
            name: 'DKNY Rainbow Pride Drawstring Backpack Bag Embossed New With Tags',
            section: sections[1]._id
        },
        {
            name: 'Liberation Theology and Sexuality by Marcella Althaus-Reid (Hardcover) Routledge',
            section: sections[1]._id
        },
        {
            name: 'RARE! Disneyana Nightmare Before Christmas Cookie Jar 12" Limited Edition of 350',
            size: '16x14x14',
            weight: 10.6,
            section: sections[5]._id
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON AND ZERO Ghost Pillow Pets Plush NWT',
            size: '17x12x13',
            weight: 3.4,
            section: sections[5]._id
        },
        {
            name: 'Funko POP! Rocks BTS DYNAMITE 7 Pack Walmart Exclusive New',
            size: '30x7x7',
            weight: 2.9,
            section: sections[5]._id
        },
        {
            name: 'Funko POP! Alice in Wonderland CHESHIRE CAT 10" #1066 Walmart Exclusive',
            size: '16x11x9',
            weight: 2.6,
            section: sections[5]._id
        },
        {
            name: "Disney THE NIGHTMARE BEFORE CHRISTMAS Gemmy Airblown Inflatable 5' PUMPKIN KING",
            size: '14x10x7',
            weight: 4.0,
            section: sections[5]._id
        },
        {
            name: 'Jazwares FORTNITE POLAR LEGENDS 13 Pcs Target Exclusive 4” Figures Battle Royale',
            size: '11x10x7',
            weight: 1.1,
            section: sections[5]._id
        },
        {
            name: 'Funko POP! Game of Thrones THE CREATORS New York Comic Con Official Sticker 2018',
            size: '11x8x6',
            weight: 1.0,
            section: sections[5]._id
        },
        {
            name: 'Ravensburger Disney JUNGLE CRUISE ADVENTURE Game Amazon Exclusive New SEALED',
            size: '13x11x4',
            weight: 3.0,
            section: sections[5]._id
        },
        {
            name: 'Funko Pop! Loungefly Disney MICKEY MOUSE Pin Trader Cosplay Mini Backpack NWT',
            size: '13x9x9',
            weight: 2.3,
            section: sections[5]._id
        },
        {
            name: 'Nightmare Before Christmas SALLY WITH PRESENT 5 Ft. Airblown Lighted Inflatable',
            size: '11x9x7',
            weight: 3.8,
            section: sections[5]._id
        },
        {
            name: 'Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON LED New',
            size: '10x9x7',
            weight: 3.6,
            description: 'sitting on pumpkin',
            section: sections[5]._id
        },
        {
            name: 'Nightmare Before Christmas SANTA JACK SKELLINGTON 5 Ft. Lighted Inflatable',
            size: '11x10x7',
            weight: 3.7,
            section: sections[5]._id
        },
        {
            name: 'Vintage Camel Cigarette Wooden Jewelry Type Box Thomas Museum Series With COA',
            size: '14x9x7',
            weight: 5.8,
            section: sections[5]._id
        },
        {
            name: 'Funko Pop! Disney Archives MINNIE MOUSE 5 Pack Amazon Exclusive New Sealed Box',
            size: '18x7x4',
            weight: 1.8,
            section: sections[5]._id
        },
        {
            name: 'Kolkata Calcutta : Some Kind of Beauty by Fionn Reilly (2017, Hardcover) Sealed',
            section: sections[5]._id
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll Set of 4 NWT',
            size: '24x17x9',
            weight: 5.8,
            section: sections[9]._id
        },
        {
            name: 'Dr. Seuss THE GRINCH 5.5 Ft. Gemmy Airblown LED Lighted Inflatable Walmart',
            size: '10x8x9',
            weight: 4.1,
            description: 'wreath',
            section: sections[9]._id
        },
        {
            name: 'HOCUS POCUS LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW',
            size: '10x9x9',
            weight: 1.5,
            section: sections[9]._id
        },
        {
            name: 'Spectra S2 Plus Double Electric Breast Pump - Pink Ultra Quiet New in Open Box',
            size: '13x9x11',
            weight: 5.0,
            section: sections[9]._id
        },
        {
            name: 'SCOOBY-DOO Christmas Stocking 4.5 Ft. Gemmy Airblown Lighted Inflatable Walmart',
            size: '11x10x7',
            weight: 4.2,
            section: sections[9]._id
        },
        {
            name: 'Funko Pop! Marvel Art Series Captain America Set #32, 33, 34, 35, 36 Sz L Target',
            size: '12x12x9',
            weight: 4.8,
            section: sections[9]._id
        },
        {
            name: 'LOUNGEFLY DUMBO 80TH ANNIVERSARY COSPLAY MINI BACKPACK NWT FREE SHIPPING',
            size: '11x10x9',
            weight: 2.6,
            section: sections[9]._id
        },
        {
            name: 'Disney 14" MICKEY MOUSE Squishmallows Plush Stuffed Kelly Toys New with Tags',
            size: '15x11x12',
            weight: 2.6,
            section: sections[9]._id
        },
        {
            name: 'CHI-Volumizer 4-in-1 Blowout Brush Nozzle Paddle Brush Diffuser and Round Brush',
            size: '15x10x5',
            weight: 2.5,
            section: sections[9]._id
        },
        {
            name: 'Funko Pop! Disney 10" MICKEY MOUSE #457 Black and White Target Exclusive 90 Year',
            size: '15x11x12',
            weight: 3.0,
            section: sections[9]._id
        },
        {
            name: 'Principles of Radiographic Imaging : An Art and a Science 6th Edition New',
            size: '13x10x3',
            weight: 4.5,
            section: sections[9]._id
        },
        {
            name: 'WOLVERINE F2D Saturn Digital Film & Slide Scanner Converts Film Negatives Slides',
            size: '13x10x6',
            weight: 2.8,
            section: sections[9]._id
        },
        {
            name: 'SLIMER Ghost Busters Airblown Gemmy Self Inflatable 5ft LED Lighted NIB',
            size: '14x10x6',
            weight: 4.1,
            section: sections[9]._id
        },
        {
            name: 'Disney Airblown Gemmy Inflatable Nightmare Before Christmas 5.5ft SHOCK LED NIB',
            size: '14x10x6',
            weight: 4.2,
            section: sections[9]._id
        },
        {
            name: 'Nightmare Before Christmas Jack Skellington & Sally NOW & FOREVER Backpack NWT',
            section: sections[9]._id
        },
        {
            name: 'Wow Wee Buttheads Fart Launcher 3000 IN HAND Sent Out Same Day Shipping NIB',
            size: '18x10x10',
            weight: 4.0,
            section: sections[13]._id
        },
        {
            name: 'Squishmallows Kellytoys Disney STAR WARS 5" R2-D2 The Child and BB-8 Set NWT',
            size: '9x7x6',
            weight: 0.6,
            section: sections[13]._id
        },
        {
            name: 'Squishmallows Kellytoy Disney 5" MIKE & SULLEY Plush Stuffed Monsters Inc. NWT',
            size: '7x5x6',
            weight: 0.4 ,
            section: sections[13]._id
        },
        {
            name: 'Squishmallows Kellytoy Disney 10" MIKE & SULLEY Plush Stuffed Monsters Inc. NWT',
            size: '14x11x7',
            weight: 1.8,
            section: sections[13]._id
        },
        {
            name: 'HARRY POTTER: A Pop-Up Guide to Hogwarts Matthew Reinhart Hardcover NEW Sealed',
            size: '13x11x7',
            weight: 3.3,
            section: sections[13]._id
        },
        {
            name: 'N S GUSTIN Mouse Eating Cookie Jar VINTAGE 1970\'s 11" Tall EUC',
            size: '9x9x14',
            weight: 5.3,
            section: sections[13]._id
        },
        {
            name: 'Squishmallows Kellytoy Disney GOOFY AND PLUTO 10" Plush Stuffed Animal NWT',
            size: '13x9x7',
            weight: 1.8,
            section: sections[13]._id
        },
        {
            name: 'Franklin Uniform Set 5pc NCAA Collegiate Football Mississippi State Bulldogs YM',
            size: '12x10x12',
            weight: 3.2,
            section: sections[13]._id
        },
        {
            name: 'Hotel Style FULL 1200 Thread Count Limited Ed 6 Piece Sheet Set Gray Pumice New',
            size: '11x7x9',
            weight: 5.1,
            section: sections[13]._id
        },
        {
            name: 'Vintage Handpainted Delft Blue Duck Figurine 9" x 11"',
            size: '11x9x6',
            weight: 2.3,
            section: sections[13]._id
        },
        {
            name: 'Black Ceramic Cat Fish Bowl Holder Vandor Pelzman Made In Japan With Sticker',
            size: '9x9x5',
            weight: 1.3,
            section: sections[13]._id
        },
        {
            name: 'Disney Frozen OLAF Squishmallow 10" KellyToy New With Tags',
            size: '11x10x7',
            weight: 1.2,
            section: sections[13]._id
        },
        {
            name: 'Nightmare Before Christmas Animated Plush OOGIE BOOGIE W/ LIGHTS 12" Walgreens',
            size: '12x10x11',
            weight: 1.9,
            section: sections[13]._id
        },
        {
            name: 'Funko POP! Marvel PROFESSOR HULK #705 6" PX Previews Exclusive',
            size: '8x9x9',
            weight: 1.3,
            section: sections[13]._id
        },
        {
            name: 'Funko Disneyland 65th Minnie Mouse #06 Mickey Mouse #03 Casey Jr. Circus Train',
            size: '10x8x7',
            weight: 1.3,
            section: sections[13]._id
        },
        {
            name: 'Disney MICKEY MOUSE 90TH ANNIVERSARY Set of 4 Plush Mickeys 9” Figures NWT',
            size: '11x7x6',
            weight: 0.8,
            section: sections[13]._id
        },
        {
            name: 'MICKEY MOUSE 90th Anniversary Target Exclusive Poseable Figures Full Set NWT',
            size: '8x8x7',
            weight: 1.2,
            section: sections[13]._id
        },
        {
            name: 'Vintage 3D Tin Metal High Relief Set of 2 Framed Asian Themed Wall Art',
            size: '14x9x7',
            weight: 3.1,
            section: sections[10]._id
        },
        {
            name: 'The Nightmare Before Christmas Pet Toys Gift Set JACK SKELLINGTON OOGIE BOOGIE',
            size: '11x9x6',
            weight: 1.7,
            section: sections[10]._id
        },
        {
            name: 'Penco Black Metal Candle Holder and Votive Cat Playing the Violin',
            size: '9x7x6',
            weight: 1.0,
            section: sections[10]._id
        },
        {
            name: 'Funko POP! Deluxe: Dug Days #1098 DUG WITH PUPPIES Target Exclusive New',
            size: '10x9x7',
            weight: 1.4,
            section: sections[10]._id
        },
        {
            name: 'Vintage N S Gustin Mouse Mice SHAKER Ceramic - Two 5 1/2" Tall & One 4 1/4" Tall',
            size: '12x7x7',
            weight: 2.4,
            section: sections[10]._id
        },
        {
            name: 'COFRA 00040-CU4 Thermic Insulated Met Guard Composite Toe Boot Orange 10.5',
            size: '21x14x6',
            weight: 6.3,
            section: sections[14]._id
        },
        {
            name: 'Marvel Studios Spider-Man Homecoming Multi Movie Collection Missing One Figure',
            size: '20x14x6',
            weight: 2.7,
            section: sections[14]._id
        },
        {
            name: 'Mickey Mouse 90th Anniversary 10-Piece Collectible Figure Set BRAND NEW',
            size: '16x14x6',
            weight: 2.1,
            section: sections[14]._id
        },
        {
            name: 'Blue Mountain Pottery Green Black Glazed Sitting Thinking Frog 7" EUC',
            size: '12x9x7',
            weight: 2.7,
            section: sections[14]._id
        },
        {
            name: 'Nightmare Before Christmas Squishmallows 14" JACK SKELLINGTON SALLY ZERO OOGIE',
            size: '18x12x13',
            weight: 5.2,
            section: sections[14]._id
        },
        {
            name: 'Gemmy Airblown Inflatable Dr. Seuss THE GRINCH Christmas 11 Ft LED Heart New',
            size: '18x14x12',
            weight: 9.2,
            section: sections[15]._id
        },
        {
            name: 'Disney Nightmare Before Christmas Hanging JACK SALLY LOCK SHOCK BARREL Light Up',
            size: '23x16x11',
            weight: 7.4,
            section: sections[15]._id
        },
        {
            name: 'Walgreens NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll JACK SKELLINGTON New',
            size: '12x7x9',
            weight: 1.4,
            description: 'regular jack',
            section: sections[15]._id
        },
        {
            name: 'The Nightmare Before Christmas Tree Topper JACK SKELLINGTON 12" Tree Hugger NWT',
            size: '18x13x7',
            weight: 1.7,
            section: sections[15]._id
        },
        {
            name: 'Disney Nightmare Before Christmas Slow Cooker Crock Pot Jack Skellington NBC-73',
            size: '15x10x15',
            weight: 15.6,
            stock: 2,
            section: sections[16]._id
        },
        {
            name: 'Funko Pop! Movies IT EDDIE KASPBRAK # 541 Broken Arm and Inhaler New in Box',
            size: '7x5x4',
            weight: 0.4,
            section: sections[3]._id
        },
        {
            name: 'Funko POP! TV Parks and Recreation LESLIE & RON LOCKED IN Target Exclusive 2 Pk',
            size: '9x7x6',
            weight: 0.9,
            section: sections[3]._id
        },
        {
            name: 'Funko Marvel Venom CARNAGE #371 2018 Fall Convention Exclusive NIB',
            size: '8x7x5',
            weight: 0.7,
            section: sections[3]._id
        },
        {
            name: 'Funko Pop! Movies: THE LOST BOYS - FROG BROTHERS 2-pack FUNKO SHOP EXCLUSIVE NIB',
            size: '10x8x6',
            weight: 0.9,
            section: sections[3]._id
        },
        {
            name: 'Funko POP! ASIA Water Margin WU SONG #127 2021 Summer Convention Exclusive',
            size: '7x5x4',
            weight: 0.5,
            section: sections[3]._id
        },
        {
            name: "Funko POP! It's A Small World MEXICO #1076 2021 Shared Exclusive Limited Edition",
            size: '7x5x4',
            weight: 0.5,
            section: sections[3]._id
        },
        {
            name: 'Funko A Day With Pikachu SPLASHING AWAY SUMMER Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.7,
            section: sections[3]._id
        },
        {
            name: 'Funko Pokemon Holiday PIKACHU Pokemon Exclusive NIB',
            size: '9x7x6',
            weight: 0.6,
            section: sections[3]._id
        },
        {
            name: 'Funko A Day With Pikachu SPARKING UP A CELEBRATION Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.6,
            section: sections[3]._id
        },
        {
            name: 'Funko DORBZ Nickelodeon Rugrats TOMMY 478 CHUCKIE 479 ANGELICA 480 4000 Pieces',
            size: '11x7x6',
            weight: 1.2,
            section: sections[3]._id
        },
        {
            name: 'SDCC 2020 PX Previews Exclusive Funko #336 Comic Moments RED HOOD vs DEATHSTROKE',
            size: '10x8x7',
            weight: 1.7,
            section: sections[3]._id
        },
        {
            name: 'Funko Mystery Minis GRINDYLOW - Harry Potter Series 2 - 1/36 Rarity',
            size: '8x9x5',
            weight: 0.4,
            section: sections[3]._id
        },
        {
            name: 'Funko POP! Marvel VENOM Poison Captain America #856 Pop In A Box Exclusive',
            size: '8x7x5',
            weight: 0.5,
            section: sections[3]._id
        },
        {
            name: 'Funko Pop! Universal Studios Monsters THE WOLF MAN Walgreens Exclusive 1153 MINT',
            size: '7x5x4',
            weight: 0.4,
            section: sections[3]._id
        },
        {
            name: 'Funko Pop! Monsters THE WOLF MAN & BRIDE OF FRANKENSTEIN Walgreens Exclusive',
            size: '7x5x4',
            weight: 0.4,
            section: sections[3]._id
        },
        {
            name: 'Hallmark Christmas Ornament Disney Villains CRUELLA DE VIL 101 Dalmatians New',
            size: '7x5x4',
            weight: 0.4,
            section: sections[3]._id
        },
        {
            name: 'Hallmark Christmas Ornaments Nightmare Before Christmas JACK SKELLINGTON 2021',
            size: '5x4x3',
            weight: 0.2,
            section: sections[3]._id
        },
        {
            name: '2021 Hallmark Funko Pop! Friends MONICA PHOEBE RACHEL 3 Ornament Lot Walmart New',
            size: '10x7x6',
            weight: 1.3,
            section: sections[7]._id
        },
        {
            name: 'Funko Star Wars REY (JAKKU) 451 & IMPERIAL SUPER COMMANDO 452 2021 Shared Exc',
            size: '10x8x5',
            weight: 1.2,
            section: sections[7]._id
        },
        {
            name: 'Funko POP! JIMI HENDRIX Black Light #239 Funko Shop ECCC NYCC',
            size: '8x7x5',
            weight: 0.5,
            section: sections[7]._id
        },
        {
            name: 'Funko Pop Retro Toys Mystifying Oracle OUIJA PLANCHETTE #102 - BAM! Exclusive',
            size: '7x5x4',
            weight: 0.4,
            section: sections[7]._id
        },
        {
            name: 'Funko A Day With Pikachu SWEET DAYS ARE HERE Pokemon Center Exclusive NIB',
            size: '9x6x5',
            weight: 0.5,
            section: sections[7]._id
        },
        {
            name: 'Funko POP! Heroes I AM WONDER WOMAN #242 2018 Fall Convention Exclusive LE NIB',
            size: '7x5x4',
            weight: 0.4,
            section: sections[7]._id
        },
        {
            name: "Funko Spastik Plastik Sike O'Shriner Teal # 05 Funko Shop Exclusive FREE SHIP",
            size: '7x5x4',
            weight: 0.5,
            section: sections[7]._id
        },
        {
            name: 'Funko VYNL Gremlins GIZMO + GREMLIN 2018 Fall Convention Shared Exclusive MINT',
            size: '10x7x6',
            weight: 0.8,
            section: sections[7]._id
        },
        {
            name: 'Funko Pop! Monsters THE WOLF MAN & BRIDE OF FRANKENSTEIN Walgreens Exclusive',
            size: '9x6x8',
            weight: 0.9,
            section: sections[7]._id
        },
        {
            name: 'Fluffballs My Little Pony FLUTTERSHY, TWILIGHT SPARKLE, PINKIE PIE, RAINBOW DASH',
            size: '8x5x7',
            weight: 0.8,
            section: sections[7]._id
        },
        {
            name: 'Vynl Hanna Barbera HUCKLEBERRY HOUND + SNAGGLEPUSS 2018 Fall Convention 3000 PCS',
            size: '11x8x5',
            weight: 1.1,
            section: sections[7]._id
        },
        {
            name: 'SALLY JACK OOGIE BOOGIE Nightmare Before Christmas MUG SET WALGREENS EXCLUSIVE',
            size: '10x10x7',
            weight: 2.6,
            section: sections[7]._id
        },
        {
            name: 'Funko POP! Stranger Things Lot ELEVEN #637 and #16, DUSTIN #18 And BOB #639',
            size: '10x8x9',
            weight: 1.8,
            section: sections[7]._id
        },
        {
            name: 'The Suicide Squad Figural Bag Clip BLOODSPORT HARLEY QUINN PEACEMAKER New',
            size: '8x7x2',
            weight: 0.6,
            section: sections[7]._id
        },
        {
            name: 'Funko Pop! Asia - Kung Fu Freddy Funko & Wu Song 2021 Summer Convention Unopened',
            size: '11x9x7',
            weight: 1.6,
            section: sections[11]._id
        },
        {
            name: 'Vynl QUISP + QUAKE Funko 2019 Summer Convention Limited Edition',
            size: '9x7x4',
            weight: 0.9,
            section: sections[11]._id
            
        },
        {
            name: 'Jack Skellington LED Wave Motion Nightmare Before Christmas Projector Halloween',
            size: '9x6x6',
            weight: 1.5,
            section: sections[11]._id
        },
        {
            name: 'Hallmark Christmas Ornaments Peanuts CHARLIE BROWN with Tree 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: sections[11]._id
        },
        {
            name: 'Hallmark Christmas Ornament Dr. Seuss THE GRINCH with Present 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: sections[11]._id
        },
        {
            name: 'Hallmark Christmas Ornaments A Christmas Story LEG LAMP 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: sections[11]._id
        },
        {
            name: 'Hallmark Ornament Funko Pop! HARRY POTTER LORD VOLDEMORT w SNAKE Walmart New',
            size: '7x5x4',
            weight: 0.5,
            section: sections[11]._id
        },
        {
            name: 'Hallmark Ornaments Small Stars Nightmare Before Christmas JACK & SALLY Plush NWT',
            size: '7x5x4',
            weight: 0.4,
            section: sections[11]._id
        },
        {
            name: 'Hallmark Christmas Ornaments Pokemon PIKACHU 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: sections[11]._id
        },
        {
            name: 'Funko A Day With Pikachu ONE LUCKY DAY Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.8,
            section: sections[11]._id
        },
        {
            name: 'Funko A Day With Pikachu COMPLETELY THANK-FULL Pokemon Center Exclusive NIB',
            size: '8x6x7',
            weight: 0.8,
            section: sections[11]._id
        },
        {
            name: 'Hallmark Christmas Ornaments Disney 101 DALMATIANS & CRUELLA DE VIL 2021 New',
            size: '6x4x6',
            weight: 0.6,
            section: sections[11]._id
        },
        {
            name: 'Funko POP! Hallmark Ornaments HARRY POTTER & LORD VOLDEMORT Walmart Exc. New',
            size: '7x5x6',
            weight: 0.8,
            section: sections[11]._id
        },
        {
            name: 'Nightmare Before Christmas DEADLY NIGHT SHADE Faux Succulent Plant Ceramic 7”',
            size: '11x8x6',
            weight: 1.1,
            section: sections[11]._id
        },
        {
            name: 'Funko The Flintstones BABY PUSS #598 & HOPPY THE HOPPAROO #597 2019 SDCC LE',
            size: '13x6x4',
            weight: 0.8,
            section: sections[11]._id
        },
        {
            name: 'Funko Pop GANDALF THE WHITE Sword & Staff 1203 GITD Boxlunch Earth Day Exclusive',
            size: '7x5x4',
            weight: 0.5,
            section: sections[11]._id
        },
        {
            name: 'LOUNGEFLY Disney Star Wars BOBA FETT Mini Backpack NWT Never opened.',
            size:'12x7x10',
            weight: 2.0,
            section: 'C3'
        },
        {
            name: 'Corelle SHADOW IRIS Purple Flower Green Rim Dinner/Salad Plates Lot Of 16 EUC',
            size: '13x13x7',
            weight: 10.4,
            section: 'C3'
        },
        {
            name: 'Porcelain Lego Music Box Guitar Shaped Victorian Painted Trinket Jewelry Box',
            size: '9x6x3',
            weight: 1.0,
            section: 'C3'
        },
        {
            name: 'VINTAGE Bronze Frog Pulling Nautilus Shell Green Patina Toothpick Planter',
            size: '7x5x4',
            weight: 0.9,
            section: 'C3'
        },
        {
            name: 'Vintage Golden Brass Family of Giraffes Set 7" Tall',
            size: '8x7x3',
            weight: 1.6,
            section: 'C3'
        },
        {
            name: 'Vtg Artesania Rinconada Figurines Lot of 11 Uruguay Llama Yak Buffalo Zebra....',
            size: '10x10x5',
            weight: 5.6,
            section: 'C3'
        },
        {
            name: 'Squishmallows Disney Pride Collection 8” STITCH Lilo & Stitch Plush LGBTQ+ NWT',
            size: '8x6x6',
            weight: 0.7,
            section: 'C3'
        },
        {
            name: 'Fenton Burmese Floral Hand Painted Persian Tent Candy Box No Lid Signed',
            size: '6x5x7',
            weight: 1.6,
            section: 'C3'
        },
        {
            name: 'Vintage 1974 METZKE Pewter Votive Holder Geese',
            size: '6x5x3',
            weight: 0.6,
            section: 'C3'
        },
        {
            name: 'Vintage Double Sided Hand Drum-Made Leather Hide-Wood Gut Primitive-Tribal Tan',
            size: '7x8x3',
            weight: 0.3,
            section: 'C3'
        },
        {
            name: 'Mary Joseph Baby Jesus Holy Family On Donkey Carved Olive Wood Jerusalem 7.5"',
            size: '8x5x6',
            weight: 0.9,
            section: 'C3'
        },
        {
            name: 'Squishmallows Disney Pride Collection 8” BING BONG Elephant Inside Out LGBTQ+',
            size: '7x6x7',
            weight: 0.7,
            section: 'C3'
        },
        {
            name: 'VINTAGE Fine de Dijon Grey Poupon MUSTARD JAR Forte Au Vin Blanc Crock France',
            size: '7x5x4',
            weight: 0.6,
            section: 'C3'
        },
        {
            name: 'COCO Dowley CAT Cookie Jar 1990 Blue Scarf Certified International Corp',
            size: '15x11x12',
            weight: 4.4,
            section: 'D3'
        },
        {
            name: `Vintage 80'S Saxton Hall Quilted Long Puffer Coat 44" Tan Womans Size Small`,
            size: '20x14x7',
            weight: 3.6,
            section: 'D3'
        },
        {
            name: 'Vintage Tiffany Style Elephant Accent Night Light Lamp Blue Red EUC',
            size: '11x10x7',
            weight: 2.4,
            section: 'D3'
        },
        {
            name: 'Kellytoy Squishmallow 8” Disney Pride Collection. Mickey, Minnie, Stitch & Bing',
            size: '10x10x11',
            weight: 2.5,
            section: 'b3'
        },
        {
            name: 'Funko Soda HEAT MISER The Year Without A Santa Claus CHASE & COMMON',
            size: '6x5x7',
            weight: 1.0,
            section: 'B3'
        },
        {
            name: 'Planters Mr. Peanut 1990 Cookie Jar, Salt & Pepper Shakers, Aluminum Peanut Bowl',
            size: '12x6x6',
            weight: 1.8,
            section: 'B3'
        },
        {
            name: 'Kellytoy Squishmallow 8” Disney Pride Collection. MICKEY & MINNIE MOUSE NWT',
            size: '9x9x7',
            weight: 1.3,
            section: 'B3'
        },
        {
            name: 'Paul Sebastian PS Porcelain Floral Pendulum Quartz Mantle Clock 1994 LE',
            size: '10x6x8',
            weight: 2.2,
            section: 'B3'
        },
        {
            name: 'Funko 7 Eleven SLURPEE Exclusive BLUE RASBERRY 89 BANANA 90 & CHERRY 92 Set of 3',
            size: '12x8x7',
            weight: 1.3,
            section: 'C4'
        },
        {
            name: 'Funko Pop! Basketball Freddy #182 2021 NYCC Fall Convention LE Exclusive',
            size: '7x5x4',
            weight: 0.5,
            section: 'C4'
        },
        {
            name: 'Funko POP! Disney Pinocchio BLUE FAIRY #1027 Limited CHASE Edition',
            size: '7x5x4',
            weight: 0.5,
            section: 'C4'
        },
        {
            name: 'Funko Pop! Mickey 90 Years - GAMER MICKEY #471 Gamestop Exclusive',
            size: '7x5x4',
            weight: 0.4,
            section: 'C4'
        },
        {
            name: 'Funko POP! Heroes BATMAN with SDCC Bag #284 2019 Summer Convention Exclusive',
            size: '7x5x4',
            weight: 0.5,
            section: 'C4'
        },
        {
            name: 'Funko Pop ALIENS 1107 Ellen Ripley with Power Loader 6" Gamestop EXCLUSIVE',
            size: '10x8x6',
            weight: 1.0,
            section: 'C4'
        },
        {
            name: 'Hasbro HeroQuest Board Game World of Magic 2021 New Sealed',
            size: '20x14x6',
            weight: 8.0,
            section: 'B3'
        },
        {
            name: 'Star Wars Vintage Collection CLONE WARS VC214 Barriss VC215 Luminara VC216 Droid',
            size: '12x9x5',
            weight: 0.7,
            section: 'B3',
            description: 'kenner'
        },
        {
            name: 'SWINGLINE Heavy Duty Stapler, 160 Sheet High Capacity Black/Gray (39005)',
            size: '16x10x6',
            weight: 3.8,
            section: 'B3'
        },
        {
            name: 'DORITOS ROULETTE Nacho Cheese and Cool Ranch MAYBE HOT MAYBE NOT! 3oz 2 Pack',
            size: '8x7x6',
            weight: 0.6,
            section: 'B3'
        },
        {
            name: 'Vintage Latin Aztec Mayan Warrior Tribal Rug Wall Tapestry Hand Woven 52" x 24"',
            size: '12x9x5',
            weight: 1.8,
            section: 'B3'
        },
        {
            name: 'STAR WARS VINTAGE COLLECTION ROTJ 50th VC198 LUKE SKYWALKER ENDOR 3.75" FIGURE',
            size: '11x8x3',
            weight: 0.4,
            section: 'B3'
        },
        {
            name: '1960s Couroc of Monterey DANCING FROGS Platter Tray Barware Midcentury 15"x10"',
            section: 'B3'
        },
        // {
        //     name: '',
        //     size: '',
        //     weight: ,
        //     section: ''
        // },
        // {
        //     name: '',
        //     size: '',
        //     weight: ,
        //     section: ''
        // }
    ]);

    console.log('items seeded');

    items.forEach(async item => {
        await Section.findByIdAndUpdate(
            item.section,
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