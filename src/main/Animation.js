$(document).ready(function() {
    var lastClicked = 'home';

    var cvClicked = null;

    function animateWorkPanels(percentage) {
        $('#workA').animate({'margin-top': percentage + '%'}, 1000);
        $('#workATitle').delay(700).fadeToggle(1000);
        $('#workASubTitle').delay(1000).fadeToggle(1000);
        $('#workB').delay(300).animate({'margin-top': percentage + '%'}, 1000);
        $('#workBTitle').delay(1300).fadeToggle(1000);
        $('#workBSubTitle').delay(1600).fadeToggle(1000);
        $('#workC').delay(600).animate({'margin-top': percentage + '%'}, 1000);
        $('#workCTitle').delay(1900).fadeToggle(1000);
        $('#workCSubTitle').delay(2200).fadeToggle(1000);
        $('#workD').delay(900).animate({'margin-top': percentage + '%'}, 1000);
        $('#workDTitle').delay(2400).fadeToggle(1000);
        $('#workDSubTitle').delay(2600).fadeToggle(1000);
    }

    $("#homeLink").on("click", function (e) {
        e.preventDefault();
        if (lastClicked == 'about') {
            if (cvClicked == true) {
                $('#cv').animate({'margin-left': '100%'}, 1000);
                cvClicked = false;
            }
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'home';
            $('#about').slideToggle(1500);
            $('#filter').delay(1500).animate({right: '100%'}, "slow");
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 1500)
        }
        if (lastClicked == 'work') {
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'home';
            animateWorkPanels(100);
            $('#filter').delay(1000).animate({right: '100%'}, "slow");
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 1800)
        }
    });

    $("#aboutLink").on("click", function (e) {
        e.preventDefault();
        if (lastClicked == 'home') {
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'about';
            $('#filter').animate({right: '0%'}, "slow");
            $('#about').delay(500).slideToggle(1000);
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 1500)
        }
        if (lastClicked == 'work') {
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'about';
            animateWorkPanels(100);
            $('#about').delay(1000).slideToggle(1000);
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 2000)
        }
    });

    $("#workLink").on("click", function (e) {
        e.preventDefault();
        if (lastClicked == 'home') {
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'work';
            $('#filter').animate({right: '0%'}, "slow");
            animateWorkPanels(0);
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 4000)
        }
        if (lastClicked == 'about') {
            if (cvClicked == true) {
                $('#cv').animate({'margin-left': '100%'}, 1000);
                cvClicked = false;
            }
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'work';
            $('#about').slideToggle(1000);
            animateWorkPanels(0);
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 4000)
        }
    });

    $("#CVLink").on("click", function (e) {
        e.preventDefault();
        $("#CVLink").css("pointer-events", "none");
        if (cvClicked == true) {
            $('#cv').animate({'margin-left': '100%'}, 1000);
            cvClicked = false;
        } else {
            $('#cv').animate({'margin-left': '38%'}, 1000);
            cvClicked = true;
        }
        setTimeout(function () {
            $("#CVLink").css("pointer-events", "auto");
        }, 1500)
    });
})