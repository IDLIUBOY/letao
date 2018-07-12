//引入了nprogress.js文件后，就有了一个全局对象NProgress对象

//关闭进度条


$(document).ajaxSend(function () {
    
    //开启进度条
    NProgress.start();
    console.log("请求开始");
});
// 全局
$(document).ajaxStop(function () {
    setTimeout(function(){
        NProgress.done();
        console.log("请求结束"); 
    })
});

// 二级显示与隐藏
$('.second').prev().on('click',function(e){
    $(this).next().slideToggle();
    
})
// $('#second').on('click',function(e){
//     $('.second').slideUp();
//     // e.stopPropagation();

//     //  console.log(e);
          
    
// })

$('.left').on('click',function(){
   $(".index_left").toggleClass('in_left')
   $('body').toggleClass('run'); 
})

$(".right").on('click',function(){
    $("#logout").modal('show');
})

$('.btn_logout').on('click',function(){
      $.ajax({
          type:'get',
        //   url:'/user/logout',
          url:"/employee/employeeLogout",
          success:function(info){
             if(info.success===true){
                 location.href="login.html";
             }
          }
      })
})
