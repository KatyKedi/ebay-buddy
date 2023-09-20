const items = [
  {
    name: 'THE YALE & TOWNE MFG CO Padlock Lock Antique With Key USA',
    size: '4x4x4',
    weight: 0.8,
    section: '1A'
  },
  {
    name: 'Hallmark Christmas Ornaments HARRY POTTER HOGWARTS EXPRESS BOOKS & WAND 2021 New',
    size: '9x6x5',
    weight: 0.9,
    section: '1A'
  },
  {
    name: `Hallmark Funko Pop! STAR WARS C-3PO & R2-D2 Ornaments Walmart Exclusive NEW`,
    weight: 0.6,
    size: '8x7x4',
    section: '1A'
  },
  {
    name: `Disney Nightmare Before Christmas THE MASTER OF FRIGHT Jack Picture 3D 10x8"`,
    section: '1A'
  },
  {
    name: `POKEMON PIKACHU Beach Towel Pool Bath 28x58in 100% Cotton Lot Of 4 NW`,
    size: '14x11x7',
    weight: 3.8,
    section: '1A'
  },
  {
    name: 'Yeti Abominable Snowman Animated Monster Dances and Sings WHITE CHRISTMAS New',
    size: '9x6x6',
    weight: 1.0,
    section: '1A'
  },
  {
    name: `Loungefly Disney Nightmare Before Christmas Wallet Oogie Boogie Lock Shock NEW`,
    size: '8x7x3',
    weight: 0.4,
    section: '1A'
  },
  {
    name: 'UGG Fluff Yeah Slide Baby Slippers Size S 02/03 6-12 Months Lamb Fur New in Box',
    size: '8x7x7',
    weight: 0.7,
    section: '1A'
  },
  {
    name: `Nightmare Before Christmas Backpack Full Size Glow In The Dark Slouch Bag New`,
    size: '16x9x6',
    weight: 1.7,
    section: '1A'
  },
  {
    name: `The Grinch Who Stole Christmas Cookie Jar Canister THE GRINCH Santa Hat SEALED`,
    section: '1A',
    size: '12x10x11',
    weight: 5.4
  },
  {
    name: `D100 31 MM NEW HOSE CRIMPER DIE SET BLACK CUSTOM CRIMP`,
    section: '1A',
    weight: 3.5,
    size: '6x5x3'
  },
  {
    name: `CUSTOM CRIMP T420 19MM Series Die Set T420-19/ Green`,
    section: '1A',
    weight: 3.5,
    size: '6x5x3'
  },
  {
    name: `CUSTOM CRIMP T420 19MM Series Die Set T420-19/ Green`,
    section: '1A',
    weight: 3.5,
    size: '6x5x3'
  },
  {
    name: `The Nightmare Before Christmas OOGIE, JACK & SALLY Lighted Pumpkin Set 8"`,
    size: '16x10x12',
    weight: 1.5,
    section: '1A'
  },
  {
    name: `Hallmark Funko Jurassic World OWEN & BLUE Ornaments GOLD CHASE Walmart Exclusive`,
    section: '1A',
    weight: 0.4,
    size: '6x5x3'
  },
  {
    name: 'Hallmark The MANDALORIAN w/ THE CHILD Walgreens Star Wars Christmas Ornament',
    size: '6x6x4',
    weight: 0.5,
    section: '1A'
  },
  {
    name: 'BEETLEJUICE LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW',
    size: '10x9x9',
    weight: 1.5,
    section: '1A'
  },
  {
    name: `Country Charm 2021 Holiday Time Christmas Village MEADOW BROOK FARM Lights Up`,
    size: '14x10x8',
    weight: 3.0,
    section: '1A'
  },
  {
    name: 'The Wiggles VHS Lot 4 HOOP DEE DOO MAGICAL ADVENTURE WAKE UP JEFF TOOT TOOT EUC',
    size: '10x7x6',
    weight: 2.4,
    section: '1A'
  },
  {
    name: 'Nightmare Before Christmas Animated JACK SKELLINGTON in CHIMNEY Plush Walgreens',
    size: '10x8x9',
    weight: 1.3,
    section: '1A'
  },
  {
    name: 'Warhammer 40K Codex DRUKHARI, THOUSAND SONS & Datacards: GREY KNIGHTS New SEALED',
    size: '13x9x3',
    weight: 3.5,
    section: '1B'
  },
  {
    name: `Enesco Jim Shore Heartwood Creek Beach Santa with Pelican Figurine, 9.75-Inch`,
    size: '14x11x8',
    weight: 2.9,
    section: '1B'
  },
  {
    name: `Jim Shore For Enesco Heartwood Creek Winter Wonderland Santa Figurine, 9.75-Inch`,
    size: '14x10x7',
    weight: 2.8,
    section: '1B'
  },
  {
    name: '2022 SDCC Loungefly TUSKEN RAIDER Mini Backpack Star Wars New Sealed',
    section: '1B',
    weight: 2.9,
    size: '12x12x9'
  },
  {
    name: 'Nickelodeon Paw Patrol The Movie LIBERTY JOINS THE TEAM Target Exclusive New',
    size: '16x13x3',
    weight: 1.5,
    section: '1B'
  },
  {
    name: 'Dept 56 Nightmare Before Christmas Jack, Sally and Zero by Possible Dreams NIB',
    size: '17x14x12',
    weight: 5.4,
    section: '1B'
  },
  {
    name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll SALLY NWT',
    size: '14x11x7',
    weight: 1.6,
    section: '1B'
  },
  {
    name: `Loungefly Funko Pop! Disney JACK SKELLINGTON & ZERO GITD Backpack & Wallet`,
    size: '16x11x8',
    weight: 3.3,
    section: '1B'
  },
  {
    name: `Hyde and Eek! Boutique 20″ Lit Halloween Sisal Animated Cat RARE!`,
    size: '16x10x12',
    weight: 4.5,
    section: '1B'
  },
  {
    name: `2022 CFA Program Curriculum Level III (3) Box Set Volume 1-6 New`,
    size: '12X10X5',
    weight: 13.1,
    section: '1B'
  },
  {
    name: 'Funko Shop Exclusive Cereal CAPTAIN CAVEMAN Pocket Pop New in Sealed Box',
    size: '11x8x3',
    weight: 1.0,
    section: '1B'
  },
  {
    name: 'Roblox SERIES 4 Celebrity Collection 24 Pieces Target Exclusive NIB',
    size: '16x14x6',
    weight: 2.0,
    section: '1B'
  },
  {
    name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll OOGIE BOOGIE',
    size: '11x8x6',
    weight: 1.1,
    section: '1B'
  },
  {
    name: 'Loungefly Disney MICKEY MOUSE Sketch Lunch Bag Lunchbox Tote Hot Topic NWT',
    size: '13x9x6',
    weight: 1.3,
    section: '1B'
  },
  {
    name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll BARREL NWT',
    size: '15x10x6',
    weight: 1.6,
    section: '1B'
  },
  {
    name: `Nightmare Before Christmas DEADLY NIGHT SHADE Faux Succulent Plant Ceramic 7”`,
    size: '7x7x7',
    weight: 1.0,
    section: '1C'
  },
  {
    name: `Loungefly Disney MICKEY MOUSE FRANKENSTEIN Mini Backpack EE Exclusive GITD NWT`,
    size: '14x9x6',
    weight: 2.1,
    section: '1C'
  },
  {
    name: `Roces PARADISE LAMA White Ice Skates #450635-1 Size 6 Mens 8 Womans New`,
    size: '17x3x4',
    weight: 4.6,
    section: '1C'
  },
  {
    name: 'Dr. Seuss THE GRINCH CAR BUDDY Airblown Inflatable 3.5ft Gemmy Walmart Exclusive',
    size: '11x7x5',
    weight: 2.2,
    section: '1C'
  },
  {
    name: 'Dr. Seuss THE GRINCH Lot DECORATED TREE JACK IN THE BOX 6pc COLLECTIBLE FIGURES',
    size: '19x14x7',
    weight: 3.8,
    section: '1C'
  },
  {
    name: `HYDE & EEK! Boutique Orange LED Black Wire Drape Garland Halloween Set Of 3 NIB`,
    size: '14x10x7',
    weight: 2.8,
    section: '1C'
  },
  {
    name: `NBC Loungefly LOCK, SHOCK & BARREL Oogie Boogie Backpack & Wallet NEW`,
    size: '12x10x10',
    weight: 2.4,
    section: '1C'
  },
  {
    name: `Ghostbusters Ghost Trap Child Costume Accessory Disguise Halloween New with Tags`,
    size: '16x9x6',
    weight: 1.6,
    section: '1C'
  },
  {
    name: 'Nightmare Before Christmas Walmart Lot JACK STOCKING DECORATED TREE JACK MUG',
    size: '14x11x5',
    weight: 3.1,
    section: '1C'
  },
  {
    name: `Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON LED New`,
    size: '12x7x9',
    weight: 3.7,
    section: '1C',
    description: 'jack on pumpkin'
  },
  {
    name: `AIRCAT Pneumatic Impact Wrench 1450 1/2" 800Ft Torque`,
    weight: 6.9,
    size: '11x8x6',
    section: '1C'
  },
  {
    name: `Funko Vynl QUISP + QUAKE Vinyl Figures 2019 Summer Convention Limited Edition`,
    size: '9x7x4',
    weight: 0.9,
    section: '1C'
  },
  {
    name: `Loungefly Disney MICKEY PUMPKIN MICK O LANTERN Backpack & Wallet GITD`,
    size: '11x9x12',
    weight: 2.7,
    section: '1C'
  },
  {
    name: 'Disney Traditions Jim Shore OLD ST. MICK 17" Christmas Mickey Mouse Costco NIB',
    size: '20x14x12',
    weight: 9.8,
    section: 'X'
  },
  {
    name: `SANTA JACK SKELLINGTON Lighted 14 Inch Blow Mold Nightmare Before Christmas 2022`,
    size: '13x13x7',
    weight: 1.7,
    section: '1D'
  },
  {
    name: `Holiday Time GNOME & PENGUIN Hand Painted Christmas Cookie Jar Set NIB`,
    size: '17x12x9',
    weight: 7.8,
    section: 'X'
  },
  {
    name: `Funko POP! Art Series The Nightmare Before Christmas Set of 8 #5-10 & #38-39 NEW`,
    size: '19x14x7',
    weight: 4.8,
    section: '1D'
  },
  {
    name: `The Nightmare Before Christmas Jack Skellington Holiday Express Train Set NEW`,
    size: '19x14x3',
    weight: 2.5,
    section: '1D'
  },
  {
    name: `Funko Pop! Disney Art Series Amazon Exclusive #25 #26 #28 #29 #30 #31 #37 #40`,
    size: '18x12x9',
    weight: 7.4,
    section: '1D'
  },
  {
    name: `Loungefly Mickey Mouse Jack o' Lantern Crossbody Pumpkin Bag NWT`,
    size: '13x9x4',
    weight: 2.8,
    section: '1D'
  },
  {
    name: `Dept 56 Possible Dreams Clothtique Santa & Mrs. Claus BINGE WATCHING #6008610`,
    size: '16x12x2',
    weight: 5.2,
    section: '1D'
},
{
  name: `CANINE CRECHE 7 Piece Dog Nativity Scene Set By Roman`,
  size: '12x10x7',
  weight: 2.1,
  section: '1D'
},
{
  name: `Be Jolly Dancing Singing Lighted Christmas Tree Sunglasses JINGLE BELLS New`,
  size: '12x10x7',
  weight: 1.7,
  section: '1D'
},
{
  name: `NWT Loungefly Nightmare Before Christmas Headless Jack Skellington Mini Backpack`,
  size: '12x10x8',
  weight: 2.4,
  section: '1D'
},
{
  name: `Airblown Gemmy Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON NIB`,
  size: '12x8x8',
  weight: 3.6,
  section: '1D',
  description: 'scaring sign'
},
{
  name: `LOUNGEFLY Nightmare Before Christmas OOGIE BOOGIE Wheel Backpack & Wallet NWT`,
  size: '13x8x10',
  weight: 2.9,
  section: '1D'
},
{
  name: "Star Wars GALACTIC SNAKIN' GROGU The Child 9.25-Inch-Tall Animatronic Toy New",
  size: '14x13x6',
  weight: 2.7,
  section: '1D'
},
{
  name: `HOCUS POCUS LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW`,
  size: '10x8x9',
  weight: 1.5,
  section: '1C'
},
{
  name: 'Nightmare Before Christmas JACK SKELLINGTON One-Piece Hood PJs Pajamas XL 16/18',
  section: '1C'
},
{
  name: 'DKNY Rainbow Pride Drawstring Backpack Bag Embossed New With Tags',
  section: '2A'
},
{
  name: 'Funko A Day With Pikachu SWEET DAYS ARE HERE Pokemon Center Exclusive NIB',
  size: '9x6x6',
  weight: 0.5,
  section: '2A'
},
{
  name: `Loungefly Exclusive JACK SKELLINGTON Pumpkin Crossbody Purse Glow in The Dark`,
  size: '12x9x7',
  weight: 1.4,
  section: '2A'
},
{
  name: `Star Wars Red Sith Trooper Christmas Nutcracker Kurt S Adler 10 Inch SW6201L`,
  size: '15x7x5',
  weight: 2.3,
  section: '2A'
},
{
  name: `The Nightmare Before Christmas OOGIE BOOGIE 3.5 Inflatable Gemmy Walmart`,
  section: '2A',
  weight: 3.5,
  size: '12x9x6'
},
{
  name: `Star Wars X-Wing Miniatures HOUND'S TOOTH & TIE/FO FIGHTER Expansion New SEALED`,
  section: '2A',
  size: '12x10x6',
  weight: 1.3
},
{
  name: `TUS239/282 Wireless Tablet Keyboard Case Blue`,
  section: '2A',
  size: '2x8x12',
  weight: 1.7
},
{
  name: 'Funko Pop! Disney Archives MINNIE MOUSE 5 Pack Amazon Exclusive New Sealed Box',
  size: '18x7x4',
  weight: 1.8,
  section: '2A'
},
{
  name: `Walmart Animated Singing Banjo Christmas Grandma Got Run Over By A Reindeer`,
  section: '2A',
  size: '10x8x7',
  weight: 1.5
},
{
  name: 'Airblown Gemmy Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON NIB',
  size: '11x10x7',
  weight: 3.7,
  description: 'scaring sign',
  section: '2A'
},
{
  name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
  size: '11x9x11',
  weight: 2.8,
  section: '2A'
},
{
  name: 'Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON and SALLY',
  size: '12x10x9',
  weight: 7.0,
  section: '2A'
},
{
  name: 'ROBLOX Classics Series 6 Action Figures 23pcs 12 Virtual Codes Target Exclusive',
  size: '15x13x6',
  weight: 0.4,
  section: '2A'
},
{
  name: 'Disney Nightmare Before Christmas THE MASTER OF FRIGHT Jack Picture 3D 10x8"',
  size: '13x10x6',
  weight: 1.5,
  section: '2A'
},
{
  name: 'Nickelodeon PAW Patrol CHASE 4.5 Ft. Gemmy Airblown Lighted Inflatable Walmart',
  size: '11x7x9',
  weight: 3.8,
  section: '2A'
},
{
  name: 'FRIDAY 13TH JASON VOORHEES LED ROTATING SHADOW PROJECTION LIGHT TABLETOP GEMMY',
  size: '12x9x9',
  weight: 1.5,
  section: '2A'
},
{
  name: `2022 Funko POP! Art Series Star Wars #535 DARTH VADER Target Exclusive`,
  size: '7x7x5',
  weight: 1.0,
  section: '2B'
},
{
  name: `Funko Pop! Pokémon Munchlax 10” #917 2023 Target Con Exclusive`,
  size: '16x11x12',
  weight: 3.8,
  section: '2B'
},
{
  name: `Disney The Nightmare Before Christmas 2 Pack Pillowcase Set Halloween Candy Bag`,
  section: '2B'
},
{
  name: `2022 Funko POP! Art Series Star Wars #535 DARTH VADER Target Exclusive`,
  size: '7x7x5',
  weight: 1.0,
  section: '2B'
},
{
  name: 'Walgreens NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll JACK SKELLINGTON New',
  size: '12x7x9',
  weight: 1.4,
  description: 'regular jack',
  section: '2B'
},
{
  name: `Disney The Nightmare Before Christmas Animated JACK SKELLINGTON Voice Door Bell`,
  size: '9x6x7',
  weight: 1.0,
  section: '2B'
},
{
  name: 'Funko A Day With Pikachu COMPLETELY THANK-FULL Pokemon Center Exclusive NIB',
  size: '8x6x7',
  weight: 0.8,
  section: '2B'
},
{
  name: `Loungefly Funko Pop! Disney JACK SKELLINGTON & ZERO GITD Backpack & Wallet`,
  size: '15x12x7',
  weight: 3.0,
  section: '2B'
},
{
  name: `Funko Trains Disneyland DONALD DUCK ON THE CASEY JR. CIRCUSTRAIN ATTRACTION #01`,
  section: '2B',
  size: "10x8x5",
  weight: 1.0
},
{
  name: `Funko Pop! Marvel Art Series Captain America Set #32, 33, 34, 35, 36 2XL Target`,
  section: '2B',
  size: '12x10x9',
  weight: 4.6
},
{
  name: `Star Wars The Mandalorian THE CHILD with Stocking Airblown Inflatable 4.5 FT`,
  size: '11x10x7',
  weight: 3.4,
  section: '2B'
},
{
  name: `LOUNGEFLY Disney Star Wars BOBA FETT Mini Backpack NWT Never opened.`,
  section: '2B',
  size: '11x9x10',
  weight: 2.3
},
{
  name: 'Nightmare Before Christmas JACK SKELLINGTON AND ZERO Ghost Pillow Pets Plush NWT',
  size: '17x12x13',
  weight: 3.4,
  section: '2B'
},
{
  name: 'Vintage Camel Cigarette Wooden Jewelry Type Box Thomas Museum Series With COA',
  size: '14x9x7',
  weight: 5.8,
  section: '2B'
},
{
  name: 'Funko POP! Alice in Wonderland CHESHIRE CAT 10" #1066 Walmart Exclusive',
  size: '16x11x9',
  weight: 2.6,
  section: '2B'
},
{
  name: 'Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON LED New',
  size: '10x9x7',
  weight: 3.6,
  description: 'sitting on pumpkin',
  section: '2B'
},
{
  name: 'Nightmare Before Christmas SANTA JACK SKELLINGTON 5 Ft. Lighted Inflatable',
  size: '11x10x7',
  weight: 3.7,
  section: '2B'
},
{
  name: `Jim Shore - Heartwood Creek White Woodland Sleigh Centerpiece Deer #611622 13"L`,
  size: '15x8x12',
  weight: 3.7,
  section: '2C'
},
{
  name: `Veronese St Michael Archangel Holding Sword & Shield Bronze & Gold Finish 12.75"`,
  section: '2C',
  size: '16x8x12',
  weight: 3.9
},
{
  name: `SPONGEBOB SQUAREPANTS Christmas Door Greeter In A Santa Suit Plush Walmart NEW`,
  section: '2C',
  size: '18x14x9',
  weight: 3.5
},
{
  name: `NYCC Exclusive Nightmare Before Christmas Dr. FINKELSTEIN Mini Backpack SEALED`,
  section: '2C',
  size: '12x12x8',
  weight: 2.8
},
{
  name: `Walmart Animated Western Santa Lasso Dances Sings Lil Nas X "Old Town Road" NWT`,
  section: '2C',
  size: '15x6x6',
  weight: 1.4
},
{
  name: `Hallmark Ornaments Harry Potter Lot of 6 2021 Walgreens Hat, Books, Express New`,
  section: '2C',
  size: '15x6x6',
  weight: 1.7
},
{
  name: `VAMPIRE JACK SKELLINGTON WITH PURPLE CAPE AND NIGHTSADE SALLY 12" Statues 2022`,
  size: '18x7x4',
  weight: 2.4,
  section: '2C'
},
{
  name: `Dr. Seuss The Grinch Who Stole Christmas Holiday GRINCH EXPRESS 12PC Train Set`,
  section: '2C',
  size: '16x13x4',
  weight: 2.1
},
{
  name: 'Dr. Seuss THE GRINCH 5.5 Ft. Gemmy Airblown LED Lighted Inflatable Walmart',
  size: '10x8x9',
  weight: 4.1,
  description: 'wreath',
  section: '2C'
},
{
  name: 'HOCUS POCUS LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW',
  size: '10x9x9',
  weight: 1.5,
  section: '2C'
},
{
  name: `Loungefly JACK SKELLINGTON Pumpkin Crossbody Purse & Wallet Glow in The Dark New`,
  size: '14x8x7',
  weight: 1.8,
  section: '2C'
},
{
  name: 'SCOOBY-DOO Christmas Stocking 4.5 Ft. Gemmy Airblown Lighted Inflatable Walmart',
  size: '11x10x7',
  weight: 4.2,
  section: '2C'
},
{
  name: `Dept 56 Possible Dreams Clothtique GINGERBREAD CHAIR SANTA #6010183 New`,
  section: '2C',
  size: '18x13x13',
  weight: 4.7
},
{
  name: `Funko POP! Movies Universal Monsters FRANKENSTEIN & THE BRIDE Hot Topic 2 Pack`,
  section: '2D',
  size: '9x7x4',
  weight: 0.8
},
{
  name: 'Squishmallows Kellytoy Disney 5" MIKE & SULLEY Plush Stuffed Monsters Inc. NWT',
  size: '7x5x6',
  weight: 0.4 ,
  section: '2D'
},
{
  name: 'Disney MICKEY MOUSE 90TH ANNIVERSARY Set of 4 Plush Mickeys 9” Figures NWT',
  size: '11x7x6',
  weight: 0.8,
  section: '2D'
},
{
  name: `Big Ideas Math ALGEBRA 1 Student Edition 2015 Ron Larson Laurie Boswell`,
  section: '2D'
}, 
{
  name: `NYCC Exclusive Nightmare Before Christmas Dr. FINKELSTEIN Mini Backpack SEALED`,
  size: '14x10x7',
  weight: 2.4,
  section: '2D'
},
{
  name: `NYCC Bundle Exclusive Nightmare Before Christmas Funko ZERO Pop + Mini Backpack`,
  size: '15x10x12',
  weight: 3.1,
  section: '2D'
},
{
  name: 'Hotel Style FULL 1200 Thread Count Limited Ed 6 Piece Sheet Set Gray Pumice New',
  size: '11x7x9',
  weight: 5.1,
  section: '2D'
},
{
  name: `Kurt S. Adler 16.5-Inch LED Lights Gingerbread House, Multi New-Open Box`,
  size: '19x11x11',
  weight: 6.8,
  section: '2D'
},
{
  name: 'Squishmallows Kellytoy Disney GOOFY AND PLUTO 10" Plush Stuffed Animal NWT',
  size: '13x9x7',
  weight: 1.8,
  section: '2D'
},
{
  name: `NYCC Bundle Exclusive Nightmare Before Christmas Funko ZERO Pop + Mini Backpack`,
  size: '17x12x7',
  weight: 3.2,
  section: '2D'
},
{
  name: `Loungefly Nightmare Before Christmas Gold Moon Mini Backpack Jack Skellington`,
  size: '11x8x9',
  weight: 1.9,
  section: '2D'
},
{
  name: `STRANGER THINGS Upside Down Drink Kit with Sprinkle Mix Straws Retro Beverage`,
  size: '12x8x6',
  weight: 1.4,
  section: '2D'
},
{
  name: `HUAYUWA Inmotion V11 V12 Honeycomb Pedals, V11 V12 Electric Unicycles Non-Slip`,
  section: '2D',
  weight: 3.2,
  size: '12x9x6'
},
{
  name: 'Squishmallows Kellytoy Disney 10" MIKE & SULLEY Plush Stuffed Monsters Inc. NWT',
  size: '14x11x7',
  weight: 1.8,
  section: '2D'
},
{
  name: 'Funko Disneyland 65th Minnie Mouse #06 Mickey Mouse #03 Casey Jr. Circus Train',
  size: '10x8x7',
  weight: 1.3,
  section: '2D'
},
{
  name: `The Nightmare Before Christmas Jack w/Christmas Hat & Sally 48" Jumbo Plush 4ft`,
  size: '20x14x13',
  weight: 7.0,
  section: 'X'
},
{
  name: 'Squishmallows Flip A Mallows Devil DANTE / TALLY Cat 12" Stuffed Plush NWT',
  size: '15x12x10',
  weight: 3.3,
  section: 'X'
},
{
  name: `24" Light-up Plush Golden Dog, with 35 Clear Incandescent Lights Holiday Time`,
  size: '17x13x12',
  weight: 5.3,
  section: 'X'
},
{
  name: 'SQUISHMALLOW Nightmare Before Christmas Large 12-14" Set of 8 New with Tags',
  size: '25x18x14',
  weight: 7.3,
  section: 'X'
},
{
  name: 'Funko Pop! Retro Toys Transformers UNICRON SDCC 2022 Summer Convention 10" #103',
  section: 'X',
  weight: 3.9,
  size: '20x12x10'
},
{
  name: `Nightmare Before Christmas Halloween OOGIE SALLY JACK SKELLINGTON Blow Mold Set`,
  size: '15x11x13',
  weight: 3.8,
  section: 'Z'
},
{
  name: `Nightmare Before Christmas JACK & SALLY & PUMPKIN KING Light Up Pumpkin Stack`,
  size: '17x14x11',
  weight: 2.4,
  section: 'Z'
},
{
  name: `Giant SANTA CLAUS Gemmy Christmas Airblown Inflatable Yard Decor 14FT Tall NEW`,
  size: '14x12x14',
  weight: 9.2,
  section: 'Z'
},
{
  name: 'Disney Nightmare Before Christmas Slow Cooker Crock Pot Jack Skellington NBC-73',
  size: '15x10x15',
  weight: 15.6,
  section: 'Y'
},
{
  name: `Funko Nightmare Before Christmas JACK SKELLINGTON 18" Backpack New with Tags`,
  size: '23x13x3',
  weight: 2.0,
  section: 'Y'
},
{
  name: `Funko 3 Liter Soda Villian Maleficent Dragon NYCC Shared Exclusive Common`,
  size: '13x13x6',
  weight: 2.0,
  section: 'Y'
},
{
  name: `Funko Pop! Michelangelo #1141 Jumbo 10" - Walmart - Teenage Mutant Ninja Turtles`,
  weight: 3.9,
  section: '3A',
  size: '15x12x11'
},
{
  name: 'Loungefly Nightmare Before Christmas Mini Backpack and Wallet Hot Topic NWT',
  section: '3A',
  size: '13x8x10',
  weight: 2.0
},
{
  name: `Disney Villains Maleficent Deluxe Crossbody Bag Vegan Leather NWT`,
  size: '10x8x6',
  weight: 0.9,
  section: '3A'
},
{
  name: 'MONSTERS Cereal 4 Pk FRUTE BRUTE FRANKEN BERRY BOO-BERRY COUNT CHOCULA Sealed',
  size: '11x11x11',
  weight: 4.4,
  section: '3A'
},
{
  name: 'Funko Star Wars Art DARTH VADER 515 Mustafar 516 Hoth 517 Endor 518 Bespin',
  section: '3A',
  size: '13x10x10',
  weight: 4.3
},
{
  name: `Loungefly Princess Stories MERIDA Backpack, Wallet, Mug & Pin PALM Exclusive`,
  size: '16x12x7',
  weight: 1.4,
  section: '3A'
},
{
  name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
  size: '12x12x9',
  weight: 3.1,
  section: '3B'
},
{
  name: 'SWINGLINE Heavy Duty Stapler, 160 Sheet High Capacity Black/Gray (39005)',
  size: '16x10x6',
  weight: 3.8,
  section: '3B'
},
{
  name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
  size: '14x10x7',
  weight: 2.6,
  section: '3B'
},
{
  name: `STRANGER THINGS Upside Down Drink Kit with Sprinkle Mix Straws Retro Beverage`,
  size: '12x9x6',
  weight: 1.2,
  section: '3B'
},
{
  name: `Funko Pop! Classics Toy Story LOTSO 25th Anniversary WonderCon Exclusive SEALED`,
  section: '3B',
  size: '9x6x5',
  weight: 1.5
},
{
  name: `Porcelain Lego Music Box Guitar Shaped Victorian Painted Trinket Jewelry Box`,
  section: '3B',
  size: '9x6x4',
  weight: 1.0
},
{
  name: `FURBY Tiger Electronics Gorilla Black and Brown Green Eyes 1999`,
  size: '6x6x6',
  weight: 1.0,
  section: '3B'
},
{
  name: 'Star Wars Vintage Collection CLONE WARS VC214 Barriss VC215 Luminara VC216 Droid',
  size: '12x9x5',
  weight: 0.7,
  section: '3B',
  description: 'kenner'
},
{
  name: `Funko Pop! Movies Trick ‘r Treat SAM #1036 and #1002 Spirit Halloween Exclusive`,
  size: '15x11x7',
  weight: 1.5,
  section: '3C'
},
{
  name: `Jim Shore Peanuts Snoopy Astronaut THE BEAGLE HAS LANDED 5.8" Enesco 6005948`,
  size: '10x8x8',
  weight: 1.6,
  section: '3C'
},
{
  name: 'Fenton Burmese Floral Hand Painted Persian Tent Candy Box No Lid Signed',
  size: '6x5x7',
  weight: 1.6,
  section: '3C'
},
{
  name: 'Vintage N S Gustin Mouse Mice SHAKER Ceramic - Two 5 1/2" Tall & One 4 1/4" Tall',
  size: '12x7x7',
  weight: 2.4,
  section: '3C'
},
{
  name: 'The Nightmare Before Christmas  Toys Gift Set JACK SKELLINGTON OOGIE BOOGIE',
  size: '11x9x6',
  weight: 1.7,
  section: '3C'
},
{
  name: 'VINTAGE Bronze Frog Pulling Nautilus Shell Green Patina Toothpick Planter',
  size: '7x5x4',
  weight: 0.9,
  section: '3C'
},
{
  name: 'Vintage 3D Tin Metal High Relief Set of 2 Framed Asian Themed Wall Art',
  size: '14x9x7',
  weight: 3.1,
  section: '3C'
},
{
  name: `Disney The Nightmare Before Christmas 14” ZERO Ghost Dog Squishmallow KellyToy`,
  size: '14x10x7',
  weight: 2.1,
  section: '3D'
},
{
  name: `Gemmy Halloween Disney 3.5 ft MICKEY and MINNIE MOUSE Airblown Inflatable New`,
  size: '15x11x12',
  weight: 7.3,
  section: '3D'
},
{
  name: 'COCO Dowley CAT Cookie Jar 1990 Blue Scarf Certified International Corp',
  size: '15x11x12',
  weight: 4.4,
  section: '3D'
},
{
  name: `Funko Pop! Nightmare Before Christmas 10" OOGIE BOOGIE Blacklight #810 LE`,
  size: '17x14x10',
  weight: 4.7,
  section: '3D'
},
{
  name: `Airblown Gemmy Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON NIB`,
  size: '9x8x6',
  weight: 2.9,
  section: '3D',
  description: 'scaring sign',
},
{
  name: 'Nightmare Before Christmas Squishmallows 14" JACK SKELLINGTON SALLY ZERO OOGIE',
  size: '18x12x13',
  weight: 5.2,
  section: '3D'
},
{
  name: `Dr. Seuss' Grinch Who Stole Christmas Santa 14" Light Up Blow Mold Figure NWT`,
  size: '16x9x6',
  weight: 1.4,
  section: '3D'
},
{
  name: `Funko POP! Hanna Barbera JABBERJAW #435 DUM DUM #435 BABA LOOEY #281 NYCC Shared`,
  size: '11x8x6',
  weight: 1.5,
  section: '3D'
},
{
  name: `Funko Wondercon 2023 One Piece TRAFALGAR LAW WITH POLAR TANG Shared Exclusive`,
  size: '13x11x8',
  weight: 1.9,
  section: '3D'
},
{
  name: 'Blue Mountain Pottery Green Black Glazed Sitting Thinking Frog 7" EUC',
  size: '12x9x7',
  weight: 2.7,
  section: '3D'
},
{
  name: 'Mickey Mouse 90th Anniversary 10-Piece Collectible Figure Set BRAND NEW',
  size: '16x14x6',
  weight: 2.1,
  section: '3D'
},
{
  name: `Funko POP! BASEBALL FREDDY #208 WonderCon 2023 Shared Exclusive`,
  size: '7x5x4',
  weight: 0.6,
  section: '4A'
},
{
  name: 'Funko Pop! Monsters THE WOLF MAN & BRIDE OF FRANKENSTEIN Walgreens Exclusive',
  size: '7x5x4',
  weight: 0.4,
  section: '4A'
},
{
  name: 'Funko Pop Saturday Night Live BUTABI BROTHERS 2 Pack NYCC 2018 Fall Exclusive',
  size: '9x7x4',
  weight: 0.7,
  section: '4A'
},
{
  name: `Wondershop 2021 Red Cardinals & Unicorn Musical Snowglobe Water Globe Set NEW`,
  size: '11x6x8',
  weight: 2.0,
  section: '4A'
},
{
  name: 'Hallmark Christmas Ornaments Nightmare Before Christmas JACK SKELLINGTON 2021',
  size: '5x4x3',
  weight: 0.2,
  section: '4A'
},
{
  name: `Funko Pop Universal Studios FRANKENSTEIN 1227 Blacklight Walgreens Sticker`,
  size: '7x5x4',
  weight: 0.4,
  section: '4A'
},
{
  name: 'Funko POP! Disney Pixar WALL-E 2022 Wondrous Convention Limited Edition',
  size: '7x5x4',
  weight: 0.6,
  section: '4A'
},
{
  name: `Hallmark Christmas Ornament Disney Villains CRUELLA DE VIL 101 Dalmatians New`,
  size: '7x5x4',
  weight: 0.2,
  section: '4A'
},
{
  name: `Funko 7 Eleven SLURPEE Exclusive BLUE RASBERRY 89 & CHERRY 92 Glitter Set of 2`,
  size: '8x7x5',
  weight: 1.0,
  section: '4A'
},
{
  name: 'Nightmare Before Christmas Blacklight Funko SODA Jack Sally Mayor Oogie Boogie',
  section: '4A',
  size: '10x7x6',
  weight: 2.3
},
{
  name: `Funko Vynl QUISP + QUAKE Vinyl Figures 2019 Summer Convention Limited Edition`,
  size: '9x7x4',
  weight: 1.0,
  section: '4B'
},
{
  name: `Funko POP! Star Wars Art Series Walmart Exclusive DARTH VADER #517 (Endor)`,
  section: '4B',
  size: '9x7x6',
  weight: 1.0
},
{
  name: 'Vynl Hanna Barbera HUCKLEBERRY HOUND + SNAGGLEPUSS 2018 Fall Convention 3000 PCS',
  size: '11x8x5',
  weight: 1.1,
  section: '4B'
},
{
  name: `Hallmark National Lampoons Vacation Cousin Eddie's RV Christmas Ornament NEW`,
  size: '7x5x4',
  weight: 0.5,
  section: '4B',
},
{
  name: `Hallmark Harry Potter Luggage Trolley Walmart Red Box Hedwig Ornament NEW 2022`,
  size: '7x5x4',
  weight: 0.4,
  section: '4B'
},
{
  name: `Nutcracker Glitterdome by Roman 100MM Snow Globe Plays the Nutcracker Ballet New`,
  size: '9x6x6',
  weight: 2.6,
  section: '4B'
},
{
  name: `Funko Pop Stranger Things ROBIN STEVE 7 VECNA 3-Pack Walmart Exclusive In Hand`,
  section: '4B',
  size: '11x7x6',
  weight: 1.1
},
{
  name: '2021 Hallmark Funko Pop! Friends MONICA PHOEBE RACHEL 3 Ornament Lot Walmart New',
  size: '10x7x6',
  weight: 1.3,
  section: '4B'
},
{
  name: `Funko POP! #29 HELLO KITTY (KAWAII BURGER SHOP) New`,
  section: '4C',
  size: '7x5x4',
  weight: 0.6
},
{
  name: 'Funko POP! Hallmark Ornaments HARRY POTTER & LORD VOLDEMORT Walmart Exc. New',
  size: '7x5x6',
  weight: 0.8,
  section: '4C'
},
{
  name: 'Hallmark Christmas Ornaments A Christmas Story LEG LAMP 2021 New',
  size: '7x5x4',
  weight: 0.4,
  section: '4C'
},
{
  name: `POP Artist Series: Disney Treasures from The Vault - GOOFY, Amazon Exclusive`,
  section : '4C',
  size: '7x6x4',
  weight: 1.0
},
{
  name: 'Hallmark Ornaments Small Stars Nightmare Before Christmas JACK & SALLY Plush NWT',
  size: '7x5x4',
  weight: 0.4,
  section: '4C'
},
{
  name: `Funko POP! Disney: STITCH ON THE PEOPLEMOVERr Walt Disney World 50TH Exclusive`,
  size: '7x5x4',
  weight: 0.6,
  section: '4C'
},
{
  name: 'Hallmark Christmas Ornaments Pokemon PIKACHU 2021 New',
  size: '7x5x4',
  weight: 0.4,
  section: '4C'
},
{
  name: 'Hallmark Christmas Ornaments Peanuts CHARLIE BROWN with Tree 2021 New',
  size: '7x5x4',
  weight: 0.4,
  section: '4C'
},
{
  name: `Funko POP! Movies Ghostbusters MINI PUFT With Weights #956 Limited Edition`,
  size: '7x5x4',
  weight: 0.5,
  section: '4C'
},
{
  name: 'Hallmark Christmas Ornament Dr. Seuss THE GRINCH with Present 2021 New',
  size: '7x5x4',
  weight: 0.4,
  section: '4C'
},
{
  name: `Funko POP! GAMER MICKEY #515 Gamestop Exclusive Disney 90 Years`,
  size: '7x5x4',
  weight: 0.6,
  section: '4C'
},
{
  name: 'Funko Pop! Star Wars #548 KRRSANTAN Funko 2022 SDCC Shared Summer Convention',
  section: '4C',
  size: '7x5x4',
  weight: 0.6
},
{
  name: `Funko POP! #182 BASKETBALL FREDDY 2021 Fall Convention Limited Edition`,
  size: '7x5x4',
  weight: 0.6,
  section: '4C'
},
{
  name: `The Nightmare Before Christmas Succulent Lock Shock & Barrel in Bathtub`,
  size: '7x5x4',
  weight: 0.6,
  section: '4C'
},
{
  name: `Funko Pop! Overwatch JUNKRAT #383 Dr. Junkenstein BoxLunch Exclusive`,
  size: '7x5x4',
  weight: 0.6,
  section: '4C'
},
{
  name: `Funko Pop! The Nightmare Before Christmas: Blacklight - Oogie Boogie #39`,
  size: '7x5x4',
  weight: 0.6,
  section: '4C'
},
{
  name: `Hallmark National Lampoons Vacation Cousin Eddie's RV Christmas Ornament NEW`,
  size: '7x5x4',
  weight: 0.4,
  section: '4C'
},
{
  name: `Hallmark National Lampoons Vacation Cousin Eddie's RV Christmas Ornament NEW`,
  size: '7x5x4',
  weight: 0.5,
  section: '4C'
},
{
  name: 'Funko POP! Heroes BATMAN with SDCC Bag #284 2019 Summer Convention Exclusive',
  size: '7x5x4',
  weight: 0.5,
  section: '4C'
},
{
  name: 'Funko Pop GANDALF THE WHITE Sword & Staff 1203 GITD Boxlunch Earth Day Exclusive',
  size: '7x5x4',
  weight: 0.5,
  section: '4C'
},
{
  name: `Funko Pop Universal Studios FRANKENSTEIN 1227 Blacklight Walgreens Sticker`,
  size: '7x5x4',
  weight: 0.4,
  section: '4C'
},
{
  name: `Funko POP! Disney Alice in Wonderland CHESHIRE CAT #1059 BAM Exclusive GITD`,
  size: '7x5x4',
  weight: 0.5,
  section: '4C'
},
{
  name: 'Funko POP! Marvel Avengers Endgame IRON MAN #580 PX Exclusive GITD',
  size: '7x5x4',
  weight: 0.5,
  section: '4C'
},
{
  name: `Funko Soda CHASE YZMA with Science Flask Emperor's New Groove 2022 WonderCon LE`,
  size: '8x5x4',
  weight: 0.6,
  section: '4C'
},
{
  name: `Funko Soda OOGIE BOOGIE GLOW Common Figure 1/16,700`,
  size: '5x3x3',
  weight: 0.5,
  section: '4C'
},
{
  name: `Hallmark Funko Pop! STAR WARS C-3PO & R2-D2 Ornaments CHASE Walmart Exclusive`,
  section: '4C',
  size: '6x6x6',
  weight: 0.4
},
{
  name: 'Hallmark Christmas Ornaments Disney 101 DALMATIANS & CRUELLA DE VIL 2021 New',
  size: '6x4x6',
  weight: 0.6,
  section: '4C'
},
{
  name: `Disney The Nightmare Before Christmas HARLEQUIN DEMON Plush 6"`,
  size: '10x7x5',
  weight: 0.4,
  section: '4C'
},
{
  name: `Funko Pop WWE The Rock And Mankind 2 Pack Walmart Exclusive`,
  size: '10x8x5',
  weight: 0.9,
  section: '4C'
},
{
  name: `Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON LED New`,
  size: '10x9x7',
  weight: 3.6,
  section: '4C',
  description: 'jack on pumpkin'
},
{
  name: 'Hallmark Ornament Funko Pop! HARRY POTTER LORD VOLDEMORT w SNAKE Walmart New',
  size: '7x5x4',
  weight: 0.5,
  section: '4C'
},
{
  name: `DISNEY Halloween Mini LIGHT UP Pumpkin VILLAINS SET Maleficent Ursula Cruella`,
  size: '8x6x5',
  weight: 0.5,
  section: '4C'
},
{
  name: `Funko Pop! Ornaments STARLORD & GROOT Walmart Exclusive Set Gold CHASE Hallmark`,
  section: '4C',
  size: '8x5x6',
  weight: 0.6
},
{
  name: `Roman Giftware Inc, Irish & Celtic Collection, 6.5" H Irish Dancer GLITTERDOME`,
  size: '8x7x7',
  weight: 2.9,
  section: '5'
},
{
  name: `Kurt S. Adler 15-Inch Hollywood Collections Mouse King Nutcracker HA0330`,
  size: '19x7x8',
  weight: 2.8,
  section: '5'
},
{
  name: `Disney Patriotic 4th of July MICKEY MINNIE STITCH 9" Stuffed Plush Set NWT`,
  size: '10x6x5',
  weight: 0.6,
  section: '5'
},
{
  name: 'Squishmallows Lilo & Stitch Lot of 6 Bundle 8" NWT',
  size: '11x10x7',
  weight: 2.3,
  section: '5'
},
{
  name: `Unicorn Studios WU76701AA Winter Guardians by Anne Stokes Snow Wolves & Mistress`,
  size: '11x10x7',
  weight: 3.5,
  section: '5'
},
{
  name: `McFarlane The Princess Bride PRINCESS BUTTERCUP Wedding Dress Action Figure New`,
  size: '11x8x6',
  weight: 0.9,
  section: '5'
},
{
  name: `Full Set Disney RAINBOW PRIDE Mickey Minnie Pluto Goofy Donald Daisy Plush NWT`,
  size: '10x8x8',
  weight: 1.6,
  section: '5'
},
{
  name: `Funko POP! Deadpool Lot of 11 Including 786 Nerd 776 Deadpool in Cake`,
  size: '18x10x9',
  weight: 2.8,
  section: '5'
},
{
  name: `A GOOFY MOVIE Powerline LOUNGEFLY GITD Backpack FUNKO Pop #1340 WonderCon 2023`,
  size: '14x10x9',
  weight: 3.2,
  section: '5'
},
{
  name: `Jim Shore PEANUTS Deluxe Holiday Train 8 PC Gift Set With Rare SALLY CAR`,
  size: '18x12x9',
  weight: 8.2,
  section: '5'
},
{
  name: 'Funko A Day With Pikachu SPARKING UP A CELEBRATION Pokemon Center Exclusive NIB',
  size: '8x7x6',
  weight: 0.6,
  section: '5'
},
{
  name: `Reebok Nano X2 TR Adventure Women's Training Shoes Orange/Black Size 7`,
  size: '12x8x5',
  weight: 1.6,
  section: '5'
},
{
  name: `Reebok Classic Freestyle Women's Size 8 Hi Top White Retro Sneakers Aerobics`,
  size: '12x8x5',
  weight: 1.6,
  section: '5'
},
{
  name: `Reebok Nano X2 TR Adventure Men's Training Shoes Size 8 Army Green/Black NIB`,
  size: '13x8x5',
  weight: 1.8,
  section: '5'
},
{
  name: `Skechers Womens Squad SR Work Shoes 77222/BLK Worn Once Size 7.5`,
  size: '12x9x5',
  weight: 1.6,
  section: '5'
},
{
  name: `NEW BALANCE MEN'S DYNASOFT NITREL V5 4E WIDE TRAIL RUNNING SHOES SIZE 11 NEW`,
  size: '14x9x5',
  weight: 2.0,
  section: '5'
},
{
  name:`New Balance Unisex-Adult 24 V1 Flip Flops Violet Purple Size M14/W16`,
  size: '15x8x6',
  weight: 1.3,
  section: '5'
},
{
  name: `NIKE Fury Wrestling Shoes AO2416-010 Black Men's Size 11 New In Box`,
  size: '14x9x5',
  weight: 1.8,
  section: '5'
},
{
  name: `Harley Davidson Womens Tegan Harness w/Buckle 4" Black Lace Up Boots D84424 Sz 8`,
  size: '14x10x5',
  weight: 3.1,
  section: '5'
},
{
  name: `Joseph's Studio by Roman 2PC Santa And Reindeer Stocking Holders 9.25" 37011 New`,
  size: '15x12x10',
  weight: 4.6,
  section: '5'
},
{
  name: `Disney Beauty and the Beast Belle & Beast Mini Backpack NWT`,
  size: '14x13x8',
  weight: 2.4,
  section: '5'
},
{
  name: `Funko Pop! Marvel Art Series Captain America Set #32, 33, 34, 35, 36 XL Target`,
  size: '14x10x7',
  weight: 4.6,
  section: '5'
},
{
  name: `AIRCAT 1600-TH-A1: Composite Impact Wrench 1600 ft-lbs - 1-Inch`,
  size: '15x12x6',
  weight: 10.6,
  section: '5'
},
{
  name: `Funko POP! Ad Icons McDonalds 85-89, 109-115, 138, Fry Kids Lot of 14`,
  size: '16x14x10',
  weight: 5.4,
  section: '5'
},
{
  name: `Carhartt Men's Rugged Flex 8" Waterproof Insulated Brown Composite Toe CMF8389`,
  size: '16x12x6',
  weight: 5.9,
  section: '5'
},
{
  name: `McFarlane Toys Raw 10 HOOF Brown New`,
  size: '14x11x12',
  weight: 3.4,
  section: '5'
},
{
  name: `Veronese Designs Giraffe Vase Bronze Finish Art Nouveau 17" Tall Heavy 6.5lbs`,
  size: '10x10x8',
  weight: 8.0,
  section: '5'
},
{
  name: `Loungefly Pinocchio Cuckoo Clock Backpack And Wallet WonderCon 2023 NWT`,
  size: '13x13x9',
  weight: 3.0,
  section: '5'
},
{
  name: `Dept 56 Christmas Possible Dreams SANTA THROUGH THE WOODS New 2022 6010217 LED`,
  size: '22x17x12',
  weight: 8.6,
  section: '5A'
},
]

console.log(items.length)