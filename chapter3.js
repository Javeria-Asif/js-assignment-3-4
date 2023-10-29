// PRCATICE EXERCISE 3.1
let arr1 = ["Milk", "Bread", "Apples"]

console.log(arr1.length);

arr1[1] = "Banana";
console.log(arr1);

// PRCATICE EXERCISE 3.2
let shoppinglist = []
shoppinglist.push("Milk", "Bread", "Apples")
shoppinglist.pop(2)
shoppinglist[1] = "Bananas";
let sl = shoppinglist.push("Egg")
shoppinglist.sort();
let findIndex = shoppinglist.indexOf("Milk");
console.log(findIndex);
shoppinglist.splice(1, 0, "carrots", "lettuce")
console.log(shoppinglist)

let newlist = ["juice", "pop"]

let addlist = shoppinglist.concat(newlist)
let addlist2 = addlist.concat(newlist)

console.log(addlist2)

console.log(addlist2.lastIndexOf("pop"));

// PRACTICE 3.3

// Step 1: Create an array containing three values: 1, 2, and 3.
let newarr = [1, 2, 3];
// Step 2: Nest the original array into a new array three times.
let nestarr = [
    [1, 2, 3], [1, 2, 3,], [1, 2, 3]
]
// Step 3: Output the value 2 from one of the arrays into the console.
console.log(nestarr[2][1]);

// PRACTICE 3.4
// Step 1:Create a new myCar object for a car
let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    isAutomatic: true,
}
// Step 2: Create a variable for the string value 'color
let variable = "color"
myCar[variable] = "Blue";
// Step 3: Assign a new property string value to the variable, such as 'forSale'
variable = "forSale"
myCar[variable] = true
//  Step 4: Output make and model into the console
console.log("My Car make " + myCar.make);
console.log("My Car Model " + myCar.model);
// Step 5: Output the value of forSale into the console.
console.log("My Car forsale " + myCar.forSale);

// PRACTICE 3.5
// Step 1: Create an object named people 
let people = {
    Friends: []
}

// Step 2: Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
let Friend1 = {
    firstName1: "Mishaal",
    lastname1: "Akmal Baig",
    iDvalue1: 2
}
let Friend2 = {
    firstName2: "Ayesha",
    lastname2: "Hassan",
    iDvalue2: 3
}
let Friend3 = {
    firstName3: "kaml",
    lastname3: "Mirza",
    iDvalue3: 4
}
// Step 3:Add the three friends to the friend array
people.Friends.push(Friend1, Friend2, Friend3);
// Step 4: Output it to the console.
console.log(people.Friends);

/////////////CHAPTER PROJECT //////////
// Manipulating an array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    { test: 'one', score: 55 }, ['one', 'two']];
theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World"
theList[2] = "MIDDLE"
theList.splice(4, 5)
theList.push("LAST")
console.log(theList);

// Company product catalog
let productCatalog = []
let item1 = {
    name: "Laptop",
    model: "XPS 13", 
    cost: 1200, 
    quantity: 5
}
let item2 = {
    name: "Smartphone", 
    model: "iPhone 13", 
    cost: 999, 
    quantity: 10 
}
let item3 = {
    name: "Headphones", 
    model: "Sony WH-1000XM4", 
    cost: 299, 
    quantity: 20 
}
productCatalog.push(item1,item2,item3);
console.log(productCatalog);
console.log( productCatalog[2].quantity);
let newItem={name: "Tablet", model: "iPad Air", cost: 599, quantity: 15 }
productCatalog.push(newItem)
console.log(productCatalog);
