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
    const imgs = ["gun.jpg", "snake.jpg", "water.jpg"]


    let user = document.querySelector("#sgw").value
    var a = "null"

    if (user == "none") {
        alert("Not Valid Choice")
    } else {
        if (user == "snake") {
            a = "snake.jpg"
            var img = document.getElementById("imgb1").src = a;
        }
        if (user == "water") {
            a = "water.jpg"
            var img = document.getElementById("imgb1").src = a;
        }
        if (user == "gun") {
            a = "gun.jpg"
            var img = document.getElementById("imgb1").src = a;
        }



        var a2 = Math.floor(Math.random() * imgs.length)
        var img2 = imgs[a2]


        document.getElementById("imgb2").src = img2;

        if (img == "gun.jpg" && img2 == "snake.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)



        }
        if (img == "snake.jpg" && img2 == "gun.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }

        if (img == "snake.jpg" && img2 == "water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)

        }
        if (img == "water.jpg" && img2 == "snake.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }
        if (img == "snake.jpg" && img2 == "water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)

        }
        if (img == "water.jpg" && img2 == "snake.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }

        if (img == "water.jpg" && img2 == "gun.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 1 wins";
            parent.appendChild(child)

        }
        if (img == "gun.jpg" && img2 == "water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "Player 2 wins";
            parent.appendChild(child)

        }

        if (img == "gun.jpg" && img2 == "gun.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "TIE";
            parent.appendChild(child)

        }
        if (img == "water.jpg" && img2 == "water.jpg") {
            var parent = document.getElementById("score")
            var child = document.createElement("li")
            child.innerText = "TIE";
            parent.appendChild(child)

        }
        if (img == "snake.jpg" && img2 == "snake.jpg") {
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
