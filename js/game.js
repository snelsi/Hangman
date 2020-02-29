$(document).ready(function main() {
    $('.container-fluid').load('./home.html', function () {
        var score = 0;
        var randHistory = [];
        $('#playBtn').click(function game() {
            $('.container-fluid').load('./game.html', function () {
                $.getJSON('js/words.json', function (data) {
                    do {
                        var rand = Math.floor(Math.random() * 99);
                    } while (randHistory.indexOf(rand) != -1);
                    randHistory.push(rand);
                    word = data[rand].toUpperCase();
                    console.log(word);
                    var wordSplit = word.split('');
                    var hp = 7;
                    $('#score').text(score);
                    for (let index = 0; index < word.length; index++) {
                        $('#word').append('<div class="guessLetter">_</div>');
                    }
                    for (let index = 0; index < 26; index++) {
                        let char = 'A'.charCodeAt(0) + index;
                        $('#keyboard').append('<button type="button" class="btn btn-primary m-1 letter" style="width: 38px; heght: 38px">' + String.fromCharCode(char) + '</button>');
                    }
                    $('.letter').click(function () {
                        var char = $(this).text();
                        var charIndex = word.indexOf(char);
                        if (charIndex == -1) {
                            $(this).removeClass('btn-primary');
                            $(this).addClass('btn-danger');
                            $(this).prop('disabled', true);
                            $('.hp').eq(hp--).removeClass('fas').addClass('far');
                            if (hp < 0) {
                                $('.container-fluid').load('./game-over.html', function () {
                                    $('#correctWord').text(word);
                                    $('#finalScore').text(score);
                                    $('#home').click(function () {
                                        main();
                                    });
                                });
                            }
                        } else {
                            $(this).removeClass('btn-primary');
                            $(this).addClass('btn-success');
                            $(this).prop('disabled', true);
                            var guess = $('#word').text();
                            for (let index = 0; index < word.length; index++) {
                                if (wordSplit[index] == char) {
                                    guess = guess.substring(0, index) + char + guess.substring(index + 1);
                                }
                            }
                            guess = guess.split('');
                            $('#word').empty();
                            guess.forEach(element => {
                                $('#word').append('<span class="guessLetter">' + element + '</span>');
                            });
                            if (guess.indexOf('_') == -1) {
                                score += (hp + 1) * 10;
                                setTimeout(function () {
                                    $('.container-fluid').load('./success.html', function () {
                                        $('#next').click(function () {
                                            game();
                                        })
                                    });
                                }, 500);
                            }
                        }
                    });
                });
            });
        });
    });
});