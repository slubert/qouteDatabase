const sendButton = document.getElementById('sendButton')
const qouteInput = document.getElementById('qouteInput')
const personInput = document.getElementById('personInput')

sendButton.addEventListener('click', send)
window.addEventListener('keydown', (e) => {
   if(e.keyCode == 13){
      send();
   }
})

async function send() {
   if(qouteInput.value == '' || personInput.value == ''){
      alert('plese fill out the boxes')
   }
   else{
      console.log('sent ' + qouteInput.value)
      console.log('sent ' + personInput.value)
   
      const options = {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({qoute: qouteInput.value, person: personInput.value})
      }
   
      const res = await fetch('/send', options)
      const data = await res.json()
      console.log(data.status)
      
      qouteInput.value = ''
      personInput.value = ''
   }

}