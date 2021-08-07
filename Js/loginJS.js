

function validar() {
	
	var usuario = document.getElementById("usuario");
	var contra = document.getElementById("contra");

	if ((usuario.value=="admin") && (contra.value=="umg")) 
	{
		window.location.href = 'cartelera.html';

	}else{
		alert("Error de Ingreso");
	}

} 
