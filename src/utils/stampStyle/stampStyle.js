//图片样式,前端保存
const stamp = [
    {
        stampName: '热气球',
        url: 'http://printer.noerror.xyz/appImage/热气球.png'
    },
    {
        stampId: 12,
        stampName: '钥匙',
        url: 'http://printer.noerror.xyz/appImage/钥匙.png'
    },
    {
        stampName: '女士',
        url: 'http://printer.noerror.xyz/appImage/女士.png'
    },
    {
        stampName: '玫瑰',
        url: 'http://printer.noerror.xyz/appImage/玫瑰.png'
    },
    {
        stampName: '男孩',
        url: 'http://printer.noerror.xyz/appImage/男孩.png'
    },
    {
        stampName: '女孩',
        url: 'http://printer.noerror.xyz/appImage/女孩.png'
    },
    {
        stampName: '巴黎',
        url: 'http://printer.noerror.xyz/appImage/巴黎.png'
    },
    {
        stampName: '笔墨',
        url: 'http://printer.noerror.xyz/appImage/笔墨.png'
    },
    {
        stampName: '绅士',
        url: 'http://printer.noerror.xyz/appImage/绅士.png'
    },
    {
        stampName: '中国',
        url: 'http://printer.noerror.xyz/appImage/绅士.png'
    },
]

/**
 * 根据单个id匹配url
 * @param stampName
 * @returns {{stampId, url}|*}
 */
export function matchId(stampName) {
    for (let i = 0, len = stamp.length; i < len; i++) {
        if (stamp[i].stampName == stampName) {
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