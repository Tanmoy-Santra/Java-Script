
function flattenObject(obj, prefix = "") {
    let result = {};

    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            // Recursively flatten nested objects
            Object.assign(result, flattenObject(obj[key], prefix + key + "."));
        } else {
            // Store non-object values directly
            result[prefix + key] = obj[key];
        }
    }
    
    return result;
}



const obj = {
    name: "Alice",
    details: {
        age: 25,
        address: {
            city: "New York",
            zip: 10001
        }
    }
};


const flattened = flattenObject(obj);

console.log(flattened);
