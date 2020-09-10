function a(){
    return new Promise((res,rej)=>{
        let a;
        console.log(123)
        setTimeout(()=>{
            a = '定时器'
            res(a) 
        },1000)
    })

    // return '这是a 函数执行了'
}

a().then(res=>{
    console.log(res)
})