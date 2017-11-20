/*
 * ===========================================
 * Java Pdf Extraction Decoding Access Library
 * ===========================================
 *
 * Project Info: http://www.idrsolutions.com
 * Help section for developers at http://www.idrsolutions.com/java-pdf-library-support/
 *
 * (C) Copyright 1997-2014, IDRsolutions and Contributors.
 *
 * This file is part of JPedal
 *
 @LICENSE@
 *
 * ---------------
 * EcmaLayout.js
 * ---------------
 */
var XFA_BORDER_STYLE = {
    none: "none", solid: "solid", lowered: "inset", dotted: "dotted",
    dashed: "dashed", emboessed: "outset", raised: "outset", etched: "outset",
    dashdot: "dashed", dashdotdot: "dotted"
};


var XFA_NUMERIC_PATTERN = "^[+-]?\\\\d*(\\\\.\\\\d*)?$";
var XFA_INTEGER_PATTERN = "^[+-]?\\\\d*$";


var ALL_PAGEAREAS = new Array();
var processingPageArea = null;
var processingContentArea = null;
var processingDateEle = null;

var textAreaPrevious;

var isFireFox = false;//navigator.userAgent.toLowerCase().indexOf("firefox") > 0;
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var isIE = navigator.userAgent.toLowerCase().indexOf('msie') > -1 || navigator.userAgent.toLowerCase().indexOf('trident') > -1;

//below are the templates for fast performance cloning

var TEMPLATE_DRAW = DCE("div");
TEMPLATE_DRAW.setAttribute("class", "draw");

var TEMPLATE_FIELD = DCE("div");
TEMPLATE_FIELD.setAttribute("class", "field");

var TEMPLATE_UI_BUTTON = DCE("input");
TEMPLATE_UI_BUTTON.setAttribute("type", "button");
TEMPLATE_UI_BUTTON.setAttribute("class", "ui");

var TEMPLATE_UI_TEXTEDIT = DCE("input");
TEMPLATE_UI_TEXTEDIT.setAttribute("type", "text");
TEMPLATE_UI_TEXTEDIT.setAttribute("class", "ui");

var TEMPLATE_UI_PASSWORDEDIT = DCE("input");
TEMPLATE_UI_PASSWORDEDIT.setAttribute("type", "PASSWORD");
TEMPLATE_UI_PASSWORDEDIT.setAttribute("class", "ui");

var TEMPLATE_UI_TEXTAREA = DCE("textarea");
TEMPLATE_UI_TEXTAREA.setAttribute("class", "ui");

//use this code below to hide datetimepicker
document.onclick = function (e) {
    var ecPicker = document.getElementById("ecmaDatePicker");
    var cur = e.target;
    while (cur && cur !== ecPicker && cur !== processingDateEle) {
        cur = cur.parentNode;
        if (cur === null) {
            hideEcmaDatePicker();
        }
    }
};

function DCE(tag) {
    return document.createElement(tag);
}

function IFIT(actualW, actualH, maxW, maxH) {
    var ratio = Math.min((maxW / actualW), (maxH / actualH));
    return {w: (actualW * ratio), h: (actualH * ratio)};
}

function toRGB(str) {
    return "rgb(" + str + ")";
}

function layoutPseudoModel() {
    this.ready = false;
}

layoutPseudoModel.prototype = inherit(new object());

Object.defineProperty(layoutPseudoModel.prototype, "absPage", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("absPage not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "absPageCount", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        return document.getElementsByClassName("pageArea").length;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "absPageCountInBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("absPageCountInBatch not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "absPageInBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("absPageInBatch not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "absPageSpan", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("absPageSpan not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "h", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, strParam, intParam) {
        console.log("h not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "page", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("page not implemented");
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "pageContent", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam, strParam, boolParam) {
        console.log("pageContent not implemented");
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "pageCount", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        return document.getElementsByClassName("pageArea").length;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "pageSpan", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("pageSpan not implemented");
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "relayout", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        reDraw();
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "relayoutPageArea", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("relayoutPageArea not implemented");
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "sheet", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("sheet not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "sheetCount", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("sheetCount not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "sheetCountInBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("sheetCountInBatch not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "sheetInBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("sheetInBatch not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "w", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, strParam, intParam) {
        console.log("w not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "x", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, strParam, intParam) {
        console.log("x not implemented");
        return 0;
    }
});

Object.defineProperty(layoutPseudoModel.prototype, "y", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, strParam, intParam) {
        console.log("y not implemented");
        return 0;
    }
});

function hostPseudoModel() {
    this.className = "hostPseudoModel";
    this.appType = "";
    this.calculationsEnabled = true;
    this.currentPage = 0;
    this.language = "";
    this.numPages = 0;
    this.platform = "";
    this.title = "";
    this.validationsEnabled = false;
    this.variation = "";
    this.version = "";
}

hostPseudoModel.prototype = inherit(new object());

Object.defineProperty(hostPseudoModel.prototype, "beep", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
        snd.play();
    }
});

Object.defineProperty(hostPseudoModel.prototype, "documentCountInBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("documentCountInBatch not implemented");
        return 1;
    }
});

Object.defineProperty(hostPseudoModel.prototype, "documentInBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("documentInBatch not implemented");
        return 0;
    }
});

Object.defineProperty(hostPseudoModel.prototype, "exportData", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam, boolParam) {
        console.log("exportData not implemented");
    }
});

Object.defineProperty(hostPseudoModel.prototype, "getFocus", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("getFocus not implemented");
        return {};
    }
});

Object.defineProperty(hostPseudoModel.prototype, "gotoURL", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam, boolParam) {
        console.log("gotourl not implemented");
    }
});

Object.defineProperty(hostPseudoModel.prototype, "importData", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        console.log("importData not implemented");
    }
});

Object.defineProperty(hostPseudoModel.prototype, "messageBox", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2, intParam1, intParam2) {
        alert(strParam1);
    }
});

Object.defineProperty(hostPseudoModel.prototype, "openList", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("openList not implemented");
    }
});

Object.defineProperty(hostPseudoModel.prototype, "pageDown", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("pageDown not implemented");
    }
});

Object.defineProperty(hostPseudoModel.prototype, "pageUp", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("pageDown not implemented");
    }
});

Object.defineProperty(hostPseudoModel.prototype, "print", {
    writable: true, enumerable: true, configurable: true,
    value: function (boolParam1, intParam2, intParam3, boolParam4, boolParam5, boolParam6, boolParam7, boolParam8) {
        window.print();
    }
});

Object.defineProperty(hostPseudoModel.prototype, "resetData", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("resetData not implemented");
    }
});

Object.defineProperty(hostPseudoModel.prototype, "response", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2, strParam3, boolParam) {
        console.log("response not implemented");
        return "";
    }
});

Object.defineProperty(hostPseudoModel.prototype, "setFocus", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        if (objParam.domElement) {
            objParam.domElement.focus();
        }
    }
});

function validateInput(e, patternStr) {
    var reg = new RegExp(patternStr, "g");
    if (!reg.test(e.value)) {
        var errSpan = DCE("span");
        var spans = e.parentElement.getElementsByTagName("span");
        if (spans.length === 0) {
            errSpan.setAttribute("class", "errorMsg");
            errSpan.textContent = "Invalid Input";
            e.parentElement.appendChild(errSpan);
            window.setTimeout(function () {
                var par = errSpan.parentElement;
                par.removeChild(errSpan);
            }, 1000);
        }
        e.value = "";
    }
}

function getDraw(draw) {
    var dEle = TEMPLATE_DRAW.cloneNode(true);
    var value = findChild(draw, T_VALUE);
    var paraT = findChild(draw, T_PARA);
    if (paraT !== null) {
        var lineH = XPTS(paraT.lineHeight);
        if (lineH > 0) {
            dEle.style.lineHeight = lineH + "pt";
        }
    }

    var minW = draw._minW;
    if (minW > 0) {
        dEle.style.minWidth = minW + "pt";
    }
    var minH = draw._minH;
    if (minH > 0) {
        dEle.style.minHeight = minH + "pt";
    }
    var w = draw._w;
    if (w > 0) {
        dEle.style.width = w + "pt";
    }
    var h = draw._h;
    if (h > 0) {
        dEle.style.height = h + "pt";
    }

    w = Math.max(minW, w);
    h = Math.max(minH, h);

    var childList = draw.nodes;
    for (var i = 0, ii = childList.length; i < ii; i++) {
        var child = childList.item(i);
        var cid = child.classID;
        if (cid === T_BORDER) {
            drawBorder(child, dEle, false);
        } else if (cid === T_FONT) {
            drawFont(child, dEle);
        } else if (cid === T_MARGIN) {
            var mTop = XPTS(child.topInset);
            var mRight = XPTS(child.rightInset);
            var mBottom = XPTS(child.bottomInset);
            var mLeft = XPTS(child.leftInset);
            dEle.style.padding = mTop + "pt " + mRight + "pt " + mBottom + "pt " + mLeft + "pt";
        }
    }

    if (value !== null) {
        var list = value.nodes;
        for (var i = 0, len = list.length; i < len; i++) {
            var dd = list.item(i);
            var cn = dd.className;
            if (cn === "rectangle") {
                drawBorder(dd, dEle, false);
            } else if (cn === "exData" || cn === "text") {
                dEle.style.display = "table";
                var label = DCE("label");
                label.innerHTML = dd.value;
                dEle.appendChild(label);
                var para = findChild(draw, T_PARA);
                if (para !== null) {
                    label.style.verticalAlign = para.vAlign;
                    label.style.textAlign = para.hAlign;
                }
            } else if (cn === "para") {
                var lineH = XPTS(para.lineHeight);
                if (lineH > 0) {
                    console.log(lineH + " " + lineH);
                    dEle.style.lineHeight = lineH + "pt";
                }
            } else if (cn === "image") {
                var img = DCE("img");
                if (dd.href.length > 0) {
                    img.setAttribute("src", dd.href);
                } else {
                    var data64 = dd.value;
                    var cType = dd.contentType;
                    img.setAttribute("src", "data: " + cType + ";charset=utf-8;base64," + data64);
                }
                var asp = dd.aspect;

                img.style.maxWidth = w + "pt";
                img.style.maxHeight = h + "pt";

                img.onload = function () {
                    var iw = XPTS(this.width + "px");
                    var ih = XPTS(this.height + "px");
                    if (asp === "fit" || asp === "none" || asp === "actual") {
                        var obj = IFIT(iw, ih, w, h);
                        img.style.width = obj.w + "pt";
                        img.style.height = obj.h + "pt";
                    } else if (asp === "width") {
                        img.style.width = w + "pt";
                    } else if (asp === "height") {
                        img.style.maxHeight = h + "pt";
                    }
                };

                dEle.appendChild(img);
            }
        }
    }

    var relevant = draw.getAttribute("relevant");
    if (relevant.length > 0) {
        if (relevant === "-print") {
            dEle.className += " printMinus";
        } else if (relevant === "+print") {
            dEle.className += " printPlus";
        }
    }

    draw.domElement = dEle;
    dEle.somElement = draw;

    if (draw.rotate !== "0") {
        var rr = draw.rotate;
        dEle.style.WebkitTransformOrigin = "0 0";
        dEle.style.msTransformOrigin = "0 0";
        dEle.style.transformOrigin = "0 0";
        dEle.style.WebkitTransform = "rotate(-" + rr + "deg)";
        dEle.style.msTransform = "rotate(-" + rr + "deg)";
        dEle.style.transform = "rotate(-" + rr + "deg)";
        console.log(dEle.style.transformOrigin);
    }

    return dEle;
}

