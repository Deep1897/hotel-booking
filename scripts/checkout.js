let data = JSON.parse(localStorage.getItem("bookdata"));

function append(data) {
    data.forEach(function(el) {
        let container = document.getElementById("hotel_details");
        var main = document.createElement("div")


        var div1 = document.createElement("div")

        var img1 = document.createElement("img");
        img1.src = el.Images.one;
        div1.append(img1)

        var div2 = document.createElement("div")

        var img2 = document.createElement("img");
        img2.src = el.Images.two;
        div2.append(img2);
        main.append(div1, div2)
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

        container.append(main, title, price, AC, rating);



    })

}


append(data)