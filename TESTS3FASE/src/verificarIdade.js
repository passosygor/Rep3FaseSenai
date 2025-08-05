export function verificarIdade(idade){
    if(typeof idade !== "Number" || idade < 0){
        return "Erro"
    }
    if(idade >= 18) return "Maior"
    if(idade < 18) return "Menor"
}