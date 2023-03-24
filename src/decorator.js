//Decorater只能修饰类，不可以修饰函数，原因见ES6标准入门（存在变量提升呀）
//Proxy是可以作用于函数，对象的呢，这是他们的不同，代理是倾向于保护，他的漏出接口应该和里面是一直的
//装饰者模式倾向于是功能的增加，给原始的对象，增强功能嘛
//一个一个的注解，无法就是一个一个的函数
//类注解，方法注解，属性注解
//有一些现成的注解库
class Dog1{
    bark () {
        return 'wang!wang!'
    }
}
// 注意这里的 `target` 是 `Dog.prototype`
function readonly(target, key, descriptor) {
    descriptor.writable = false
    return descriptor
}
//代码无法运行起来，需要babel
class Dog {
    @readonly
    bark () {
        return 'wang!wang!'
    }
}

let dog = new Dog()
dog.bark = 'bark!bark!'
