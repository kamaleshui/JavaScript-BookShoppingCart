/**
 * Created by kammy on 1/20/2017.
 */
function myfunction(){

 var x= document.getElementsByClassName("login").value;
 var y= document.getElementsByClassName("pwd").value;

    if(x==y){
        alert("success");
        document.location.href="home.html";
    }else{
        alert("not success");
    }

}

var shoppingCart = [];
function displayShoppingCart(){
    var ListOfProducts=document.getElementById("ListOfProducts");
    //ensure we delete all previously added rows from ordered products table
    while(ListOfProducts.rows.length>0)
        {
        ListOfProducts.deleteRow(0);
          }

    //variable to hold total price of shopping cart
    var cart_total_price=0;
    //iterate over array of objects
    for(var price in shoppingCart){
        //add new row
        var row=ListOfProducts.insertRow();
        //var col=ListOfProducts.insertCell();
        //create three cells for product properties
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
      //  var cart_total_price=row.insertCell(3);
        var cellDiscount =row.insertCell(3);
        var PriceAfterDiscount=row.insertCell(4);
       // var cartTotal=col.insertCell(2);
        cellPrice.align="right";
        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[price].Name;
        cellDescription.innerHTML = shoppingCart[price].Description;
        cellPrice.innerHTML += shoppingCart[price].Price;
        cellDiscount.innerHTML=shoppingCart[price].Discount;
        PriceAfterDiscount.innerHTML=shoppingCart[price].PriceAfterDiscount;
        //cartTotal.innerHTML=cellPrice.innerHTML;
    }

    //fill total cost of our shopping cart
    document.getElementById("cartTotal").innerHTML=cart_total_price;

}
function Discount()
{
    document.getElementById("shoppingCart").innerHTML=shoppingCart[product].Price*shoppingCart[product].Discount;
}

function AddtoCart(name,description,price,discount,priceafterDiscount){
    //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name=name;
    singleProduct.Description=description;
    singleProduct.Price=price;
    singleProduct.Discount=discount;
   // singleProduct.Discount=priceafterDiscount;
    //Add newly created product to our shopping cart
    shoppingCart.push(singleProduct);
   // shoppingcart.pop(singleProduct);
    //call display function to show on screen
    displayShoppingCart();
    Discount();

}
