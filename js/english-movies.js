// js/english-movies.js
const englishMovieChannels = [
    {
        id: "em1",
        name: "Star Movies",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Movies.png",
        category: "ENGLISH MOVIES",
        url: "http://103.122.74.6:8888/hls/STAR.MOVIES.HD.m3u8",
        featured: true
    },
    {
        id: "em2",
        name: "Star Movies Select HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Movies.png",
        category: "ENGLISH MOVIES",
        url: "http://103.122.74.6:8888/hls/STAR.MOVIES.SEL.HD.m3u8"
    },
    {
        id: "em3",
        name: "HBO HD",
        logo: "",
        category: "ENGLISH MOVIES",
        url: "http://103.122.74.6:8888/hls/HBO.HD.m3u8",
        featured: true
    },
    {
        id: "em4",
        name: "HBO Hits",
        logo: "",
        category: "ENGLISH MOVIES",
        url: "http://103.122.74.6:8888/hls/HBO.HITS.m3u8"
    },
    {
        id: "em5",
        name: "Sony Pix HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20Pix.jpeg",
        category: "ENGLISH MOVIES",
        url: "http://stvlive.net:8080/sonypix/tracks-v1/mono.m3u8"
    },
    {
        id: "em6",
        name: "Movies Now",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/MN%2B%20HD.png",
        category: "ENGLISH MOVIES",
        url: "http://stvlive.net:8080/moviesnow-2/tracks-v1a1/mono.m3u8"
    },
    {
        id: "em7",
        name: "Movies Now HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/MN%2B%20HD.png",
        category: "ENGLISH MOVIES",
        url: "http://stvlive.net:8080/moviesnow/tracks-v1a1/mono.m3u8"
    },
    {
        id: "em8",
        name: "MNX HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/MNX.png",
        category: "ENGLISH MOVIES",
        url: "http://103.84.57.155:8000/play/a030/index.m3u8"
    },
    {
        id: "em9",
        name: "And Flix",
        logo: "",
        category: "ENGLISH MOVIES",
        url: "https://moblive.yuppcdn.net/drm/smil:nflixdrm.smil/manifest.mpd?nimblesessionid=1734415339"
    },
    {
        id: "em10",
        name: "Movie Sphere",
        logo: "",
        category: "ENGLISH MOVIES",
        url: "https://moviesphere-samsung-samsungus.amagi.tv/playlist.m3u8"
    },
    {
        id: "em11",
        name: "Action Hollywood Movies",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/English%20Movies.jpeg",
        category: "ENGLISH MOVIES",
        url: "https://amg01076-lightningintern-actionhollywood-samsungnz-82rry.amagi.tv/playlist/amg01076-lightningintern-actionhollywood-samsungnz/playlist.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(englishMovieChannels);
}