function getField(field) {

    var minW = field._minW;
    var minH = field._minH;
    var maxW = field._maxW;
    var maxH = field._maxH;
    var w = field._w;
    var h = field._h;

    var fSet = TEMPLATE_FIELD.cloneNode(true);

    var fStyle = fSet.style;

    if (w === 0) {
        fStyle.minWidth = minW + "pt";
    } else {
        fStyle.width = w + "pt";
    }

    if (h === 0) {
        fStyle.minHeight = minH + "pt";
    } else {
        fStyle.height = h + "pt";
    }

    if (maxH > 0) {
        fStyle.maxWidth = maxW + "pt";
    }
    if (maxH > 0) {
        fStyle.maxHeight = maxH + "pt";
    }

    var fInput = getInput(field);
    var isButton = field.getSubType() === TYPE_BUTTON;

    var isCheck = field.getSubType() === TYPE_CHECKBUTTON;
    if (isCheck) {
        fInput.style.width = fInput.style.height = "10pt";
    }

    var caption = null;
    var curFontSize = 10;
    var curReserve = 0;
    var curWidth = Math.max(w, minW);

    var mRight = 0;
    var mLeft = 0;
    var mBottom = 0;
    var mTop = 0;

    var childList = field.nodes;
    for (var i = 0, ii = childList.length; i < ii; i++) {
        var child = childList.item(i);
        var cid = child.classID;
        if (cid === T_BORDER) {
            drawBorder(child, fSet, false);
        } else if (cid === T_CAPTION) {
            caption = child;
        } else if (cid === T_FONT) {
            drawFont(child, fSet);
            curFontSize = XPTS(child.size);
        } else if (cid === T_MARGIN) {
            mTop = XPTS(child.topInset);
            mRight = XPTS(child.rightInset);
            mBottom = XPTS(child.bottomInset);
            mLeft = XPTS(child.leftInset);
            fStyle.padding = mTop + "pt " + mRight + "pt " + mBottom + "pt " + mLeft + "pt";
        } else if (cid === T_UI) {
            var arr = new Array();
            findDescendant(child, T_BORDER, arr);
            //disable internal content border at the moment
//            if (arr.length > 0) {
//                drawBorder(arr[0], fInput, false);
//            }
        } else if (cid === T_PARA) {
            fInput.style.verticalAlign = child.vAlign;
            fInput.style.textAlign = child.hAlign;
        }
    }

    if (caption !== null) {

        var fCap = DCE("div");
        fCap.setAttribute("class", "caption");

        var para = findChild(caption, T_PARA);
        var ff = findChild(caption, T_FONT);
        if (ff !== null) {
            if (isButton) {
                drawFont(ff, fInput);
            } else {
                drawFont(ff, fCap);
            }
        }

        var place = caption.placement;
        var reserve = 0;
        if ("reserve" in caption) {
            reserve = XPTS(caption.reserve);
        }

        var value = findChild(caption, T_VALUE);

        if (isButton && value !== null) {
            //button does not like innerHTML stuff;
            var tSpan = DCE("span");
            tSpan.innerHTML = value.hashtagText;
            fInput.value = tSpan.textContent;
            fSet.appendChild(fInput);

        } else {

            var td0 = DCE("div");
            td0.setAttribute("class", "box");
            var td1 = DCE("div");
            td1.setAttribute("class", "box");
            fSet.appendChild(td0);
            fSet.appendChild(td1);

            if (value !== null) {
                var t = findChild(value, T_TEXT);
                if (t !== null) {
                    fCap.innerHTML = t.value;
                } else {
                    var ex = findChild(value, T_EXDATA);
                    if (ex !== null) {
                        fCap.innerHTML = ex.value;
                    }
                }
            }
            if (place === "left") {
                if (reserve !== 0) {
                    td0.style.width = reserve + "pt";
                }
                td0.appendChild(fCap);
                td1.appendChild(fInput);
                if (para !== null) {
                    td0.style.verticalAlign = para.vAlign;
                    td0.style.textAlign = para.hAlign;
                }
                td1.style.height = "100%";
                td1.style.verticalAlign = "middle";
                curReserve = reserve;
            } else if (place === "right") {
                if (reserve !== 0) {
                    td1.style.width = reserve + "pt";
                }
                td0.appendChild(fInput);
                td1.appendChild(fCap);
                if (para !== null) {
                    td1.style.verticalAlign = para.vAlign;
                    td1.style.textAlign = para.hAlign;
                }
                td0.style.verticalAlign = "middle";
                td0.style.height = "100%";
                curReserve = reserve;
            } else if (place === "top") {
                td0.style.height = reserve + "pt";
                fCap.style.display = "table-cell";
                td0.appendChild(fCap);
                td1.appendChild(fInput);
                td1.style.verticalAlign = "middle";
                td0.style.display = "table-row";
                td1.style.height = "100%";
                if (para !== null) {
                    fCap.style.verticalAlign = para.vAlign;
                }
            } else if (place === "bottom") {
                fCap.style.height = reserve + "pt";
                fCap.style.display = "table-cell";
                td0.appendChild(fInput);
                td1.appendChild(fCap);
                td0.style.height = "100%";
                td0.style.verticalAlign = "middle";
                td1.style.display = "table-row";
                if (para !== null) {
                    fCap.style.verticalAlign = para.vAlign;
                }
            }
        }

    } else {
        fSet.appendChild(fInput);
    }

    field.domElement = fSet;
    fSet.somElement = field;

    var relevant = field.getAttribute("relevant");
    if (relevant.length > 0) {
        if (relevant === "-print") {
            fSet.className += " printMinus";
        } else if (relevant === "+print") {
            fSet.className += " printPlus";
        }
    }


    if (field.presence === "hidden") {
        fStyle.display = "none";
    } else if (field.presence === "invisible") {
        fStyle.visibility = "hidden";
    } else {
        var combArr = new Array();
        findDescendant(field, T_COMB, combArr);
        if (combArr.length > 0) {
            var nCell = parseInt(combArr[0].numberOfCells);
            if (nCell !== 0) {
                fInput.style.fontFamily = "monospace";
                fInput.maxLength = nCell;
                var holderStr = " ";
                for (var i = 1; i < nCell; i++) {
                    holderStr += "|";
                }
                fInput.placeholder = holderStr;
                var gap = 0;

                if (place === "left" || place === "right") {
                    gap = ((curWidth - curReserve - mLeft - mRight) - (curFontSize * 0.55 * nCell)) / (nCell + 1);
                } else {
                    gap = ((curWidth - mLeft - mRight) - (curFontSize * 0.55 * nCell)) / (nCell + 1);
                }
                if (gap > 0) {
                    fInput.style.letterSpacing = gap + "pt";
                }
            }
        }
    }

    if (field.rotate !== "0") {
        var rr = field.rotate;
        fSet.style.WebkitTransformOrigin = "0 0";
        fSet.style.msTransformOrigin = "0 0";
        fSet.style.transformOrigin = "0 0";
        fSet.style.WebkitTransform = "rotate(-" + rr + "deg)";
        fSet.style.msTransform = "rotate(-" + rr + "deg)";
        fSet.style.transform = "rotate(-" + rr + "deg)";
    }

    return fSet;
}

function expandTextArea(ele) {
    var mh = ele.somElement._minH;
    if (mh > 0) {
        var capt = findChild(ele.somElement, T_CAPTION);
        var marg = findChild(ele.somElement, T_MARGIN);
        if (marg !== null) {
            mh -= (XPTS(marg.topInset) + XPTS(marg.bottomInset));
        }
        if (capt !== null && (capt.placement === "top" || capt.placement === "bottom") && capt.reserve.length > 0) {
            mh -= XPTS(capt.reserve);
        }
        ele.style.height = "auto";
        var curHeight = XPTS(ele.scrollHeight + "px");
        if (curHeight > mh && ele.value.length > 0) {
            ele.style.height = curHeight + "pt";
        } else {
            ele.style.height = mh + "pt";
        }
    }
}

