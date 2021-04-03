function acesso(form){
/*
checa nome e senha - caso digite com letras maiúscula, sera convertido para letras minúscula
*/
form.nome.value = form.nome.value.toLowerCase()
form.senha.value = form.senha.value.toLowerCase()

if (form.nome.value == "donizete" && form.senha.value == "123" || form.nome.value == "jonas" && form.senha.value == "456" || form.nome.value == "bruna" && form.senha.value == "789" || form.nome.value == "junior" && form.senha.value == "101112" ) 
{location = "acesso.html" }

   else{
	   form.nome.value=""
	   form.senha.value=""
	   alert("Dados Incorretos")
   }
}