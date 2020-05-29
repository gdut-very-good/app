//if you want to get user information, you can get those from this store
export default {
    state: {
        "receiverId": null,
        "sendTime":"",
        "content":"",
        "paper":"",
        "header":"标题",
        "stampId": null,
        "isSend":true
    },
    getters: {
        // getBackground: state => state.background,
        // getCity: state => state.city,
        // getMail: state => state.mail,
        // getNickName: state => state.nickname,
        // getPhoto: state => state.photo,
        // getSignature: state => state.signature,
        // getUserId: state => state.userId,
        // getWord: state => state.word
    },
    mutations: {
        updateLetterState(state, newObj) {
            Object.assign(state, newObj)
        }
    },
    actions: {},
}
