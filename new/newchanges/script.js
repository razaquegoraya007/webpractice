document.addEventListener('DOMContentLoaded', function() {
    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');
    const checkbox3 = document.getElementById('checkbox3');
    const checkbox4 = document.getElementById('checkbox4');
    const containerBottom = document.querySelector('.containerbottom');

    checkbox1.addEventListener('change', function() {
        if (this.checked) {
            containerBottom.style.flexDirection = 'row';
        } else {
            containerBottom.style.flexDirection = '';
        }
    });

    checkbox2.addEventListener('change', function() {
        if (this.checked) {
            containerBottom.style.flexDirection = 'column';
        } else {
            containerBottom.style.flexDirection = '';
        }
    });

    checkbox3.addEventListener('change', function() {
        if (this.checked) {
            containerBottom.style.flexDirection = 'row-reverse';
        } else {
            containerBottom.style.flexDirection = '';
        }
    });

    checkbox4.addEventListener('change', function() {
        if (this.checked) {
            containerBottom.style.flexDirection = 'column-reverse';
        } else {
            containerBottom.style.flexDirection = '';
        }
    });
});

