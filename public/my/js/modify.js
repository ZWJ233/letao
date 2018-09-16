$(function(){
    $('#getCheckCode').on('tap',getCheckCode);
    $('#modifyBtn').on('tap',function(){
        console.log($('[name="checkCode"]').val().trim());
        var data = {};
        data.oldPassword = $('[name="originPass"]').val().trim();
        data.newPassword = $('[name="newPass"]').val().trim();
        //data.oldPassword = $('[name="sureNewPass"]').val().trim();
        data.vCode = $('[name="checkCode"]').val().trim();
        if($('[name="newPass"]').val().trim() !== $('[name="sureNewPass"]').val().trim()){
            mui.toast('请输入确定两次密码相同');
            return false;
        }
        $.ajax({
            url:'/user/updatePassword',
            type:'post',
            data:data,
            success:function(result){
                console.log(result);
                if(result.success){
                    mui.toast('修改密码成功');
                    location.href = 'user.html';
                }else{
                    mui.toast('修改密码失败,'+result.message);
                }
            }

        })
    })
});