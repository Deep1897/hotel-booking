let data;
async function getdata() {
    let query = document.getElementById("query").value;
    let url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;

    // fetch(url).then(function(res) {
    //     return res.json();
    // }).then(function(res) {
    //     append(res.hotels)
    //     let data = res.hotels
    //     console.log(res.hotels)
    // }).then(function(err) {
    //     console.log(err);
    // })

    let res = await fetch(url)
    let data = await res.json();
    append(data.hotels);
    return data;




}


function append(data) {
    data.forEach(function(el) {
        let container = document.getElementById("hotels-list");

        var div = document.createElement("div")

        var img = document.createElement("img");
        img.src = el.Images.one;
        var title = document.createElement("h3");
        title.innerText = el.Title;
        var price = document.createElement("p");
        price.innerText = el.Price;

        var AC = document.createElement("p")
        AC.innerText = el.Ac;

        var rating = document.createElement("p")
        rating.innerText = el.Rating;

        var btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.addEventListener("click", function() {
            getbook(el);
        })
        div.append(img, title, price, AC, rating, btn);

        container.append(div)

    })

}


bookdata = [];


function getbook(el) {
    bookdata.push(el);
    localStorage.setItem("bookdata", JSON.stringify(bookdata));
    window.location.href = "checkout.html"
}



async function lToh() {
    data = await getdata();
    data = data.hotels
    console.log(data)
    data = data.sort((a, b) => {
        return a.Price - b.Price
    })
    let container = document.getElementById("hotels-list");
    container.innerHTML = null;
    append(data)


}



async function hTol() {
    data = await getdata();
    data = data.hotels
    console.log(data)
    data = data.sort((a, b) => {
        return b.Price - a.Price
    })
    let container = document.getElementById("hotels-list");
    container.innerHTML = null;
    append(data)


}



async function AC() {
    data = await getdata();
    data = data.hotels
    console.log(data)
    data = data.filter((el) => {
        return el.Ac == true;
    })
    let container = document.getElementById("hotels-list");
    container.innerHTML = null;
    append(data)


}


async function nonAc() {
    data = await getdata();
    data = data.hotels
    console.log(data)
    data = data.filter((el) => {
        return el.Ac == false;
    })
    let container = document.getElementById("hotels-list");
    container.innerHTML = null;
    append(data)


}