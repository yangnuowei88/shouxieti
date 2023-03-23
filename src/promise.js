//primose 本身只是一个状态机（pending 成功 失败）
//传入一个函数作为执行器，该函数参数有2个，resolve,reject ,这2个都是函数类型
//这两个函数是promise内部提供的用于改变函数状态，和获取外部操作的值，传递给primose里面的获取值
// 如果子函数想操作父函数，那么只能是传递一个函数类型进去，然后，怎么操作父函数，就是父函数提供了2个内部的方法
// then 方法只是定义了一个函数，这个函数也是定义了2个参数，都为函数，他只是相当于回调一样，注册在这里
//真正的调用时机是外包操作完成，调用resolve的时候，就会里面调用这个then里面注册的方法
//为了模拟promise then 是异步的，用了一个settimeout 0
//实际真正的promise 是浏览器用C去实现的
class Promise{
    constructor(excute){
        this.status='pending'
        this.suc_value='suc'
        this.fail_value='fail'
        excute(this.resovle,this.reject)
    }
    then(fn=(suc,fail)=>{

    },fn_fail){
        this.suc_cb=fn;
        this.fn_fail=fn_fail;
    }
    resovle(suc_value){
        setTimeout(()=>{
            this.suc_value=suc_value
            this.status='fuill'
            this.suc_cb()
        })

    }
    reject(fail_value){
        this.fail_value=fail_value
        this.status='fail'
        this.fn_fail()
    }



}
