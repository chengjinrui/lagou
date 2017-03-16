
$('#main .left>dl').hover(function() {
    $(this.children[this.children.length - 1]).css({
        'display': 'block',
    })
    $(this.children[0]).css({
        'display': 'block',
    })
}, function() {
    $(this.children[this.children.length - 1]).css({
        'display': 'none',
    })
    $(this.children[0]).css({
        'display': 'none',
    })
})

var rightContentLis = $('#main .right .content li');
rightContentLis.on('click', function () {
    rightContentLis.removeClass('active');
    $(this).toggleClass('active');
})
