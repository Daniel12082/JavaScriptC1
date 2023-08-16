class Stack{
    constructor(){
        this.Stack = [];
}
toArray(){
    return[this.Stack]
}
push(element) {
    const newNode = new Stack(element)
    this.Stack.push(element);
    newNode.next = this.top
    this.top=newNode;
    this.size++;
}
pop(){
    return this.Stack.pop();
}
peek(){
    return this.Stack[this.Stack.length - 1];
}
size(){
    return this.Stack.length;
}
isEmpty(){
    return this.Stack.length === 0;
}
print() {
    console.log(this.Stack)
}
clear() {
    this.Stack = [];
}
indexOf(element) {
    return this.Stack.lastIndexOf(element);
}
}
const stack = new Stack
stack.push(1)
stack.print()
stack.push(2)
stack.print()