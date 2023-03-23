//我觉得我还是蛮厉害的
const urlGetPram=(url)=>{
    const parmObj={}

   const s= url.slice( url.indexOf('?')+1)

s.split('&').map((v)=>{
    console.log(v)
    const regexp=/(\w+)=(\w+)/i
    const aa=v.match(regexp)
    parmObj[aa[1]]=aa[2]


})


return parmObj
}

console.log(JSON.stringify(urlGetPram('http://www.baidu.com?a=1&b=2')))
