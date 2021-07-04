/*
    Queues
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

class Queue
{
    constructor()
    {
        this.items = []
    }

    enqueue(value)
    {
        this.items.push(value)
    }

    dequeue()
    {
        if(this.items.length > 0)
            return this.items.shift()
    }

    peek()
    {
        if(this.items.length > 0)
            return this.items[0]
    }

    print()
    {
        for(let i = 0; i < this.items.length; i++)
            console.log(this.items[i])
    }
}

const q = new Queue()

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

q.dequeue(30)

console.log(q.peek())

q.print()