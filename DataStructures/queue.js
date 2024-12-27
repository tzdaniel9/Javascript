/*The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
The first element inserted into the queue is first element to be removed
A queue of people.People enter the queue at one ned (rear/tail) and leave the queue from the other end (front/head)
Queue is an abstarct data type. It is defined by its behaviour rather tha being a mathematical model
the Queue data structure supports two main operations
 Enqueue, which adds an element to the rear/tail of the collection
 Dequeue, which removes an element from the front/head of the collection

Queue Implementation
enqueue(element) - add an element to the queue
dequeue() - remove the oldest element from the queue
peek() - get the value of the element at the front of the queue wothout removing it
isEmpty() - check the queue is empty
size() - get the number of elements in the queue
print() - visualise the elements in the queue*/

const { Shift } = require("wd/lib/special-keys")


class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())