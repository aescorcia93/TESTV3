import {createStore} from 'vuex';


const store = createStore({
state:{
    customers:[],
    stateExample:[],
    titleExample:"MI FIRST STATE",
    loginuserrecord:[],
    user:"Andres",
    password:"mypass123",
    datostabla:[]
    },
    getters:{
            recordsHistory(state){
                return state.loginuserrecord
            }
    },
    mutations:{
         UserRecord(state,record){
             state.loginuserrecord.push(record);
         }
    },
    actions:{
        UserRecordMutation({commit},record){
            commit('UserRecord',record);
        }
    },
    modules:{

    }
});
export  default store;