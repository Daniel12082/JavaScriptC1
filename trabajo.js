############################################
#          TRABAJO DE JAVASCRIPT           #
############################################

function arreglo(numero,suma){
    let parejas=[]
    for (i=0;i<numero.length;i++){
        for (j=1;j<numero.length;j++){
            if(numero[i]+numero[j]==suma){
                parejas.push([numero[i],numero[j]])
        
            }
        }
    }
    return parejas
}
console.log(arreglo([2,4,3,6,9,8],10));
Realizado por: Daniel Felipe Diaz Sanchez
