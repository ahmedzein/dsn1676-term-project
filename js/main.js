var $btnSpaceJam = $('.btn-space-jam');
var $panel = $('.panel');

$btnSpaceJam.on ('click', function (){
    $panel.animate ({height: 'toggle'});
})


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