
// const cache = new Map();

// const sumOfNo = sum = (a,b) => {
//     if(cache.has('result'))
//     {
//         console.log("Getting Data From local storage")
//         return cache.get('result')
//     } else{
//         console.log("getting data from main function")
//         let result = null;
//         result = a + b;
//         cache.set("result" ,result)
//         console.log("chece",cache)
//         return result
//     }
//     console.log(cache )
// }
// let a = 5;
// let b = 15;
// console.time()
// let functionRes = sumOfNo(a,b);
// console.log(functionRes)
// console.timeEnd()


// const cache = new Map();

// const sumOfNo = (a, b) => {
//     let cache = {};
//     if (res) {
//         console.log("Getting Data From local storage" , res);
//         return res[0]
//     } else {
//         console.log("Getting data from the main function");
//         let result = a + b;
//         let res = [];
//         res.push(result)
//         cache[result];
//         console.log("cache", res[0]);
//         return result;
//     }
//     // console.log(cache);
// };

// let a = 5;
// let b = 15;

// console.time();
// let functionRes = sumOfNo(a, b);
// console.log(functionRes);
// console.timeEnd();

// console.log("storage",CacheStorage)
// const cacheStorage = caches.open('my-cache').then(cache => cache.add('some'))
// console.log("final cache",cacheStorage.then(resolve,reject => console.log("resolve",resolve)))


// caches.open('my-cache').then(cache => {
//     cache.add('/index.html');
//   });



const getSum = async (a,b) => {
    let res = {
        a : "amar",
        b : "narhse"
    }
    console.log("a",res)
    const cheche = await caches.open('sum')
    const response = new Response(res)
    console.log("response",response.Response)
    const store = cheche.put('/sum',response)
    const cacheOpen = await caches.open('sum')
    console.log("cachepen",cacheOpen)
    const cachedResponse = await cacheOpen.match('sum')
    console.log("store--->", await cachedResponse)
    return res;
}
console.time()
let result = getSum(5,5);
console.log(result)
console.timeEnd()

















