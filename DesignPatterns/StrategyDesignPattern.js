/*
    Strategy Design Pattern -> https://www.youtube.com/watch?v=SicL4fYCz8w
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

function Fedex(pkg)
{
  this.calculate = () =>
  {
    // Fedex calculations ...
    return 2.45
  }
}

function UPS(pkg)
{
  this.calculate = () =>
  {
    // UPS calculations ...
    return 1.56
  }
}

function USPS(pkg)
{
  this.calculate = () =>
  {
    // USPS calculations ...
    return 4.5
  }
}

function Shipping()
{
  this.company = ''
  this.setStrategy = company =>
  {
    this.company = company
  }
  this.calculate = pkg => {
    return this.company.calculate(pkg)
  }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const shipping = new Shipping()
const pkg = { from: "Alabama", to: "Georgia", weight: 1.56 } // Dummy package

shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(pkg))

shipping.setStrategy(ups)
console.log("UPS: " + shipping.calculate(pkg))

shipping.setStrategy(usps)
console.log("USPS: " + shipping.calculate(pkg))
