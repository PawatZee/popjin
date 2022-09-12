window.onload = function() {
    var img = document.getElementById("pop1")
    var count = document.getElementById("score")
    var score = 0

    function updateScore() {
        score++
        count.innerHTML = score
    }

    img.addEventListener('mousedown', function() {
        updateScore()
        img.src = '6.jpg'
    })

    img.addEventListener('mouseup', function() {
        img.src = '5.jpg'
    })
}