Enlazada : class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    append(data){//Agregar dato en Cola
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
        }else{
            let current = this.head;
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
    }

    prepend(data){//Agregar dato en Cabeza
        const newNode = new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }

    delete(data){//Eliminar dato
        if(!this.head){
            return;
        }
        if (this.head.data === data){
            this.head=this.head.next;
            return;
        }
        let current = this.head;
        while(current.next){
            if(current.next.data === data){
                current.next=current.next.next;
                break;
            }
            current = current.next;
        }
    }

    display(){//Mostrar cabeza
        let current = this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }


    }
}