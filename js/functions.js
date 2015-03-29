'use strict';

function makeDragabble () {
    var players = $('.player');

    _.each(players, function (player) {
        $('#' + player.id).draggable();
    });
}

$( document ).ready(function() {
    console.log( 'ready!' );

    var height = $(document).height();
    var width = $(document).width();

    $('.background').css('height', height + 'px');
    $('.background').css('width', width + 'px');

    makeDragabble();

    $('#createOpponent').click(function (e) {
        var opponentElem  = $('<div class="player"><label>Opponent</label><img src="images/opponent.png"  /></div>');

        $('.background').append(opponentElem);

        opponentElem.draggable();
    });

});




