//定义属性的值和定位get set 是互斥的，详细的话去看文档
Object.defineProperty({},'a',{
    value:42,
    writable:false
})
const aaa={}
Object.defineProperty(aaa,'a',{
    set(val){
        return val+1
    },
    get(){
        return 'aaa的value'
    }
})
console.log(aaa.a)
aaa.a=1111
