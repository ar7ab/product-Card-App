let productImg = document.getElementById("productImg");

let btns = document.getElementsByClassName("btn");

btns[0].onclick = function() {
    productImg.src = `../media/black_shirt.jpg`;
    for(bt of btns) {
        bt.classList.remove("active");
    }

    this.classList.add("active");
}

btns[1].onclick = function() {
    productImg.src = `../media/green_shirt.jpg`;
    for(bt of btns) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btns[2].onclick = function() {
    productImg.src = `../media/red_shirt.jpg`;
    for(bt of btns) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btns[3].onclick = function() {
    productImg.src = `../media/white_shirt.jpg`;
    for(bt of btns) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

