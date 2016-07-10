var form = document.getElementById("form-contact");

var otrosInput = document.getElementsByName("como-conocido"); //array de elementos

//Introducir en tu código de forma dinámica
var inputOtros = document.createElement('input');
inputOtros.setAttribute("id", "otros");
inputOtros.setAttribute("type", "text");
inputOtros.setAttribute("name", "otros");
inputOtros.setAttribute("placeholder", "¿By Twitter?");
inputOtros.setAttribute("required", "");


for (var i = 0; i < otrosInput.length; i++){
	otrosInput[i].addEventListener('click', function(){
		if (this.value == 'otros'){
			this.parentNode.appendChild(inputOtros);
		} else {
			this.parentNode.removeChild(inputOtros);
		}
	});
}
		
form.addEventListener("submit", function(evt){
	var inputNombre = document.getElementById("nombre");
	var inputEmail = document.getElementById("email");
	var inputPhone = document.getElementById("telephone");
	var inputTextArea = document.getElementById("message");
	/*Máximo de 150 palabras*/
	var textAreaText = inputTextArea.value; //Coge el valor de la cadena que tenga el textarea
	var numberCaracters = textAreaText.split(" ");

	//Diccionario
	var conocidosRadioInput = {
		"conocido_universidad": document.getElementById("conocido_universidad"),
		"conocido_master": document.getElementById("conocido_master"),
		"conocido_futbol": document.getElementById("conocido_futbol"),
		"conocido_juerga": document.getElementById("conocido_juerga"),
		"conocido_otros": document.getElementById("conocido_otros"),
	};

	if (inputNombre.checkValidity() == false){
		alert("Escribe tu nombre");
		inputNombre.focus();
		evt.preventDefault(); //No me envía el formulario si da error
		return false;
	}
	//Con validar uno basta
	if (conocidosRadioInput.conocido_universidad.checkValidity() == false){
		alert("Introduce cómo me has conocido");
		evt.preventDefault();
		return false;
	}
	//input dinamico
	if (document.getElementById('otros')){
		if (document.getElementById('otros').checkValidity() == false){
			alert("Escribe cómo me has conocido");
			document.getElementById('otros').focus();
			evt.preventDefault();
			return false;
		}
	}

	if (inputEmail.checkValidity() == false){
		alert('Escribe tu email');
		email.focus();
		evt.preventDefault();
		return false;
	}

	if (inputPhone.checkValidity() == false){
		alert('Escribe tu teléfono');
		inputPhone.focus();
		evt.preventDefault();
		return false;
	}

	if (inputTextArea.checkValidity() == false){
		alert('Escribe tu comentario');
		inputTextArea.focus();
		evt.preventDefault();
		return false;
	} else if (numberCaracters.length > 150){
		alert('Demasiadas palabras: Máximo de 150 palabras');
		inputTextArea.focus();
		evt.preventDefault();
		return false;
	}
});

