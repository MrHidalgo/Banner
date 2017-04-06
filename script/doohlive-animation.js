var w = 1280;
var h = 768;
var banner = document.getElementById("banner");
//var background = document.getElementById("background");
var bottom_line = document.getElementById("bottom_line");
var title = document.getElementById("title");
var headline1 = document.getElementById("headline_1");
var headline1b = document.getElementById("headline_1b");
var headline2 = document.getElementById("headline_2");
var headline3 = document.getElementById("headline_3");
var headline1_text = document.getElementById("headline_1").firstChild;
var headline1b_text = document.getElementById("headline_1b").firstChild;
var headline2_text = document.getElementById("headline_2").firstChild;
var headline3_text = document.getElementById("headline_3").firstChild;
var bottom_line_text = document.getElementById("bottom_line").firstChild;
var logo = document.getElementById("logo");
var overlay = document.getElementById("overlay");
var custom_background = document.getElementById("custom_background");


function dorun() {	//@KHO: wrapped code in here to call in the next function
    document.getElementById('content').style.visibility = "visible";

    var headline1Width;
    var headline1bWidth;
    var headline2Width;
    var headline3Width;

    if (type == 'breaking') {
        headline1.style.backgroundColor = "#e42726";
        headline1.style.color = "#ffffff";
        headline1b.style.backgroundColor = "#e42726";
        headline1b.style.color = "#ffffff";
        document.getElementById('head_1b').style.visibility = "visible";
        headline1.style.fontSize = "60px";
        headline1b.style.fontSize = "60px";
        document.getElementById('head_1b').style.top = "170px";
        document.getElementById("title-panel").style.top = "240px";
    } else {
        if (Math.max(headline1_text.innerHTML.length, headline1b_text.innerHTML.length) > 18) {
            document.getElementById('head_1').style.top = "90px";
            headline1.style.fontSize = "54px";
            headline1b.style.fontSize = "54px";
        }
        if (shot2heading1 != undefined) {
            if (Math.max(headline2_text.innerHTML.length, headline3_text.innerHTML.length) > 18) {
                document.getElementById('head_2').style.top = "90px";
                headline2.style.fontSize = "54px";
                headline3.style.fontSize = "54px";
            }
        }
    }


    var user = detect.parse(navigator.userAgent);

    title.innerHTML = '<span id="title-line-1">' + newTitle1 + '</span><br><span id="title-line-2">' + newTitle2 + '</span>'

    banner.style.backgroundImage = background;
    custom_background.style.backgroundImage = background2;
    overlay.style.backgroundColor = backgroundOverlay;
    headline1_text.innerHTML = shot1heading1;
    headline1b_text.innerHTML = shot1heading2;
    headline2_text.innerHTML = shot2heading1;
    headline3_text.innerHTML = shot2heading2;

    $(function () {
        var titleLine;
        var titleWidth;
        if (user.browser.family == "Chrome") {
            titleWidth = $('#title').width() - 100
        } else {
            titleWidth = $('#title').width()
        }

        while ($('#title-line-1').width() > titleWidth) {
            $('#title-line-1').css('font-size', (parseInt($('#title-line-1').css('font-size')) - 1) + "px");
        }

        while ($('#title-line-2').width() > titleWidth) {
            $('#title-line-2').css('font-size', (parseInt($('#title-line-2').css('font-size')) - 1) + "px");
        }
    });

    var tl = new TimelineMax({});
    tl.set(logo, {scale: .47, x: 380, y: 210});
    tl.set(title, {y: -h});
    tl.set(head_1, {rotation: -4});
    tl.set(head_1b, {rotation: -4});
    tl.set(head_2, {rotation: -4});
    tl.set(head_3, {rotation: -4});
    tl.set(headline1, {x: -w, alpha: 0, transformOrigin: "left top"});
    tl.set(headline1b, {x: -w, alpha: 0});
    tl.set(headline2, {x: -w, alpha: 0});
    tl.set(headline3, {x: -w, alpha: 0});
    tl.set(headline1_text, {y: -80});
    tl.set(headline1b_text, {y: -80});
    tl.set(headline2_text, {y: -80});
    tl.set(headline3_text, {y: -80});
    tl.set(custom_background, {alpha: 0});
    tl.set(banner, {alpha: 1});

    tl.to(headline1, .3, {alpha: 1, ease: Quint.easeOut}, 0);
    tl.to(headline1, .3, {x: 30, ease: Sine.easeOut}, 0);
    tl.to(headline1, .7, {x: 0, ease: Back.easeOut}, 0.3);
    tl.to(headline1_text, .3, {x: -30, ease: Sine.easeOut}, 0);
    tl.to(headline1_text, .7, {x: 0, ease: Back.easeOut}, 0.3);
    tl.to(headline1_text, .7, {y: 0, ease: Quint.easeOut}, .3);

    if (type == "breaking") {
        tl.to(headline1b, .3, {alpha: 1, ease: Quint.easeOut}, 0.1);
        tl.to(headline1b, .3, {x: 30, ease: Sine.easeOut}, 0.1);
        tl.to(headline1b, .7, {x: 0, ease: Back.easeOut}, 0.4);
        tl.to(headline1b_text, .3, {x: -30, ease: Sine.easeOut}, 0.1);
        tl.to(headline1b_text, .7, {x: 0, ease: Back.easeOut}, 0.4);
        tl.to(headline1b_text, .7, {y: 0, ease: Quint.easeOut}, .4);
    }

    tl.to(title, .8, {y: 0, ease: Quint.easeOut}, 0.2);

    if (type == "programma") {
        tl.to(headline1, .6, {width: 0, ease: Back.easeIn}, 3.5);
        tl.to(headline1_text, .7, {y: 110, ease: Quint.easeInOut}, 3.5);

        tl.to(custom_background, .7, {alpha: 1, ease: Sine.easeInOut}, 3.2);
        tl.to(title, .8, {y: -h, ease: Quint.easeIn}, 3.2);

        tl.to(logo, 1, {scale: 1, x: 0, y: 18, ease: Quint.easeInOut}, 3.2);

        tl.to(headline2, .3, {alpha: 1, ease: Quint.easeOut}, 4.0);
        tl.to(headline2, .3, {x: 30, ease: Sine.easeOut}, 4.0);
        tl.to(headline2, .7, {x: 0, ease: Back.easeOut}, 4.3);
        tl.to(headline2_text, .3, {x: -30, ease: Sine.easeOut}, 4.0);
        tl.to(headline2_text, .7, {x: 0, ease: Back.easeOut}, 4.3);
        tl.to(headline2_text, .7, {y: 0, ease: Quint.easeOut}, 4.3);

        tl.to(headline3, .3, {alpha: 1, ease: Quint.easeOut}, 4.1);
        tl.to(headline3, .3, {x: 30, ease: Sine.easeOut}, 4.1);
        tl.to(headline3, .7, {x: 0, ease: Back.easeOut}, 4.4);
        tl.to(headline3_text, .3, {x: -30, ease: Sine.easeOut}, 4.1);
        tl.to(headline3_text, .7, {x: 0, ease: Back.easeOut}, 4.4);
        tl.to(headline3_text, .7, {y: 0, ease: Quint.easeOut}, 4.4);
    }

}

function BroadSignPlay() {		//@KHO: added this function to reload the animation at every pass of the media on the Player
    if (type != "backup") {
        dorun();
    } else {
        dorunBackup();
    }
}

BroadSignPlay();
	