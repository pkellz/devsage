function $(selector)
{
  const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,
    on: (event, callback) => {
      self.element.addEventListener(event, callback)
    },
    hide: ()=> {
      self.element.style.display = 'none'
    },
    attr: (name, value) => {
      if(value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
    }
  }

  return self
}

// Example library calls
$('h1').attr('class', 'new-class')

console.log($('h1').attr('class'))

$('h2').hide()

$('h3').on('click', function()
{
  alert("I was clicked")
})
