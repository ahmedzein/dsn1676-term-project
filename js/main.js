var nav = document.querySelector('.panel');

doucment.querySelector('.btn-space-jam').addEventListener('click', function (e) {
    e.preventDefault();
    if(nav.getAttribute('data-state') == 'expanded') {
        nav.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
    }
    
    else {
        nav.setAttribute('data-state', 'expanded');
        this.setAttribute('data-state','active');
    }
});