


const date = new Date();
const hours = date.getHours();

if (hours >= 18 || hours <= 5) {
    document.querySelector("html").className = "night"
    document.querySelector("#greeting").innerHTML = "Gooood Night, it's currently"
} else {
    document.querySelector("html").className = "day"
    document.querySelector("#greeting").innerHTML = "Gooood Morning, it's currently"
}


