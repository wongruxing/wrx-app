import service from "..";
//获取歌单详情页的数据
export function getMusicItemList(data) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}
//获取歌单的所有歌曲
export function getItemList(data) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}
//获取歌曲的歌词
export function getMusicLyric(data) {
    return service({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}
// 获取Mv播放
export function getMvVideo(data) {
    return service({
        method: "GET",
        url: `/mv/url?id=${data}`
    })
}

export function getMvVideoList(data) {
    return service({
        method: "GET",
        url: `/simi/mv?mvid=${data}`
    })
}
export function getMvdetail(data) {
    return service({
        method: "GET",
        url: `/mv/detail?mvid=${data}`
    })
}
// 获取榜单
export function getTolist() {
    return service({
        method: "GET",
        url: `/toplist`
    })
}
// 获取歌手
export function getSinger() {
    return service({
        method: "GET",
        url: `/top/artists`,
    })
}
// 获取歌手歌曲
export function getSingerSong(data) {
    return service({
        method: "GET",
        url: `/artist/top/song?id=${data}`,
    })
}
// 推荐歌曲
export function getPersonaLized() {
    return service({
        method: "GET",
        url: `/personalized/newsong`,
    })
}
// 推荐Mv
export function getRecommendMv() {
    return service({
        method: "GET",
        url: `/personalized/mv`,
    })
}
// 排行榜
export function getTop() {
    return service({
        method: "GET",
        url: `/dj/recommend`,
    })
}