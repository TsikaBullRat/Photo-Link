console.log("Where do we start")

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream=>console.log(stream))