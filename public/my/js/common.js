$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
});
function getCheckCode(){

    $.ajax({
        type:'get',
        url:'/user/vCode',
        success:function(result){
            console.log(result.vCode)
        }
    });

}
