//引入了nprogress.js文件后，就有了一个全局对象NProgress对象

//关闭进度条


$(document).ajaxSend(function () {
    
    //开启进度条
    NProgress.start();
    console.log("请求开始");
});

$(document).ajaxStop(function () {
    setTimeout(function(){
        NProgress.done();
        console.log("请求结束"); 
    })
});