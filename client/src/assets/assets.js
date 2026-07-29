import logo from './logo.svg'
import theConjuringLogo from './theConjuringLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    theConjuringLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
}

export const dummyTrailers = [
    {
        _id:1121,
        image: "https://i.ytimg.com/vi/bMgfsdYoEEo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzkjXGritL5Hwn5CGtWsHbq2ItTg",
        videoUrl: 'https://youtu.be/bMgfsdYoEEo?si=XScxH4o-NN6PR9TG'
    },
    {
        _id:1122,
        image: "https://i.pinimg.com/736x/2d/1e/49/2d1e49e0aa4b7a82f9560f8aaffb5a00.jpg",
        videoUrl: 'https://youtu.be/3zOLzsbOleM?si=EsES6t-wqVv7MoYe'
    },
    {
        _id:1123,
        image: "https://i.ytimg.com/vi/ggZA2oi8S5s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB7kLhDMURB36ybQLoPThlBDFwVng",
        videoUrl: 'https://youtu.be/ggZA2oi8S5s?si=OlGjx5qsEaop_6D_'
    },
    {
        _id:1124,
        image: "https://i.ytimg.com/vi/IhgcUArO3Uo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDAmFHuhWkqASnA8Sx5e1WJag3rUg",
        videoUrl: 'https://youtu.be/IhgcUArO3Uo?si=nf4p4ooBDewbU2IR'
    },
]

