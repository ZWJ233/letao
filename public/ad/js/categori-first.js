var maxpage;
$(function(){
    $('#last-page')[0].style.display = 'none';
    getData();
    $('#add-catefirst').on('click',function(){
        var name = $('.form-group>input').val().trim();
        if(!name){
            alert('请输入分类名称');
            return false;
        }
        $.ajax({
            url:'/category/addTopCategory',
            type:'post',
            data:{
                categoryName:name
            },
            success:function(res){
                if(res.error){
                    alert('添加分类失败');
                }else{
                    getData();
                    $('#false')[0].click();
                }
            }
        })
    })
    $('#last-page').on('click',function(){
        page--;
        getData();
        if(page == 1){
            $('#last-page')[0].style.display = 'none';
        }
        if(page !== maxpage){
            $('#next-page')[0].style.display = 'block';
        }
    });
    $('#next-page').on('click',function(){
        page++;
        console.log(page);
        getData();
        if(page !== 1){
            $('#last-page')[0].style.display = 'block';
        }
        if(page == maxpage){
            $('#next-page')[0].style.display = 'none';
        }
    });
    $('.page-list').on('click','li',function(){
        page = parseInt($(this).text());
        getData();
        var lis = $('.page-list>li');
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove('active');
        }
        this.classList.add('active');
    })
});
function getData(){
    $.ajax({
        url:'/category/queryTopCategoryPaging',
        type:'get',
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(res){
            maxpage = Math.ceil(res.total/pageSize);
            var html = '';
            for(var i=1;i<=maxpage;i++){
                html += "<li>"+i+"</li>";
            }
            $('.page-list').html(html);
            $('.page-list>li')[(page-1)].classList.add('active');
            var html = template('category-first',{data:res.rows});
            $('tbody').html(html);
        }
    })
}