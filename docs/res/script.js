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
    let image = canvas.toDataURL("image/png")

    /* Sending the actual pictures*/
    var request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:4444/', true)
    request.setRequestHeader('Content-Type', 'image/png')
    request.send(image)
    console.log("It's sending my request")
}, 10000)
/*End of Pictures*/