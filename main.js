class Comedor {
  constructor(nombre, cantidad, ubic) {
    this.nombre = nombre.toUpperCase();
    this.cantidad = parseInt(cantidad);
    this.ubic = ubic;
  }
  nombreComedor() {
    alert('Selecciono ' + this.nombre);
  }
  cantidadComedor() {
    alert('La cantidad de comensales es de ' + this.cantidad);
  }
  ubicComedor() {
    alert('La Ubiacion es ' + this.ubic);
  }
}

function ingreseNumComedor() {
  let numIngresado = prompt('Ingrese Numero de Comedor');
  return parseInt(numIngresado);
}
function plataDonada() {
  let plata = prompt('Cuanto desea donar');
  alert('Usted dono $' + plata);
  return parseInt(plata);
}
function menu() {
  let seleccionMenu = prompt('Seleccione Menu\n 1:Donar plata\n 2:Cantidad Comensales\n 3:Ubicacion del Comedor\n 4:Registrar un nuevo comedor\n 5:Mostrar nombres Comedores');
  return parseInt(seleccionMenu);
}
const comedor1 = new Comedor('El Gomero', 50, 'Barrancas de Belgrano');
const comedor2 = new Comedor('Manitos', 30, 'Parque Centenario');
const comedor3 = new Comedor('Doña Tota', 60, 'Villa Fiorito');

/* AGREGAR UN NUEVO COMEDOR POR ARRAY */
/* const comedores = [comedor1, comedor2, comedor3];
comedores.push(new Comedor(prompt('Ingrese nombre comedor'), prompt('Ingrese Cantidad de Comensales'), prompt('Ingrese Barrio')));
console.log(comedores); */
/* ---------------------------------- */

let menuSeleccionado = '';
const comedores = [comedor1, comedor2, comedor3];

// SELECCIONE MENU
while ((menuSeleccionado = menu()) != 'ESC') {
  switch (menuSeleccionado) {
    case 1:
      //MENU DONAR PLATA
      switch (ingreseNumComedor()) {
        case 1:
          comedor1.nombreComedor();
          plataDonada();
          break;
        case 2:
          comedor2.nombreComedor();
          plataDonada();
          break;
        case 3:
          comedor3.nombreComedor();
          plataDonada();
          break;
        default:
          alert('Ingrese Numero del 1 al 3');
          break;
      }
      break;
    //MENU CANTIDAD DE COMENSALES
    case 2:
      switch (ingreseNumComedor()) {
        case 1:
          comedor1.nombreComedor();
          comedor1.cantidadComedor();
          break;
        case 2:
          comedor2.nombreComedor();
          comedor2.cantidadComedor();
          break;
        case 3:
          comedor3.nombreComedor();
          comedor3.cantidadComedor();
          break;
        default:
          alert('Ingrese Numero del 1 al 3');
          break;
      }
      break;
    //MENU UBICACION
    case 3:
      switch (ingreseNumComedor()) {
        case 1:
          comedor1.nombreComedor();
          comedor1.ubicComedor();
          break;
        case 2:
          comedor2.nombreComedor();
          comedor2.ubicComedor();
          break;
        case 3:
          comedor3.nombreComedor();
          comedor3.ubicComedor();
          break;
        default:
          alert('Ingrese Numero del 1 al 3');
          break;
      }
      break;

    //MENU REGISTRAR NUEVO COMEDOR
    case 4:
      comedores.push(new Comedor(prompt('Ingrese nombre comedor'), prompt('Ingrese Cantidad de Comensales'), prompt('Ingrese Barrio')));
      alert('Ingresaste un nuevo comedor');
      break;

    //MENU MOSTRAR NOMBRE COMEDORES
    case 5:
      const nombresCom = comedores.map((el) => {
        //LO CAMBIA POR OTRO
        return el.nombre;
      });
      alert(nombresCom);
      break;
    default:
      alert('Menu incorrecto, vuelva a intentarlo');
      break;
  }
}
