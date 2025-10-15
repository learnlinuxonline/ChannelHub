// js/bangla-channel.js
const banglaChannels = [
    {
        id: "bd1",
        name: "BTV National",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/BTV%20National.png",
        category: "BANGLA",
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/1709.m3u8",
        featured: true
    },
    {
        id: "bd2",
        name: "BTV World",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/BTV%20National.png",
        category: "BANGLA",
        url: "https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1709/output/1709.m3u8"
    },
    {
        id: "bd3",
        name: "BTV Chattogram",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/BTV%20National.png",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/btvbd-office-sg.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bd4",
        name: "BTV News",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GdTIOJgWg5_BCr3ZDvEzBOMt6gt0QoybcQ&usqp=CAU",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/btvbd-office-sg.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bd5",
        name: "T Sports",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/T%20Sports.png",
        category: "BANGLA",
        url: "https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8",
        featured: true
    },
    {
        id: "bd6",
        name: "Gazi TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Gazi%20TV.jpg",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/gazibdz.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bd7",
        name: "ATN Bangla",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/ATN%20Bangla.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnbd-8-org.stream/playlist.m3u8",
        featured: true
    },
    {
        id: "bd8",
        name: "Channel I",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Channel%20I.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/channeli-8-org.stream/playlist.m3u8"
    },
    {
        id: "bd9",
        name: "Maasranga TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Maasranga%20TV.png",
        category: "BANGLA",
        url: "https://mtv.sunplex.live/MAASRANGA-TV/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bd10",
        name: "Ekushay TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Ekushey%20TV.png",
        category: "BANGLA",
        url: "https://ekusheyserver.com/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8"
    },
    {
        id: "bd11",
        name: "NTV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/NTV.png",
        category: "BANGLA",
        url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/1716.m3u8"
    },
    {
        id: "bd12",
        name: "RTV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/RTV.png",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/rtv-sg.stream/playlist.m3u8"
    },
    {
        id: "bd13",
        name: "SATV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/SATV.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/satvoff5666.stream/playlist.m3u8"
    },
    {
        id: "bd14",
        name: "Deepto TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Deepto%20TV.jpeg",
        category: "BANGLA",
        url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/index.m3u8"
    },
    {
        id: "bd15",
        name: "Mohona TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Mohona%20TV.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/Mohona-g.stream/playlist.m3u8"
    },
    {
        id: "bd16",
        name: "Desh TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Desh%20TV.png",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/deshtv.stream/playlist.m3u8"
    },
    {
        id: "bd17",
        name: "MY TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/My%20TV.svg.png",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/mytv-up-off.stream/playlist.m3u8"
    },
    {
        id: "bd18",
        name: "Asian TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Asian%20Tv.png",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/asian-test-sample-ok-d.stream/playlist.m3u8"
    },
    {
        id: "bd19",
        name: "Bangla TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Bangla%20TV.png",
        category: "BANGLA",
        url: "https://byphdgllyk.gpcdn.net/hls/banglatvbd/index.m3u8"
    },
    {
        id: "bd20",
        name: "Anando TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Anonoda%20Tv.png",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/anandatv.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bd21",
        name: "Banglavision",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Banglavision.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/banglav000.stream/playlist.m3u8"
    },
    {
        id: "bd22",
        name: "Nagorik TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Nagorik%20TV.png",
        category: "BANGLA",
        url: "http://stvlive.net:8080/nagorik/index.m3u8"
    },
    {
        id: "bd23",
        name: "Bijoy TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Bijoy%20TV.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/bijoy00.stream/playlist.m3u8"
    },
    {
        id: "bd24",
        name: "Boishakhi TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Boishaki%20TV.png",
        category: "BANGLA",
        url: "https://boishakhi.sonarbanglatv.com/boishakhi/boishakhitv/index.m3u8"
    },
    {
        id: "bd25",
        name: "Channel 9",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Channel%209.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/channel9hd.stream/playlist.m3u8"
    },
    {
        id: "bd26",
        name: "Nexus TV HD",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Nexus%20TV.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/nexustv.stream/playlist.m3u8"
    },
    {
        id: "bd27",
        name: "Global TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Global%20Television%20Bangladesh.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/Global-g.stream/playlist.m3u8"
    },
    {
        id: "bd28",
        name: "Green TV",
        logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Green%20TV.png",
        category: "BANGLA",
        url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/playlist.m3u8"
    },
    {
        id: "bd29",
        name: "METV",
        logo: "",
        category: "BANGLA",
        url: "http://stvlive.net:8080/metv/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bd30",
        name: "Channel S HD",
        logo: "https://i.ibb.co/QmPPKgg/20240826-231747.png",
        category: "BANGLA",
        url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/channels.stream/tracks-v1a1/mono.m3u8"
    },
    {
        id: "bd31",
        name: "Srk Tv",
        logo: "https://ibb.co.com/nPXPTPK",
        category: "BANGLA",
        url: "https://srknowapp.ncare.live/srktvhlswodrm/srktv.stream/playlist.m3u8"
    },
    {
        id: "bd32",
        name: "Time TV",
        logo: "",
        category: "BANGLA",
        url: "https://web.fredflix.fun/mac.php?cid=118&e=.m3u8"
    },
    {
        id: "bd33",
        name: "BONGO DRAMAS",
        logo: "https://i.ibb.co.com/4VtHQpf/20240907-023221.png",
        category: "BANGLA",
        url: "https://admin.himel-op.top/Join-Telegram-@HimelOP_Official/bongo-op.m3u8?id=bongo-dramas"
    }
];

// Add to global channel data
if (window.channelData) {
    window.channelData.addChannels(banglaChannels);
}