$(function(){
    var isDelete;
    getData();
    $('tbody').on('click','#isTrue',function(){
        var id = $(this).attr('data-id');
        if($(this).text().trim() == '禁用'){
            isDelete = 0;
        }else{
            isDelete = 1;
        }
        $.ajax({
            url:'/user/updateUser',
            type:'post',
            data:{
                id:id,
                isDelete:isDelete
            },
            success:function(res){
                if(res.success){
                    getData();
                }
            }
        })
    })
});
function getData(){
    $.ajax({
        url:'/user/queryUser',
        type:'get',
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(res){
            var html = template('user-list',{data:res.rows});
            $('tbody').html(html);
        }
    })
}