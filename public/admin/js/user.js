$(function () {


    //   打开页面就要渲染数据
    var id;
    var isDelete;
    //  请求数据
    var page = 1;
    var pagesize = 5;
    render();
   
    function render() {
        $.ajax({
            type: "get",
            url: "/user/queryUser",
            data: {
                page: page,
                pageSize: pagesize,
            },
            success: function (info) {
                $("tbody").html(template("tpl", info));
                $('#Page').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage: page,
                    totalPages: Math.ceil(info.total / info.size),
                    numberOfPages: 3,
                    onPageClicked: function (a, b, c, p) {
                        page = p;
                        render();
                    }
                });
            }
        })
    }
    $('tbody').on('click', '.dis-btn', function () {
        $("#disable").modal('show');
        id = $(this).parent().data("id");
        // console.log(id);
       
        isDelete = $(this).hasClass("btn-success") ? 1 : 0;
        // console.log(isDelete);
    })
    $('.btn_disable').on('click', function () {


        $.ajax({
            type:'post',
            url:"/user/updateUser",
            data:{
                id:id,
                isDelete:isDelete,
            },
            success:function(info){
               if(info.success){
                $("#disable").modal('hide');
                render();
               }

            }
        })

    })

})