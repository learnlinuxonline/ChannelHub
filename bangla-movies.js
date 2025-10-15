// js/bangla-movies.js
const banglaMovieChannels = [
    {
        id: "bmv1",
        name: "Movie Bangla",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Movie%20Bangla.png",
        category: "BANGLA MOVIES",
        url: "http://alvetv.com/moviebanglatv/8080/index.m3u8",
        featured: true
    },
    {
        id: "bmv2",
        name: "BONGO MOVIES",
        logo: "https://i.ibb.co.com/b5VkjPc/20240907-023057.png",
        category: "BANGLA MOVIES",
        url: "https://admin.himel-op.top/Join-Telegram-@HimelOP_Official/bongo-op.m3u8?id=bongo-movies"
    },
    {
        id: "bmv3",
        name: "Toffee Movies",
        logo: "",
        category: "BANGLA MOVIES",
        url: "https://its-ferdos-alom.top/star7/live.php?id=178532"
    },
    {
        id: "bmv4",
        name: "Amar Bangla",
        logo: "https://i.ibb.co/CPmLfGs/Amar-Bangla.png",
        category: "BANGLA MOVIES",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/amarbanglatv.stream/playlist.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(banglaMovieChannels);
}