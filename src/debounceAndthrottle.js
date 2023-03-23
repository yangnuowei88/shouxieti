//利用闭包，如果规定时间内还在，那么直接清除钓定时器，然后向后延迟
const debounce = (fn=()=>{},time) => {
    let timer;
    return (...arg)=>{
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(this,arg)
        },time)
    }


}
//利用闭包，如果规定时间内定时器变量还在，直接返回，然后执行完毕了，再将定时器置空
const throttle = (fn,time) => {
    let timer
    return (...args)=>{
        if(timer){
            return
        }
        timer= setTimeout(()=>{
           fn.apply(this,args);
           timer=null
        },time)
    }


}

export {debounce,throttle}
