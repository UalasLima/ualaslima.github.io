var operando1 = null;
var operando2 = null;
var operacao = null;
var aux = null;
var casaDecimal = false;
var id;
var resultado = null;

//A função nos fornece o id do elemento clicado e a partir dai verificamos como proceder
//Caso o valor seja uma virgula e a condição de validade seja atendida a chave casaDecimal é setada como true
function tratamento(id){
    if (id == "virgula") {
        if(operando1 == null && operando2 == null)
            alert("use a virgula somente após digitar o valor inteiro");
        else if(operando1 != null || operando2 != null)
            casaDecimal = true;
        }

    //Caso o elemento clicado seja uma operação (a operaçao será realizada fora da função pois ela é inserida pelo usuário antes do operando2)    
    else if(id == "adicao" || id == "subtracao" || id == "multiplicacao" || id == "divisao") {
        switch(id) {
            case 'adicao':
                operacao = 'adicao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '+');
                break;
            case 'subtracao':
                operacao = 'subtracao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '-');
                break;
            case 'multiplicacao':
                operacao = 'multiplicacao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '*');
                break;
            case 'divisao':
                operacao = 'divisao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '/');
                break;
            default:
                document.getElementById("visor").placeholder = 'ERRO'
                return false;
        }


    }

    //Caso o elemento seja um numeral
    else {
        //Verifica se o valor inserido é para o operando1
        if(operando1 == null)  {
            operando1 = document.getElementById(id).value;    
            operando1 = parseFloat(operando1);
            document.getElementById('visor').placeholder = operando1;
        }
        //Verifica se o usuário deseja uma casa decimal para o operando1
        else if(casaDecimal == true && operando2 == null) {
            aux = document.getElementById(id).value;
            //necessário converter o operando1 de volta para string para poder fazer uma concatenação
            operando1 = String(operando1);
            operando1 = operando1 + aux;
            aux = null;
            //Agora novamente fazemos com q o valor se torne númerico para ter o decimal
            operando1 = parseFloat(operando1);
            //Dividimos o valor por 10 para ter o decimal, a formula é que a concatenação de A e B dividido por 10 dará o valor decimal A,B
            operando1 = (operando1 / 10);
            casaDecimal = false;
            document.getElementById('visor').placeholder = operando1;
        }
        //Verifica se o valor inserido é para operando2
        else if(casaDecimal == false && operando2 == null) {
            operando2 = document.getElementById(id).value;    
            operando2 = parseFloat(operando2);
            document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + operando2);
        }
        //Verifica se o usuário deseja uma casa decimal para o operando2        
        else {
            aux = document.getElementById(id).value;
            //necessário converter o operando2 de volta para string para poder fazer uma concatenação
            operando2 = String(operando2);
            operando2 = operando2 + aux;
            aux = null;
            //Agora novamente fazemos com q o valor se torne númerico para ter o decimal
            operando2 = parseFloat(operando2);
            //Dividimos o valor por 10 para ter o decimal, a formula é que a concatenação de A e B dividido por 10 dará o valor decimal A,B
            operando2 = (operando2 / 10);
            casaDecimal = false;
            document.getElementById('visor').placeholder = (operando1 + ' op ' + operando2);
        }
    }
}

//Operações e resultados quando o botão ENTER (submit) for clicado
function op() {
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
            return false;
    }

    document.getElementById('visor').placeholder = resultado;
    operando1 = resultado;
    operando2 = null;
    operacao = null;
    aux = null;
    casaDecimal = false;
    id;
    resultado = null;
}