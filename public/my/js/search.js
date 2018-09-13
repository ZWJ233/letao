$(function(){
    var data = [];
    $('.button-inp').on('click',function(){
        var value = $('.search-inp').val();
        console.log(value.trim());
        data.push(value);
        if(!value.trim()){
            alert('请输入正确的商品名');
            return;
        }
        if(localStorage.getItem('datas')){
            data = JSON.parse(localStorage.getItem('datas'));
            data.push(value);
            localStorage.setItem('datas',JSON.stringify(data));
        }else{
            localStorage.setItem('datas',JSON.stringify(data));
        }
    })
    getSearch();
    $('.mui-content a').on('click',function(){
        localStorage.removeItem('datas');
        getSearch();
    })
});
function getSearch(){
    var searchData = JSON.parse(localStorage.getItem('datas'));
    var html = template('searchList',{data:searchData});
    $('.searchList').html(html);
}
