// Create a connection to the file.
var Connect = new XMLHttpRequest();

// var newTitle1;
// var newTitle2;
var mainXML     = "../somewhere/BNR.xml";			//@KHO: added this variable which points to the synced file
var backupXML   = "../BACKUP.xml";			//@KHO: added this variable which points to the synced file
// var datapath = "../BNR.xml";
var background;
var background2;
var backgroundOverlay;
var shot1heading1;
var shot1heading2;
var shot2heading1;
var shot2heading2;
var type;

// Define which file to open and
// send the request.


// connect to XML file
function connectToXML(filePath) {
    if(Connect.status !== 200 && Connect.status !== 0) {
        // console.log("Connect 'backup'");
        type = "backup";
    } else {
        // console.log("Connect 'DONE'");

        Connect.open("GET", filePath, false);
        Connect.setRequestHeader("Content-Type", "text/xml");
        Connect.send(null);

        return Connect.responseXML;
    }
}

// appropriate XML DOM to variable
var TheMainXMLDocument      = connectToXML(mainXML),
    TheBackupXMLDocument    = connectToXML(backupXML),
    mainXMLDOM              = TheMainXMLDocument.childNodes[0].getElementsByTagName("programma")[0],
    backupXMLDOM            = TheBackupXMLDocument.childNodes[0].getElementsByTagName("programma")[0];

// console.log("TheMainXMLDocument: ", TheMainXMLDocument);
// console.log("TheMainXMLDocument DOM: ", mainXMLDOM);
// console.log("TheBackupXMLDocument: ", TheBackupXMLDocument);
// console.log("TheBackupXMLDocument DOM: ", backupXMLDOM);

function createObjFROMXML(xmlDOM, newArr) {
    for(var i = 0; i < xmlDOM.childNodes.length; i++) {
        if(xmlDOM.childNodes[i].nodeName === "#text" || xmlDOM.childNodes[i].nodeName === "#comment") {
            continue;
        } else {
            newArr.push(xmlDOM.childNodes[i]);
        }
    }
}

// create obj from XML DOM
var mainConfigArr   = [],
    backupConfigArr = [];

createObjFROMXML(mainXMLDOM, mainConfigArr);
createObjFROMXML(backupXMLDOM, backupConfigArr);

// console.log("mainConfigArr: ", mainConfigArr);
// console.log("backupConfigArr: ", backupConfigArr);

// check important tagName in Arr
var importantTagArray       = [
    "title",
    "subtitle",
    "background"],
    importantTagArrayLen    = importantTagArray.length;

function isIncludeTagNameinArray(arrXML, tagName){
    return arrXML.indexOf(tagName) > -1;
}
function isValidateXML() {
    var countRes = 0;

    mainConfigArr.forEach(function (val) {
        for(var i = 0; i < importantTagArray.length; i++) {
            if(val.nodeName === importantTagArray[i]) {
                countRes++;
            }
        }
    });

    // console.log("countRes: ", countRes);

    return countRes;
}

// console.log("importantTagArray: ", importantTagArray);
// console.log("importantTagArrayLen: ", importantTagArrayLen);

var importantTagNameRes = isValidateXML();

// console.log("importantTagNameRes: ", importantTagNameRes);
// console.log("importantTagArrayLen: ", importantTagArrayLen);
// console.log("importantTagNameRes === importantTagArrayLen: ", importantTagNameRes === importantTagArrayLen);

if(importantTagNameRes === importantTagArrayLen) {
    console.log("DONE");

    var styleSheetValue = mainXMLDOM.getElementsByTagName("stylesheet")[0].childNodes[0].nodeValue;

    $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', styleSheetValue));

    // console.log("styleSheetValue: ", styleSheetValue);

    function returnTagNameValue(tagName) {
        var val = mainXMLDOM.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;

        if(val === "" || val === undefined || val === null) {
            return "";
        } else {
            return val;
        }

    }

    type                = returnTagNameValue("type");
    newTitle1           = returnTagNameValue("heading1");
    newTitle2           = returnTagNameValue("heading2");
    shot1heading1       = returnTagNameValue("shot1-heading1");
    shot1heading2       = returnTagNameValue("shot1-heading2");
    shot2heading1       = returnTagNameValue("shot2-heading1");
    shot2heading2       = returnTagNameValue("shot2-heading2");
    backgroundOverlay   = returnTagNameValue("transparency");
    background          = "url(" + returnTagNameValue("background-sheet1") + ")";
    background2         = "url(" + returnTagNameValue("background-sheet2") + ")";


    // console.log("type: ", type);
    // console.log("newTitle1: ", newTitle1);
    // console.log("newTitle2: ", newTitle2);
    // console.log("backgroundOverlay: ", backgroundOverlay);
    // console.log("shot1heading1: ", shot1heading1);
    // console.log("shot1heading2: ", shot1heading2);
    // console.log("shot2heading1: ", shot2heading1);
    // console.log("shot2heading2: ", shot2heading2);
    // console.log("background: ", background);
    // console.log("background2: ", background2);

} else {
    console.log("BACKUP");
    type = "backup";
}


