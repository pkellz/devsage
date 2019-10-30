/*
    Singleton Design Pattern -> https://www.youtube.com/watch?v=JKNjfDCNPa4
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

const Singleton = (function(){
  let pManager

  function ProcessManager() { /*...*/ }

  function createProcessManager()
  {
    pManager = new ProcessManager()
    return pManager
  }

  return {
      getProcessManager: () =>
      {
        if(!pManager)
          pManager = createProcessManager()
        return pManager
      }
  }
})()

const singleton = Singleton.getProcessManager()
const singleton2 = Singleton.getProcessManager()

console.log(singleton === singleton2) // true