export const dummyCastsData = {
  // Spider-Man: Brand New Day
  1234567: [
    { id: 101, name: "Tom Ellery", character: "Peter Parker / Spider-Man", profile_path: "https://i.pinimg.com/736x/fa/07/50/fa07506646e45a084d235691f389b01c.jpg" },
    { id: 102, name: "Maya Whitfield", character: "Ally Reyes", profile_path: "https://i.pinimg.com/1200x/76/b8/84/76b884a103dee9ae1ccf931a9be75c94.jpg" },
    { id: 103, name: "Daniel Cho", character: "The Rook", profile_path: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 104, name: "Priya Anand", character: "Aunt May", profile_path: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 105, name: "Marcus Bell", character: "Detective Hollis", profile_path: "https://randomuser.me/api/portraits/men/3.jpg" },
  ],

  // The Super Mario Galaxy Movie
  2234567: [
    { id: 201, name: "Rio Alvarez", character: "Mario (voice)", profile_path: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 202, name: "Ben Foster", character: "Luigi (voice)", profile_path: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 203, name: "Elena Marsh", character: "Princess Peach (voice)", profile_path: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 204, name: "Grant Osei", character: "Bowser (voice)", profile_path: "https://randomuser.me/api/portraits/men/6.jpg" },
    { id: 205, name: "Nadia Kim", character: "Rosalina (voice)", profile_path: "https://randomuser.me/api/portraits/women/4.jpg" },
  ],

  // Project Hail Mary
  3234567: [
    { id: 301, name: "Owen Prescott", character: "Ryland Grace", profile_path: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 302, name: "Sasha Renner", character: "Dr. Eva Stratt", profile_path: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 303, name: "Wei Chen", character: "Rocky (voice)", profile_path: "https://randomuser.me/api/portraits/men/8.jpg" },
    { id: 304, name: "Louis Marchetti", character: "Commander Yao", profile_path: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 305, name: "Grace Muthoni", character: "Dr. Lokken", profile_path: "https://randomuser.me/api/portraits/women/6.jpg" },
  ],

  // Michael
  4234567: [
    { id: 401, name: "Jordan Blake", character: "Michael", profile_path: "https://randomuser.me/api/portraits/men/10.jpg" },
    { id: 402, name: "Denise Carrow", character: "Katherine", profile_path: "https://randomuser.me/api/portraits/women/7.jpg" },
    { id: 403, name: "Victor Amaro", character: "Joseph", profile_path: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 404, name: "Simone Bailey", character: "Janet", profile_path: "https://randomuser.me/api/portraits/women/8.jpg" },
    { id: 405, name: "Elliot Marsh", character: "Manager Reeves", profile_path: "https://randomuser.me/api/portraits/men/12.jpg" },
  ],

  // The Devil Wears Prada 2
  5234567: [
    { id: 501, name: "Claire Donovan", character: "Andy Sachs", profile_path: "https://randomuser.me/api/portraits/women/9.jpg" },
    { id: 502, name: "Vivian Hart", character: "Miranda Priestly", profile_path: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 503, name: "Nate Ferris", character: "Nate", profile_path: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: 504, name: "Isabelle Roux", character: "Emily Charlton", profile_path: "https://randomuser.me/api/portraits/women/11.jpg" },
    { id: 505, name: "Theo Winslow", character: "Nigel", profile_path: "https://randomuser.me/api/portraits/men/14.jpg" },
  ],

  // The Mandalorian and Grogu
  6234567: [
    { id: 601, name: "Pedro Salinas", character: "Din Djarin", profile_path: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 602, name: "Katee Rowan", character: "Bo-Katan", profile_path: "https://randomuser.me/api/portraits/women/12.jpg" },
    { id: 603, name: "Werner Holt", character: "Moff Aldric", profile_path: "https://randomuser.me/api/portraits/men/16.jpg" },
    { id: 604, name: "Amara Diallo", character: "Captain Teva", profile_path: "https://randomuser.me/api/portraits/women/13.jpg" },
  ],

  // Scream 7
  7234567: [
    { id: 701, name: "Neve Ashby", character: "Sidney's Niece", profile_path: "https://randomuser.me/api/portraits/women/14.jpg" },
    { id: 702, name: "Courtland Myers", character: "Dewey Jr.", profile_path: "https://randomuser.me/api/portraits/men/18.jpg" },
    { id: 703, name: "Jenna Pruitt", character: "Sam Carpenter", profile_path: "https://randomuser.me/api/portraits/women/15.jpg" },
    { id: 704, name: "David Okafor", character: "Deputy Hicks", profile_path: "https://randomuser.me/api/portraits/men/19.jpg" },
    { id: 705, name: "Melissa Trent", character: "Gale Weathers", profile_path: "https://randomuser.me/api/portraits/women/16.jpg" },
  ],

  // Wuthering Heights
  8234567: [
    { id: 801, name: "Florence Ainsley", character: "Catherine Earnshaw", profile_path: "https://randomuser.me/api/portraits/women/17.jpg" },
    { id: 802, name: "Callum Reid", character: "Heathcliff", profile_path: "https://randomuser.me/api/portraits/men/20.jpg" },
    { id: 803, name: "Margot Fenwick", character: "Isabella Linton", profile_path: "https://randomuser.me/api/portraits/women/18.jpg" },
    { id: 804, name: "Julian Ashcombe", character: "Edgar Linton", profile_path: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 805, name: "Rose Kellerman", character: "Nelly Dean", profile_path: "https://randomuser.me/api/portraits/women/19.jpg" },
  ],

  // Hoppers
  9234567: [
    { id: 901, name: "Ivy Sandoval", character: "Mabel (voice)", profile_path: "https://randomuser.me/api/portraits/women/20.jpg" },
    { id: 902, name: "Aaron Delgado", character: "Ranger Cole (voice)", profile_path: "https://randomuser.me/api/portraits/men/22.jpg" },
    { id: 903, name: "Fiona Marsh", character: "Bristle the Beaver (voice)", profile_path: "https://randomuser.me/api/portraits/women/21.jpg" },
    { id: 904, name: "Trevor Nash", character: "Otis (voice)", profile_path: "https://randomuser.me/api/portraits/men/23.jpg" },
    { id: 905, name: "Wanda Iyer", character: "Developer Hargrove (voice)", profile_path: "https://randomuser.me/api/portraits/women/22.jpg" },
  ],

  // Goat
  10234567: [
    { id: 1001, name: "Milo Anders", character: "Billy the Goat (voice)", profile_path: "https://randomuser.me/api/portraits/men/24.jpg" },
    { id: 1002, name: "Renee Ostrow", character: "Coach Buck (voice)", profile_path: "https://randomuser.me/api/portraits/women/23.jpg" },
    { id: 1003, name: "Desmond Cruz", character: "Rocco the Rhino (voice)", profile_path: "https://randomuser.me/api/portraits/men/25.jpg" },
    { id: 1004, name: "Tanya Blume", character: "Nanny (voice)", profile_path: "https://randomuser.me/api/portraits/women/24.jpg" },
    { id: 1005, name: "Percy Wade", character: "Announcer Flint (voice)", profile_path: "https://randomuser.me/api/portraits/men/26.jpg" },
  ],

  // Zootopia 2
  11234567: [
    { id: 1101, name: "Ginnifer Voss", character: "Judy Hopps (voice)", profile_path: "https://randomuser.me/api/portraits/women/25.jpg" },
    { id: 1102, name: "Marlon Reyes", character: "Nick Wilde (voice)", profile_path: "https://randomuser.me/api/portraits/men/27.jpg" },
    { id: 1103, name: "Della Huang", character: "Chief Bogo (voice)", profile_path: "https://randomuser.me/api/portraits/women/26.jpg" },
    { id: 1104, name: "Simeon Ortiz", character: "Gary De'Snake (voice)", profile_path: "https://randomuser.me/api/portraits/men/28.jpg" },
    { id: 1105, name: "Harriet Combs", character: "Mayor Winters (voice)", profile_path: "https://randomuser.me/api/portraits/women/27.jpg" },
  ],

  // Avatar: Fire and Ash
  12234567: [
    { id: 1201, name: "Samuel Ridgeway", character: "Jake Sully", profile_path: "https://randomuser.me/api/portraits/men/29.jpg" },
    { id: 1202, name: "Zoya Merrick", character: "Neytiri", profile_path: "https://randomuser.me/api/portraits/women/28.jpg" },
    { id: 1203, name: "Bram Castellan", character: "Varang, Ash Clan Leader", profile_path: "https://randomuser.me/api/portraits/men/30.jpg" },
    { id: 1204, name: "Kiona Marsh", character: "Kiri", profile_path: "https://randomuser.me/api/portraits/women/29.jpg" },
    { id: 1205, name: "Peter Alden", character: "Colonel Quaritch", profile_path: "https://randomuser.me/api/portraits/men/31.jpg" },
  ],

  // The Bride!
  13234567: [
    { id: 1301, name: "Odette Marchand", character: "The Bride", profile_path: "https://randomuser.me/api/portraits/women/30.jpg" },
    { id: 1302, name: "Corbin Wexley", character: "The Creature", profile_path: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 1303, name: "Alastair Doyle", character: "Dr. Volker", profile_path: "https://randomuser.me/api/portraits/men/33.jpg" },
    { id: 1304, name: "Marguerite Snow", character: "Lucille", profile_path: "https://randomuser.me/api/portraits/women/31.jpg" },
    { id: 1305, name: "Hollis Grant", character: "Detective Marsh", profile_path: "https://randomuser.me/api/portraits/men/34.jpg" },
  ],

  // Avengers: Doomsday
  15234567: [
    { id: 1501, name: "Dominic Farrow", character: "Captain America", profile_path: "https://randomuser.me/api/portraits/men/35.jpg" },
    { id: 1502, name: "Alina Petrov", character: "Scarlet Witch", profile_path: "https://randomuser.me/api/portraits/women/32.jpg" },
    { id: 1503, name: "Curtis Vane", character: "Doctor Doom", profile_path: "https://randomuser.me/api/portraits/men/36.jpg" },
    { id: 1504, name: "Naomi Ellsworth", character: "Storm", profile_path: "https://randomuser.me/api/portraits/women/33.jpg" },
    { id: 1505, name: "Reggie Osborne", character: "Wolverine", profile_path: "https://randomuser.me/api/portraits/men/37.jpg" },
  ],
};

