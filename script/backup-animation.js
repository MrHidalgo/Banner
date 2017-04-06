function dorunBackup() {
    document.getElementById('backup').style.visibility = "visible";

    var head1_backup = document.getElementById("head_1_backup");
    var head2_backup = document.getElementById("head_2_backup");
    var head3_backup = document.getElementById("head_3_backup");
    var head4_backup = document.getElementById("head_4_backup");
    var head5_backup = document.getElementById("head_5_backup");
    var head6_backup = document.getElementById("head_6_backup");
    var headline1_backup = document.getElementById("headline_1_backup");
    var headline2_backup = document.getElementById("headline_2_backup");
    var headline3_backup = document.getElementById("headline_3_backup");
    var headline4_backup = document.getElementById("headline_4_backup");
    var headline5_backup = document.getElementById("headline_5_backup");
    var headline6_backup = document.getElementById("headline_6_backup");
    var headline1_backup_text = document.getElementById("headline_1_backup").firstChild;
    var headline2_backup_text = document.getElementById("headline_2_backup").firstChild;
    var headline3_backup_text = document.getElementById("headline_3_backup").firstChild;
    var headline4_backup_text = document.getElementById("headline_4_backup").firstChild;
    var headline5_backup_text = document.getElementById("headline_5_backup").firstChild;
    var headline6_backup_text = document.getElementById("headline_6_backup").firstChild;

    var tl = new TimelineMax({});

    tl.set(logo, {scale: .47, x: -386, y: 200});
    tl.set(phone, {x: w});
    tl.set(bottom_line_text, {y: 100});
    tl.set(headline1_backup, {width: 0, alpha: 0});
    tl.set(headline2_backup, {width: 0, alpha: 0});
    tl.set(headline3_backup, {width: 0, alpha: 0});
    tl.set(headline4_backup, {width: 0, alpha: 0});
    tl.set(headline5_backup, {width: 0, alpha: 0});
    tl.set(headline6_backup, {width: 0, alpha: 0});
    tl.set(headline1_backup_text, {y: -100});
    tl.set(headline2_backup_text, {y: -100});
    tl.set(headline3_backup_text, {y: -100});
    tl.set(headline4_backup_text, {y: -100});
    tl.set(headline5_backup_text, {y: -100});
    tl.set(headline6_backup_text, {y: -100});
    tl.set(banner, {alpha: 1});


    tl.to(phone, .7, {x: 1, ease: Quint.easeOut}, 0);

    tl.to(headline1_backup, .3, {alpha: 1, ease: Quint.easeOut}, 0);
    tl.to(headline1_backup, .3, {width: 220, ease: Sine.easeOut}, 0);
    tl.to(headline1_backup, .7, {width: 185, ease: Back.easeOut}, 0.3);
    tl.to(headline1_backup_text, .7, {y: 0, ease: Quint.easeOut}, .2);

    tl.to(headline2_backup, .3, {alpha: 1, ease: Quint.easeOut}, 0.1);
    tl.to(headline2_backup, .3, {width: 700, ease: Sine.easeOut}, 0.1);
    tl.to(headline2_backup, .7, {width: 650, ease: Back.easeOut}, 0.4);
    tl.to(headline2_backup_text, .7, {y: 0, ease: Quint.easeOut}, .3);

    tl.to(headline3_backup, .3, {alpha: 1, ease: Quint.easeOut}, 0.2);
    tl.to(headline3_backup, .3, {width: 510, ease: Sine.easeOut}, 0.2);
    tl.to(headline3_backup, .7, {width: 475, ease: Back.easeOut}, 0.5);
    tl.to(headline3_backup_text, .7, {y: 0, ease: Quint.easeOut}, .4);

    tl.to(headline4_backup, .3, {alpha: 1, ease: Quint.easeOut}, 0.3);
    tl.to(headline4_backup, .3, {width: 415, ease: Sine.easeOut}, 0.3);
    tl.to(headline4_backup, .7, {width: 375, ease: Back.easeOut}, 0.6);
    tl.to(headline4_backup_text, .7, {y: 0, ease: Quint.easeOut}, .5);


    tl.to(headline1_backup, .6, {width: 0, ease: Back.easeIn}, 3.5);
    tl.to(headline1_backup_text, .7, {y: 100, ease: Quint.easeInOut}, 3.5);
    tl.to(headline2_backup, .6, {width: 0, ease: Back.easeIn}, 3.4);
    tl.to(headline2_backup_text, .7, {y: 100, ease: Quint.easeInOut}, 3.4);
    tl.to(headline3_backup, .6, {width: 0, ease: Back.easeIn}, 3.3);
    tl.to(headline3_backup_text, .7, {y: 100, ease: Quint.easeInOut}, 3.3);
    tl.to(headline4_backup, .6, {width: 0, ease: Back.easeIn}, 3.2);
    tl.to(headline4_backup_text, .7, {y: 100, ease: Quint.easeInOut}, 3.2);
    tl.to(phone, .5, {x: w, ease: Quad.easeIn}, 3.5);

    tl.to(logo, 1, {scale: 1, x: -10, y: 0, ease: Quint.easeInOut}, 3.2);

    tl.to(headline5_backup, .3, {alpha: 1, ease: Quint.easeOut}, 4.0);
    tl.to(headline5_backup, .3, {width: 650, ease: Sine.easeOut}, 4.0);
    tl.to(headline5_backup, .7, {width: 600, ease: Back.easeOut}, 4.3);
    tl.to(headline5_backup_text, .7, {y: 0, ease: Quint.easeOut}, 4.2);

    tl.to(headline6_backup, .3, {alpha: 1, ease: Quint.easeOut}, 4.1);
    tl.to(headline6_backup, .3, {width: 580, ease: Sine.easeOut}, 4.1);
    tl.to(headline6_backup, .7, {width: 535, ease: Back.easeOut}, 4.4);
    tl.to(headline6_backup_text, .7, {y: 0, ease: Quint.easeOut}, 4.3);

    tl.to(bottom_line_text, .5, {y: 0, ease: Quint.easeOut}, 3.6);
}