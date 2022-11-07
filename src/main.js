function buttonClicked() {
    input = document.getElementById("brand").value
    input2 = document.getElementById("category").value
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${input}&product_category=${input2}`)
    .then (response => response.json())
    .then (data => {
        // this code will try again
        document.querySelector('#search').value = 'Try again';
        // this code will call function if clicked twice
        const search = document.getElementById('search');
        search.addEventListener('click', () => {
        // page reload button
        location.reload()
        });
        // this code will display product not found 
        document.getElementById("data").append("Product is Not Found")
        // this code will display image
        if (data[0].image_link != null){
            src = data[0].image_link
            img = document.createElement('img')
            img.src = src
            document.getElementById("dispimg").append(img)
        } else {
            document.getElementById("dispimg").append("Image : Unvailable")
        }
        // this code will display name
        if (data[0].name != null){
            document.getElementById("dispname").append("Name : " + data[0].name)
        } else {
            document.getElementById("dispname").append("Name : Unvailable")
        }
        // this code will display type
        if (data[0].product_type != null){
            document.getElementById("disptype").append("Type : " + data[0].product_type)
        } else {
            document.getElementById("disptype").append("Type : Unvailable")
        }
        // this code will display category
        if (data[0].category != null){
            document.getElementById("dispcat").append("Category : " + data[0].category)
        } else {
            document.getElementById("dispcat").append("Category : Unvailable")
        }
        // this code will display rating
        if (data[0].rating != null){
            document.getElementById("disprate").append("Rating : " + data[0].rating)
        } else {
            document.getElementById("disprate").append("Rating : Unvailable")
        }
        // this code will display description
        if (data[0].description != null){
            document.getElementById("dispdesc").append("Description : " + data[0].description)
        } else {
            document.getElementById("dispdesc").append("Description : Unvailable")
        }
        // this code will display price
        if (data[0].price != null){
            document.getElementById("disppri").append("Price : $" + data[0].price)
        } else {
            document.getElementById("disppri").append("Price : Unvailable")
        }
       
        console.log(data)
        
  })}