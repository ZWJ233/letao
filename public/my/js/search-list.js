var products = {};
var page = 1;
var pageSize = 3;
var isLast = false;
var loading = false;
var totalPage = 0;
var priceSort = 1;
var numSort = 1;
var This = null;
var html = '';
var isNumSort = 0;
var isPriceSort = 0;
$(function(){
    mui.init({
        pullRefresh : {
            container:document.getElementById('refreshContainer'),
            up : {
                height:50,
                auto:true,
                contentrefresh : "正在加载",
                contentnomore:'没有更多的数据',
                callback :getData
            }
        }
    });
    $('#price').on('tap',function(){
        html = '';
        priceSort = (priceSort == 1 ? 2 : 1);
        isNumSort = 0;
        isPriceSort = priceSort;
        products.data.length = 0;
        isLast = false;
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData()

    });
    $('#number').on('tap',function(){
        html = '';
        numSort = (numSort == 1 ? 2 : 1);
        isNumSort = numSort;
        isPriceSort = 0;
        products.data.length = 0;
        isLast = false;
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData()
    })
});
function getData(){
    if(!This){
        This = this;
    }
    var data = location.href;
    data = data.substr(data.indexOf('?')+1);
    data = data.split('=')[1];
    if(!isLast && !loading){
        $.ajax({
            type:'get',
            url:'/product/queryProduct',
            data:{
                proName:data,
                page:page,
                pageSize:pageSize,
                price:isPriceSort,
                num:isNumSort
            },
            beforeSend:function(){
                loading = true;
            },
            success:function(result){
                console.log(result);
                totalPage = Math.ceil(result.count/pageSize);
                for(var attr in result){
                    if(attr != 'data'){
                        products[attr] = result[attr];
                    }else{
                        if(!products.data){
                            products.data = result[attr];
                        }else{
                            for(var i=0;i<result[attr].length;i++){
                                products.data.push(result[attr][i]);
                            }
                        }
                    }
                }
                html += template('product-list',{data:result.data});
                console.log(html);
                $('.mui-product>ul').html(html);
                page ++;
                loading = false;
                if(page > totalPage){
                    isLast = true;
                }else{
                    isLast = false;
                }
                This.endPullupToRefresh(isLast);
            }
        })
    }
}
