

  const tope = 3;
  var empleados = [];

  function guardarDatos(){

      if (empleados.length < tope) {

          let name = document.getElementById("nombre").value;
          let surname = document.getElementById("apellido").value;
          let tel = document.getElementById("celular").value;
          let cum = document.getElementById("cumpleaños").value;
          let pre = document.getElementById("precio").value;

          var persona = { name , surname, tel , cum, pre };

      empleados.push(persona);
    
      }

          else {
              document.getElementById("btnGuardar").setAttribute("disabled","disabled");
empleados.sort((a,b)=>b.cum -a.cum);
            for (let i=0; i< empleados.length; i++){

                document.getElementById("resultado").innerHTML =  document.getElementById("resultado").innerHTML + empleados[i].name + " " + empleados[i].surname+
                " "+ empleados[i].tel + " " + empleados[i].cum+ " " + empleados[i].pre + "<p>";



            }

            var total= empleados.reduce((total,index)=>total+parseInt(index.pre),0);
            document.getElementById("total").innerHTML =  document.getElementById("total").innerHTML + "el total es:" + total;
             
          }
      }

      
    
