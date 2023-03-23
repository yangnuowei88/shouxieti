//Object.defineProperty（obj,key,descOjb）他的使用目标只能是对象呀
//new Proxy(obj,descObj) 重要的是，他的目标可以是对象，数组，函数，也就说这几张他都可以代理
//一个对象的方法调用了，也可以用这个去拦截的，书籍：js 重难点有
const obj1={a:1,
    func:(a,b)=>{console.log('my is function');return a+b}}
const proxyA=new Proxy(obj1.func,{
    //如果是对象里面的方法，直接用get 去捕获就OK了（判断下他的类型是函数，就给调用了就OK）
    //arg 参数有三个，目标对象，目标对象属性，和代理对象
    get(...args){//这个叫捕获器
        console.log(args)
        //return args[0][args[1]]
       return  Reflect.get(...args)//这个反射和上面的写法是一样的，return 值决定了，调用后得到什么
        //没有一个prxoy的反射器都有一个反射的静态方法与他对应
        //你想想，如果你再代理里面加入了你的逻辑，如果我还要调用原来的逻辑怎么半，他就是用来表示原来的逻辑的
    },

})
console.log(proxyA.a)


const fn1=(a,b)=>{
    console.log("我是原函数的输出")
    return a+b

}
//是否搞清楚了，代理和反射的关系呢，每个代理的捕获器，都有一个反射器与他对应，这个反射器标识的只是原来的目标对象的默认操作而已
// （你功能增强了，但是别人原来的功能你不能丢呀），如果你不想用反射，自己明文去写也是一样的呢
const fn1Proxy=new Proxy(fn1,{
    apply(target, thisArg, argArray) {
        console.log("代理对象"+argArray)
        //这个返回值就是原来的函数返回是啥他就是啥
        //return target(...argArray)
        return Reflect.apply(target,thisArg,argArray)//和上面的等价
    }
})
//编辑器说fn1Proxy不是函数对象，但是这样调用是OK的
console.log(fn1Proxy(1,2))
