import {createStore} from 'vuex';


const store = createStore({
state:{
    dataRows:[],
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
         },
        Initialdata(state){
            const data = [
                {
                    Id: 1,
                    FirstName: "Jhon",
                    LastName: "Doe",
                    Gender:"Male",
                    DOB:"May 4th, 1990",
                    PhoneNumbers: [
                        {Number:"(123) 456 789"},
                        {Number:"(321) 444 555"},
                        {Number:"(317) 444 555"}
                    ],
                    DebtAmount:50000
                },
                {
                    Id: 2,
                    FirstName: "Marcos",
                    LastName: "Perez",
                    Gender:"Male",
                    DOB:"Jun 9th, 2001",
                    PhoneNumbers: [
                        {Number:"(123) 214 444"},
                        {Number:"(321) 333 555"},
                        {Number:"(317) 222 555"}
                    ],
                    DebtAmount:75000
                },
                {
                    Id: 3,
                    FirstName: "Mary",
                    LastName: "Alens",
                    Gender:"Female",
                    DOB:"Dec 14th, 1999",
                    PhoneNumbers: [
                        {Number:"(123) 111 300"},
                        {Number:"(321) 557 555"},
                        {Number:"(317) 474 515"}
                    ],
                    DebtAmount:10550
                }
            ];
            state.dataRows=data;
        },
        Finaldata(state,payload){
            state.dataRows=payload;
        }
    },
    actions:{
        UserRecordMutation({commit},record){
            commit('UserRecord',record);
        },
        Initialdatatable({commit}){
            commit('Initialdata');
        },
        Finaldatatable({commit},payload){
            commit('Finaldata',payload);
        }

    },
    modules:{

    }
});
export  default store;