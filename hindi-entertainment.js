// js/hindi-entertainment.js
const hindiEntertainmentChannels = [
    {
        id: "hin1",
        name: "Sony TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20TV.png",
        category: "HINDI",
        url: "http://103.175.242.10:8080/sonyent10/tracks-v1a1/mono.m3u8",
        featured: true
    },
    {
        id: "hin2",
        name: "Sony Sab",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20Sab.jpeg",
        category: "HINDI",
        url: "http://103.120.172.74:4400"
    },
    {
        id: "hin3",
        name: "Sony Pal",
        logo: "",
        category: "HINDI",
        url: "http://45.127.56.3:6699/live/Corpus-POL1/SRV4/2/SONY-PAL/live.mpd"
    },
    {
        id: "hin4",
        name: "Star Plus",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Plus.png",
        category: "HINDI",
        url: "http://103.175.242.10:8080/starplus/tracks-v1a1/mono.m3u8",
        featured: true
    },
    {
        id: "hin5",
        name: "Colors",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Colors.png",
        category: "HINDI",
        url: "http://103.175.242.10:8080/26-Colorshd/tracks-v1a1/mono.m3u8"
    },
    {
        id: "hin6",
        name: "Zee TV HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Zee%20TV.png",
        category: "HINDI",
        url: "https://la.drmlive.au/tp/zee-zeetvhd.m3u8"
    },
    {
        id: "hin7",
        name: "Zee Anmol",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Zee%20TV.png",
        category: "HINDI",
        url: "https://la.drmlive.au/tp/zee-zeeanmol.m3u8"
    },
    {
        id: "hin8",
        name: "And TV HD",
        logo: "https://images.toffeelive.com/images/program/801/logo/240x240/mobile_logo_974516001655891652.png",
        category: "HINDI",
        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andtvhd1/default/andtvhd1.m3u8"
    },
    {
        id: "hin9",
        name: "DD National",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/DD%20National.png",
        category: "HINDI",
        url: "https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Ddnational/default/index.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(hindiEntertainmentChannels);
}