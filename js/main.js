var cuentas = [
  { nombre: "Mali", saldo: 200, password :"1234" },
  { nombre: "Gera", saldo: 290, password: "4589"},
  { nombre: "Maui", saldo: 67, password: "5469" },
];
  
  function comparacion () {
    let password = document.getElementById('password').value;
    let user = document.getElementById('username').value;
   
   
  
    for(let i = 0;  i < cuentas.length; i++) {
      console.log(cuentas[i]);
      if ((user == cuentas[i].nombre) && (password == cuentas[i].password)){
        localStorage.setItem("cuentaLogueada", cuentas[i].nombre)
        localStorage.setItem("saldoDelUsuario", cuentas[i].saldo)
        return window.location.href = 'principal.html';
        
        
      } 
    }
  }
  const input=document.getElementById("username")
  console.log(input.value)
  let form = document.getElementById("form")
  form.addEventListener ("submit" , function(event) 
  {
    event.preventDefault()
    console.log(input.value)
    comparacion(input.value);

  })
  
  