function isRawFloat(n) {
    return n === Number(n) && n % 1 !== 0;
}

function updateHTMLFields() {
    var fieldArr = document.getElementsByClassName("ui");
    for (var a = 0, aa = fieldArr.length; a < aa; a++) {
        var input = fieldArr[a];
        var field = input.somElement;
        if (!field) {
            continue;
        }
        var tagName = input.tagName.toUpperCase();
        if (tagName === "SELECT") {
            input.textContent = "";
            var optArr = new Array();
            var items = findChildren(field, T_ITEMS);
            if (items.length === 2) {
                var texts0 = findChildren(items[0], T_TEXT);
                var texts1 = findChildren(items[1], T_TEXT);
                var texts = [texts0, texts1];
                var textsLen = texts0.length;

                for (var i = 0; i < textsLen; i++) {
                    var opt = DCE("option");
                    optArr.push(opt);
                }

                for (var z = 0; z < items.length; z++) {
                    var it = items[z];
                    var isValue = it.save === "1"; //do string check not number
                    if (isValue) {
                        textsLen = texts[z].length;
                        for (var i = 0; i < textsLen; i++) {
                            var textStr = texts[z][i].value;
                            optArr[i].value = textStr;
                        }
                    } else {
                        for (var i = 0; i < textsLen; i++) {
                            var textStr = texts[z][i].value;
                            optArr[i].textContent = textStr;
                        }
                    }
                }
            } else if (items.length === 1) {
                var texts = findChildren(items[0], T_TEXT);
                for (var i = 0; i < texts.length; i++) {
                    var opt = DCE("option");
                    var textStr = texts[i].value;
                    opt.textContent = textStr;
                    opt.value = textStr;
                    optArr.push(opt);
                }
            }
            if (optArr.length > 0 && optArr[0].value.trim() !== "") {
                var opt = DCE("option");
                input.appendChild(opt);
            }

            for (var z = 0, zz = optArr.length; z < zz; z++) {
                input.appendChild(optArr[z]);
            }
            input.value = field.rawValue;

        } else if (tagName === "TEXTAREA") {
            input.value = field.rawValue;
        } else if (tagName === "INPUT") {
            var type = input.type.toUpperCase();
            if (type === "TEXT" || type === "PASSWORD") {
                var raw = field.rawValue;
                if (raw && field.getSubType() === TYPE_NUMERICEDIT) {
                    var rr = "" + raw;
                    if (rr.indexOf(".") !== -1) {
                        input.value = parseFloat(raw).toFixed(2);
                    } else {
                        input.value = parseInt(raw);
                    }

                } else {
                    input.value = field.rawValue;
                }
            } else if (type === "CHECKBOX") {
                if (field.rawValue === "1") {
                    input.checked = true;
                }
            } else if (type === "radio") {

            }
        }
    }
}

function fireEvent(hEle, activity, isText) {

    var hType = hEle.type.toUpperCase();

    if (activity === "change") {
        if (hType === "CHECKBOX") {
            if (hEle.checked) {
                hEle.somElement.rawValue = xfa.event.newText = "1";
            } else {
                hEle.somElement.rawValue = xfa.event.newText = "0";
            }
        } else {
            hEle.somElement.rawValue = xfa.event.newText = hEle.value;
        }
    }

    var field = hEle.somElement;

    var arr = new Array();
    iterateAndFireEvent(field, activity, arr);

    var needUpdate = arr.length > 0;
    if ((activity === "change" || activity === "click") && !needUpdate && field.parent.className === "exclGroup") {
        var eventsArr = findChildren(field.parent, T_EVENT);
        for (var z = 0, zz = eventsArr.length; z < zz; z++) {
            if (eventsArr[z].activity === activity) {
                var scr = findChild(eventsArr[z], T_SCRIPT);
                if (scr !== null) {
                    needUpdate = true;
                    processingEle = field;
                    field.parent.fireEvent(scr.value);
                }
            }
        }
    }

    if (activity !== "enter") {
        xfa.form.recalculate();
        updateHTMLFields();
    }

    if (needUpdate && !isText) {
        reDraw();
    } else if (hType === "TEXTAREA") {
        if (activity === "enter") {
            textAreaPrevious = hEle.value;
        } else if ((activity === "change") && hEle.value !== textAreaPrevious) {
            textAreaPrevious = hEle.value;
            reDraw(hEle);
        }
    }
}

function getInput(field) {
    var st = field.getSubType();
    var input = null;

    var isText = false;
    var isArea = false;

    switch (st) {
        case TYPE_TEXTEDIT:
            if (field.multiLine === "1") { //this is string check not number
                input = TEMPLATE_UI_TEXTAREA.cloneNode(true);
                input.setAttribute("class", field.name);
            } else {
                input = TEMPLATE_UI_TEXTEDIT.cloneNode(true);
                input.setAttribute("class", field.name);
                isArea = field._minH > 0;
            }
            input.value = field.rawValue;
            isText = true;
            break;
        case TYPE_BUTTON:
            input = TEMPLATE_UI_BUTTON.cloneNode(true);
            input.setAttribute("class", field.name);
            break;
        case TYPE_PASSWORDEDIT:
            input = TEMPLATE_UI_PASSWORDEDIT.cloneNode(true);
            input.setAttribute("class", field.name);
            input.value = field.rawValue;
            isText = true;
            break;
        case TYPE_NUMERICEDIT:
            input = TEMPLATE_UI_TEXTEDIT.cloneNode(true);
            input.setAttribute("class", field.name);
            input.setAttribute("onkeyup", "validateInput(this,\"" + XFA_NUMERIC_PATTERN + "\")");
            var raw = field.rawValue;
            if (raw) {
                var rr = "" + raw;
                if (rr.indexOf(".") !== -1) {
                    input.value = parseFloat(raw).toFixed(2);
                } else {
                    input.value = parseInt(raw);
                }
            } else {
                input.value = field.rawValue;
            }
            isText = true;
            break;
        case TYPE_DATETIMEEDIT:
            input = TEMPLATE_UI_TEXTEDIT.cloneNode(true);
            input.setAttribute("class", field.name);
            input.value = field.rawValue;
            isText = true;
            break;
        case TYPE_CHECKBUTTON:
            input = DCE("input");
            input.setAttribute("class", field.name);
            if (field.parent.className === "exclGroup") {
                var nn = field.parent.somExpression;
                input.setAttribute("type", "radio");
                input.setAttribute("name", nn);
                var itm = findChild(field, T_ITEMS);
                if (itm !== null) {
                    var ing = findChild(itm, T_INTEGER);
                    var txt = findChild(itm, T_TEXT);
                    if (ing !== null) {
                        input.value = ing.value;
                    } else if (txt !== null) {
                        input.value = txt.value;
                    }
                }
                if (input.value === field.parent.rawValue) {
                    input.checked = true;
                }

            } else {
                input.setAttribute("type", "checkbox");
                if (field.rawValue === "1") {
                    input.checked = true;
                }
            }
            break;
        case TYPE_CHOICELIST:
            input = DCE("select");
            input.setAttribute("class", field.name);
            var items = findChildren(field, T_ITEMS);
            var optArr = new Array();
            if (items.length === 2) {
                var texts0 = findChildren(items[0], T_TEXT);
                var texts1 = findChildren(items[1], T_TEXT);
                var texts = [texts0, texts1];
                var textsLen = texts0.length;

                for (var i = 0; i < textsLen; i++) {
                    var opt = DCE("option");
                    optArr.push(opt);
                }

                for (var z = 0; z < items.length; z++) {
                    var it = items[z];
                    var isValue = it.save === "1"; //do string check not number
                    if (isValue) {
                        textsLen = texts[z].length;
                        for (var i = 0; i < textsLen; i++) {
                            var textStr = texts[z][i].value;
                            optArr[i].value = textStr;
                        }
                    } else {
                        for (var i = 0; i < textsLen; i++) {
                            var textStr = texts[z][i].value;
                            optArr[i].textContent = textStr;
                        }
                    }
                }
            } else if (items.length === 1) {
                var texts = findChildren(items[0], T_TEXT);
                for (var i = 0; i < texts.length; i++) {
                    var opt = DCE("option");
                    var textStr = texts[i].value;
                    opt.textContent = textStr;
                    opt.value = textStr;
                    optArr.push(opt);
                }
            }
            if (optArr.length > 0 && optArr[0].value.trim() !== "") {
                var opt = DCE("option");
                input.appendChild(opt);
            }
            for (var z = 0, zz = optArr.length; z < zz; z++) {
                input.appendChild(optArr[z]);
            }
            input.selectedIndex = -1;
            input.value = field.rawValue;
            break;
        case TYPE_IMAGEEDIT:
            input = DCE("input");
            input.setAttribute("class", field.name);
            input.setAttribute("type", "file");
            break;
        case TYPE_SIGNATURE:
            input = DCE("div");
            input.style.width = input.style.height = "100%";
            input.style.backgroundColor = "rgba(222,227,255,0.9)";
            break;
    }

    if (field.access === "readOnly") {
        input.readOnly = true;
    }

    setInputEvents(input, field, isText, isArea);

    input.somElement = field;
    return input;

}

