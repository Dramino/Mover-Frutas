var total=0
function arrastrar(evento){
	evento.dataTransfer.setData("texto",evento.target.id);
	
}

function soltar(evento){
	evento.preventDefault();
	var data = evento.dataTransfer.getData("texto");
	if (data<7){
		evento.target.appendChild(document.getElementById(data));
		document.getElementById("resultado").innerHTML="¡Correcto!"
		total++
		if (total==6){
			document.getElementById("resultado").innerHTML="¡Has ganado!"
		}
	}else{
		document.getElementById("resultado").innerHTML="¡Incorrecto!"
		}
    
}

function permitirSoltar(evento){
	evento.preventDefault();
}