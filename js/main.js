var $btnSpaceJam =$ ('.btn-space-jam');
var $panel =$ ('.panel');

$btnSpaceJam.on ('click', function(){
    $panel.toggleClass('js-panel');
}); 