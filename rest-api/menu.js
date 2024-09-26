readline = require('readline');
const e = require('cors');
const http = require('http');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function choice(choiceArguments) {

}
function menuPrincipal() {
    opciones = `1: Gestionar diagnósticos
    2: Gestionar programas
    3: Gestionar usuarios
    4: Gestionar trabajadores
    5: salir
    `;
    console.log(opciones);
    rl.question("seleccione una opción", (respuesta) => {
        switch (respuesta) {
            case '1':
                menuDiagnosticos();
                break;
            case '2':
                menuProgramas();
                break;
            case '3':
                menuUsuarios();
                break;
            case '4':
                menuTrabajadores();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log("opción inválida");
        }
    });
}

function menuDiagnosticos() {
    console.clear();
    console.log("en construcción");
    function pause() {
menuPrincipal();
rl.input.off('keypress', pause);
    }
    rl.input.on('keypress', pause);
}

function menuProgramas() {
    console.log("aquí van los programas");
    menuPrincipal();
}

function menuUsuarios() {
    console.log("aquí el menú usuarios");
    menuPrincipal();
}
function menuTrabajadores() {
    console.log("Aquí lo de trabajadores    ");
    menuPrincipal();
}
menuPrincipal();