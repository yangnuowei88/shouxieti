/*const  shuffle=(Arr)=>{
const tempArr=[];
Arr.forEach((v)=>{
    const index=Math.floor(Math.random()*Arr.length)
    console.log(index)
    tempArr.push(...Arr.splice(index,1))


})
return tempArr
}*/
const shuffle=(Arr)=>{
    Arr.sort((v)=>{
       return  Math.random()-0.5
    })
    return Arr
}
console.log(shuffle([1,2,4,5]))
