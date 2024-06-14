// your code here
const url = "http://localhost:3000/cakes"

function getCakes(){
    fetch(url)
    .then(resp => resp.json())
    .then(cakeArray => cakeArray.forEach(cakeObject => {
        //! 1. Build a new <li> tag
        const li = document.createElement("li")
        //! 2. set the innerText of the li to the cake name
        li.innerText = cakeObject.name
        //! 3. append the newly created <li> to the correct place onto the page
        const target = document.querySelector("#cake-list")
        target.append(li)
    }))
}

getCakes()