function setInputEvents(input, field, isText, isArea) {

    var subType = field.getSubType();

    var focusStr = "";
    var blurStr = "";
    var clickStr = "";
    var changeStr = "";

    var changeAdded = false;
    var eventsArr = findChildren(field, T_EVENT);
    for (var z = 0, zz = eventsArr.length; z < zz; z++) {
        var activity = eventsArr[z].activity;
        if (activity === "enter") {
            focusStr += "fireEvent(this,'enter'," + isText + ");";
        } else if (activity === "exit") {
            blurStr += "fireEvent(this,'exit'," + isText + ");";
        } else if (activity === "change") {
            if (isText) {
                changeStr += "fireEvent(this,'change'," + isText + ");";
            } else if (subType === TYPE_CHECKBUTTON) {
                clickStr += "fireEvent(this,'change',false);";
            } else if (subType === TYPE_CHOICELIST) {
                changeStr += "fireEvent(this,'change',false);";
                changeAdded = true;
            }
        } else if (activity === "mouseUp" || activity === "mouseDown" || activity === "click") {
            if (subType === TYPE_BUTTON || subType === TYPE_CHECKBUTTON) {
                clickStr += "fireEvent(this,'" + activity + "',false);";
            } else if (subType === TYPE_CHOICELIST) {
                changeStr += "fireEvent(this,'" + activity + "',false);";
            }
        }
    }

    
    if (isText && changeStr.length === 0) {
        blurStr += "fireEvent(this,'change'," + isText + ");";
    } else if (subType === TYPE_CHOICELIST) {
        changeStr += "fireEvent(this,'change'," + isText + ");";
    } else if (subType === TYPE_CHECKBUTTON) {
        if (!changeAdded) {
            clickStr += "fireEvent(this,'change'," + isText + ");";
        }
        clickStr += "fireEvent(this,'click'," + isText + ");";
    }

    if (focusStr.length > 0) {
        input.setAttribute("onfocus", focusStr);
    } else if (isArea) {
        input.setAttribute("onfocus", "fireEvent(this,'enter',true);");
    }


    if (blurStr.length > 0) {
        input.setAttribute("onblur", blurStr);
    }

    if (clickStr.length > 0) {
        input.setAttribute("onclick", clickStr);
    }
    if (changeStr.length > 0) {
        input.setAttribute("onchange", changeStr);
    }

    if (subType === TYPE_DATETIMEEDIT) {
        input.setAttribute("onclick", "showEcmaDatePicker(this,event);" + clickStr);
    }

}

function drawBorder(b, hComp, isSubform) {
//    return;
    var edge = findChildren(b, T_EDGE);
    var edgeLen = edge.length;
    if (b.presence === "visible" && edgeLen > 0) {
        if (edgeLen > 1 && !isSubform) {
            for (var i = 0; i < edgeLen; i++) {
                var e = edge[i];
                var thick = XPTS(e.thickness);
                thick = thick > 0 ? Math.max(thick, 0.8) : thick;
                var c = "black";
                var ec = findChild(e, T_COLOR);
                if (ec !== null) {
                    c = toRGB(ec.value);
                }

                var stroke = XFA_BORDER_STYLE[e.stroke];
                if (e.presence === "visible") {
                    switch (i) {
                        case 0:
                            hComp.style.borderTop = thick + "pt " + stroke + " " + c;
                            break;
                        case 1:
                            hComp.style.borderRight = thick + "pt " + stroke + " " + c;
                            break;
                        case 2:
                            hComp.style.borderBottom = thick + "pt " + stroke + " " + c;
                            break;
                        case 3:
                            hComp.style.borderLeft = thick + "pt " + stroke + " " + c;
                            break;
                    }
                }
            }
        } else {
            var e = edge[0];
            if (e.presence === "visible") {
                var thick = XPTS(e.thickness);
                var stroke = XFA_BORDER_STYLE[e.stroke];
                thick = thick > 0 ? Math.max(thick, 0.8) : thick;
                var c = "black";
                var ec = findChild(e, T_COLOR);
                if (ec !== null) {
                    c = toRGB(ec.value);
                }
                hComp.style.outline = thick + "pt " + stroke + " " + c;
            }
        }
    }

    var bf = findChild(b, T_FILL);
    if (bf !== null) {
        drawFill(bf, hComp);
    }
}

function drawFont(nn, hComp) {
    hComp.style.fontSize = nn.size;
    hComp.style.fontFamily = nn.typeface;
    hComp.style.fontWeight = nn.weight;
    hComp.style.fontStyle = nn.posture;
    var ff = findChild(nn, T_FILL);
    if (ff !== null) {
        var cc = findChild(ff, T_COLOR);
        hComp.style.color = toRGB(cc.value);
    }
}

function drawFill(bf, hComp) {

    var firstColor = "rgb(255,255,255)";
    var secondColor = "rgb(0,0,0)";

    var bc = findChild(bf, T_COLOR);
    if (bc !== null) {
        firstColor = toRGB(bc.value);
    }

    var bfList = bf.nodes;
    var len = bfList.length;
    var csFound = false;
    for (var i = 0; i < len; i++) {
        var sh = bfList.item(i);
        var cn = sh.className;
        if (cn === "linear") {
            var bc2 = findChild(sh, T_COLOR);
            if (bc2 !== null) {
                secondColor = toRGB(bc2.value);
            }
            updateLinearCSS(hComp, sh.type.substring(2), secondColor, firstColor);
            csFound = true;
        } else if (cn === "radial") {
            var bc2 = findChild(sh, T_COLOR);
            if (bc2 !== null) {
                secondColor = toRGB(bc2.value);
            }
            if (sh.type === "toEdge") {
                updateRadialCSS(hComp, firstColor, secondColor);
            } else {
                updateRadialCSS(hComp, secondColor, firstColor);
            }
            csFound = true;
        } else if (cn === "pattern") {
            csFound = true;
        }

    }
    if (!csFound) {
        hComp.style.backgroundColor = firstColor;
    }
}

function updateRadialCSS(hEle, c1, c2) {
    var rVal = '';
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
    var dom = document.createElement('div');
    for (var i = 0, ii = prefixes.length; i < ii; i++) {
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';
        if (dom.style.background) {
            rVal = prefixes[i];
        }
    }
    delete dom;
    hEle.style.background = rVal + 'radial-gradient(circle,' + c1 + ', ' + c2 + ')';
}

function updateLinearCSS(hEle, dir, c1, c2) {
    var rVal = '';
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
    var dom = document.createElement('div');
    for (var i = 0, ii = prefixes.length; i < ii; i++) {
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';
        if (dom.style.background) {
            rVal = prefixes[i];
        }
    }
    delete dom;
    hEle.style.background = rVal + 'linear-gradient(' + dir + ', ' + c1 + ', ' + c2 + ')';
}

function findContainerHeight(nn) {
    if (!nn.isContainer) {
        return 0;
    } else if (nn.className === "area") {
        var hh = 0;
        var list = nn.nodes;
        var len = list.length;
        for (var i = 0; i < len; i++) {
            var temp = list.item(i);
            if (temp.isContainer) {
                var y = temp._y;
                var tempH = findContainerHeight(temp);
                hh = Math.max(y + tempH, hh);
            }
        }
        return hh;
    } else if (nn.isWidget) {
        return getDomHeight(nn);
    }
    var h = nn._h;
    var minH = nn._minH;
    var hh = Math.max(h, minH);
    if ((hh === 0 && nn.layout === "position") || nn.layout === "row") {
        var list = nn.nodes;
        var len = list.length;
        for (var i = 0; i < len; i++) {
            var temp = list.item(i);
            if (temp.isContainer) {
                var y = temp._y;
                var tempH = findContainerHeight(temp);
                hh = Math.max(y + tempH, hh);
            }
        }
        var mm = findChild(nn, T_MARGIN);
        if (mm !== null) {
            hh += XPTS(mm.topInset);
            hh += XPTS(mm.bottomInset);
        }
    }
    return hh;
}

function findContainerWidth(nn) {
    if (!nn.isContainer) {
        return 0;
    }
    var w = nn._w;
    var minW = nn._minW;
    var maxW = nn._maxW;
    var ww = Math.max(w, minW);
    if (ww > 0) {
        return w;
    }
    if (nn.isWidget) {
        return Math.max(ww, maxW);
    }

    //no width found do the calculation
    var list = nn.nodes;
    var len = list.length;
    var totalW = 0;
    if (nn.layout === "position" || nn.layout === "tb") {
        for (var i = 0; i < len; i++) {
            var temp = list.item(i);
            if (temp.isContainer) {
                var x = temp._x;
                var tempW = findContainerWidth(temp);
                totalW = Math.max(x + tempW, totalW);
            }
        }
    } else if (nn.layout === "lr-tb" || nn.layout === "rl-tb") {
        for (var i = 0; i < len; i++) {
            var temp = list.item(i);
            if (temp.isContainer) {
                var tempW = findContainerWidth(temp);
                totalW += tempW;
            }
        }
    } else if (nn.layout === "table") {
        var cw = nn.columnWidths;
        if (cw.length > 0) {
            var wSplits = cw.split(" ");
            for (var i = 0, ii = wSplits.length; i < ii; i++) {
                var val = XPTS(wSplits[i]);
                if (val !== "-1") {
                    totalW += val;
                }
            }
        }
    } else if (nn.layout === "row" || nn.layout === "rl-row") {
        totalW = findContainerWidth(nn.parent);
    }
    return totalW;
}

function isNodeVisibe(nn) {
    var par = nn;
    while (par !== null) {
        if (par.isContainer && ("presence" in par) && par.presence === "invisible") {
            return false;
        }
        par = par.parent;
    }
    return true;
}

function getPageAreaWidth(pa) {
    var w = 0;
    var med = findChild(pa, T_MEDIUM);
    if (med !== null) {
        if (med.orientation === "portrait") {
            w = XPTS(med.short);
        } else {
            w = XPTS(med.long);
        }
    }
    if (w === 0) {
        var contA = findChild(pa, T_CONTENTAREA);
        if (contA !== null) {
            w = contA._x + contA._w;
        }
    }
    return w;
}

function getPageAreaHeight(pa) {
    var h = 0;
    var med = findChild(pa, T_MEDIUM);
    if (med !== null) {
        if (med.orientation === "portrait") {
            h = XPTS(med.long);
        } else {
            h = XPTS(med.short);
        }
    }
    if (h === 0) {
        var contA = findChild(pa, T_CONTENTAREA);
        if (contA !== null) {
            h = contA._y + contA._h;
        }
    }
    return h;
}

