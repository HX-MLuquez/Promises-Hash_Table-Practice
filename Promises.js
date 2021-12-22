// ------>>>>> PRACTICE PROMISES TYPE CLASS AND USE .then() METHOD <<<<<------
//
const obj = {
    name: 'John',
    age: 30,
    job: 'teacher',
}

let founded = false;
let found = true;

let promiseA = new Promise((resolve, reject) => {
    if (found) {
        resolve(obj);
    } else {
        reject('Not found');
    }
});

console.log('promiseA', promiseA);

promiseB = promiseA.then(data => {
    data.job = 'developer';
    return data;
}
).catch(err => {
    return err;
});

console.log('promiseB', promiseB);

promiseB.then(data => {
    console.log('promiseB.then data', data);
});
console.log('promiseB.then', promiseB.then); // [Function: then]

promiseC = promiseB.then(data => {
    data.job = 'designer';
    return data;
}
).catch(err => {
    return err;
}
);
console.log('promiseC', promiseC);

//--------------------------------------------------------------------------

