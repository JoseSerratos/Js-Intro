var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 },
];


function saldo(){
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  if(usuarioLogueado == cuentas.nombre){
    alert(usuarioLogueado + " cuentas con un saldo de $" + cuentas.saldo)
  } else{
    const consultaSaldo = localStorage.getItem("saldoDelUsuario");
    alert(usuarioLogueado + " cuentas con un saldo de $" + consultaSaldo)
  }
  
}

function retirarEfectivo() {
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  const saldoLogueado = localStorage.getItem("saldoDelUsuario");
  let cantidadRetirar = parseInt(prompt('Ingresa la cantidad que desea retirar'))
  if(parseInt(saldoLogueado) - cantidadRetirar <= 10){
   alert('No puedes tener menos de $10 en tu cuenta bancaria')
  } else {
    let saldoRetirado = parseInt(saldoLogueado) - cantidadRetirar;
    localStorage.setItem('saldoDelUsuario', saldoRetirado);
   alert(usuarioLogueado + ' Ahora cuentas con un saldo de $' + saldoRetirado)
  }
  
}


function ingresarEfectivo() {
  const usuarioLogueado = localStorage.getItem("cuentaLogueada");
  const retiroLogueado = localStorage.getItem("saldoDelUsuario");
  let cantidadIngresar = parseInt(prompt('Ingresa la cantidad que desea depositar'))
  if(parseInt(retiroLogueado) + cantidadIngresar >= 990){
   alert('No puedes tener mas de $990 en tu cuenta bancaria')
} else {
  let saldoIngresado = parseInt(retiroLogueado) + cantidadIngresar;
  localStorage.setItem('saldoDelUsuario', saldoIngresado);
 alert(usuarioLogueado + ' Ahora cuentas con un saldo de $' + saldoIngresado);
}
}
