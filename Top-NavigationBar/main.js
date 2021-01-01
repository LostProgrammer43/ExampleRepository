(function () {

    const link = document.querySelectorAll('.header-navbar > .header-nav-link');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y} = e, 
        { offsetWidth = width, offsetHeigt: height } = this,

        move = 10, 
        xMove = x / width * (move * 2) - move, 
        yMove = y / height * (move * 2) - move,

        spanstyle.transform = 'translate(${xMove}px, ${yMove}px)';

        if (e.type === 'mouseleave' ) span.style.transform = '';

    };

    const editCursor = e => {

        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

    }; 

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor); 

})();