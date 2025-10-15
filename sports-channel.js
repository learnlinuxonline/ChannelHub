// js/sports-channel.js
const sportsChannels = [
    {
        id: "sports1",
        name: "Star Sports 1 HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Sports%201%40.jpeg",
        category: "SPORTS",
        url: "http://stvlive.net:8080/starsports1/tracks-v1a1/mono.m3u8",
        featured: true
    },
    {
        id: "sports2",
        name: "Star Sports 2 HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Sports%202%40.jpeg",
        category: "SPORTS",
        url: "http://stvlive.net:8080/starsports2/tracks-v1a1/mono.m3u8"
    },
    {
        id: "sports3",
        name: "Star Sports Select 1",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Sports%20Select%201%40.jpeg",
        category: "SPORTS",
        url: "http://stvlive.net:8080/starselect1/tracks-v1a1/mono.m3u8"
    },
    {
        id: "sports4",
        name: "Star Sports Select 2",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Star%20Sports%20Select%20%202%40.jpeg",
        category: "SPORTS",
        url: "http://stvlive.net:8080/starselect2/tracks-v1a1/mono.m3u8"
    },
    {
        id: "sports5",
        name: "Sony Sports Ten 1 HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Sony%20Sports%20Ten%201.png",
        category: "SPORTS",
        url: "https://bdixtv24.site/toffee/live.php?id=43dcec1011e7&e=.m3u8"
    },
    {
        id: "sports6",
        name: "Sony Sports Ten 2 HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20Sports%20Ten%202.png",
        category: "SPORTS",
        url: "https://bdixtv24.site/toffee/live.php?id=abc6677968ef&e=.m3u8"
    },
    {
        id: "sports7",
        name: "Sony Sports Ten 3 HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20Sports%20Ten%203.png",
        category: "SPORTS",
        url: "https://bdixtv24.site/toffee/live.php?id=edc6a07e4754&e=.m3u8"
    },
    {
        id: "sports8",
        name: "Sony Sports Ten 4",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Sony%20Sports%20Ten%204.png",
        category: "SPORTS",
        url: "http://103.84.57.155:8000/play/a03r/index.m3u8"
    },
    {
        id: "sports9",
        name: "Sony Sports Ten 5",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20Sports%20Ten%205.png",
        category: "SPORTS",
        url: "https://bdixtv24.site/toffee/live.php?id=fd6de8bd1666&e=.m3u8"
    },
    {
        id: "sports10",
        name: "DD Sports",
        logo: "",
        category: "SPORTS",
        url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/b17adfe543354fdd8d189b110617cddd/index.m3u8"
    },
    {
        id: "sports11",
        name: "Eurosports",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Eurosports.png",
        category: "SPORTS",
        url: "https://raw.githubusercontent.com/subirkumarpaul/My-iptv/main/Eurosport.m3u8"
    },
    {
        id: "sports12",
        name: "PTV Sports",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/PTV%20Sports.png",
        category: "SPORTS",
        url: "http://125.209.88.166:45793/BRN/PTVSports.stream/playlist.m3u8"
    },
    {
        id: "sports13",
        name: "A Sports",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/A%20Sports.png",
        category: "SPORTS",
        url: "http://125.209.88.166:45793/BRN/ArySports.stream/playlist.m3u8"
    },
    {
        id: "sports14",
        name: "Geo Super",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/GEO%20Super.png",
        category: "SPORTS",
        url: "http://125.209.88.166:45793/BRN/GeoSuper.stream/playlist.m3u8"
    },
    {
        id: "sports15",
        name: "Ten Sports PK",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Ten%20Sports%20PK.png",
        category: "SPORTS",
        url: "http://125.209.88.166:45793/BRN/TenSports.stream/playlist.m3u8"
    },
    {
        id: "sports16",
        name: "Ten Cricket",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Ten-Cricket.png",
        category: "SPORTS",
        url: "https://edge3-moblive.yuppcdn.net/drm/smil:tencricketdrm.smil/chunklist_b996000.m3u8"
    },
    {
        id: "sports17",
        name: "Willow Cricket",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Willow%20Cricket%20.png",
        category: "SPORTS",
        url: "http://103.122.74.6:8888/hls/WILLOW.HD.m3u8"
    },
    {
        id: "sports18",
        name: "Bein Sports 1",
        logo: "",
        category: "SPORTS",
        url: "http://125.209.88.166:45793/BRN/beINSP11.stream/playlist.m3u8"
    },
    {
        id: "sports19",
        name: "Bein Sports 2",
        logo: "",
        category: "SPORTS",
        url: "http://125.209.88.166:45793/BRN/beINSP12.stream/playlist.m3u8"
    },
    {
        id: "sports20",
        name: "Super Sports Football",
        logo: "",
        category: "SPORTS",
        url: "http://bapatv.live:8080/sfootball/tracks-v1a1/mono.m3u8"
    },
    {
        id: "sports21",
        name: "Super Sports Cricket",
        logo: "",
        category: "SPORTS",
        url: "http://103.122.74.6:8888/hls/SUPER.CRICKET.HD.m3u8"
    },
    {
        id: "sports22",
        name: "TNT Sports 1",
        logo: "",
        category: "SPORTS",
        url: "http://gcp-dash.ngslbs.com/TVD001/index.mpd"
    },
    {
        id: "sports23",
        name: "TNT Sports 2",
        logo: "",
        category: "SPORTS",
        url: "http://gcp-dash.ngslbs.com/TVD002/index.mpd"
    },
    {
        id: "sports24",
        name: "TNT Sports 3",
        logo: "",
        category: "SPORTS",
        url: "http://gcp-dash.ngslbs.com/TVD003/index.mpd"
    },
    {
        id: "sports25",
        name: "TNT Sports 4",
        logo: "",
        category: "SPORTS",
        url: "http://gcp-dash.ngslbs.com/TVD004/index.mpd"
    },
    {
        id: "sports26",
        name: "MU TV",
        logo: "https://starsat.co.za/wp-content/uploads/2021/02/MUTV-Manchester-United-TV.png",
        category: "SPORTS",
        url: "https://bcovlive-a.akamaihd.net/r2d2c4ca5bf57456fb1d16255c1a535c8/eu-west-1/eu-west-1/6058004203001/profile_2/chunklist.m3u8"
    },
    {
        id: "sports27",
        name: "Real Madrid TV",
        logo: "",
        category: "SPORTS",
        url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01201-cinedigmenterta-realmadrid-cineverse/playlist.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(sportsChannels);
}