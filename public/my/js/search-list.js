$(function(){
    var data = location.href;
    data = data.substr(data.indexOf('?')+1);
    data = data.split('=')[1];
    $.ajax({
        type:'get',
        url:'/product/queryProduct',
        data:{
            proName:data,
            page:1,
            pageSize:6
        },
        success:function(result){
            var html = template('product-list',{data:result.data});
            $('.mui-product>ul').html(html);
        }
    })
});