$(function(){
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
});