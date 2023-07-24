var boton1 = document.getElementById("boton1")
boton1.onclick = function(){
    let Nombredoc = document.getElementById("namedoc").value;
    let Apelllidodoc = document.getElementById("lastnamedoc").value;
    let Numero_ceduladoc = document.getElementById("iddoc").value;
    let Consultoriodoc = document.getElementById("Consultoriodoc").value;
    let Correo_electronicodoc = document.getElementById("emaildoc").value;
    console.log(Nombredoc, Nombredoc.length)
    if (Nombredoc.length > 0 && Apelllidodoc.length > 0 && Numero_ceduladoc.length > 0 && Consultoriodoc.length > 0 && Correo_electronicodoc.length > 0 ) {
        alert("LLeno los campos correctamente");
    } else {
        alert("Error, llene los campos");
    }
    console.log(Nombredoc, Nombredoc.length)

}
var boton2 = document.getElementById("boton2")
boton2.onclick = function(){
    let Nombreper = document.getElementById("nameper").value;
    let Apelllidoper = document.getElementById("lastnameper").value;
    let Numero_cedulaper = document.getElementById("idper").value;
    let Edadper = document.getElementById("edadper").value;
    let Telefonoper = document.getElementById("telefonoper").value;
    console.log(Nombreper, Nombreper.length)
    if (Nombreper.length > 0 && Apelllidoper.length > 0 && Numero_cedulaper.length > 0 && Edadper.length > 0 && Telefonoper.length > 0 ) {
        alert("LLeno los campos correctamente");
    } else {
        alert("Error, llene los campos");
    }
    console.log(Nombreper, Nombreper.length)

}