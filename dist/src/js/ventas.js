const { response } = require("express");

const mostrarData= (data) => {

let url = 'http://localhost:8000/api/hospital'; //1 orgin de dta
let showData = document.getElementById(`data`);
fetch(url)//2 solicitud a esa url
    .then(response => response.json()) // 3 se resuelve la promesa y la pasa a json
    .then(data => {
            console.log(data)
            //document.getElementById('data').style.display = 'block';
            let body = '';
            for(let i =  0; i< data.facturas.length; i++){
                body += `<tr>
                            <td>${data.facturas[i].id}</td>
                            <td>${data.facturas[i].Id_cliente}</td>
                            <td>${data.facturas[i].Fecha_factura}</td>
                            <td>${data.facturas[i].Id_Vendedor}</td>
                            <td>${data.facturas[i].Valor}</td>
                        </tr> `
            
            
            showData.innerHTML =body
           
        
        }
    }) // 4 leemos el objeto data y se muestra por consola
    .catch(error => console.log(error))// 5Se atrapa el error

}
    
const jsBuscar= () => {

    //obtenemos el valor insertado a buscar
    buscar = $("#busqueda").prop("value")
    
    //utilizamos esta variable solo de ayuda y mostrar que se encontro
    encontradoResultado = false;

    //realizamos el recorrido solo por las celdas que contienen el código, que es la primera
    $("#miTabla ").find('td:eq(0)').each(function () {

        //obtenemos el codigo de la celda
        codigo = $(this).html();
        let body = '';
        // console.log(codigo)
        // console.log('codigo')
        //comparamos para ver si el código es igual a la busqueda
        if (codigo == buscar) {
            console.log(codigo)
            console.log(buscar)
            //aqui ya que tenemos el td que contiene el codigo utilizaremos parent para obtener el tr.
            trDelResultado = $(this).parent();
            console.log(trDelResultado)
            //ya que tenemos el tr seleccionado ahora podemos navegar a las otras celdas con find
            id = trDelResultado.find("td:eq(0)").html();
            console.log(trDelResultado)
            client = trDelResultado.find("td:eq(1)").html();
            date = trDelResultado.find("td:eq(2)").html();
            vendendor = trDelResultado.find("td:eq(3)").html();
            total = trDelResultado.find("td:eq(4)").html();
           
            // console.log('nombre')
            //mostramos el resultado en el div
            $("#data").html( body += `<tr>
            <td>${id}</td>
            <td>${client}</td>
            <td>${date}</td>
            <td>${vendendor}</td>
            <td>${total}</td>
        </tr> `)

            encontradoResultado = true;

        }

    })

    //si no se encontro resultado mostramos que no existe.
    if (!encontradoResultado)
        $("#data").html("No existe el código: " + buscar)
}

// save formulario
//const sendData= (data) => {
let nombre = document.getElementById('formulario');
nombre.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('click');
    
})

// fetch('http://localhost:8000/api/hospital',{
//     method : 'POST',
//     headers:{
//       'Content-Type'  :'application/json',
      
//     },
//     body: JSON.stringify({
//         nombre :  nombre
//     })
   
// })
// .then((data) =>{

// })
// .catch(error => console.log(error))
// }