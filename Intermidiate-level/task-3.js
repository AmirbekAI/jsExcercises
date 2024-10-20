const obj = {
    name: 'John',
    age: 30
};

// Add property
obj.address = '123 Street Name';
console.log(obj);

// Update property
obj.age = 31;
console.log(obj);

// Remove property
delete obj.address;
console.log(obj);
