//toggle

var $btnSpaceJam = $('.btn-space-jam');
var $panel = $('.panel');

$btnSpaceJam.on ('click', function (){
    $panel.animate ({height: 'toggle'});
})

//lineup of the tunesquad

var $jordan =$('.jordan');
var $bugs =$('.bugs');
var $lola =$('.lola');
var $daffy =$('.daffy');
var $tas =$('.tas');

var $jordanStat =$('.jordan-stat')
var $bugsStat =$('.bugs-stat')
var $lolaStat =$('.lola-stat')
var $daffyStat =$('.daffy-stat')
var $tasStat =$('.tas-stat')

$jordan.on('click', function () {
    $jordanStat.animate({height: 'toggle'});
})

$bugs.on('click', function () {
    $bugsStat.animate({height: 'toggle'});
})

$lola.on('click', function () {
    $lolaStat.animate({height: 'toggle'});
})

$daffy.on('click', function () {
    $daffyStat.animate({height: 'toggle'});
})

$tas.on('click', function () {
    $tasStat.animate({height: 'toggle'});
})

//lineup of the monstars

var $bupkus =$('.bupkus');
var $nada =$('.nada');
var $null =$('.null');
var $zilch =$('.zilch');
var $void =$('.void');

var $bupkusStat =$('.bupkus-stat')
var $nadaStat =$('.nada-stat')
var $nullStat =$('.null-stat')
var $zilchStat =$('.zilch-stat')
var $voidStat =$('.void-stat')

$bupkus.on('click', function () {
    $bupkusStat.animate({height: 'toggle'});
})

$nada.on('click', function () {
    $nadaStat.animate({height: 'toggle'});
})

$null.on('click', function () {
    $nullStat.animate({height: 'toggle'});
})

$zilch.on('click', function () {
    $zilchStat.animate({height: 'toggle'});
})

$void.on('click', function () {
    $voidStat.animate({height: 'toggle'});
})


//btn for the team switch

var $btnTeam =$('.btn-team');
var $teamLineupInner =$('.team-lineup-inner');

$btnTeam.on('click', function() {
    $teamLineupInner.toggleClass('js-team-lineup-inner')
});


// scrolling effects

$('.panel').localScroll();
$('.bball').localScroll();