//
// try {
//     Connect.open("GET", datapath, false);
//     Connect.setRequestHeader("Content-Type", "text/xml");
//
//     Connect.send(null);
//
//     //if(Connect.status != 200 && Connect.status != 0) {
//     //  type = "backup"
//     // } else {
//     var TheDocument = Connect.responseXML;
//
//     console.log("TheDocument: ", TheDocument);
//
//
//     // Place the root node in an element.
//     var Customers = TheDocument.childNodes[0];
//     // Retrieve each customer in turn.
//
//     $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', TheDocument.getElementsByTagName("stylesheet")[0].childNodes[0].nodeValue));
//
//
//     type = TheDocument.getElementsByTagName("type")[0].childNodes[0].nodeValue;  //@KHO: this is the new layout
//     newTitle1 = TheDocument.getElementsByTagName("heading1")[0].childNodes[0].nodeValue;  //@KHO: this is the new layout
//     newTitle2 = TheDocument.getElementsByTagName("heading2")[0].childNodes[0].nodeValue;  //@KHO: this is the new layout
//     background = 'url(' + TheDocument.getElementsByTagName("background-sheet1")[0].childNodes[0].nodeValue + ')';
//     background2 = 'url(' + TheDocument.getElementsByTagName("background-sheet2")[0].childNodes[0].nodeValue + ')';
//     backgroundOverlay = TheDocument.getElementsByTagName("transparency")[0].childNodes[0].nodeValue;
//     if (TheDocument.getElementsByTagName("shot1-heading1")[0].childNodes[0]) shot1heading1 = TheDocument.getElementsByTagName("shot1-heading1")[0].childNodes[0].nodeValue;
//     if (TheDocument.getElementsByTagName("shot1-heading2")[0].childNodes[0]) shot1heading2 = TheDocument.getElementsByTagName("shot1-heading2")[0].childNodes[0].nodeValue;
//     if (TheDocument.getElementsByTagName("shot2-heading1")[0].childNodes[0]) shot2heading1 = TheDocument.getElementsByTagName("shot2-heading1")[0].childNodes[0].nodeValue;
//     if (TheDocument.getElementsByTagName("shot2-heading2")[0].childNodes[0]) shot2heading2 = TheDocument.getElementsByTagName("shot2-heading2")[0].childNodes[0].nodeValue;
//      // }
// } catch (e) {
//
//
//     if (typeof(type) == 'undefined' || type === undefined || !type)
//         type = 'backup';
//     if (typeof(newTitle1) == 'undefined' || newTitle1 === undefined || !newTitle1)
//         newTitle1 = "Altijd op";
//     if (typeof(newTitle2) == 'undefined' || newTitle2 === undefined || !newTitle2)
//         newTitle2 = "de hoogte";
//     if (typeof(shot1heading1) == 'undefined' || shot1heading1 === undefined || !shot1heading1)
//         shot1heading1 = 'BREAKING NEWS'
//     if (typeof(shot1heading2) == 'undefined' || shot1heading2 === undefined || !shot1heading2)
//         shot1heading2 = 'NU LIVE TOT 19:30u'
//     if (typeof(shot2heading1) == 'undefined' || shot2heading1 === undefined || !shot2heading1)
//         shot2heading1 = 'HET NIEUWS IN DE'
//     if (typeof(shot2heading2) == 'undefined' || shot2heading2 === undefined || !shot2heading2)
//         shot2heading2 = 'HOOGSTE VERSNELLING'
//     background = 'url(http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg)'
//     backgroundOverlay = 'rgba(255,255,255,0.41)'
// } finally {
//
// }