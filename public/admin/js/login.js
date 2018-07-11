$(function(){
console.log(123);

     
$("form").bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields:{
           username:{
               validators:{
                     notEmpty: {
                     message: '用户名不能为空'
                  },
                  stringLength: {
                    min: 6,
                    max: 30,
                    message: '用户名长度必须在6到30之间'
                  }
               }
           },
           password:{
            validators:{
                  notEmpty: {
                  message: '密码名不能为空'
               },
               stringLength: {
                min: 6,
                max: 30,
                message: '密码长度必须在6到30之间'
              }
            }
        }
      }


})







})