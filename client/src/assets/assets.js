import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import theConjuringLogo from './theConjuringLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    theConjuringLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

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
        "poster_path": "https://i.pinimg.com/736x/2a/a6/09/2aa60970a91f1d0a62e5330314ca9382.jpg",
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
        "title": "Zootopia 2",
        "overview": "Newly minted partners Judy Hopps and Nick Wilde find their friendship strained by clashing styles as they chase down the city's first-ever snake resident, whose mysterious arrival threatens to unravel Zootopia's fragile harmony.",
        "poster_path": "https://i.pinimg.com/1200x/fb/fc/d9/fbfcd980c25b2414636def15df488601.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/cb/36/ce/cb36cecfc045a33fd58deb2da805ddb2.jpg",
        "genres": [
            { "id": 16, "name": "Animation" },
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 35, "name": "Comedy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-11-26",
        "original_language": "en",
        "tagline": "The city never sleeps, and neither does the case.",
        "vote_average": 7.4,
        "vote_count": 17800,
        "runtime": 108,
    },
    {
        "_id": "12234567",
        "id": 12234567,
        "title": "Avatar: Fire and Ash",
        "overview": "Grieving the loss of their eldest son, Jake Sully and Neytiri face a ruthless new Na'vi tribe known as the Ash People, whose alliance with an old enemy threatens to tear their family and all of Pandora apart.",
        "poster_path": "https://i.pinimg.com/736x/fc/64/f4/fc64f4ef0381331d52a80b204ce75749.jpg",
        "backdrop_path": "https://i.pinimg.com/736x/0b/42/4d/0b424d025281a6d44eb9c924b0bf7ec6.jpg",
        "genres": [
            { "id": 878, "name": "Science Fiction" },
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" }
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
        "vote_average": 0,
        "vote_count": 0,
        "runtime": 0,
    },
]
export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

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