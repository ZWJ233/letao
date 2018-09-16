$(function(){
    getAddress();
    $("#address").on('tap','.deleteAdress',function(){
        mui.confirm('是否删除收货地址',function(){

        });
    })
    $('body').on('tap','.mui-popup-button-bold',function(){
        var id = $('.deleteAdress').attr('data-id');
        $.ajax({
            url:'/address/deleteAddress',
            type:'post',
            data:{
                id:id
            },
            success:function(result){
                if(result.success){
                    mui.toast('删除地址成功');
                    getAddress();
                }else{
                    mui.toast('删除地址失败');
                }
            }
        })
    })
});
function getAddress(){
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(result){
            var html = template('adressTpl',{data:result});
            $('#address').html(html);
        }
    });
}