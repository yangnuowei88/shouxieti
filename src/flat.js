//数组扁平化
//直接用es6 falt
// console.log([3,[1,2,[5,6]]].flat(1))
//问题是这种原型上的方法该怎么去递归
/*Array.prototype.flat=function (){
    const tempArray=[];
    this.map((i)=>{
        Array.isArray(this[i])?arguments.callee(this[i]):tempArray.push(this[i])
    })


}*/
//怎样去理解递归呢，每次flat 函数调用的时候，这个内部变量tempArray都会调用呀
//这里面有个调用栈的问题，就是没一次的递归，都可以有自己的调用栈，他的返回值是
//就是递归的条件已经没有了满足条件的
const flat=(obj)=>{
    const tempArray=[]
    obj.forEach((v)=>{
        if(Array.isArray(v)){
        tempArray.push(...flat(v))
        }else {
            tempArray.push(v)
        }



    })
return tempArray


}
console.log(flat([3,[1,2,[5,6]]]))
