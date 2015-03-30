'use strict';

function makeDragabble () {
    var players = $('.player');

    _.each(players, function (player) {
        $('#' + player.id).draggable();
    });

    $('#ball').draggable();
}

$(window).load(function() {
    $('.whirly').remove();
});

$( document ).ready(function() {
    console.log( 'ready!' );
    var enemyNumber = 1;
    var height = $(document).height();
    var width = $(document).width();

    // if (height > width) {
    //     alert('Please rotate your device horizontally and refresh the page.');
    // }

    setTimeout(function () {
        makeDragabble();
    }, 1000);

    $('#createOpponent').click(function () {
        var opponentElem  = $('<div class="opponent"><div class="enemy-header"><span>Enemy # ' + enemyNumber++ + '</span><span class="glyphicon glyphicon-remove close"></span></div><img src="images/opponent.png"  /></div>');
        $('.campo-container').append(opponentElem);
        opponentElem.draggable();
        $('.close').click(function (e) {
            var elem = $(e.currentTarget);
            elem.parent().parent().remove();

        });
    });

    $('#seven-only').click(function () {
        var players = $('.player');
        var left = Math.floor($(document).width() * 0.27);
        _.each(players, function (player) {
            player = $(player);
            if (!player.hasClass('titular')) {
                player.css('top', '-105px');
                player.css('left', left + 'px');
                left += 75;
            }
        });
    });

});




