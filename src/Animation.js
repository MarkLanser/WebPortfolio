$(document).ready(function() {
    var lastClicked = 'home';
    var cvClicked = null;

    function toggleWorkTitles () {
        $('.workTitle').delay(700).fadeToggle(1000);
        $('.workSubTitle').delay(1000).fadeToggle(1000);
        $('.workText').delay(1300).fadeToggle(1000);
        $('.workImage').delay(1600).fadeToggle(1000);
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
            $('#about').animate({'margin-top': -100 + '%'}, 1000);
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 1500)
        }
        if (lastClicked == 'work') {
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'home';
            $('#workPanel').animate({'margin-top': 100 + '%'}, 1000);
            toggleWorkTitles();
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
            $('#about').animate({'margin-top': 0 + '%'}, 1000);;
            setTimeout(function () {
                $(".navButton").css("pointer-events", "auto");
            }, 1500)
        }
        if (lastClicked == 'work') {
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'about';
            $('#about').animate({'margin-top': 0 + '%'}, 1000);
            $('#workPanel').animate({'margin-top': 100 + '%'}, 1000);
            toggleWorkTitles();
            setTimeout(function () {
                $(".navButton").css("pointer-events", "auto");
            }, 1500)
        }
    });

    $("#workLink").on("click", function (e) {
        e.preventDefault();
        if (lastClicked == 'home') {
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'work';
            $('#workPanel').animate({'margin-top': 0 + '%'}, 1000);
            toggleWorkTitles();
            setTimeout(function () {
                $(".navButton").delay(2000).css("pointer-events", "auto");
            }, 1500)
        }
        if (lastClicked == 'about') {
            if (cvClicked == true) {
                $('#cv').animate({'margin-left': '100%'}, 1000);
                cvClicked = false;
            }
            $(".navButton").css("pointer-events", "none");
            lastClicked = 'work';
            $('#about').animate({'margin-top': -100 + '%'}, 1000);
            $('#workPanel').animate({'margin-top': 0 + '%'}, 1000);
            toggleWorkTitles();
            setTimeout(function () {
                $(".navButton").delay(8000).css("pointer-events", "auto");
            }, 1500)
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