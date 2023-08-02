// function play() {
//     for (let i = 1; i <= 10; i++) {
//         go(i);
//     }



// }

// function go(i) {
//     setTimeout(function() {
//         run()
//     }, 2000 * i - i);
// }









function run() {
    const imgs = ["images/gun.jpg", "images/snake.jpg", "images/water.jpg"]


    let user = document.querySelector("#sgw").value
    var a = "null"

    if (user == "none") {
        alert("Not Valid Choice")
    } else {
        if (user == "snake") {
            a = "images/snake.jpg"
            var img = document.getElementById("imgb1").src = a;
        }
        if (user == "water") {
            a = "images/water.jpg"
            var img = document.getElementById("imgb1").src = a;
        }
        if (user == "gun") {
            a = "images/gun.jpg"
            var img = document.getElementById("imgb1").src = a;
        }



        var a2 = Math.floor(Math.random() * imgs.length)
        var img2 = imgs[a2]


        document.getElementById("imgb2").src = img2;

        if (img == "images/gun.jpg" && img2 == "images/snake.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)



        }
        if (img == "images/snake.jpg" && img2 == "images/gun.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }

        if (img == "images/snake.jpg" && img2 == "images/water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)

        }
        if (img == "images/water.jpg" && img2 == "images/snake.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }
        if (img == "images/snake.jpg" && img2 == "images/water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)

        }
        if (img == "images/water.jpg" && img2 == "images/snake.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }

        if (img == "images/water.jpg" && img2 == "images/gun.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)

        }
        if (img == "images/gun.jpg" && img2 == "images/water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }

        if (img == "images/gun.jpg" && img2 == "images/gun.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "TIE";
            parent.appendChild(child)

        }
        if (img == "images/water.jpg" && img2 == "images/water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "TIE";
            parent.appendChild(child)

        }
        if (img == "images/snake.jpg" && img2 == "images/snake.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "TIE";
            parent.appendChild(child)

        }
    }

}

function stop() {
    location.reload()
}