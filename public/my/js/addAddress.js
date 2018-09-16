$(function(){
    var picker = new mui.PopPicker({layer: 3});
    var data = {};
    picker.setData(cityData);
    $('#showCityPicker').on('tap',function(){
        picker.show(function(selectItems){
         data.address = selectItems[0].text + selectItems[1].text +selectItems[2].text;
            $('[name="address"]').val(data.address);
        });
    });
    $('#addAddress').on('tap',function(){
        data.addressDetail = $('[name="addressDetail"]').val().trim();
        data.recipients = $('[name="recipients"]').val().trim();
        data.postcode = $('[name="postcode"]').val().trim();
        if(!data.addressDetail){
            mui.toast('详细地址不能为空');
            return;
        }else if(!data.recipients){
            mui.toast('收货人不能为空');
            return;
        }else if(!data.postcode){
            mui.toast('邮政编码不能为空');
            return;
        }else if(!data.address){
            mui.toast('地址不能为空');
            return;
        }
        $.ajax({
            url:'/address/addAddress',
            type:'post',
            data:data,
            success:function(result){
                if(result.success){
                    mui.toast('成功添加收货地址');
                    setTimeout(function(){
                        location.href = 'address.html';
                    },2000);
                }else{
                    mui.toast('添加地址失败');
                }
            }
        })
    })
});