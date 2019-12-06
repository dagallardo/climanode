const argv = require("yargs")
    .options({
        direccion: {
            alias: "d",
            desc: "Contiene el nombre de la ciudad de la que se quiere obtener el clima",
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}