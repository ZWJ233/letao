if(!localStorage.getItem("isload")){
    location.href = 'login.html';
}
$(function(){
    $.ajax({
        url:'/user/queryUserMessage',
        type:'get',
        success:function(result){
            console.log(result);
            var html = template('userTpl',result);
            $('#user').html(html);
        }
    });
    $('#logout').on('tap',function(){
        $.ajax({
            url:'/user/logout',
            type:'get',
            success:function(result){
                if(result.success){
                    localStorage.removeItem("isload");
                    location.href = 'index.html';
                }else{
                    mui.toast('退出登录失败');
                }
            }
        })
    })
});