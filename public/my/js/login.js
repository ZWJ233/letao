$(function(){
   $('#loginBtn').on('tap',function(){
       var name = $('[name="username"]').val();
       var passWord = $('[name="password"]').val();
       if(name.trim() == ''){
           mui.toast('请输入正确的用户名');
       }
       if(passWord.trim() == ''){
           mui.toast('请输入正确的密码');
       }
       $.ajax({
           url:'/user/login',
           type:'post',
           data:{
               username:name,
               password:passWord
           },
           success:function(result){
               if(result.success){
                   mui.toast('登陆成功');
                   localStorage.setItem("isload",'1');
                   setTimeout(function(){
                       location.href = 'user.html';
                   },2000);
               }else{
                   mui.toast('登陆失败');
               }
           }
       })
   })
});
