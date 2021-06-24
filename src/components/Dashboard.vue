<template>

  <div id="app" class="container">
    <table class="table table-bordered">
      <th>Name</th>
      <th>Age</th>
      <th>Options</th>
      <tr v-for="(row,index) in dataRows" :key="index">

        <td v-for="(value, index) in row" :key="index">
         {{ value }}
        </td>
        <td height="50px">
          <Button class="bg-success" @click="other(row)">Editar</Button>
        </td>
      </tr>

    </table>
    <button class="btn btn-primary" @click="doStuff">Do Stuff</button>
  </div>

</template>

<script>
//import {useStore} from "vuex";
import {ref} from "vue"

export default {
setup(){
//const store = useStore();

//const records = computed(()=> store.state.datostabla);

const dataRows= ref([]);
function  other(row){
  console.log(row.name,row.age);
  let myarray = dataRows.value;
  myarray.splice(row.index, 1);
  dataRows.value=myarray;

}
  function doStuff() {
    dataRows.value = [
      {
        name: 'Jeffrey',
        age: 135,
      },
      {
        name: 'Jacob',
        age: 145,
      },
      {
        name: 'Joe',
        age: 155,
      },
    ];
  }



   return{
     dataRows,
     doStuff,
     other


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
