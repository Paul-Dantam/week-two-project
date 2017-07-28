// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1() {
  var prices = []
  for (var i = 0; i < data.length; i++) {
    prices.push(data[i].price);
  }
  function getSum(total, num) {
    return total + num;
  }
  var avgPrice = (prices.reduce(getSum) / data.length);
  console.log("The average price is $" + avgPrice.toFixed(2))
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  var pricePoint = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      pricePoint.push(data[i].title)
    }

  } for (var i in pricePoint) {
    console.log(pricePoint[i]);
  }


}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  var name
  var price
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      name = data[i].title;
      price = data[i].price;
    }
  } console.log(name + " costs " + price + " pounds.")
}

// 4: Display a list of all items who are made of wood.
function question4() {
  var wooden = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      wooden.push(data[i].title)
    }
  } for (var i in wooden) {
    console.log(wooden[i] + "is made of wood.");
  }
}

// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.

// function question5() {
//   var name = []
//   var materialQuantity = []
//   var materialType = []
//   for (var i = 0; i < data.length; i++) {
//     if (data[i].materials.length >= 8) {
//       name.push(data[i].title);
//       materialQuantity.push(data[i].materials.length);
//       materialType.push(data[i].materials)
//     }
//   } console.log(name[0] + " has " + material[0])
// }

// and then i learned how to make a DTO


function question5() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      var theOcho = {};

      theOcho.title = data[i].title + ' has ' + data[i].materials.length + ' materials:';
      for (let k = 0; k < data[i].materials.length; k++) {
        theOcho.materialsList += ' - ' + data[i].materials[k] + '\n';
      }

      console.log(theOcho.title + '\n' + theOcho.materialsList)
    }
  }
}





// 6: How many items were made by their sellers?
// Answer:
function question6() {
  var self_made = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made == "i_did") {
      self_made++;
    }
  } console.log(self_made + " items were made by their sellers.")
}
