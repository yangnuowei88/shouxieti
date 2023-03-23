class Event{
    constructor(){
        this.eventMap={};
    }
    on(name,cb){
        if(this.eventMap.hasOwnProperty(name)){
            this.eventMap[name].push(cb);
        }else {
            this.eventMap[name]=[cb];
        }
    }
    off(name){
        if(this.eventMap[name]){
            this.eventMap[name]=null
        }
    }
    emit(name,...args){
        this.eventMap[name].forEach(v=>{
            v.apply(this,args)
        })
    }
    once(name,cb){
    //清空所有的，然后借助on绑定当前的
    }
}

const event=new Event()
event.on('click',function (data){
    console.log(data)
})
//event.off('click')
event.emit('click','data1')
