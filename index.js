const viagem = {
    lo: [
        "São Paulo", 
        "Rio de Janeiro", 
        "Curitiba", 
        "Salvador", 
        "Belo Horizonte", 
        "Gramado"
    ],

    ld: [
        "São Paulo", 
        "Rio de Janeiro", 
        "Curitiba", 
        "Salvador", 
        "Belo Horizonte", 
        "Santo Antonio de Jesus"
    ],

    classe: [
        "Executiva", 
        "Convencional", 
        "Semi leito"
    ]
};

function check() {
    const lo = document.getElementById("lo").value;
    const ld = document.getElementById("ld").value;
    const idaVolta = document.getElementById("ida_volta").checked;

    if (idaVolta && lo === ld) {
        alert('Passagem de ida e volta não disponível para essas cidades!');
    };
};

function enviar() {
    const lo = document.getElementById("lo").value;
    const ld = document.getElementById("ld").value;
    const qtd_passagem = document.getElementById("qtd_passagem").value;
    const classe = document.getElementById("classe").value;
    const idaVolta = document.getElementById("ida_volta").checked;

    const erros = [
        {condicao: !viagem.lo.includes(lo), mensagem: 'Cidade de origem não encontrada!'},
        {condicao: !viagem.ld.includes(ld), mensagem: 'Cidade de destino não encontrada!'},
        {condicao: qtd_passagem <= 0, mensagem: 'Quantidade de passagem inválida!'},
        {condicao: !viagem.classe.includes(classe), mensagem: 'Classe incorreta!'},
        {condicao: idaVolta && lo === ld, mensagem: 'Passagem de ida e volta não disponível para essas cidades!'}
    ];

    const erroMensagem = erros.filter(erro => erro.condicao).map(erro => erro.mensagem).join('\n');

    if (erroMensagem) {
        alert(erroMensagem);
    } else {
        alert(`Fará uma viagem saindo de: ${lo}, indo para: ${ld}, na classe: ${classe}`);
    }
};

