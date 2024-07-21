function obtenerCotizaciones() {
    const fechaHora = obtenerFechaYHora();
}

fetch("https://dolarapi.com/v1/dolares/oficial")
    .then(response => response.json())
    .then(data => {
        datosLinea1.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Dólar Oficial',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => {
        datosLinea2.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Dólar  Blue',
            data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/dolares/bolsa")
    .then(response => response.json())
    .then(data => {
        datosLinea3.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Dólar MEP', 
            data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/dolares/contadoconliqui")
    .then(response => response.json())
    .then(data => {
        datosLinea4.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Dólar CCL',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/dolares/tarjeta")
    .then(response => response.json())
    .then(data => {
        datosLinea5.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Dólar Tarjeta',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/dolares/mayorista")
    .then(response => response.json())
    .then(data => {
        datosLinea6.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Dólar Mayorista',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/dolares/cripto")
    .then(response => response.json())
    .then(data => {
        datosLinea7.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Dólar Cripto (USDT)',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/cotizaciones/eur")
    .then(response => response.json())
    .then(data => {
        datosLinea8.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Euro',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/cotizaciones/brl")
    .then(response => response.json())
    .then(data => {
        datosLinea9.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Real Brasileño',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/cotizaciones/clp")
    .then(response => response.json())
    .then(data => {
        datosLinea10.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Peso Chileno',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

fetch("https://dolarapi.com/v1/cotizaciones/uyu")
    .then(response => response.json())
    .then(data => {
        datosLinea11.push(data.value);
        actualizarTabla(fechaHora.fechaActualizada, 'Peso Uruguayo',
        data.value, datosLinea1[datosLinea1.length - 2] || 0);
    })
    .catch(err => console.error(err));

function obtenerFechaYHora() {
    const fecha = new Date();
    return {
        fechaActualizada: fecha.toLocaleDateString(),
        horaActualizada: fecha.toLocaleTimeString()
    };
}

function actualizarTabla(fecha, moneda, valor, valorAnterior) {
    const tbody = document.getElementById("data-table-body");
    const nuevaFila = document.createElement("tr");
    let icono = '';
    if (valorAnterior < valor) {
        icono = '<img src="up-arrow.png" alt="Alza" title="Alza">';
    } else if (valorAnterior > valor) {
        icono = '<img src="down-arrow.png" alt="Baja" title="Baja">';
    }
    nuevaFila.innerHTML = `
        <td>${fecha}</td>
        <td>${moneda}</td>
        <td>$${valor}</td>
        <td>$${valor}</td>
        <td>${icono}</td>
    `;
    tbody.appendChild(nuevaFila);
}

const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                    "Julio","Agosto", "Septiembre",
                    "Octubre","Noviembre", "Diciembre"];

const datosLinea1 = [];
const datosLinea2 = [];
const datosLinea3 = [];
const datosLinea4 = [];
const datosLinea5 = [];
const datosLinea6 = [];
const datosLinea7 = [];
const datosLinea8 = [];
const datosLinea9 = [];
const datosLinea10 = [];
const datosLinea11 = [];

const ctx = document.getElementById("miGrafica").getContext("2d");
new Chart(ctx, {
type: "line",
data: {
labels: etiquetas,
datasets: [

{
    label: "Dolar Oficial",
    data: datosLinea1,
    borderColor: "",
    backgroundColor: 'green',
    borderWidth: 1,
    fill: false
},
{
    label: "Dolar Blue",
    data: datosLinea2,
    borderColor: "blue",
    borderWidth: 1,
    fill: false
},
{
    label: "Dolar MEP",
    data: datosLinea3,
    borderColor: "red",
    fill: false
},
{
    label: "Dolar CCL",
    data: datosLinea4,
    borderColor: "yellow",
    borderWidth: 1,
    fill: false
},
{
    label: "Dolar Tarjeta",
    data: datosLinea5,
    borderColor: "brown",
    borderWidth: 1,
    fill: false
},
{
    label: "Dolar Mayorista",
    data: datosLinea6,
    borderColor: "purple",
    borderWidth: 1,
    fill: false
},
{
    label: "Dolar Cripto (USDT)",
    data: datosLinea7,
    borderColor: "gold",
    borderWidth: 1,
    fill: false
},
{
    label: "Euro",
    data: datosLinea8,
    borderColor: "orange",
    borderWidth: 1,
    fill: false
},
{
    label: "Real Brasileño",
    data: datosLinea9,
    borderColor: "pink",
    borderWidth: 1,
    fill: false
},
{
    label: "Peso Chileno",
    data: datosLinea10,
    borderColor: "black",
    borderWidth: 1,
    fill: false
},
{
    label: "Peso Uruguayo",
    data: datosLinea10,
    borderColor: "grey",
    borderWidth: 1,
    fill: false
},
]
}
});