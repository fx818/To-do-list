var h1 = document.getElementsByTagName("h1")[0];
var input = document.querySelector("input");
var button = document.querySelector("button")


function fun1() {
    if (input.value.length > 0) {
        var el = document.createElement("li");
        el.appendChild(document.createTextNode(input.value));
        var parEl = document.querySelector("ul");
        parEl.appendChild(el);
        input.value = "";
    }
    else{
        window.alert("Blank character not allowed !")
    }
}




function fun2(event) {
    if (event.which === 13) {
        // event.preventDefault();
        if (input.value.length > 0) {
            var el = document.createElement("li");
            el.appendChild(document.createTextNode(input.value));
            var parEl = document.querySelector("ul");
            parEl.appendChild(el);
            input.value = "";
        }
    }
}



// function fun2(event) {
//     if (input.value.length > 0 && event.key === "Enter") {
//         event.preventDefault(); // Prevent the default form submission behavior
//         var el = document.createElement("li");
//         el.appendChild(document.createTextNode(input.value));
//         var parEl = document.querySelector("ul");
//         parEl.appendChild(el);
//         input.value = "";
//     }
// }





// function fun2(event) {
//     if (input.value.length > 0 && event.key === "Enter") {
//         var el = document.createElement("li");
//         el.appendChild(document.createTextNode(input.value));
//         var parEl = document.querySelector("ul");
//         parEl.appendChild(el);
//         input.value = "";
//     }
// }



// function fun2(event) {
//     if (input.value.length > 0 && event.which === 13) {
//         var el = document.createElement("li");
//         el.appendChild(document.createTextNode(input.value));
//         var parEl = document.querySelector("ul");
//         parEl.appendChild(el);
//         input.value = "";
//     }
// }

button.addEventListener("click", fun1)

button.addEventListener("keypress", fun2)