function getDomHeight(nn) {
    if (nn.className === "field" && nn.getSubType() === TYPE_TEXTEDIT
        && nn.multiLine === "1" && nn.rawValue) {
        var sh = XPTS(nn.domElement.getElementsByTagName("textarea")[0].scrollHeight + "px");
        var ch = XPTS(nn.domElement.clientHeight + "px");
        var capt = findChild(nn, T_CAPTION);
        if (capt !== null && (capt.placement === "top" || capt.placement === "bottom") && capt.reserve.length > 0) {
            sh += XPTS(capt.reserve);
        }
        return Math.max(sh, ch);
    }
    var h = nn._h;
    var minH = nn._minH;
    return Math.max(h, minH);
}

function reDraw(focusEle) {
    var previous = 0;
    if (isIE) {
        previous = document.documentElement.scrollTop;
    } else {
        previous = window.scrollY;
    }

    ALL_PAGEAREAS = new Array();
    findDescendants(xfa.form, T_PAGEAREA, ALL_PAGEAREAS);

    for (var i = 0, ii = ALL_PAGEAREAS.length; i < ii; i++) {
        ALL_PAGEAREAS[i].occurCount = 0;
    }

    var mainXFAForm = document.getElementById("mainXFAForm");
    mainXFAForm.innerHTML = "";

    var sample = document.getElementById("preRenderer");
    var arr = new Array();
    findDescendants(xfa.form, T_DRAW, arr);
    for (var z = 0, zz = arr.length; z < zz; z++) {
        var ff = arr[z];
        var res;
        if (!isIE && focusEle) {
            res = ff.domElement;
        } else {
            res = getDraw(ff);
        }
        sample.appendChild(res);
    }
    arr = new Array();
    findDescendants(xfa.form, T_FIELD, arr);
    for (var z = 0, zz = arr.length; z < zz; z++) {
        var ff = arr[z];
        var res;
        if (!isIE && focusEle) {
            res = ff.domElement;
        } else {
            res = getField(ff);
        }
        sample.appendChild(res);
    }

    if (!isIE && focusEle) {
        expandTextArea(focusEle);
    } else {
        var tarr = sample.getElementsByTagName("textarea");
        for (var i = 0, ii = tarr.length; i < ii; i++) {
            expandTextArea(tarr[i]);
        }
    }

    processingPageArea = ALL_PAGEAREAS[0];
    processingContentArea = findChild(processingPageArea, T_CONTENTAREA);

    var cAreaDom = drawPageArea(processingPageArea, processingContentArea);
    processingPageArea.occurCount++;

    var indentArr = new Array();
    indentArr.push(cAreaDom.parentNode);
    indentArr.push(cAreaDom);

    layoutContainers(xfa.form, indentArr);

    window.scrollTo(0, previous);
    sample.textContent = "";
}

function updateRelevantPageArea(bNode) {
    var occ = processingPageArea.getOccur();

    if (bNode.className === "breakBefore") {
        if (occ.max !== -1 && bNode.targetType === "pageArea") {
            if (bNode.target.length > 0) {
                if (bNode.target.charAt(0) === '#') {
                    var targetID = bNode.target.substring(1);
                    for (var i = 0, ii = ALL_PAGEAREAS.length; i < ii; i++) {
                        if (ALL_PAGEAREAS[i].id === targetID) {
                            processingPageArea = ALL_PAGEAREAS[i];
                            processingContentArea = findChild(processingPageArea, T_CONTENTAREA);
                            break;
                        }
                    }
                } else {
                    var targetName = bNode.target;
                    for (var i = 0, ii = ALL_PAGEAREAS.length; i < ii; i++) {
                        if (ALL_PAGEAREAS[i].name === targetName) {
                            processingPageArea = ALL_PAGEAREAS[i];
                            processingContentArea = findChild(processingPageArea, T_CONTENTAREA);
                            break;
                        }
                    }
                }

            } else if (parseInt(occ.max) === processingPageArea.occurCount) {

                var index = -1;
                for (var i = 0, ii = ALL_PAGEAREAS.length; i < ii; i++) {
                    if (ALL_PAGEAREAS[i] === processingPageArea) {
                        index = i;
                    }
                }
                if (index !== -1 && ALL_PAGEAREAS[index + 1]) {
                    processingPageArea = ALL_PAGEAREAS[index + 1];
                    processingContentArea = findChild(processingPageArea, T_CONTENTAREA);
                }
            }
            processingPageArea.occurCount++;
        }


    } else if (bNode.className === "breakAfter") {


    } else if (bNode.className === "Break") {

        if (occ.max !== -1 && bNode.before === "pageArea") {
            if (bNode.beforeTarget.length > 0) {
                if (bNode.beforeTarget.charAt(0) === '#') {
                    var targetID = bNode.beforeTarget.substring(1);
                    for (var i = 0, ii = ALL_PAGEAREAS.length; i < ii; i++) {
                        if (ALL_PAGEAREAS[i].id === targetID) {
                            processingPageArea = ALL_PAGEAREAS[i];
                            processingContentArea = findChild(processingPageArea, T_CONTENTAREA);
                            break;
                        }
                    }
                }

            } else if (parseInt(occ.max) === processingPageArea.occurCount) {

                var index = -1;
                for (var i = 0, ii = ALL_PAGEAREAS.length; i < ii; i++) {
                    if (ALL_PAGEAREAS[i] === processingPageArea) {
                        index = i;
                    }
                }
                if (index !== -1 && ALL_PAGEAREAS[index + 1]) {
                    processingPageArea = ALL_PAGEAREAS[index + 1];
                    processingContentArea = findChild(processingPageArea, T_CONTENTAREA);
                }
            }
            processingPageArea.occurCount++;
        }

    }
}

function layoutPageArea(curObj, indentArr) {
    var cLay = curObj.layout;
    var list = curObj.nodes;
    var len = list.length;

    var pos = indentArr.length;

    var rowIndex = 0;
    for (var i = 0; i < len; i++) {
        var temp = list.item(i);
        var toPut = indentArr[pos - 1];
        var cAreaDom = indentArr[1];
        if (temp.isContainer && temp.presence !== "hidden" && temp.className != "contentArea") {

            var y = temp._y;
            var x = temp._x;

            var sd = null;
            if (temp.isWidget) {
                sd = temp.domElement.cloneNode(true);
                sd.somElement = temp;
                var ui = sd.getElementsByClassName("ui")[0];
                if (ui) {
                    ui.somElement = temp;
                }
            } else {
                sd = getSubform(temp);
                indentArr.push(sd);
                sd.style.zIndex = indentArr.length;
            }
            if (curObj.className === "pageArea") {
                sd.style.position = "absolute";
                sd.style.margin = y + "pt" + " 0pt 0pt " + x + "pt";
            }

            if (cLay === "position") {
                sd.style.position = "absolute";
                sd.style.marginLeft = x + "pt";
                sd.style.marginTop = y + "pt";
            } else if (cLay === "lr-tb") {
                sd.style.float = "left";
            } else if (cLay === "rl-tb") {
                sd.style.float = "right";
            } else if (cLay === "row") {
                var tableObj = curObj.parent;
                var cwStr = tableObj.columnWidths;
                var curSpan = parseInt(temp.colSpan);
                var widthArray = new Array();
                if (cwStr.length > 0) {
                    var wSplits = cwStr.split(" ");
                    var wLen = wSplits.length;
                    for (var s = 0; s < wLen; s++) {
                        var val = XPTS(wSplits[s]);
                        widthArray.push(val);
                    }
                }
                var cw = widthArray[rowIndex];
                for (var s = 1; s < curSpan; s++) {
                    cw += widthArray[rowIndex + s];
                }
                sd.style.width = cw + "pt";
                if (!isFireFox && !isChrome) {
                    sd.style.float = "left";
                }
                rowIndex++;
            }
            toPut.appendChild(sd);

            if (!temp.isWidget) {
                layoutPageArea(temp, indentArr);
            }

            if (cLay === "tb") {
                var br = DCE("div");
                toPut.appendChild(br);
            }
        }
    }
    indentArr.pop();
}

