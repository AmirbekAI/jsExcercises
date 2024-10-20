function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { name: 'Alice', info: { age: 25, city: 'Paris' } };
const clone = deepClone(original);

console.log(clone);
