$(function(){
    var brandLogo;
    var firstCategory;
    $('#last-page')[0].style.display = 'none';
    var html = "<option>请选择商品分类</option>";
    getData();
    $.ajax({
       url:'/category/queryTopCategoryPaging',
        type:'get',
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(res){
            if(res){
                firstCategory = res.total;
                console.log(firstCategory);
                for(var i=1;i<=firstCategory;i++){
                    html += "<option>"+i+"</option>";
                }
                $('.form-control').html(html);
            }
        }
    });
    $('#add-catesecond').on('click',function(){
        var categoryId = $('.form-group>select').val();
        var brandName = $('#brandName').val();
        console.log(brandLogo);
        console.log(categoryId);
        console.log(brandName);
        $.ajax({
            url:'/category/addSecondCategory',
            type:'post',
            data:{
                brandLogo:brandLogo,
                categoryId:categoryId,
                brandName:brandName,
                hot:0
            },
            success:function(res){
                console.log(res);
                if(res.success){
                    $('#false')[0].click();
                    console.log($('.form-group>select')[0][0].setAttribute(''));
                    $('#brandName').val();
                    getData();
                }
            }
        })
    });
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
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            brandLogo = data.result.picAddr;
            $('#img').attr('src',brandLogo);
        },

});
});
function getData(){
    $.ajax({
        url:'/category/querySecondCategoryPaging',
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
            var html = template('category-second',{data:res.rows});
            $('tbody').html(html);
        }
    })
}
