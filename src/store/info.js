import firebase from 'firebase'
export default{
    state: {
        info: {}
    },
    mutations:{
        setInfo(state, info){
            state.info = info
        },
        clearInfo(state){
            state.info = {}
        }
    },
    actions:{
        async fetchInfo(contex){
            try{
                const uid = await contex.dispatch('getUid');
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                contex.commit('setInfo', info)
            }catch(e){
                console.error(e)
            }
            
        }
    },
    getters:{
        info: s => s.info
    }
}