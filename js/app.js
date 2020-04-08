$(document).ready(function() {
    $('body').scrollspy({ target: ".navbar", offset: 150 });
});



var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 9000
});


function myfun() {
    width1 = 0;
    width2 = 0;
    width3 = 0;
    width4 = 0;
    width5 = 0;

    var intervalID1 = setInterval(frame1, 10);
    var intervalID2 = setInterval(frame2, 10);
    var intervalID3 = setInterval(frame3, 10);
    var intervalID4 = setInterval(frame4, 10);
    var intervalID5 = setInterval(frame5, 10);
    var elem1 = document.getElementById('pbinner1');
    var elem2 = document.getElementById('pbinner2');
    var elem3 = document.getElementById('pbinner3');
    var elem4 = document.getElementById('pbinner4');
    var elem5 = document.getElementById('pbinner5');

    function frame1() {
        if (width1 >= 60) {
            clearInterval(intervalID1);
        } else {
            width1++;
            elem1.style.width = width1 + '%';
        }
    }

    function frame2() {
        if (width2 >= 40) {
            clearInterval(intervalID2);
        } else {
            width2++;
            elem2.style.width = width2 + '%';
        }
    }

    function frame3() {
        if (width3 >= 65) {
            clearInterval(intervalID3);
        } else {
            width3++;
            elem3.style.width = width3 + '%';
        }
    }

    function frame4() {
        if (width4 >= 60) {
            clearInterval(intervalID4);
        } else {
            width4++;
            elem4.style.width = width4 + '%';
        }
    }

    function frame5() {
        if (width5 >= 30) {
            clearInterval(intervalID5);
        } else {
            width5++;
            elem5.style.width = width5 + '%';
        }
    }

}