function layoutContainers(curObj, indentArr) {
    var cLay = curObj.layout;
    var list = curObj.nodes;
    var len = list.length;
    var maxHH = Math.max(curObj._h, curObj._minH);

    var cAreaDivsLen = indentArr[1].getElementsByTagName("div").length;
    var totalFields = indentArr[1].getElementsByClassName("field");
    var totalDraws = indentArr[1].getElementsByTagName("draw");
    var inCAREA = totalFields.length > 0 || totalDraws.length > 0;

    var brkBefore = findChild(curObj, T_BREAKBEFORE);
    var brk = findChild(curObj, T_BREAK);

    if (brkBefore !== null && cAreaDivsLen > 2) {
        if ((brkBefore.targetType === "contentArea" && brkBefore.startNew === "1") || brkBefore.targetType === "pageArea") {
            updateRelevantPageArea(brkBefore);
            getAncestorSubformsDom(curObj, indentArr);
            var cd = getSubform(curObj);
            indentArr[indentArr.length - 1].appendChild(cd);
            indentArr.push(cd);
        }
    } else if (brk !== null && brk.before.length > 0 && cAreaDivsLen > 2) {
        updateRelevantPageArea(brk);
        getAncestorSubformsDom(curObj, indentArr);
        var cd = getSubform(curObj);
        indentArr[indentArr.length - 1].appendChild(cd);
        indentArr.push(cd);
    } else if (curObj.isContainer && curObj.classID !== T_EXCLGROUP && (curObj.layout === "position" || curObj.layout === "row") && inCAREA) {
        var cAreaDom = indentArr[1];
        if (cAreaDom.scrollHeight > (cAreaDom.clientHeight + 2)) {
            var toPut = getAncestorSubformsDom(curObj, indentArr);
            toPut.appendChild(curObj.domElement);
            indentArr.push(curObj.domElement);
        }
    }

    var pos = indentArr.length;

    var rowIndex = 0;
    for (var i = 0; i < len; i++) {
        var temp = list.item(i);
        var toPut = indentArr[pos - 1];
        var cAreaDom = indentArr[1];
        if (temp.isContainer && temp.classID !== T_PAGESET && temp.presence !== "hidden") {

            var y = temp._y;
            var x = temp._x;

            var sd = null;
            if (temp.isWidget) {
                sd = temp.domElement;
            } else {
                sd = getSubform(temp);
                indentArr.push(sd);
                sd.style.zIndex = indentArr.length + 2;
            }

            if (curObj.classID === T_AREA) {
                sd.style.position = "absolute";
                sd.style.marginLeft = x + "pt";
                sd.style.marginTop = y + "pt";
            } else if (cLay === "position") {
                sd.style.position = "absolute";
                sd.style.marginLeft = x + "pt";
                sd.style.marginTop = y + "pt";
            } else if (cLay === "lr-tb") {
                sd.style.float = "left";
            } else if (cLay === "rl-tb") {
                sd.style.float = "right";
            } else if (cLay === "row") {
                var tableObj = curObj.parent;
                var cwStr = tableObj.columnWidths;
                var curSpan = parseInt(temp.colSpan);
                var widthArray = new Array();
                if (cwStr.length > 0) {
                    var wSplits = cwStr.split(" ");
                    var wLen = wSplits.length;
                    for (var s = 0; s < wLen; s++) {
                        var val = XPTS(wSplits[s]);
                        widthArray.push(val);
                    }
                }
                var cw = widthArray[rowIndex];
                for (var s = 1; s < curSpan; s++) {
                    cw += widthArray[rowIndex + s];
                }
                if (temp.colSpan === "-1") {
                    sd.style.width = "100%";
                } else {
                    sd.style.width = cw + "pt";
                }
                if (!isFireFox && !isChrome) {
                    sd.style.float = "left";
                }
                rowIndex += curSpan;
            }

//          
            toPut.appendChild(sd);
            if (temp.isWidget) {
                var tl = temp.parent.layout;
                //just add 1 incase something goes wrong                 
                if (cAreaDom.scrollHeight > (cAreaDom.clientHeight + 2)) {
                    var canParse = false;
                    if (tl === "position") {
                        canParse = maxHH === 0 && curObj.classID !== T_EXCLGROUP;
                    } else if (tl !== "row") {
                        canParse = true;
                    }
                    if (canParse) {
                        var toPut2 = getAncestorSubformsDom(temp, indentArr);
                        toPut.removeChild(sd);
                        toPut = toPut2;
                        toPut.appendChild(sd);
                    }
                }
            } else {
                layoutContainers(temp, indentArr);
            }

            if (cLay === "tb") {
                var ddd = DCE("div");
                toPut.appendChild(ddd);
            }
        }
    }

    if (curObj.className.indexOf("subform") === 0 && cLay === "position") {
        var maxHH = Math.max(curObj._h);
        if (maxHH === 0) {
            var dom = curObj.domElement;
            for (var i = 0, ii = dom.children.length; i < ii; i++) {
                var cStyle = window.getComputedStyle(dom.children[i], null);
                maxHH = Math.max(maxHH, (XPTS(cStyle.height + "px") + XPTS(cStyle.marginTop + "px")));
            }
            var margin = findChild(curObj, T_MARGIN);
            if (margin !== null) {
                maxHH += XPTS(margin.topInset);
                maxHH += XPTS(margin.bottomInset);
            }
            dom.style.height = maxHH + "pt";
        }
    }

    if (indentArr.length > 3) {
        indentArr.pop();
    }
}

function getAncestorSubformsDom(nn, indentArr) {
    indentArr.splice(0, indentArr.length);
    var cAreaDom = drawPageArea(processingPageArea, processingContentArea);
    indentArr[0] = cAreaDom.parentNode;
    indentArr[1] = cAreaDom;

    var par = nn.parent;
    var divs = new Array();

    while (par !== null) {
        if (par.isContainer) {
            var sd = getSubform(par);
            divs.push(sd);
        }
        par = par.parent;
    }
    var dd = divs[0];
    for (var i = 0, ii = divs.length; i < ii; i++) {
        indentArr[2 + i] = divs[ii - 1 - i];
        indentArr[1 + i].appendChild(indentArr[2 + i]);
    }
    return dd;
}

function getSubform(temp) {
    var sd = DCE("div");

    temp.domElement = sd;
    sd.setAttribute("class", temp.className);

    if (temp.name.length > 0) {
        sd.setAttribute("name", temp.name);
    }

    var sdCSS = sd.style;

    if (temp.presence === "hidden") {
        sdCSS.display = "none";
    } else if (temp.presence === "invisible") {
        sdCSS.visibility = "hidden";
    }

    if (temp.layout === "table") {
        sdCSS.display = "table";
        sdCSS.borderSpacing = "0pt";
    } else if (temp.layout === "tb") {
        sdCSS.display = "block";
    } else if (temp.layout === "row") {
        if (isFireFox || isChrome) {
            sdCSS.display = "flex";
        } else {
            sdCSS.display = "inline-block";
        }
    }

//    var isFlowed = temp.layout === "tb" || temp.layout === "lr-tb" || temp.layout === "rl-tb";

    var y = temp._y;
    var x = temp._x;
    var h = temp._h;
    var minH = temp._minH;

    if (temp.className === "area") {
        sdCSS.width = (findContainerWidth(temp.parent) - temp._x) + "pt";
        sdCSS.height = (findContainerHeight(temp)) + "pt";
        return sd;
    }

    var cw = Math.max(temp._w, temp._minW);
    if (cw > 0) {
        sdCSS.width = cw + "pt";
    }

    if (temp.layout === "table" || temp.layout === "row") {
        sdCSS.width = findContainerWidth(temp) + "pt";
    }

    if (h > 0) {
        sdCSS.height = h + "pt";
    } else if (minH > 0 && temp.layout !== "tb" && temp.layout !== "position") {
        sdCSS.minHeight = minH + "pt";
    }

    var mm = findChild(temp, T_MARGIN);
    if (mm !== null) {
        sdCSS.paddingTop = XPTS(mm.topInset) + "pt";
        sdCSS.paddingLeft = XPTS(mm.leftInset) + "pt";
        sdCSS.paddingBottom = XPTS(mm.bottomInset) + "pt";
    }

    var bb = findChild(temp, T_BORDER);
    if (bb !== null) {
        drawBorder(bb, sd, true);
    }

    return sd;
}

function drawPageArea(pArea, cArea) {
    var pd = DCE("div");
    var pw = getPageAreaWidth(pArea);
    var ph = getPageAreaHeight(pArea);
    pd.style.width = pw + "pt";
    pd.style.height = ph + "pt";
    pd.setAttribute("class", "pageArea");

    var indArr = new Array();
    indArr.push(pd);
    layoutPageArea(pArea, indArr);
    var cd = DCE("div");
    cd.setAttribute("class", "contentArea");
    cd.style.marginLeft = cArea._x + "pt";
    cd.style.marginTop = cArea._y + "pt";
    cd.style.width = cArea._w + "pt";
    cd.style.height = cArea._h + "pt";
    pd.appendChild(cd);

    document.getElementById("mainXFAForm").appendChild(pd);
    return cd;
}

