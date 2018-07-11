$(function () {
    console.log(123);

    //   表单验证   
    $("form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 3,
                        max: 8,
                        message: '用户名长度必须在6到30之间'
                    },
                    callback:{
                        message:'用户名不存在'
                   }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '密码长度必须在6到30之间'
                    },
                    callback:{
                        message:'密码错误'
                   }
                }
            },
            
        }


    })

    // 表单验证完成时发送ajax请求

    $("form").on('success.form.bv', function (e) {
        // 阻止a的默认行为
        e.preventDefault();
        //使用ajax提交逻辑

        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $("form").serialize(),
            success: function (info) {
                if (info.error === 1000) {
                    $("form").data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
                }
                if (info.error === 1001) {
                    $("form").data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
                }
                if (info.success) {
                    location.href = "index.html";
                }
            }
        })
    });

    $("[type=reset]").on('click', function () {
        $("form").data("bootstrapValidator").resetForm(true);

    })







})