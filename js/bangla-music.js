// js/bangla-music.js
const banglaMusicChannels = [
    {
        id: "bm1",
        name: "Gaan Bangla",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Gaan%20Bangla.png",
        category: "BANGLA MUSIC",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/gaanbangla-8-orgd.stream/playlist.m3u8",
        featured: true
    },
    {
        id: "bm2",
        name: "ATN Music",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20Music.png",
        category: "BANGLA MUSIC",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8"
    },
    {
        id: "bm3",
        name: "RTV Music",
        logo: "https://imgpile.com/images/58YDwk.jpg",
        category: "BANGLA MUSIC",
        url: "https://raw.githubusercontent.com/gift4bd/ytm/main/RTVMusic.m3u8"
    },
    {
        id: "bm4",
        name: "Music Bangla",
        logo: "",
        category: "BANGLA MUSIC",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/musicbangla2025.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bm5",
        name: "Bengali Beats",
        logo: "https://tplay.live/originals/bengali-beats/bengali-beats.png",
        category: "BANGLA MUSIC",
        url: "https://tplay.live/originals/bengali-beats/index.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(banglaMusicChannels);
}