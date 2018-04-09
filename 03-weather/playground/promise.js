var asyncAdd = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (typeof a === 'number'&&typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Not numbers');
            }
        }, 2000);
    });
};

// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //resolve('Hey it works');
//          reject('It didn');
//     }, 3000);
// });

// somePromise.then((msg)=>{
//     console.log(msg);
// }, (error)=>{
//     console.log(error);
// });

//This works but this carries on if there is an error as it thinks the error has been handled in the first case and runs the second then success command
asyncAdd(2,'3').then( //should be a number not string on this line
    (res)=>{
        console.log('Result is '+res);
        return asyncAdd(res, 33);
    },
    (error)=>{ console.log(error);}
).then((res)=>{
    console.log('new answer +33 ' + res);
}, (error)=>{
    console.log(error);
});

//This catch methods looks for an error anywhere in the chain so is simpler
asyncAdd(2,3).then(
    (res)=>{
        console.log('Result is '+res);
        return asyncAdd(res, 33);
    }).then((res)=>{
        console.log('new answer +33 ' + res);
    }).catch( (error)=>{
        console.log(error);
});