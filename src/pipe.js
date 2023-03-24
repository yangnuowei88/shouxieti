const fna=(a)=>a*2
const fnb=(a)=>a+5
const fnc=(a)=>a-7
const pipe = (fnArr) => {

    return(...arg)=>{
        return fnArr.reduce((pre,cur,index,arr)=>{
            return ()=>cur(pre())

        },()=>arg )()
    }
}
//实现思路，pipe 的参数是一个数组（里面为函数），返回值是一个函数，这个函数可以接收参数，可以是多个参数
//所以这个函数得用闭包，他的参数就是第二个闭包函数的参数呀
//重点
/*使用reduce（归并） 函数的重点是，
你这个reduce 的处理函数的返回值的类型，一定是和数组里面的类型是一样的
同理，我们也可以推断初始值也是一个函数，只是我用一个函数把他包装起来了而已
因为比如第一次是pre,一下次，这个pre 就是reduce 处理函数的返回值，然后到最后返回值得的类型也是个函数
所以，我只是把这个函数调用了一下而已*/


//重点end

console.log(pipe([fna,fnb,fnc])(2))
