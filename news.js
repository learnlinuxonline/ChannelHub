// js/news.js
const newsChannels = [
    {
        id: "news1",
        name: "ATN News",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20News.png",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnws-sg.stream/playlist.m3u8",
        featured: true
    },
    {
        id: "news2",
        name: "Somoy TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Somoy%20TV.jpeg",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/somoyt000011226615544544.stream/playlist.m3u8"
    },
    {
        id: "news3",
        name: "Independent TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Independent%20Television.png",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/independent-8-org.stream/playlist.m3u8"
    },
    {
        id: "news4",
        name: "Ekattor TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Ekattor%20TV.png",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ekattor.stream/playlist.m3u8"
    },
    {
        id: "news5",
        name: "Jamuna TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Jamuna%20TV.jpeg",
        category: "NEWS",
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/1701.m3u8"
    },
    {
        id: "news6",
        name: "Channel 24",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/channel%2024.png",
        category: "NEWS",
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/1703.m3u8"
    },
    {
        id: "news7",
        name: "News 24",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/News%2024.png",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/news24local.stream/playlist.m3u8"
    },
    {
        id: "news8",
        name: "DBC News",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/DBC%20News.png",
        category: "NEWS",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/dbcnews.stream/tracks-v1a1/playlist.m3u8"
    },
    {
        id: "news9",
        name: "Ekhone TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Ekhon%20TV.png",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/globaltv.stream/playlist.m3u8"
    },
    {
        id: "news10",
        name: "Jago News 24",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Jago%20News%2024.jpeg",
        category: "NEWS",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/jagonews24.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "news11",
        name: "TBN 24 USA",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/TBN24.png",
        category: "NEWS",
        url: "https://dog.dg21bd.com/TBN24WEBUSA/index.m3u8"
    },
    {
        id: "news12",
        name: "Aljazeera",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Al%20Jazeera%20.png",
        category: "NEWS",
        url: "https://live-hls-web-aje.getaj.net/AJE/01.m3u8"
    },
    {
        id: "news13",
        name: "BBC World",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/BBC%20World%20News.png",
        category: "NEWS",
        url: "https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8"
    },
    {
        id: "news14",
        name: "CNN",
        logo: "",
        category: "NEWS",
        url: "https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8"
    },
    {
        id: "news15",
        name: "CGTN News",
        logo: "",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/cgtn.stream/playlist.m3u8"
    },
    {
        id: "news16",
        name: "DW News",
        logo: "",
        category: "NEWS",
        url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
    },
    {
        id: "news17",
        name: "France 24",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/1200px-FRANCE_24_logo.svg.png",
        category: "NEWS",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/fr24.stream/playlist.m3u8"
    },
    {
        id: "news18",
        name: "RT Now",
        logo: "",
        category: "NEWS",
        url: "https://rt-glb.rttv.com/live/rtnews/playlist.m3u8"
    },
    {
        id: "news19",
        name: "Sky News",
        logo: "",
        category: "NEWS",
        url: "https://d39chvnxm26pgp.cloudfront.net/v1/master/72588bff830dec7b26d7cbbf5f3c24928aec5c03/cc-sthen6ms4vxgv-stage/WNSFO/ABR.m3u8"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(newsChannels);
}