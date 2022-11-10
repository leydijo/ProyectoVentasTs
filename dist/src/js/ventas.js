const mostrarData = (data) => {

let url = 'http://localhost:8000/api/facturas'; //1 orgin de dta
let showData = document.getElementById(`data`);
fetch(url)//2 solicitud a esa url
    .then(response => response.json()) // 3 se resuelve la promesa y la pasa a json
    .then(data => {
        
            console.log(data)
            //document.getElementById('data').style.display = 'block';
            let body = '';
            for(let i =  0; i< data.length; i++){
                body += `<tr>
                            <td>${data[i].id}</td>
                            <td>${data[i].Id_cliente}</td>
                            <td>${data[i].Fecha_factura}</td>
                            <td>${data[i].Id_Vendedor}</td>
                            <td>${data[i].Valor}</td>
                        </tr> `
            
            
            showData.innerHTML =body
           
        
        }
    }) // 4 leemos el objeto data y se muestra por consola
    .catch(error => console.log(error))// 5Se atrapa el error

}
    

