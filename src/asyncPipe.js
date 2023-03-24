const fn1=(num)=>{
   return  new Promise((resolve, reject)=>{
        resolve(num*10)
    })
}
const fn2=(num)=>{
    return  new Promise((resolve, reject)=>{
        resolve(num*3)
    })
}
//返回值是个promise
const asyncPipe = (Arr) => {
    return(...args)=>{
      return   Arr.reduce((pre,cur,index,Arr)=>{
           return  pre.then(cur)
        }, Promise.resolve(args[0]))//你的初始化值是啥类型，那么你的处理函数返回值就该是啥类型的

    }
}


console.log(asyncPipe([fn1,fn2])(10).then(console.log))
