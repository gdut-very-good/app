//图片样式,前端保存
const stamp = [
    {
        stampId: 12,
        url: 'http://printer.noerror.xyz/appImage/post_1.png'
    },
    {
        stampId: 13,
        url: 'http://printer.noerror.xyz/appImage/post_2.png'
    },
    {
        stampId: 14,
        url: 'http://printer.noerror.xyz/appImage/post_3.png'
    },
    {
        stampId: 15,
        url: 'http://printer.noerror.xyz/appImage/post_4.png'
    },
    {
        stampId: 16,
        url: 'http://printer.noerror.xyz/appImage/post_5.png'
    },
]

/**
 * 根据单个id匹配url
 * @param stampId
 * @returns {{stampId, url}|*}
 */
export function matchId(stampId) {
    for (let i = 0, len = stamp.length; i < len; i++) {
        if (stamp[i].stampId == stampId) {
            return stamp[i]
        }
    }
}

/**
 * 根据stampId匹配返回邮票列表
 * @param stampArr,传入stampId数组
 * @returns {[]}
 */
export function matchStamp(stampArr) {
    const stamp = []
    stampArr.forEach(item => {
        stamp.push(matchId(item))
    })
    return stamp
}