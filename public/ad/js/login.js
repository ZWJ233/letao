$(function(){
    $('#login-in').on('click',function(){
       var username = $('#username').val().trim();
        var password = $('#password').val().trim();
        if(!username && !password){
            alert('用户名或密码不能为空');
            return;
        }
        $.ajax({
            url:'/employee/employeeLogin',
            type:'post',
            data:{
                username:username,
                password:password
            },
            success:function(res){
                if(res.success){
                    location.href = 'user.html';
                }
            }
        })
    });
});