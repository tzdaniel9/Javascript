/*A linked list is a linear data structure that includes a series of connected nodes
each node consists of a data value and a pointer that points to the nex node
The list elements can be easily inserted or removed without reallocation or re organisation of the entire structure
Random access of elemnets is not feasiblke and accessing an element has linear time complexity
The linked list data structure supports three main operations
 Insertion - to add an element at the beginning , end or at a given index in the list
 Deletion - to remove an item given its index or value
 Search - to find an element given its value

Linked List Usage
All applications of both stacks and queue are applications of linked lists
Image viewer*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.taill = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        // list is empty
        if (index < 0 || index >= this.size) {
            return null
        }
        // remove index = 0, first position
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            //remove index > 0
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value

    }

    // O(1)
    removeFromfront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    // O(1)
    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    removeValue(value) {
        // list is empty and removing node from the beginning of the list
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            // remove value in node after head
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        // list is empty
        if (this.isEmpty()) {
            return -1
        }
        // list is not empty
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

module.exports = LinkedList

/*const list = new LinkedList()
console.log('list is empty?', list.isEmpty())
console.log('list size?', list.getSize())
list.print()

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()
console.log('list size?', list.getSize())

list.removeFromfront()
list.print()

list.removeFromEnd()
list.print()*/