//我觉得这种实现应该是对的，用了apply,然后用了闭包，用了callee
Function.prototype.bind=function (obj){
    const theArguments=arguments

    return function (...arg){
        theArguments.callee.apply(obj,arg)
    }
}
a.bind(this)(a)
