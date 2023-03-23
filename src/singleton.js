class abc{
    static hasInstance=false;
    cache=null;
    constructor(name) {
        this.name=name;
    }
    a(){}
    b(){}
}
const proxyA=new Proxy(abc,{
    construct(...args) {
        if(!abc.hasInstance){
            abc.hasInstance=true;
            return  this.cache=Reflect.construct(...args)
    }else {
            return this.cache
        }
}})

const testObj=new proxyA('yang')
const testObj1=new proxyA('b')
console.log(testObj)
console.log(testObj1)
