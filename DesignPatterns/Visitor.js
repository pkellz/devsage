/*
    Visitor Design Pattern -> https://youtu.be/x-Gx0Ym1Di0
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

function Employee(name, salary)
{
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function()
  {
    return this.salary
  },
  setSalary: function(sal)
  {
    this.salary = sal
  },
  accept: function(visitorFunction)
  {
    visitorFunction(this)
  }
}
/////////////////////////////////////////////

const devsage = new Employee("DevSage", 10000)
console.log(devsage.getSalary())

function ExtraSalary(emp)
{
  emp.setSalary(emp.getSalary() * 2)
}

devsage.accept(ExtraSalary)
console.log(devsage.getSalary())
