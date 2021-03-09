let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.sort((despesaA, despesaB) => despesaB.valor - despesaA.valor)

    despesas.map((despesa) => {
        divDespesas.innerHTML += `
            <div>
                <span>valor: R$${despesa.valor}</span> |
                <span>tipo: ${despesa.tipo}</span> |
                <span>descrição: ${despesa.descricao}</span>
            </div>
        `
    })
}


// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.map((despesa) => {
        if (despesa.tipo === 'alimentação') { gastoAlimentacao += despesa.valor }
        else if (despesa.tipo === 'utilidades') { gastoUtilidades += despesa.valor }
        else if (despesa.tipo === 'viagem') { gastoViagem += despesa.valor }
    })

    gastoTotal = arrDespesas.reduce((accumulator, currentValue) => accumulator + currentValue.valor, 0)

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = document.getElementById('valorFiltroMin')
    let valorMax = document.getElementById('valorFiltroMax')

    let despesasFiltradas // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    if (validarValor(valorMin) && validarValor(valorMax) && validarTipo(tipoFiltro)) {
        valorMin = Number(valorMin.value)
        valorMax = Number(valorMax.value)

        if (valorMin >= 0 && valorMax >= 0) {
            if (valorMin < valorMax) {

                despesasFiltradas = arrDespesas.filter((despesa) => {
                    return (despesa.tipo === tipoFiltro && despesa.valor >= valorMin && despesa.valor <= valorMax)
                })
            } else {
                alert('Valor mínimo deve ser menor que o máximo')
            }
        } else {
            alert('So é permitido valores positivos no filtro')
        }
    } else {
        alert('Todos os campos do filtro devem ser preenchidos')
    }

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}