function LoadData(){
    document.getElementsByClassName("CalDtA")[0].value = "1985-02-20";
    document.getElementsByClassName("Initator")[0].value = "Initator";
    document.getElementsByClassName("Prop11A")[0].checked = true; 
    document.getElementsByClassName("Prop11B")[0].checked = true;
    document.getElementsByClassName("Prop11C")[0].checked = true;
    document.getElementsByClassName("Page")[0].value = "Page";
    document.getElementsByClassName("CalDtA")[0].value = "CalDtA";
    document.getElementsByClassName("Initator")[0].value = "Initator";
    document.getElementsByClassName("Initator_2")[0].value = "Initator_2";
    document.getElementsByClassName("Initator_3")[0].value = "Initator_3";
    document.getElementsByClassName("Title")[0].value = "Title";
    document.getElementsByClassName("OrgNos")[0].value = "OrgNos";
    document.getElementsByClassName("OrgNos_2")[0].value = "OrgNos_2";
    document.getElementsByClassName("Config")[0].value = "Config";
    document.getElementsByClassName("MOSWCNSN")[0].value = "MOSWCNSN";
    document.getElementsByClassName("MOSWCNSN_2")[0].value = "MOSWCNSN_2";
    document.getElementsByClassName("MOSWCNSN_3")[0].value = "MOSWCNSN_3";
    document.getElementsByClassName("SRDNNOth")[0].value = "SRDNNOth";
    document.getElementsByClassName("SRDNNOth_2")[0].value = "SRDNNOth_2";
    document.getElementsByClassName("SRDNNOth_3")[0].value = "SRDNNOth_3";
    document.getElementsByClassName("Purpose")[0].value = "Purpose";
    document.getElementsByClassName("Impact")[0].value = "Impact";
    document.getElementsByClassName("Solution")[0].value = "Solution";
    document.getElementsByClassName("CalDtY")[0].value = "CalDtY";
    document.getElementsByClassName("CalDtB")[0].value = "CalDtB";
    document.getElementsByClassName("NameA")[0].value = "NameA";
    ////document.getElementsByClassName("BUTTON1")[0].value = "BUTTON1";
    document.getElementsByClassName("OrgReq")[0].checked = true;
    document.getElementsByClassName("Disapv")[0].checked = true;
    document.getElementsByClassName("AddInfo")[0].checked = true;
    document.getElementsByClassName("T1A")[0].value = "T1A";
    document.getElementsByClassName("T2A")[0].value = "T2A";
    document.getElementsByClassName("Perm")[0].value = "Perm";
    document.getElementsByClassName("PSafety")[0].value = "PSafety";
    document.getElementsByClassName("UCApvd")[0].value = "UCApvd";
    document.getElementsByClassName("UCDisApv")[0].value = "UCDisApv";
    document.getElementsByClassName("User")[0].value = "User";
    document.getElementsByClassName("Depot")[0].value = "Depot";
    document.getElementsByClassName("Both")[0].value = "Both";
    document.getElementsByClassName("OtherC")[0].value = "OtherC";
    document.getElementsByClassName("SPDApv")[0].value = "SPDApv";
    document.getElementsByClassName("SPDDisAp")[0].value = "SPDDisAp";
    document.getElementsByClassName("TmpModAp")[0].value = "TmpModAp";
    document.getElementsByClassName("PerModAp")[0].value = "PerModAp";
    document.getElementsByClassName("ModDisAp")[0].value = "ModDisAp";
    document.getElementsByClassName("MNSORDev")[0].value = "MNSORDev";
    document.getElementsByClassName("Page2A")[0].value = "Page2A";
    document.getElementsByClassName("CalDtX")[0].value = "CalDtX";
    document.getElementsByClassName("ToLead")[0].checked = true;
    document.getElementsByClassName("ContNoD")[0].value = "ContNoD";
    document.getElementsByClassName("CalDtZ")[0].value = "CalDtZ";
    document.getElementsByClassName("UseName")[0].value = "UseName";
    document.getElementsByClassName("CalDtC")[0].value = "CalDtC";
    document.getElementsByClassName("ActOfcr")[0].value = "ActOfcr";
    document.getElementsByClassName("ActOfcr_2")[0].value = "ActOfcr_2";
    document.getElementsByClassName("ActOfcr_3")[0].value = "ActOfcr_3";
    document.getElementsByClassName("ContNo")[0].value = "ContNo";
    document.getElementsByClassName("CmdRemk")[0].value = "CmdRemk";
    document.getElementsByClassName("U")[0].value = "U";
    document.getElementsByClassName("NameB")[0].value = "NameB";
    document.getElementsByClassName("CalDtD")[0].value = "CalDtD";
    document.getElementsByClassName("CalDtE")[0].value = "CalDtE";
    document.getElementsByClassName("SPActOfc")[0].value = "SPActOfc";
    document.getElementsByClassName("CntConNo")[0].value = "CntConNo";
    document.getElementsByClassName("CntConNo_2")[0].value = "CntConNo_2";
    document.getElementsByClassName("CntConNo_3")[0].value = "CntConNo_3";
    document.getElementsByClassName("Affect")[0].value = "Affect";
    document.getElementsByClassName("Affect_2")[0].value = "Affect_2";
    document.getElementsByClassName("Identify")[0].value = "Identify";
    document.getElementsByClassName("UnitCost")[0].value = "UnitCost";
    document.getElementsByClassName("TotCost")[0].value = "TotCost";
    document.getElementsByClassName("LeadTime")[0].value = "LeadTime";
    document.getElementsByClassName("InstBegn")[0].value = "InstBegn";
    document.getElementsByClassName("InstEnd")[0].value = "InstEnd";
    document.getElementsByClassName("UnitHours")[0].value = "UnitHours";
    document.getElementsByClassName("DeptHour")[0].value = "DeptHour";
    document.getElementsByClassName("WkHours")[0].value = "WkHours";
    document.getElementsByClassName("Mft")[0].value = "Mft";
    document.getElementsByClassName("BkOut")[0].value = "BkOut";
    document.getElementsByClassName("Recomd")[0].value = "Recomd";
    document.getElementsByClassName("SPDName")[0].value = "SPDName";
    document.getElementsByClassName("CalDtF")[0].value = "CalDtF";
    document.getElementsByClassName("NameD")[0].value = "NameD";
    document.getElementsByClassName("CalDtG")[0].value = "CalDtG";
    document.getElementsByClassName("TotBPEE")[0].value = "TotBPEE";
    document.getElementsByClassName("TypeFund")[0].value = "TypeFund";
    document.getElementsByClassName("AmtA")[0].value = "AmtAValue   ";
    document.getElementsByClassName("TypFundB")[0].value = "TypFundB";
    document.getElementsByClassName("AmtB")[0].value = "AmtB";
    document.getElementsByClassName("TypeFund_2")[0].value = "TypeFund_2";
    document.getElementsByClassName("AmtA_2")[0].value = "AmtA_2";
    document.getElementsByClassName("TypFundB_2")[0].value = "TypFundB_2";
    document.getElementsByClassName("AmtB_2")[0].value = "AmtB_2";
    document.getElementsByClassName("TypeFund_3")[0].value = "TypeFund_3";
    document.getElementsByClassName("AmtA_3")[0].value = "AmtA_3";
    document.getElementsByClassName("TypFundB_3")[0].value = "TypFundB_3";
    document.getElementsByClassName("AmtB_3")[0].value = "AmtB_3";
    document.getElementsByClassName("SptEquip")[0].value = "SptEquip";
    document.getElementsByClassName("ACTrng")[0].value = "ACTrng";
    document.getElementsByClassName("TrngDev")[0].value = "TrngDev";
    document.getElementsByClassName("TechData")[0].value = "TechData";
    document.getElementsByClassName("Spares")[0].value = "Spares";
    document.getElementsByClassName("SoftWare")[0].value = "SoftWare";
    document.getElementsByClassName("OtherB")[0].value = "OtherB";
    ////document.getElementsByClassName("BUTTON1_2")[0].value = "BUTTON1_2";
    ////document.getElementsByClassName("BUTTON2")[0].value = "BUTTON2";
    ////document.getElementsByClassName("BUTTON3")[0].value = "BUTTON3";
    ////document.getElementsByClassName("BUTTON4")[0].value = "BUTTON4";
}

function ClearData(){
    document.getElementsByClassName("CalDtA")[0].value = "";
    document.getElementsByClassName("Initator")[0].value = "";
    document.getElementsByClassName("Prop11A")[0].checked = false; 
    document.getElementsByClassName("Prop11B")[0].checked = false;
    document.getElementsByClassName("Prop11C")[0].checked = false;
    document.getElementsByClassName("Page")[0].value = "";
    document.getElementsByClassName("CalDtA")[0].value = "";
    document.getElementsByClassName("Initator")[0].value = "";
    document.getElementsByClassName("Initator_2")[0].value = "";
    document.getElementsByClassName("Initator_3")[0].value = "";
    document.getElementsByClassName("Title")[0].value = "";
    document.getElementsByClassName("OrgNos")[0].value = "";
    document.getElementsByClassName("OrgNos_2")[0].value = "";
    document.getElementsByClassName("Config")[0].value = "";
    document.getElementsByClassName("MOSWCNSN")[0].value = "";
    document.getElementsByClassName("MOSWCNSN_2")[0].value = "";
    document.getElementsByClassName("MOSWCNSN_3")[0].value = "";
    document.getElementsByClassName("SRDNNOth")[0].value = "";
    document.getElementsByClassName("SRDNNOth_2")[0].value = "";
    document.getElementsByClassName("SRDNNOth_3")[0].value = "";
    document.getElementsByClassName("Purpose")[0].value = "";
    document.getElementsByClassName("Impact")[0].value = "";
    document.getElementsByClassName("Solution")[0].value = "";
    document.getElementsByClassName("CalDtY")[0].value = "";
    document.getElementsByClassName("CalDtB")[0].value = "";
    document.getElementsByClassName("NameA")[0].value = "";
    document.getElementsByClassName("BUTTON1")[0].value = "";
    document.getElementsByClassName("OrgReq")[0].checked = false;
    document.getElementsByClassName("Disapv")[0].checked = false;
    document.getElementsByClassName("AddInfo")[0].checked = false;
    document.getElementsByClassName("T1A")[0].value = "";
    document.getElementsByClassName("T2A")[0].value = "";
    document.getElementsByClassName("Perm")[0].value = "";
    document.getElementsByClassName("PSafety")[0].value = "";
    document.getElementsByClassName("UCApvd")[0].value = "";
    document.getElementsByClassName("UCDisApv")[0].value = "";
    document.getElementsByClassName("User")[0].value = "";
    document.getElementsByClassName("Depot")[0].value = "";
    document.getElementsByClassName("Both")[0].value = "";
    document.getElementsByClassName("OtherC")[0].value = "";
    document.getElementsByClassName("SPDApv")[0].value = "";
    document.getElementsByClassName("SPDDisAp")[0].value = "";
    document.getElementsByClassName("TmpModAp")[0].value = "";
    document.getElementsByClassName("PerModAp")[0].value = "";
    document.getElementsByClassName("ModDisAp")[0].value = "";
    document.getElementsByClassName("MNSORDev")[0].value = "";
    document.getElementsByClassName("Page2A")[0].value = "";
    document.getElementsByClassName("CalDtX")[0].value = "";
    document.getElementsByClassName("ToLead")[0].checked = false;
    document.getElementsByClassName("ContNoD")[0].value = "";
    document.getElementsByClassName("CalDtZ")[0].value = "";
    document.getElementsByClassName("UseName")[0].value = "";
    document.getElementsByClassName("CalDtC")[0].value = "";
    document.getElementsByClassName("ActOfcr")[0].value = "";
    document.getElementsByClassName("ActOfcr_2")[0].value = "";
    document.getElementsByClassName("ActOfcr_3")[0].value = "";
    document.getElementsByClassName("ContNo")[0].value = "";
    document.getElementsByClassName("CmdRemk")[0].value = "";
    document.getElementsByClassName("U")[0].value = "";
    document.getElementsByClassName("NameB")[0].value = "";
    document.getElementsByClassName("CalDtD")[0].value = "";
    document.getElementsByClassName("CalDtE")[0].value = "";
    document.getElementsByClassName("SPActOfc")[0].value = "";
    document.getElementsByClassName("CntConNo")[0].value = "";
    document.getElementsByClassName("CntConNo_2")[0].value = "";
    document.getElementsByClassName("CntConNo_3")[0].value = "";
    document.getElementsByClassName("Affect")[0].value = "";
    document.getElementsByClassName("Affect_2")[0].value = "";
    document.getElementsByClassName("Identify")[0].value = "";
    document.getElementsByClassName("UnitCost")[0].value = "";
    document.getElementsByClassName("TotCost")[0].value = "";
    document.getElementsByClassName("LeadTime")[0].value = "";
    document.getElementsByClassName("InstBegn")[0].value = "";
    document.getElementsByClassName("InstEnd")[0].value = "";
    document.getElementsByClassName("UnitHours")[0].value = "";
    document.getElementsByClassName("DeptHour")[0].value = "";
    document.getElementsByClassName("WkHours")[0].value = "";
    document.getElementsByClassName("Mft")[0].value = "";
    document.getElementsByClassName("BkOut")[0].value = "";
    document.getElementsByClassName("Recomd")[0].value = "";
    document.getElementsByClassName("SPDName")[0].value = "";
    document.getElementsByClassName("CalDtF")[0].value = "";
    document.getElementsByClassName("NameD")[0].value = "";
    document.getElementsByClassName("CalDtG")[0].value = "";
    document.getElementsByClassName("TotBPEE")[0].value = "";
    document.getElementsByClassName("TypeFund")[0].value = "";
    document.getElementsByClassName("AmtA")[0].value = "";
    document.getElementsByClassName("TypFundB")[0].value = "";
    document.getElementsByClassName("AmtB")[0].value = "";
    document.getElementsByClassName("TypeFund_2")[0].value = "";
    document.getElementsByClassName("AmtA_2")[0].value = "";
    document.getElementsByClassName("TypFundB_2")[0].value = "";
    document.getElementsByClassName("AmtB_2")[0].value = "";
    document.getElementsByClassName("TypeFund_3")[0].value = "";
    document.getElementsByClassName("AmtA_3")[0].value = "";
    document.getElementsByClassName("TypFundB_3")[0].value = "";
    document.getElementsByClassName("AmtB_3")[0].value = "";
    document.getElementsByClassName("SptEquip")[0].value = "";
    document.getElementsByClassName("ACTrng")[0].value = "";
    document.getElementsByClassName("TrngDev")[0].value = "";
    document.getElementsByClassName("TechData")[0].value = "";
    document.getElementsByClassName("Spares")[0].value = "";
    document.getElementsByClassName("SoftWare")[0].value = "";
    document.getElementsByClassName("OtherB")[0].value = "";
    document.getElementsByClassName("BUTTON1_2")[0].value = "";
    document.getElementsByClassName("BUTTON2")[0].value = "";
    document.getElementsByClassName("BUTTON3")[0].value = "";
    document.getElementsByClassName("BUTTON4")[0].value = "";
}

