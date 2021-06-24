<template>

<h5 class="modal-title" id="exampleModalLabel">Eddit Customer</h5>

        <div class="modal-body row" >
          <label style="text-align: left" for="Id">Id: </label>
          <input disabled="true" type="text" placeholder="Customer Id" id="Id">

          <label style="text-align: left" for="TName">Name: </label>
          <input v-model="newname" type="text" placeholder="Insert Name" id="TName">

          <label style="text-align: left" for="TLast">Last Name: </label>
          <input v-model="newlastname" class="mb-2"  type="text" placeholder="Insert Last Name" id="TLast">

          <div class="row">
          <div class="dropdown d-inline-block mb-2">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             Select your gender
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" @click="newgen">Female</a></li>
              <li><a class="dropdown-item" @click="newgen">Male</a></li>
            </ul>
          </div>
          <input v-model="newgender" class="d-inline-block" type="text" disabled="true" placeholder="Non Gender Selected" id="genderSave">
          </div>

          <label style="text-align: left" for="DOB">DOB: </label>
          <input v-model="newdob" type="text" placeholder="Insert Date Of Birth" id="DOB">

          <label style="text-align: left" for="ph1">CellPhone: </label>
          <input v-model="newphone1" type="text" placeholder="Insert Cell Phone Number" id="ph1">

          <label style="text-align: left" for="ph2">Home Phone: </label>
          <input v-model="newphone2" type="text" placeholder="Insert Home Phone Number" id="ph2">

          <label style="text-align: left" for="ph3">Office Phone: </label>
          <input v-model="newphone3" type="text" placeholder="Insert Office Phone Number" id="ph3">

          <label style="text-align: left" for="Damount">Office Phone: </label>
          <input v-model="newamount" type="text" placeholder="Insert Debt Amount" id="Damount">

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="save" type="button" class="btn btn-primary">Save</button>


</template>

<script>
//import {useStore} from "vuex";
import {ref} from "vue"

export default {
setup(){
//const store = useStore();

//const records = computed(()=> store.state.datostabla);

const dataRows= ref([]);


//variables to save
  const newid= ref("");
  const newname= ref("");
  const newlastname= ref("");
  const newgender= ref("");
  const newdob= ref("");
  const newphone1= ref("");
  const newphone2= ref("");
  const newphone3= ref("");
  const newamount= ref("");

  const Enewid= ref("");
  const Enewname= ref("");
  const Enewlastname= ref("");
  const Enewgender= ref("");
  const Enewdob= ref("");
  const Enewphone1= ref("");
  const Enewphone2= ref("");
  const Enewphone3= ref("");
  const Enewamount= ref("");


function save(){
  let mynewarray = dataRows.value;
  let newlastid = mynewarray.length;
  newlastid=newlastid+1;
  const newitem = {
    Id: newlastid,
    FirstName: newname.value,
    LastName: newlastname.value,
    Gender:newgender.value,
    DOB:newdob.value,
    PhoneNumbers: [
      {Number:newphone1.value},
      {Number:newphone2.value},
      {Number:newphone3.value}
    ],
    DebtAmount:newamount.value
  }
  mynewarray.push(newitem);
  dataRows.value=mynewarray;
}
function update(){
  const newitem = {
         Id: Enewid.value,
        FirstName: Enewname.value,
        LastName: Enewlastname.value,
        Gender:Enewgender.value,
        DOB:Enewdob.value,
        PhoneNumbers: [
          {Number:Enewphone1.value},
          {Number:Enewphone2.value},
          {Number:Enewphone3.value}
        ],
        DebtAmount:Enewamount.value
      }
      let index = Enewid.value;
      let mynewarray = dataRows.value;
      mynewarray[index-1]=newitem;

  dataRows.value=mynewarray;
  console.log("executed");
  console.log(dataRows.value);
}
function  other(row){
  console.log(row.name,row.age);
  let myarray = dataRows.value;
  myarray.splice(row.index, 1);
  dataRows.value=myarray;
}
function doStuff() {
    dataRows.value = [
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

  }
function newgen(){
  if (newgender.value=="Male"){
    newgender.value="Female";
  }else{
    newgender.value="Male";
  }

}
function newgenE(){
    if (Enewgender.value=="Male"){
      Enewgender.value="Female";
    }else{
      Enewgender.value="Male";
    }

  }
  function PasstoModal(row){

        Enewid.value=row.Id;
        Enewname.value=row.FirstName;
        Enewlastname.value=row.LastName;
        Enewgender.value=row.Gender;
        Enewdob.value=row.DOB;
        Enewphone1.value=row.PhoneNumbers[0].Number;
        Enewphone2.value=row.PhoneNumbers[1].Number;
        Enewphone3.value=row.PhoneNumbers[2].Number;
        Enewamount.value=row.DebtAmount;

  }

   return{
     newid,
     newname,
     newlastname,
     newgender,
     newdob,
     newphone1,
     newphone2,
     newphone3,
     newamount,

     dataRows,

     Enewid,
     Enewname,
     Enewlastname,
     Enewgender,
     Enewdob,
     Enewphone1,
     Enewphone2,
     Enewphone3,
     Enewamount,

     doStuff,
     newgen,
     newgenE,
     PasstoModal,
     save,
     update,
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
