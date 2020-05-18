//if you want to get user information, you can get those from this store
export default {
    state: {
        background: null,
        city: '广东省中山市',
        mail: '1749238278@qq.com',
        nickname: '约翰塞纳',
        password: null,
        photo: null,
        signature: '此时不报，时刻未到',
        userId: 6,
        username: '小余',
        word: '我真是叼了'
    },
    getters: {
        getBackground: state => state.background,
        getCity: state => state.city,
        getMail: state => state.mail,
        getNickName: state => state.nickname,
        getPhoto: state => state.photo,
        getSignature: state => state.signature,
        getUserId: state => state.userId,
        getWord: state => state.word
    },
    mutations: {
        updateUserState(state, newObj) {
            Object.assign(state, newObj)
        }
    },
    actions: {},
}