export const dummyShowsData = [
    {
        "_id": "1234567",
        "id": 1234567,
        "title": "Spider-Man: Brand New Day",
        "overview": "Peter Parker tries to leave his double life behind and focus on college, but a mysterious new threat pulls him back into the mask. Teaming up with an unexpected ally, he must confront a villain unlike any he's faced before while rebuilding the parts of his life he lost.",
        "poster_path": "https://i.pinimg.com/736x/72/3f/2f/723f2f0f07eee9efd7f17c3c6dd3dc7a.jpg",
        "backdrop_path": "https://i.pinimg.com/1200x/da/45/43/da4543a6a790a6b3109aedcb54deca29.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Fantasy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-07-31",
        "original_language": "en",
        "tagline": "It's a brand new day.",
        "vote_average": 7.8,
        "vote_count": 9800,
        "runtime": 145,
    },
    {
        "_id": "2234567",
        "id": 2234567,
        "title": "The Super Mario Galaxy Movie",
        "overview": "Mario and his friends venture beyond the Mushroom Kingdom into the cosmos, discovering strange new galaxies, gravity-bending worlds, and an old rival with a plan that threatens the entire universe.",
        "poster_path": "https://i.pinimg.com/736x/ea/54/bd/ea54bd6939662aaa140c565086ab8fec.jpg",
        "backdrop_path": "https://i.pinimg.com/1200x/79/76/4d/79764dc9047a98fe8ffcdf7d3d13cd32.jpg",
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 12, "name": "Adventure" },
            { "id": 35, "name": "Comedy" },
            { "id": 10751, "name": "Family" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-04-03",
        "original_language": "en",
        "tagline": "A whole universe of adventure awaits.",
        "vote_average": 7.6,
        "vote_count": 21400,
        "runtime": 104,
    },
    {
        "_id": "3234567",
        "id": 3234567,
        "title": "Project Hail Mary",
        "overview": "A lone astronaut wakes up on a spacecraft with no memory of his mission, only to discover he may be humanity's last hope of saving Earth from extinction. Aided by an unlikely companion, he races against time across the stars.",
        "poster_path": "https://i.pinimg.com/1200x/1f/5e/21/1f5e21e70ed29742fff23eb51cec00d3.jpg",
        "backdrop_path": "https://i.pinimg.com/1200x/1f/d8/75/1fd875959dc20f0395e0df55c55619eb.jpg",
        "genres": [
            { "id": 878, "name": "Science Fiction" },
            { "id": 12, "name": "Adventure" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-03-20",
        "original_language": "en",
        "tagline": "Save the world. One mistake at a time.",
        "vote_average": 8.1,
        "vote_count": 15600,
        "runtime": 141,
    },
    {
        "_id": "4234567",
        "id": 4234567,
        "title": "Michael",
        "overview": "A sweeping biopic tracing the rise of a music icon from a childhood in Gary, Indiana to becoming one of the most influential entertainers of all time, exploring the triumphs and turmoil behind the spotlight.",
        "poster_path": "https://i.pinimg.com/736x/15/f7/6b/15f76b8549b9d65d071e3db944169a21.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/e1/f8/38/e1f838655bdbfedffba710fd42a0d89d.jpg",
        "genres": [
            { "id": 18, "name": "Drama" },
            { "id": 10402, "name": "Music" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-01-16",
        "original_language": "en",
        "tagline": "The man behind the legend.",
        "vote_average": 7.2,
        "vote_count": 12900,
        "runtime": 168,
    },
    {
        "_id": "5234567",
        "id": 5234567,
        "title": "The Devil Wears Prada 2",
        "overview": "Years after leaving Runway, a former assistant crosses paths again with her legendary former boss as the fashion industry itself is disrupted, forcing old rivals to decide whether they need each other after all.",
        "poster_path": "https://i.pinimg.com/736x/3f/5e/96/3f5e9663e630c5174956b3c1d73cea06.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/0e/5b/26/0e5b26cf7d30a3653fb1c7b136a0cf64.jpg",
        "genres": [
            { "id": 35, "name": "Comedy" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-05-01",
        "original_language": "en",
        "tagline": "Fashion never forgives.",
        "vote_average": 7.0,
        "vote_count": 8700,
        "runtime": 123,
    },
    {
        "_id": "6234567",
        "id": 6234567,
        "title": "The Mandalorian and Grogu",
        "overview": "Din Djarin and his small green apprentice take on a new mission across the outer reaches of the galaxy, crossing paths with old allies and dangerous new enemies as they search for a place to belong.",
        "poster_path": "https://i.pinimg.com/736x/9f/da/76/9fda761f906d855942d475952750f55d.jpg",
        "backdrop_path": "https://i.pinimg.com/1200x/33/c8/63/33c8639ac8a45ca2379c481a0049b2b3.jpg",
        "genres": [
            { "id": 878, "name": "Science Fiction" },
            { "id": 12, "name": "Adventure" },
            { "id": 28, "name": "Action" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-05-22",
        "original_language": "en",
        "tagline": "This is the way.",
        "vote_average": 7.4,
        "vote_count": 14300,
        "runtime": 116,
    },
    {
        "_id": "7234567",
        "id": 7234567,
        "title": "Scream 7",
        "overview": "A new string of killings brings Ghostface back to Woodsboro, drawing survivors of past massacres and a fresh generation of targets into one final, bloody reckoning with the town's masked killer.",
        "poster_path": "https://i.pinimg.com/1200x/70/ae/10/70ae10692d5f2c923993f8b594090ffc.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/f7/52/9d/f7529d4c5ac7126b4b6d57f183b924ce.jpg",
        "genres": [
            { "id": 27, "name": "Horror" },
            { "id": 9648, "name": "Mystery" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-03-13",
        "original_language": "en",
        "tagline": "What's your favorite scary movie... again?",
        "vote_average": 6.6,
        "vote_count": 10200,
        "runtime": 114,
    },
    {
        "_id": "8234567",
        "id": 8234567,
        "title": "Wuthering Heights",
        "overview": "A brooding reimagining of the classic tale of obsessive love set on the windswept English moors, following the turbulent bond between two souls whose passion turns destructive across generations.",
        "poster_path": "https://i.pinimg.com/736x/fa/39/70/fa39706d7cc76a722beea446d3621428.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/cb/1e/61/cb1e610afeb5fe2944fc60be05e8bd0e.jpg",
        "genres": [
            { "id": 18, "name": "Drama" },
            { "id": 10749, "name": "Romance" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-02-13",
        "original_language": "en",
        "tagline": "Love this savage cannot be tamed.",
        "vote_average": 6.3,
        "vote_count": 7400,
        "runtime": 138,
    },
    {
        "_id": "9234567",
        "id": 9234567,
        "title": "Hoppers",
        "overview": "An animal-loving teen discovers a way to transfer her mind into a lifelike robotic beaver, letting her talk directly to animals for the first time. Her dream adventure spirals into an unexpected uprising when she tries to protect the creatures' home from destruction.",
        "poster_path": "https://i.pinimg.com/1200x/eb/0e/ec/eb0eec8fd5605f5cae317b96cb53adf8.jpg",
        "backdrop_path": "https://i.pinimg.com/1200x/15/a1/62/15a1620f5d2390ddc2793568faa843ac.jpg",
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 35, "name": "Comedy" },
            { "id": 10751, "name": "Family" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-03-06",
        "original_language": "en",
        "tagline": "Hop into a whole new world.",
        "vote_average": 7.1,
        "vote_count": 9300,
        "runtime": 104,
    },
    {
        "_id": "10234567",
        "id": 10234567,
        "title": "Goat",
        "overview": "A small goat with big dreams gets a once-in-a-lifetime shot to join the pros in roarball, a fast, ferocious, full-contact sport ruled by the fastest and fiercest animals around. He'll need heart, grit, and a few new friends to prove he belongs.",
        "poster_path": "https://i.pinimg.com/736x/b0/fa/a2/b0faa2e1f9e9e690797a299f605636b0.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/bc/82/92/bc82920f2bf3d8c75596248d3a9ecee4.jpg",
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 35, "name": "Comedy" },
            { "id": 10751, "name": "Family" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-02-13",
        "original_language": "en",
        "tagline": "Every underdog needs a shot.",
        "vote_average": 6.9,
        "vote_count": 6100,
        "runtime": 97,
    },
    {
        "_id": "11234567",
        "id": 11234567,
        "title": "The Conjuring: Last Rites",
        "overview": "Paranormal investigators Ed and Lorraine Warren are drawn into one final terrifying case when an abandoned chapel becomes the center of a series of unexplained deaths. As an ancient evil awakens, the Warrens must confront their darkest fears to stop a malevolent force before it claims countless innocent souls.",
        "poster_path": "https://i.pinimg.com/736x/28/ce/42/28ce42fad7f20b0f80f50e00fecb449c.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/6f/43/8b/6f438b94cf6ab2fd24fd991d0e3a6d96.jpg",
        "genres": [
            { "id": 27, "name": "Horror" },
            { "id": 53, "name": "Thriller" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-09-05",
        "original_language": "en",
        "tagline": "Every blessing has its final prayer.",
        "vote_average": 8.1,
        "vote_count": 24560,
        "runtime": 112
    },
    {
        "_id": "12234567",
        "id": 12234567,
        "title": "Avatar: Fire and Ash",
        "overview": "Grieving the loss of their eldest son, Jake Sully and Neytiri face a ruthless new Na'vi tribe known as the Ash People, whose alliance with an old enemy threatens to tear their family and all of Pandora apart.",
        "poster_path": "https://i.pinimg.com/736x/fc/64/f4/fc64f4ef0381331d52a80b204ce75749.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/0b/42/4d/0b424d025281a6d44eb9c924b0bf7ec6.jpg",
        "genres": [
            { "id": 878, "name": "Adventure" },
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-12-19",
        "original_language": "en",
        "tagline": "Fire will reveal what water conceals.",
        "vote_average": 7.7,
        "vote_count": 22300,
        "runtime": 197,
    },
    {
        "_id": "13234567",
        "id": 13234567,
        "title": "The Bride!",
        "overview": "In 1930s Chicago, a lonely creature stitched back to life seeks out a brilliant scientist to build him a companion. The woman brought back to serve as his bride has other plans entirely, igniting a wild, dangerous chain of events neither of them expected.",
        "poster_path": "https://i.pinimg.com/736x/bf/de/c4/bfdec4d58387fd37fa5cc9906efea280.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/07/9e/e6/079ee64af36478c6191b9dbd30f8f38f.jpg",
        "genres": [
            { "id": 18, "name": "Drama" },
            { "id": 27, "name": "Horror" },
            { "id": 10749, "name": "Romance" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-03-06",
        "original_language": "en",
        "tagline": "She's alive. Finally.",
        "vote_average": 6.1,
        "vote_count": 5200,
        "runtime": 126,
    },
    {
        "_id": "15234567",
        "id": 15234567,
        "title": "Avengers: Doomsday",
        "overview": "A new, catastrophic threat forces an uneasy alliance between the Avengers, the X-Men, and other heroes scattered across the multiverse, as a brilliant and merciless mastermind pushes reality itself toward collapse.",
        "poster_path": "https://i.pinimg.com/736x/e0/07/ce/e007ce885cc3f6c5a93aa4a4cd12c95d.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/b6/dc/3b/b6dc3be1d9ea11839d8a7b86f019fb93.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-12-18",
        "original_language": "en",
        "tagline": "Worlds will collide.",
        "vote_average": 8.4,
        "vote_count": 8022,
        "runtime": 110,
    },
]

export const dummyDateTimeData = [
  {
    date: "2025-07-24",
    times: [
      { time: "2025-07-24T01:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
      { time: "2025-07-24T03:00:00.000Z", showId: "68395b407f6329be2bb45bd2" },
      { time: "2025-07-24T05:00:00.000Z", showId: "68395b407f6329be2bb45bd3" },
      { time: "2025-07-24T08:00:00.000Z", showId: "68395b407f6329be2bb45bdd" },
      { time: "2025-07-24T11:30:00.000Z", showId: "68395b407f6329be2bb45bde" },
      { time: "2025-07-24T15:00:00.000Z", showId: "68395b407f6329be2bb45bdf" },
    ],
  },
  {
    date: "2025-07-25",
    times: [
      { time: "2025-07-25T01:00:00.000Z", showId: "68395b407f6329be2bb45bd4" },
      { time: "2025-07-25T03:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
      { time: "2025-07-25T05:00:00.000Z", showId: "68395b407f6329be2bb45bd6" },
      { time: "2025-07-25T09:15:00.000Z", showId: "68395b407f6329be2bb45be0" },
      { time: "2025-07-25T13:00:00.000Z", showId: "68395b407f6329be2bb45be1" },
    ],
  },
  {
    date: "2025-07-26",
    times: [
      { time: "2025-07-26T01:00:00.000Z", showId: "68395b407f6329be2bb45bd7" },
      { time: "2025-07-26T03:00:00.000Z", showId: "68395b407f6329be2bb45bd8" },
      { time: "2025-07-26T05:00:00.000Z", showId: "68395b407f6329be2bb45bd9" },
      { time: "2025-07-26T07:45:00.000Z", showId: "68395b407f6329be2bb45be2" },
      { time: "2025-07-26T12:30:00.000Z", showId: "68395b407f6329be2bb45be3" },
      { time: "2025-07-26T16:15:00.000Z", showId: "68395b407f6329be2bb45be4" },
      { time: "2025-07-26T20:00:00.000Z", showId: "68395b407f6329be2bb45be5" },
    ],
  },
  {
    date: "2025-07-27",
    times: [
      { time: "2025-07-27T01:00:00.000Z", showId: "68395b407f6329be2bb45bda" },
      { time: "2025-07-27T03:00:00.000Z", showId: "68395b407f6329be2bb45bdb" },
      { time: "2025-07-27T05:00:00.000Z", showId: "68395b407f6329be2bb45bdc" },
      { time: "2025-07-27T10:00:00.000Z", showId: "68395b407f6329be2bb45be6" },
      { time: "2025-07-27T14:30:00.000Z", showId: "68395b407f6329be2bb45be7" },
    ],
  },
];

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]