function processXFAData() {

    xfa = new xfa();

    updateFDFXFA();

    templateStr = document.getElementById("templateDump").textContent;
    templateStr = EcmaPDF.decode64(templateStr);

    var dataStr = document.getElementById("dataDump").textContent;
    var dataStr = EcmaPDF.decode64(dataStr);

    var f = new form();
    f.model = f;
    xfa.nodes.append(f);
    xfa.form = f;

    var t = new template();
    t.model = template;
    xfa.nodes.append(t);
    xfa.template = t;

    var e = new eventPseudoModel();
    xfa.nodes.append(e);
    xfa.event = e;

    xfa.dataset = new dataModel();
    xfa.layout = new layoutPseudoModel();
    xfa.host = new hostPseudoModel();


    var domParser = parseXFAXML(templateStr);
    generateTemplateModel(domParser.getElementsByTagName("template")[0], t);
    updateScriptXFA(t);
    for (av in AvailableVariables) {
        try {
            eval(av + " = AvailableVariables." + av);
        } catch (err) {
            console.log(err);
        }
    }

    for (av in AvailableVariableScripts) {
        var varScript = AvailableVariableScripts[av];
        varScript = formCalcToJavascript(varScript, false);
        try {
            eval(av + " = new function()" + varScript + ";");
        } catch (err) {
            console.log(err);
        }
    }

    generateSomModel(t, f);

    xfa.dataset.data = new node();
    xfa.data = xfa.dataset.data;
    xfa.data.className = "data";
    xfa.data.name = "xfa:data";
    xfa.data.model = xfa.dataset;

    if (dataStr.length > 5) {
        var dataParser = parseXFAXML(dataStr);
        var elems = dataParser.getElementsByTagName("*");
        generateDataModel(elems[1], xfa.data);
        initialMergeDomToSom(xfa.data, xfa.form);
        mergeGlobalDomToSom(xfa.data, xfa.form);
        xfa.data.nodes.clear();
    }

    iterateAndFireEvent(xfa.form, "docReady", new Array());
    iterateAndFireEvent(xfa.form, "ready", new Array());
    iterateAndFireEvent(xfa.form, "initialize", new Array());
    iterateAndFireCalculate(xfa.form, new Array());

    xfa.layout.relayout();
    initializeCalendar();
}

function initializeCalendar() {

    var div = DCE("div");
    div.setAttribute("id", "ecmaDatePicker");
    document.getElementsByTagName("body")[0].appendChild(div);

    var weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var leftLink = DCE("a");
    leftLink.textContent = "<";
    leftLink.setAttribute("href", "javascript:showEcmaPrevYear()");
    div.appendChild(leftLink);

    var yearLabel = DCE("label");
    div.appendChild(yearLabel);

    var rightLink = DCE("a");
    rightLink.textContent = ">";
    rightLink.setAttribute("href", "javascript:showEcmaNextYear()");
    div.appendChild(rightLink);

    leftLink = DCE("a");
    leftLink.textContent = "<";
    leftLink.setAttribute("href", "javascript:showEcmaPrevMonth()");
    div.appendChild(leftLink);

    var monthLabel = DCE("label");
    div.appendChild(monthLabel);

    rightLink = DCE("a");
    rightLink.textContent = ">";
    rightLink.setAttribute("href", "javascript:showEcmaNextMonth()");
    div.appendChild(rightLink);

    var table = DCE("table");
    div.appendChild(table);
    var tr = DCE("tr");
    for (var i = 0; i < 7; i++) {
        var th = DCE("th");
        th.textContent = weeks[i];
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (var i = 0; i < 6; i++) {
        tr = DCE("tr");
        for (var j = 0; j < 7; j++) {
            var td = DCE("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    updateDatePicker();
}

function showEcmaNextYear() {
    var dp = document.getElementById("ecmaDatePicker");
    dp.curYear++;
    updateDatePicker();
}

function showEcmaPrevYear() {
    var dp = document.getElementById("ecmaDatePicker");
    dp.curYear--;
    updateDatePicker();
}

function showEcmaNextMonth() {
    var dp = document.getElementById("ecmaDatePicker");
    if (dp.curMonth < 11) {
        dp.curMonth++;
        updateDatePicker();
    }
}

function showEcmaPrevMonth() {
    var dp = document.getElementById("ecmaDatePicker");
    if (dp.curMonth > 0) {
        dp.curMonth--;
        updateDatePicker();
    }
}

function showEcmaDatePicker(dateDiv, event) {
    if (dateDiv) {
        processingDateEle = dateDiv;
        dp = document.getElementById("ecmaDatePicker");
        processingDateEle.parentNode.appendChild(dp);
        var raw = dateDiv.somElement.rawValue;
        var dd = new Date();
        if (raw && raw.length > 0) {
            var mm = Date.parse(raw);
            dd = new Date(mm);
        }
        dp.curYear = dd.getFullYear();
        dp.curMonth = dd.getMonth();
        updateDatePicker();
        dp.style.display = "inherit";
        dp.style.zIndex = "5000";
    }
}

function hideEcmaDatePicker() {
    var dp = document.getElementById("ecmaDatePicker");
    dp.style.display = "none";
    document.getElementsByTagName("body")[0].appendChild(dp);
    dp.style.zIndex = "0";
}

function updateDatePicker() {
    var dp = document.getElementById("ecmaDatePicker");
    var year = dp.curYear;
    var month = dp.curMonth;

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var labels = dp.getElementsByTagName("label");
    labels[0].textContent = year;
    labels[1].textContent = monthNames[month];

    var tDate = new Date();
    tDate.setFullYear(year);
    tDate.setMonth(month);
    tDate.setDate(1);

    var lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    var weekNo = tDate.getDay();
    var tds = dp.getElementsByTagName("td");
    for (var i = 0, ii = tds.length; i < ii; i++) {
        tds[i].textContent = "";
        tds[i].removeAttribute("class");
        tds[i].removeAttribute("onclick");
    }
    var c = 1;
    for (var i = weekNo, ii = (lastDayOfMonth + weekNo); i < ii; i++) {
        var dateStr = year + "-" + padPrefix(month + 1) + "-" + padPrefix(c);
        tds[i].textContent = c++;
        tds[i].setAttribute("class", "date");
        tds[i].setAttribute("onclick", "selectEcmaDate('" + dateStr + "')");
    }

    function padPrefix(n) {
        return n < 10 ? '0' + n : n;
    }
}

function selectEcmaDate(str) {
    if (processingDateEle) {
        processingDateEle.value = str;
        processingDateEle.somElement.rawValue = str;
        hideEcmaDatePicker();
    }
}


