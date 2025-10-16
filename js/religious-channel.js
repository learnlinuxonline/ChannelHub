// js/religious-channel.js
const religiousChannels = [
    {
        id: "rel1",
        name: "Peace TV Bangla",
        logo: "https://i.ibb.co/Gfw89mC/20240804-033102.png",
        category: "RELIGIOUS",
        url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v2a1/mono.m3u8"
    },
    {
        id: "rel2",
        name: "Peace TV English",
        logo: "https://i.ibb.co/598TYnC/20240827-092020.png",
        category: "RELIGIOUS",
        url: "https://dzkyvlfyge.erbvr.com/PeaceTvEnglish/index.m3u8"
    },
    {
        id: "rel3",
        name: "Peace TV Urdu",
        logo: "https://i.ibb.co/598TYnC/20240827-092020.png",
        category: "RELIGIOUS",
        url: "https://dzkyvlfyge.erbvr.com/PeaceTvUrdu/index.m3u8"
    },
    {
        id: "rel4",
        name: "ATN Islamic",
        logo: "https://i.ibb.co/598TYnC/20240827-092020.png",
        category: "RELIGIOUS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnislamictv.stream/playlist.m3u8"
    },
    {
        id: "rel5",
        name: "Islam Bangla",
        logo: "https://i.imgur.com/xuNhiek.png",
        category: "RELIGIOUS",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/islamchbangla.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "rel6",
        name: "Madani TV",
        logo: "https://i.ibb.co/7jrjkW1/20240813-112630.png",
        category: "RELIGIOUS",
        url: "https://streaming.madanichannel.tv/static/streaming-playlists/hls/d3e49b76-ac06-4689-a641-9200445b647f/master.m3u8"
    },
    {
        id: "rel7",
        name: "Makkah TV",
        logo: "https://i.ibb.co/TtHtGkW/20240803-172601.png",
        category: "RELIGIOUS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/makkahtv.stream/playlist.m3u8"
    },
    {
        id: "rel8",
        name: "AL Sunnah TV",
        logo: "https://i.ibb.co/rtkWYHV/20240827-092043.png",
        category: "RELIGIOUS",
        url: "http://m.live.net.sa:1935/live/sunnah/chunklist.m3u8?v=1"
    },
    {
        id: "rel9",
        name: "EWTN TV",
        logo: "",
        category: "RELIGIOUS",
        url: "https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/qrpsvkxl/720/chunklist.m3u8"
    },
    {
        id: "rel10",
        name: "God TV",
        logo: "",
        category: "RELIGIOUS",
        url: "https://hlsb-us.god.tv/GODTV/USA-480.m3u8"
    },
    {
        id: "rel11",
        name: "Arihant TV",
        logo: "",
        category: "RELIGIOUS",
        url: "https://aasthaott.akamaized.net/110923/smil:arihant.smil/chunklist_b1928000.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(religiousChannels);
}