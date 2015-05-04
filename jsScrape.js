

var $textEl = $('.injector').length > 0 ? $('.injector') : $('<textarea/>').addClass('injector');
$( ".moduleFrame .frame").prepend( $textEl );

var text = "";
$('.accountGroup').each(function(){
    text += ($(this).find('.accountGroupLabel').text()) + "\n";
    $(this).find('.account').each(function(index){
        text += "\t";
        text += $(this).find('.firmName').text().replace(/(\r\n|\n|\r)/gm,"") + "\t";
        text += $(this).find('.accountName').text().replace(/(\r\n|\n|\r)/gm,"") + "\t";
        text += $(this).find('.balance').text().replace(/(\r\n|\n|\r)/gm,"") + "\t";
        text += "\n";
    });

});
$textEl.val(text)
    .width(1800)
    .height(800);
