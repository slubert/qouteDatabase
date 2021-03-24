const qouteOutput = document.getElementById('qouteOutput')
const personOutput = document.getElementById('personOutput')


getQoute();
async function getQoute(){
   const response = await fetch('/api')
   const data = await response.json()
   
   console.log(data)
   qouteOutput.textContent = data.qoute
   personOutput.textContent = '-' + data.person

}
