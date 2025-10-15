// js/bangla-dubbed-movies.js
const banglaDubbedMovieChannels = [
    {
        id: "bdub1",
        name: "KGF Chapter 1",
        logo: "",
        category: "BANGLA DUBBED MOVIES",
        url: "http://cinemacity.live/hdd/3TB%20File/saicord.com/%5Bsaicord.com%5D_K.G.F_Chapter_1_%282018%29_%5BBengali_Dubbed%5D_1080p.mp4",
        featured: true
    },
    {
        id: "bdub2",
        name: "KGF Chapter 2",
        logo: "",
        category: "BANGLA DUBBED MOVIES",
        url: "http://cinemacity.live/hdd/3TB%20File/saicord.com/%5Bsaicord.com%5D_K.G.F_Chapter_2_%282022%29_%5BBengali_Dubbed%5D_1080p.mp4",
        featured: true
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(banglaDubbedMovieChannels);
}