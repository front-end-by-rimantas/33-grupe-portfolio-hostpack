function accord(x) {
    let statusmemory = 0;
    let active = document.getElementById(`ah${x}`);
    if (active.classList.contains('accordion-big-text')) {
        statusmemory = 1;
    }

    for (let i = 1; i < 6; i++) {
        let element = document.getElementById(`ah${i}`);
        element.classList.remove('accordion-bt-active');
        element.classList.add('accordion-big-text');

        element = document.getElementById(`accordion-p-${i}`);
        element.classList.remove('accordion-text-show-open');
        element.classList.add('accordion-text-show');
    }

    
    if (statusmemory === 1) {
        active.classList.remove('accordion-big-text');
        active.classList.add('accordion-bt-active');

        active = document.getElementById(`accordion-p-${x}`);
        active.classList.add('accordion-text-show-open');
        active.classList.remove('accordion-text-show');
    }
}
