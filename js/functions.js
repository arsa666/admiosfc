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

    var height = $(document).height();
    var width = $(document).width();

    $('.background').css('height', height + 'px');
    $('.background').css('width', width + 'px');

    setTimeout(function () {
        makeDragabble();
    }, 1000);

    $('#createOpponent').click(function () {
        var opponentElem  = $('<div class="opponent"><label>Enemy</label><img src="images/opponent.png"  /></div>');

        $('.background').append(opponentElem);

        opponentElem.draggable();
    });

    $('#seven-only').click(function () {
        var players = $('.player');
        var left = 350;
        _.each(players, function (player) {
            player = $(player);
            if (!player.hasClass('titular')) {
                player.css('top', '0px');
                player.css('left', left + 'px');
                left += 75;
            }
        });
    });

});




