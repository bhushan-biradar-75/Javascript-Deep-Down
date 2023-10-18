
const cache = new Map();

const sumOfNo = sum = (a,b) => {
    console.log(cache   )
    if(cache.has('result'))
    {
        console.log("Getting Data From local storage")
     return cache.get('result')
    } else{
        console.log("getting data from main function")
        let result = null;
        result = a + b;
        cache.set("1" ,result)
        console.log("chece",cache)
        return result
    }
}
let a = 5;
let b = 15;
console.time()
let functionRes = sumOfNo(a,b);
console.log(functionRes)
console.timeEnd()
// console.log("storage",CacheStorage)
// const cacheStorage = caches.open('my-cache').then(cache => cache.add('some'))
// console.log("final cache",cacheStorage.then(resolve,reject => console.log("resolve",resolve)))


// caches.open('my-cache').then(cache => {
//     cache.add('/index.html');
//   });