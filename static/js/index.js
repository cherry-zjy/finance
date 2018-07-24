$(function(){
    $('#form').bootstrapWizard({
    'nextSelector' : '.button-next',
    'previousSelector' : '.button-previous',
    onTabClick: function (tab, navigation, index, clickedIndex) {
                   return false;//使a标签失去点击事件
                   },            
    onNext : function(tab,navigation,index){
    assessHandleTitle(tab,navigation,index);
    },
    onPrevious: function (tab, navigation, index) {
                assessHandleTitle(tab, navigation, index);
            },
       onTabShow: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                var percent = (current / total) * 100;
                $('.progress-bar').css({
                    width: percent + '%'
                });
            }
    });
    function assessHandleTitle(tab,navigation,index){
    var total = navigation.find('li').length;//得到li标签的长度
    var current = index + 1;
    $('li', $('#form')).removeClass("done");
    var li_list = navigation.find('li');
    for (var i = 0; i < index; i++) {
                $(li_list[i]).addClass("done");
            }
    if(current == 1){
    $('.button-previous').hide();//隐藏上一步按钮
    }else{
    $('.button-previous').show();//显示上一步按钮
    }
    if(current >= total){
    $('.button-next').hide();//隐藏下一步按钮
    $('.button-submit').show();//显示提交按钮
    }else{
    $('.button-next').show();//显示上一步按钮
    $('.button-submit').hide();//隐藏保存按钮 
    }
    }
    });