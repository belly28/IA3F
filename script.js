const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Pergunta 1",
        alternativas: [
            {texto: "sim",
            afirmação:"Afirmação da alternativa 1"}, 

            {texto: "não",
            afirmação:"Afirmação da alternativa 2"}]
    },
    { 
        enunciado: "Pergunta 2",
        alternativas: [
            {texto: "sim",
            afirmação:"Afirmação da alternativa 1"}, 
                
            {texto: "não",
            afirmação:"Afirmação da alternativa 2"}]
    },
    { 
        enunciado: "Pergunta 3",
        alternativas: [
            {texto: "sim",
            afirmação:"Afirmação da alternativa 1"}, 
                
            {texto: "não",
            afirmação:"Afirmação da alternativa 2"}]
    },
]

let posicao = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=>respostaSelecionada(alternativa){
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
