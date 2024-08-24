
const cm = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
cm.srcObject = stream;
})
.catch(error => {
    console.error('error accessing camera:', error);
})
