function toggleMenu(){ // nome da função
	var menu = document.getElementById('nav'); // selecionar id do menu
	if(menu.style.display !='block'){ // compara status do display 
		menu.style.display = 'block'; // caso seja diferente de block ficar block
	}else{ // caso contrário 
		menu.style.display = 'none'; // alterar display none caso ele estaja block
	}
}
