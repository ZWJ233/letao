$(function(){
    $.ajax({
        url:"/product/queryProductDetailList",
        type:'get',
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(res){
            var html = template('product-list',{data:res.rows});
            $('tbody').html(html);
        }
    })
});