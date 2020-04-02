var idGlobal=1;

function agregarTarea(idColumna){

    var textoTarea;
    var listaObjetivoElement;

    if(idColumna=="tarjetas-por-hacer"){

        textoTarea = document.getElementById("input-por-hacer").value;
        document.getElementById("input-por-hacer").value="";
        listaObjetivoElement = document.getElementById("tarjetas-por-hacer");

    }else{
        if(idColumna=="tarjetas-hechas"){

            textoTarea = document.getElementById("input-hecha").value;
            document.getElementById("input-hecha").value="";

            listaObjetivoElement = document.getElementById("tarjetas-hechas");
            
        }else{
            alert("Error en html")
        }
    }

    if(textoTarea.length!=0){
        
        var divTarjetaTarea = document.createElement("div");
        var idTarjeta='tarea'+idGlobal;

        divTarjetaTarea.classList.add("tarea");
        divTarjetaTarea.setAttribute('id',idTarjeta);
        
        divTarjetaTarea.innerHTML="<span>"+textoTarea+"</span>"+
                                    "<a class='link-mover' href=\"javascript:mover('"+idTarjeta+"')\" > Mover </a>";

        listaObjetivoElement.appendChild(divTarjetaTarea);
        idGlobal++;
    }


}

function mover(idDivTarea){

    
    div = document.getElementById(idDivTarea);
    idPadre=div.parentElement.id;

    if(idPadre=='tarjetas-por-hacer'){

        document.getElementById('tarjetas-hechas').appendChild(div);
    }else{

        document.getElementById('tarjetas-por-hacer').appendChild(div);
    }
}

