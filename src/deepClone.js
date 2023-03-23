//爆栈（这是递归的原因造成的）
//会丢失函数，正则等
//这个实现是不完美的
const deepClone=(obj)=>{
    const deepObjet={}
        for(let a in obj){
            if(isObject(obj[a])){
                deepObjet[a]=deepClone(obj[a])
            }
            else {
                deepObjet[a]= obj[a]
            }
        }
        return deepObjet
}
const isObject=(obj)=>{
  return   Object.prototype.toString.call(obj)==='[object Object]'
}
//console.log( Object.prototype.toString.call({}))
console.log(deepClone({a:1,b:{c:2,d:{e:3}}}))
