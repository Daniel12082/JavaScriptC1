class Stack{
    constructor(){
        this.Stack = [];
}
toArray(){
    return[this.Stack]
}
Push(element) {
    this.Stack.push(element);
    return this.Stack;
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
    return this.Stack;
}
clear() {
    this.Stack = [];
}
indexOf(element) {
    return this.Stack.lastIndexOf(element);
}
}