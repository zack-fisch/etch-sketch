$(document).ready(function() {

    var $block_number = prompt('How many blocks?');

    function writeBoard() {
        while ($.isNumeric($block_number) === false && $block_number < 150) {
            $block_number = prompt('How many blocks?');
        }
        for (var i = 0; i < $block_number; i++) {
            $('#board').prepend("<div class='block'></div>");
        }
    };

    writeBoard();

    $(".block").on("mouseover", function () {
        $(this).css("background-color", "black");
    });

    $('#redo').on('click', function () {
        $('.block').css('background-color', 'white');
        $block_number = prompt('How many blocks?');
        writeBoard();
    });

});