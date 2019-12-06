const axios = require('axios');

const getlugar = async(direccion) => {

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + direccion,
        headers: { 'x-rapidapi-key': 'ec058068fbmsh53bb247311a74a9p192ca5jsn8940a49fe7f4' }
    });


    const resp = await instance.get()

    if (resp.data.Results.length === 0)
        throw new Error(`No hay datos para la ciudad: ${direccion}`);

    const data = resp.data.Results[0];
    const direccionR = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccionR,
        lat,
        lng
    }

}

module.exports = {
    getlugar
}