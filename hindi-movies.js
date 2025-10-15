// js/hindi-movies.js
const hindiMovieChannels = [
    {
        id: "hm1",
        name: "Sony Max",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Sony%20Max.png",
        category: "HINDI MOVIES",
        url: "http://kst.moonplex.net:8080/CH1/tracks-v1a1/mono.m3u8",
        featured: true
    },
    {
        id: "hm2",
        name: "Zee Cinema",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Zee%20Cinema.png",
        category: "HINDI MOVIES",
        url: "http://smart.bengaldigital.live/ZeeCinema/index.m3u8"
    },
    {
        id: "hm3",
        name: "Zee Cinema HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Zee%20Cinema.png",
        category: "HINDI MOVIES",
        url: "http://bb.thenayeemparvez.xyz/ZeeCinemaFHD/index.m3u8"
    },
    {
        id: "hm4",
        name: "Zee Action",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Zee%20Action.png",
        category: "HINDI MOVIES",
        url: "https://la.drmlive.au/tp/zee-zeeaction.m3u8"
    },
    {
        id: "hm5",
        name: "Zee Anmol Cinema",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Zee_Anmol_Cinema_logo.png",
        category: "HINDI MOVIES",
        url: "https://la.drmlive.au/tp/zee-zeeanmolcinema.m3u8"
    },
    {
        id: "hm6",
        name: "Star Gold",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Gold.png",
        category: "HINDI MOVIES",
        url: "http://116.202.46.40:789/STAR_GOLD_HINDI/index.m3u8"
    },
    {
        id: "hm7",
        name: "Star Gold 2",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Glod%202.png",
        category: "HINDI MOVIES",
        url: "https://live.dinesh29.com.np/stream/jiotvplus/stargold2hd/master.m3u8"
    },
    {
        id: "hm8",
        name: "Star Gold Thrills",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Glod%202.png",
        category: "HINDI MOVIES",
        url: "http://stvlive.net:8080/stargoldthrill/tracks-v1a1/mono.m3u8"
    },
    {
        id: "hm9",
        name: "Colors Cineplex HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Colors%20Cineplax.png",
        category: "HINDI MOVIES",
        url: "http://103.122.74.6:8888/hls/COLORS.CINEPLEX.HD.m3u8"
    },
    {
        id: "hm10",
        name: "And Pictures HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/And%20Pictures%20.png",
        category: "HINDI MOVIES",
        url: "https://la.drmlive.au/tp/zee-pictures.m3u8"
    },
    {
        id: "hm11",
        name: "B4U Movies",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/B4U%20Movies.png",
        category: "HINDI MOVIES",
        url: "https://cdnb4u.wiseplayout.com/B4U_Movies/HD1080/HD1080.m3u8"
    },
    {
        id: "hm12",
        name: "Sheemaroo Bollywood",
        logo: "https://i.ibb.co/KjjqnRH/Picsart-23-06-30-21-35-20-283.png",
        category: "HINDI MOVIES",
        url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00864-shemarooenterta-shemabollywood-ono/playlist.m3u8"
    },
    {
        id: "hm13",
        name: "Goldmines",
        logo: "https://static.wikia.nocookie.net/jhmovie/images/7/7b/Goldmines_logo.png",
        category: "HINDI MOVIES",
        url: "https://cdn-2.pishow.tv/live/1459/master.m3u8"
    },
    {
        id: "hm14",
        name: "Manoranjan Movies",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOrrVnk_41l-x7vMswKXKH2YJYGL5TNx6MzOEbEvzUA&s",
        category: "HINDI MOVIES",
        url: "http://longstream-04.ajaah.com/PlayBoxTV/ManoranjanMovies/playlist.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(hindiMovieChannels);
}