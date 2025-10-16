// js/english-music.js
const englishMusicChannels = [
    {
        id: "emusic1",
        name: "YRF Music HD",
        logo: "",
        category: "ENGLISH MUSIC",
        url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8"
    },
    {
        id: "emusic2",
        name: "Hindi Hits HD",
        logo: "",
        category: "ENGLISH MUSIC",
        url: "http://146.59.253.52:8080/hindihitshd/index.m3u8"
    },
    {
        id: "emusic3",
        name: "VH1 HD",
        logo: "",
        category: "ENGLISH MUSIC",
        url: ""
    },
    {
        id: "emusic4",
        name: "Clubbing TV",
        logo: "",
        category: "ENGLISH MUSIC",
        url: "https://fifabangladesh.live/VHOD/go.php?id=Clubbing_TV_voot_MOB"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(englishMusicChannels);
}