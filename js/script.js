var operando1 = 0;
var operando2 = 0;
var operacao = null;
var startOperando1 = false;
var startOperando2 = false;
var operador = false;
var id;
var resultado = null;
var contVirgulaOperando1 = 0;
var contVirgulaOperando2 = 0;

//A função nos fornece o id do elemento clicado e a partir dai verificamos como proceder
//Caso o valor seja uma virgula e a condição de validade seja atendida a chave casaDecimal é setada como true
function tratamento(id){
    if ((id == "virgula" && (startOperando1 == false && startOperando2 == false)) || (id == "virgula" && startOperando2 == false && operador == true) || (startOperando1 == true && resultado != null && id == "virgula" && operador == false))
        alert("Use a virgula somente após digitar o valor inteiro");
    else if((id == "adicao" || id == "subtracao" || id == "multiplicacao" || id == "divisao") && startOperando1 == false)
        alert("Use um operador apenas após inserir o primeiro oprerando");
    else if((id == "adicao" || id == "subtracao" || id == "multiplicacao" || id == "divisao") && startOperando1 == true && startOperando2 == true)
        alert("Atenção: Uma operação por vez, tecle ENTER para o resultado");
    else if((id == "adicao" || id == "subtracao" || id == "multiplicacao" || id == "divisao") && startOperando1 == true && startOperando2 == false) {
		operador = true;
        switch(id) {
            case 'adicao':
                operacao = 'adicao';
                document.getElementById('visor').placeholder = operando1 + '+';
                break;
            case 'subtracao':
                operacao = 'subtracao';
                document.getElementById('visor').placeholder = operando1 + '-';
                break;
            case 'multiplicacao':
                operacao = 'multiplicacao';
                document.getElementById('visor').placeholder = operando1 + '*';
                break;
            case 'divisao':
                operacao = 'divisao';
                document.getElementById('visor').placeholder = operando1 + '/';
                break;
            default:
                document.getElementById("visor").placeholder = 'ERRO'
                return false;
        }


    }
    else {
        console.log("id é " + id);
        if (resultado != null && operador == false) {
            resultado = null;
            startOperando1 = false;
            operando1 = 0;
            contVirgulaOperando1 = 0;
        }
		if(operador == false) {
            if(id == "virgula") {
                contVirgulaOperando1++;
                console.log("algorismo inserido "+id);
            }
            else
                console.log("algorismo inserido "+id);
            if(contVirgulaOperando1 < 2 || id != "virgula"){
                if(startOperando1 == false) {
                    operando1 = document.getElementById(id).value;
                    document.getElementById('visor').placeholder = operando1;   
                    startOperando1 = true; 
                }
                else {
                operando1 = operando1 + document.getElementById(id).value;
                document.getElementById('visor').placeholder = operando1;
                }
            }
            else
                console.log("Tentativa de inserir mais de uma virgula no operando1");
		}
		else {
            if(id == "virgula") {
                contVirgulaOperando2++;
                console.log("algorismo inserido "+id);
            }
            else
                console.log("algorismo inserido "+id);
            if(contVirgulaOperando2 < 2 || id != "virgula"){
                if (operando2 == false) {
                    operando2 = document.getElementById(id).value;
                    document.getElementById('visor').placeholder = document.getElementById('visor').placeholder + operando2;    
                    startOperando2 = true;
                }
                else {
                    operando2 = operando2 + document.getElementById(id).value;
                    document.getElementById('visor').placeholder = document.getElementById('visor').placeholder + document.getElementById(id).value;
                }
            }
            else
            console.log("Tentativa de inserir mais de uma virgula no operando2");
		}       
    }
}

//Operações e resultados quando o botão ENTER (submit) for clicado
function op() {
    contVirgulaOperando2 = 0;
	operando1 = parseFloat(operando1);
	operando2 = parseFloat(operando2);
    switch(operacao) {
        case 'adicao':
            resultado = operando1 + operando2;
            break;
        case 'subtracao':
            resultado = operando1 - operando2;
            break;
        case 'multiplicacao':
            resultado = operando1 * operando2;
            break;
        case 'divisao':
            resultado = operando1 / operando2;
            break;
        default:
            document.getElementById("visor").placeholder = 'ERRO'
            operando1 = 0;
            operando2 = 0;
            operacao = null;
            startOperando1 = false;
            startOperando2 = false;
            operador = false;
            id;
            resultado = null;
            contVirgulaOperando1 = 0;
            contVirgulaOperando2 = 0;
            return false;
    }

    document.getElementById('visor').placeholder = resultado;
    operando1 = String(resultado);
    operando2 = 0;
    operacao = null;
    operador = false;
    startOperando2 = false;
}