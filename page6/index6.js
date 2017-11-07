/**
 * Created by 代 鹏真 on 2017/9/15.
 */
/*顶部分类栏显示隐藏*/
var arr=[
    {
        img:'img/21.png',
        a:'原木衣柜定制'
    },
    {
        img:'img/22.png',
        a:'原木护墙板定制'
    },
    {
        img:'img/23.png',
        a:'原木门定制'
    },
    {
        img:'img/24.png',
        a:'原木衣帽间定制'
    },
    {
        img:'img/25.png',
        a:'原木衣酒窖定制'
    },
    {
        img:'img/26.png',
        a:'原木沐浴柜定制'
    },
    {
        img:'img/27.png',
        a:'原木壁炉定制'
    },
    {
        img:'img/28.png',
        a:'原木家具定制'
    }
];
var svg='';
for(var i=0;i<arr.length;i++){
    svg+='<li><a href=""><img src="'+arr[i].img+'" alt=""/>'+arr[i].a+'</a><span>＞</span></li>';
}
$('.bc').html(svg);
$(".a1").click(function() {
    // 用toggle
    if($('.bc').css("display")=="none"){
        $('.bc').show();
    }else{
        $('.bc').hide();
    }
});
