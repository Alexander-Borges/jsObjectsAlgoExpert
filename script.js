// Objects are the most basic data structure in JS aside from the primitive data types.
// Purpose is to create key-value pairs
const website = {
    name: "AlgoExpert",
    rating: 5,
    founders: ['Clement','Antoine'],
};

const obj = new Object();
obj.name = "Alex";
console.log(obj)


console.log(website);
console.log(website.name);// traverses through the object based on the key
console.log(website['name']);// does the same thing. Useful for a multi word key

website.name = "FrontendExpert";
console.log(website.name);
console.log();

website.foo = 'bar';
console.log(website);// displaying the ability to add elements to your object
console.log();

delete website.foo;// self- explanatory but this deletes the selected element
console.log(website)
console.log();

function Website(name, rating, founders) {
    this.name = name;
    this.rating = rating;
    this.founders = founders;
}

const FrontendExpert = new Website("BlockchainExpert", 5,["Alex"]);
console.log(FrontendExpert)
console.log()

const id = Symbol("id");
const id2 = Symbol("id");// Primitive Data type with different unique identifiers 
// Hidden from most iteration functions 
// May want to use a symbol to a value to an object that we got back from a third party API. We want to make sure that our new property does not interfere  with the third party API's code
const obj2 = {
    [id]: 1234,
    id: "hello",
};

console.log(obj2);

//console.log("name" in website);// creates a boolean if we have a key for element input
console.log(website.hasOwnProperty("name"));

// Methods

const newWebsite = {
    name: "Github",
    rating: 5,
    founder: ["John"],
    sayHello() {
        console.log("hello");
    },
    get getRating() {
        return this.rating * 2;
    },
    set setRating(value) {
        this.rating = value;
    }
};

//newWebsite.sayHello();
//console.log(newWebsite.getRating);
//newWebsite.setRating = 6;
//console.log(newWebsite.getRating);

const obj3 = {
    foo: "bar",
    [Symbol("id")]:0,
    __proto__: newWebsite,
};

console.log(obj3.name);
console.log("====================================")
console.log(Object.keys(obj3));

Object.entries(obj3).forEach(function([key,value]) {
    console.log(key,value);
})

for (key in obj3) { // Includes Inherited properties
    console.log(key);
}


Object.freeze(website); // Freeze makes your object immutable
// isFrozen() shows if your object is frozen using a Boolean

// seal() is very similar but properties can still be changed but cannot create new properties

const newerWebsite = {
    name: 'linkedin',
    rating: 4,
    founder: ['Michael']
};

console.log(newerWebsite.toString());
newerWebsite.toString = function() {
    return "Hello World";
}
console.log(newerWebsite.toString());
console.log(newerWebsite.valueOf());
newerWebsite.valueOf = function() {
    return 2;
}
console.log(newerWebsite - 1);

