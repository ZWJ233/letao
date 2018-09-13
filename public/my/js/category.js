$(function(){
    var id = 1;
    $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        success:function(result){
            var html = template('first-category',{data:result.rows});
            $('.mui-scroll>ul').html(html);
        }
    });
    setTimeout(function(){
        $('.mui-scroll>ul>li').on('click',function(){
            var lis = $('.mui-scroll>ul>li');
            for(var i=0; i<lis.length; i++){
                $(lis[i]).removeClass('active');
            }
            id = this.getAttribute("data-id");
            $(this).addClass('active');
            getdata(id);
        })
    },200);
    getdata(id);
});
function getdata(id){
    $.ajax({
        type:'get',
        url:'/category/querySecondCategory',
        data:{
            id:id
        },
        success:function(result){
            console.log(result.rows);
            var html = template('second-category',{data:result.rows});
            $('#mui-scroll').html(html);
            console.log(html);
        }
    })
}