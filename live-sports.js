// js/live-sports.js
const liveSportsChannels = [
    {
        id: "ls1",
        name: "Live Sports 1",
        logo: "",
        category: "LIVE SPORTS",
        url: "https://crichdplaylist.extratvteam.workers.dev/master.m3u8?cid=star1in",
        featured: true
    },
    {
        id: "ls2",
        name: "Live Sports 2",
        logo: "",
        category: "LIVE SPORTS",
        url: "https://yflix.top/fuck/live.php?cid=ten_cricket&chunks=fa813a073ae6c4c56c9bbef87d9fd122e6cc604eb437cf6c6c750b1eeddef94d69422e7b3b366dd51789ec2a316f1baf303b1025cafa9574e4bdaf156be463d54f9bf8212a9f1deba1986d2a8e8f6351867437b403509182685dc9e09ed514bd"
    },
    {
        id: "ls3",
        name: "Live Sports 3",
        logo: "",
        category: "LIVE SPORTS",
        url: "https://crichdplaylist.extratvteam.workers.dev/master.m3u8?cid=bbtsp1"
    },
    {
        id: "ls4",
        name: "Live Sports 4",
        logo: "",
        category: "LIVE SPORTS",
        url: "https://crichdplaylist.extratvteam.workers.dev/master.m3u8?cid=bbtsp2"
    },
    {
        id: "ls5",
        name: "Live Sports 5",
        logo: "",
        category: "LIVE SPORTS",
        url: "https://crichdplaylist.extratvteam.workers.dev/master.m3u8?cid=bbtsp3"
    },
    {
        id: "ls6",
        name: "T Sports Live 1",
        logo: "",
        category: "LIVE SPORTS",
        url: "https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8"
    },
    {
        id: "ls7",
        name: "T Sports Live 3",
        logo: "",
        category: "LIVE SPORTS",
        url: "https://live.tsports.com/mobile_hls/tsports_live_3/playlist.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(liveSportsChannels);
}