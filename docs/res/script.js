// console.log("Where do we start")

var video = document.querySelector("#test1")

/*Setting up the camera*/
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream=>video.srcObject = stream)
/*End of cmaera setup */

/*Take pictures*/
setInterval(()=>{
    /* Taking the actual pictures */
    let canvas = document.createElement("canvas")
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    let image = canvas.toDataURL("image/jpeg")
    console.log(canvas.dataset)

    /* Sending the actual pictures*/
    var request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:4444/', true)
    request.setRequestHeader('Content-Type', 'image/jpeg')
    request.send(image)
}, 1000)
/*End of Pictures*/