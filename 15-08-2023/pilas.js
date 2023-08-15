class persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    saludar(){
        console.log( `Hola compañeros mi nombre es : ${this.nombre} y tengo ${this.edad} años`)
    }
}
const persona1 = new persona("Camilo" , 19);
const persona2 = new persona("Mariana" , 20);

persona1.saludar();
persona2.saludar();

class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null;
        this.size=0;
    }
    push(value){
        const newnode = new node(value);
        newnode.next=this.top;
        this.top=newnode;
        this.size++;
    }
}
