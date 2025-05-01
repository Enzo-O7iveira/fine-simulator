   //Criando o sistema de Usúario na interface do site
   alert('Sistemas de Multa DETRAN')
        var userName = prompt('Insira seu nome')
        var userCPF = prompt('Insira seu CPF')    
        var verification = userCPF.length
            while(verification < 11 || verification > 11){
                alert('[ERRO] A quantidade de caracteres inseridas está inválida')
                var againCPF = prompt('Insira novamente')  
            }
            var confirm = confirm(`Você é o Usuario ${userName} dono do CPF: ${userCPF}?`)
            alert('Seja Bem-Vindo')
        //Utilizando a tag "if" para realizar o mesmo processo acima
       
        /*
        if(verification < 11 || verification > 11){
                alert('[ERRO] A quantidade de caracteres inseridas está inválida')
                var again = prompt('Insira seu CPF novamente')
                    if(again < 11 || again > 11){
                        alert('[ERRO] A quantidade de caracteres inseridas está inválida')
                    }
            }else {
                var confirm = confirm(`Você é o Usuario ${userName} dono do CPF: ${userCPF}?`)
    alert('Seja Bem-Vindo')
            }*/

        //Ínicio do simulador de Multa
    var vel = document.querySelector('div#txtvel')
    var restwo = document.getElementById('restwo')
    //Chamando a função que verifica a velocidade do carro
    function verificar(){
        var resultado = document.getElementById('res')
        var inserir = Number(txtvel.value)
        resultado.innerHTML = (`Sua velocidade atual é de ${inserir}Km/H`)
        //Criando um "if" para delegar se foi multado ou não
    var limiteMax = 200
    if(inserir >= limiteMax){
        restwo.innerHTML = (`Multado!!! Seu limite atual é de ${inserir}Km/h`)
        document.body.style.background = 'red'
    }else if (inserir < 200){
        restwo.innerHTML = (`Passou a ${inserir}Km/h, portanto não será multado`)
        document.body.style.background = 'green'
    }

}
