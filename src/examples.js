{
    // <ul id="example-1">
    //     <li v-for="item in items">
    //         {{ item.mensaje }}
    //     </li>
    // </ul>

    // <ul id="example-2">
    //     <li v-for="(item, index) in items">
    //         {{ MensajePadre }} - {{ index }} - {{ item.mensaje }}
    //     </li>
    // </ul>



    // <ul id="v-for-object" class="demo">
    //     <li v-for="value in object">
    //         {{ value }}
    //     </li>
    // </ul>
    // new Vue({
    //     el: '#v-for-object',
    //     data: {
    //         object: {
    //             primerNombre: 'John',
    //             apellido: 'Doe',
    //             edad: 30
    //         }
    //     }
    // })


    //-----------------------------------------TABLER EXAMPLE
    // <div id="app" class="container">
    //     <table class="table">
    //         <tr v-for="row in dataRows">
    //             <td v-for="(value, key) in row">
    //                 {{ key }} : {{ value }}
    //             </td>
    //         </tr>
    //     </table>
    //     <button class="btn btn-primary" @click="doStuff">Do Stuff</button>
    // </div>


            // doStuff () {
            //     this.dataRows = [
            //         {
            //             name: 'Jeffrey',
            //             age: 135,
            //         },
            //         {
            //             name: 'Jacob',
            //             age: 145,
            //         },
            //         {
            //             name: 'Joe',
            //             age: 155,
            //         },
            //     ];
            // }


                dataRows: [
                    {
                        name: 'Jim',
                        age: 35,
                    },
                    {
                        name: 'Jill',
                        age: 45,
                    },
                    {
                        name: 'John',
                        age: 55,
                    },
                ]

}