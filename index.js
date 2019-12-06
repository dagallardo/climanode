const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


/* const milugar = lugar.getlugar(encodeURL)
    .then(console.log)
    .catch(console.log); */

//console.log(milugar);
/* clima.getClima(milugar.lat, milugar.lng)
    .then(console.log)
    .catch(console.log);
 */
//console.log(encodeURL);

const getinfo = async(ciudad) => {
    try {
        const encodeURL = encodeURI(ciudad);
        const coord = await lugar.getlugar(encodeURL);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${ciudad} es ${temp}`;
    } catch (e) {
        return `El clima de ${ciudad} no se pudo determinar`;
    }
}


getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log);