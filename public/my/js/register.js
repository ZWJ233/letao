
$(function(){
    var This = $(this);
    var data = {
        username: $.trim($('[name="username"]').val()),
        mobile:$.trim($('[name="mobile"]').val()),
        password:$.trim($('[name="password"]').val()),
        vCode:$.trim($('[name="checkCode"]').val())
    };
    var againPass = $.trim($('[name="againPass"]').val());
    console.log(againPass);
    console.log($('[name="password"]').val());
    $('#regBtn').on('tap',function(){
        console.log($('[name="username"]').val());
        if($.trim($('[name="username"]').val()) == '' || name.length > 12){
            mui.toast('请输入小于12位合法的账号名');
        }
        if($.trim($('[name="password"]').val()) == ''){
            mui.toast('请输入合法的密码');
            return false;
        }
        if($('[name="mobile"]').val().length != 11){
            mui.toast('请输入合法的手机号');
            return false;
        }
        //if(againPass !== $('[name="password"]').val()){
        //    mui.toast('请确认密码是否正确');
        //    return false;
        //}
        $.ajax({
            url:'/user/register',
            type:'post',
            data:data,
            success:function(result){
                console.log(result);
            }
        })
    });
    $('#getCode').on('tap',getCheckCode);
});