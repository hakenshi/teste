// const cameraButton = document.querySelector('#start-camera')
// const video = document.querySelector("#video")
// const takePicture = document.querySelector("#click-photo")
// const canvas = document.querySelector("#canvas")
// let stream

// cameraButton.addEventListener("click", async () => {
//   stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
//   video.srcObject = stream
// })

// takePicture.addEventListener('click', () => {
//   canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
//   const imageUrl = canvas.toDataURL('images/jpeg')
//   if(stream){
//     stream.getTracks().forEach(track => track.stop())
//     }
//   video.srcObject = null
// })

const openDialog = document.querySelector('.open-button')
const dialog = document.querySelector('dialog')

openDialog.addEventListener('click', () => {
  dialog.showModal()
})