/*
    Iterator Design Pattern -> https://www.youtube.com/watch?v=c85EStPZR8M
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

const items = [1, false, "Devsage", 3.14]

function Iterator(items)
{
  this.items = items
  this.index = 0
}

Iterator.prototype = {
  hasNext: function()
  {
    return this.index < this.items.length
  },
  next: function()
  {
    return this.items[this.index++]
  }
}

const iter = new Iterator(items)

console.log(iter.hasNext())

while(iter.hasNext())
  console.log(iter.next())

console.log(iter.hasNext())
