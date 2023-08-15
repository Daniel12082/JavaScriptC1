class stack{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    size(){
        return this.items.length;
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        if(this.isEmpty()){
            return "la pila esta vacia";
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "la pila esta vacia";
        }
        return this.items[this.items.length-1];
    }
    
}

const pila = new stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());