$(function () {

    var page = 1;
    var pageSize = 5;
    render();

    function render() {
        //发送ajax请求
        $.ajax({
          type: 'get',
          url: '/category/queryTopCategoryPaging',
          data: {
            page: page,
            pageSize: pageSize
          },
          success: function (info) {
            console.log(info);
            $("tbody").html(template("tplt", info));
            //分页
            $("#paginator").bootstrapPaginator({
              bootstrapMajorVersion: 3,
              currentPage:page,
              totalPages: Math.ceil(info.total / info.size),
            
              onPageClicked: function (a, b, c, p) {
                //渲染p对应的页面即可
                page = p;
                render();
                console.log(123);
              }
            });
          }
        });
      }

      // 添加分类

      $('.Btn').on('click',function(){
        $("#add").modal('show');
      })

      $("form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
          categoryName: {
                validators: {
                    notEmpty: {
                        message: '请选择一级分类'
                    },
                }
            },
            
        }


    })

    $("form").on('success.form.bv', function (e) {
      // 阻止a的默认行为
      e.preventDefault();
      //使用ajax提交逻辑
      $.ajax({
          type: "post",
          url: "/category/addTopCategory",
          data: $("form").serialize(),
          success: function (info) {
            $("#add").modal('hide');
            page=1;
            render();
            $("form").data("bootstrapValidator").resetForm(true);

               
          }
      })
  });


})