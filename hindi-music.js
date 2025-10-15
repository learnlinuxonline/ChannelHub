// js/hindi-music.js
const hindiMusicChannels = [
    {
        id: "hmu1",
        name: "9XM",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/9xm.png",
        category: "HINDI MUSIC",
        url: "https://d75dqofg5kmfk.cloudfront.net/bpk-tv/9XM/default/index.m3u8",
        featured: true
    },
    {
        id: "hmu2",
        name: "9X Jalwa",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/9X%20Jalwa.png",
        category: "HINDI MUSIC",
        url: "https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/9x-jalwa/47bdb49d-f6f3-4927-a9ea-12c4c5afc732/0.m3u8"
    },
    {
        id: "hmu3",
        name: "Zing",
        logo: "https://images.toffeelive.com/images/program/391/logo/240x240/mobile_logo_430259001655891309.png",
        category: "HINDI MUSIC",
        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zing1/default/zing1.m3u8"
    },
    {
        id: "hmu4",
        name: "B4U Music",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/B4U%20Music.png",
        category: "HINDI MUSIC",
        url: "https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/4598c408-0e38-488c-9b64-fc845d1ea2b6/0.m3u8"
    },
    {
        id: "hmu5",
        name: "MTV Beats HD",
        logo: "https://images.toffeelive.com/images/program/2432/logo/240x240/mobile_logo_564387001655891879.png",
        category: "HINDI MUSIC",
        url: "https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Mtvbeats/default/mtvbeats-audio_208482_und=208000-video=2137600.m3u8"
    },
    {
        id: "hmu6",
        name: "Mastii Music",
        logo: "",
        category: "HINDI MUSIC",
        url: "https://cdn-singapore-5160-prod.tsv2.amagi.tv/linear/amg01448-samsungin-mastiiin-samsungin/playlist.m3u8"
    },
    {
        id: "hmu7",
        name: "E24",
        logo: "https://i.ibb.co/dbjnG3X/20240803-105403.png",
        category: "HINDI MUSIC",
        url: "https://live-e24.dailyhunt.in/eternowsa/live/amlst:E24_,b256,b512,b1024,b1824,.smil/playlist.m3u8"
    },
    {
        id: "hmu8",
        name: "Zoom",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ZOOM.png",
        category: "HINDI MUSIC",
        url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/zoom-tv/master.m3u8"
    },
    {
        id: "hmu9",
        name: "Music India",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyMNNb_SRC2dnm7IW84llAJ9aO5Zb7V4jdjHaweOo58tzrc9pSsRv85-TZD1w4L57nc4&usqp=CAU",
        category: "HINDI MUSIC",
        url: "https://d75dqofg5kmfk.cloudfront.net/bpk-tv/Musicindia/default/index.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(hindiMusicChannels);
}