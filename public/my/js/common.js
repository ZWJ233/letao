$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
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
