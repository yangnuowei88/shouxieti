/*
const Arr=[1,2,3,4];
const result=Arr.reduce((pre,cur,index,arr)=>{
    return pre*2+cur
},10)
console.log(result);*/

const fn1=(num)=>{
   return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num*2)
        },1000)
    })
}
const fn2=(num)=>{
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(++num)
        },1000)
    })
}

const fnArray=[fn1,fn2]
const asyncJob=(fnArray,init)=>{
   return  fnArray.reduce((pre,cur,index,arr)=>{
       return  pre.then(cur)
    }, Promise.resolve(init))
}
asyncJob(fnArray,1).then(console.log)




