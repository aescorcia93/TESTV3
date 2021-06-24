<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    </tbody>
  </table>


  <div >
    <h3>{{ msg }} WELCOME, PLEASE INSERT NAME AND PASSWORD</h3>
    <h4>{{ $store.state.titleExample }}</h4>

    <div class="mb-4">
    <label for="micaja1">Name:</label>
    <input id="micaja1" type="text" v-model="myuser">
   </div>
  <div>
     <label for="micaja2">Password:</label>
    <input id="micaja2" type="password" v-model="mypass">
  </div>

    <button @click="checklogin" class="bg-primary mt-3" style="background-color: blue;font-size: 15px">ENVIAR</button>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed,ref} from "vue"
import router from "../router";

export default {
setup(){
const store = useStore();
const user = computed(()=> store.state.user);
const password = computed(()=> store.state.password);
const records = computed(()=> store.state.loginuserrecord);
const myuser= ref("");
const mypass= ref("");

function checklogin(){

if ((user.value).toString()===myuser.value){
  if ((password.value).toString() === mypass.value){
    alert("Welcome Andres");
    router.push("/dashboard");
  }
}
store.dispatch('UserRecordMutation',myuser.value+Date.now());
console.log(records.value);
  }

   return{
     user,
     password,
     myuser,
     mypass,
     checklogin

   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
