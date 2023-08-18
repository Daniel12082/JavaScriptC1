class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Agregar un nodo al final de la lista
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Agregar un nodo al principio de la lista
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Eliminar un nodo con un valor específico
    remove(data) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                if (currentNode === this.head) {
                    this.head = currentNode.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                } else if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                    this.tail.next = null;
                } else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // Buscar un nodo con un valor específico
    find(data) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    // Imprimir el contenido de la lista enlazada doble
    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}