let contextMenu = document.querySelector('.context-menu')

let xPosition, yPosition

function showContext(event) {
    event.preventDefault()
    xPosition = event.clientX
    yPosition = event.clientY
    contextMenu.style.left = `${xPosition}`
    contextMenu.style.top = `${yPosition}`
    contextMenu.style.display = 'block'
    console.log(xPosition, yPosition);
}


function hiddenContext() {
    contextMenu.style.display = 'none'
}

document.body.addEventListener('contextmenu', showContext)
document.body.addEventListener('click', hiddenContext)
document.body.addEventListener('keydown', hiddenContext)