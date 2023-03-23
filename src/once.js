const once=(fn)=>{
    let cache;
    return (...args)=>{
        if(cache){
            return false
        }else {
           return  cache=fn.apply(this,args)
        }

    }
}
const tempFn=once((a,b)=>{return a+b})
console.log(tempFn(1,2))
console.log(tempFn(2,2))
