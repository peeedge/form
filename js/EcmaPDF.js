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
 * EcmaPDF.js
 * ---------------
 */
var FONTNAMES = {
    "ARIAL": "Arial", "HELVETICA": "Helvetica", "COURIER": "Courier"
};

var EcmaPDF = {
    hashKey: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    getDictionaryString: function (dataBytes, offsetStart) {
        var pos = offsetStart;
        var max = dataBytes.length;
        while (pos < max && dataBytes[pos] !== 60) {
            pos++;
        }
        var dictStack = [1];
        var result = "<<";
        pos += 2;
        while (dictStack.length !== 0 && pos < max) {
            var cc = dataBytes[pos];
            var next = dataBytes[pos + 1];
            if (cc === 60 && next && next === 60) {
                dictStack.push(1);
                pos += 2;
                result += "<<";
                continue;
            } else if (cc === 62 && next && next === 62) {
                dictStack.pop();
                pos += 2;
                result += ">>";
                continue;
            } else {
                result += String.fromCharCode(cc);
                pos++;
            }
        }
        return result;
    },
    byteToString: function (charCode) {
        return String.fromCharCode(charCode);
    },
    bytesToString: function (array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            result += String.fromCharCode(parseInt(array[i]));
        }
        return result;
    },
    writeBytes: function (str, data) {
        for (var i = 0; i < str.length; i++) {
            var cc = str.charCodeAt(i);
            if (cc < 0x80) {
                data.push(cc);
            } else if (cc < 0x800) {
                data.push(0xc0 | (cc >> 6), 0x80 | (cc & 0x3f));
            } else if (cc < 0xd800 || cc >= 0xe000) {
                data.push(0xe0 | (cc >> 12), 0x80 | ((cc >> 6) & 0x3f),
                    0x80 | (cc & 0x3f));
            } else {
                i++;
                cc = 0x10000 + (((cc & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
                data.push(0xf0 | (cc >> 18), 0x80 | ((cc >> 12) & 0x3f),
                    0x80 | ((cc >> 6) & 0x3f), 0x80 | (cc & 0x3f));
            }
        }
    },
    encode64: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = this.encodeUTF8(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output += this.hashKey.charAt(enc1) + this.hashKey.charAt(enc2) +
                this.hashKey.charAt(enc3) + this.hashKey.charAt(enc4);
        }
        return output;
    },
    decode64: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var ii = input.length;

        while (i < ii) {
            enc1 = this.hashKey.indexOf(input.charAt(i++));
            enc2 = this.hashKey.indexOf(input.charAt(i++));
            enc3 = this.hashKey.indexOf(input.charAt(i++));
            enc4 = this.hashKey.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output += String.fromCharCode(chr1);

            if (enc3 !== 64) {
                output += String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output += String.fromCharCode(chr3);
            }
        }
        output = this.decodeUTF8(output);
        return output;

    },
    encodeUTF8: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0, nn = string.length; n < nn; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    decodeUTF8: function (utftext) {
        var string = "";
        var i = 0;
        var c = 0, c1 = 0, c2 = 0;
        var ii = utftext.length;

        while (i < ii) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
};

function PdfDocument() {
    this._pages = new Array();
    this._xfaStreams = new Array();
    this._fontResources = new Array();
    for (var fn in FONTNAMES) {
        var stream = "<</Type /Font /Subtype /Type1 /BaseFont /" + FONTNAMES[fn] + ">>";
        var xx = new PdfResource(FONTNAMES[fn], stream);
        this._fontResources.push(xx);
    }
}

PdfDocument.prototype.addPage = function (objParam) {
    this._pages.push(objParam);
};

PdfDocument.prototype.addXFAStream = function (objParam) {
    this._xfaStreams.push(objParam);
};

function PdfPage() {
    this._width = 612;
    this._height = 792;
    this._rotation = 0;
    this._texts = new Array();
    this._images = new Array();
}

PdfPage.prototype.setWidth = function (intParam) {
    this._width = intParam;
};

PdfPage.prototype.setHeight = function (intParam) {
    this._height = intParam;
};

PdfPage.prototype.addText = function (objParam) {
    objParam._y = this._height - objParam._y - objParam._fontSize;
    this._texts.push(objParam);
};

PdfPage.prototype.setRotation = function (intParam) {
    this._rotation = intParam;
};

PdfPage.prototype.addImage = function (objParam) {
    this._images.push(objParam);
};

function PdfText(x, y, fontName, fontSize, fontText) {
    this._x = x;
    this._y = y;
    this._fontName;
    var upperName = fontName.toUpperCase();
    if (upperName in FONTNAMES) {
        this._fontName = FONTNAMES[upperName];
    } else {
        this._fontName = FONTNAMES["ARIAL"];
    }
    this._fontSize = fontSize;
    this._fontText = fontText;
}

function PdfImage(x, y, imageData) {
    this._x = x;
    this._y = y;
    this._imageData = imageData;
}

function PdfResource(name, stream) {
    this._name = name;
    this._stream = stream;
}

function XFAStream(name, data) {
    this._name = name;
    this._data = data;
}

function getObjStart(id) {
    return id + " 0 obj";
}

function getObjRef(id) {
    return id + " 0 R";
}

function getCatalogString(id) {
    return getObjStart(id) + " <</Type /Catalog /Pages " + getObjRef(id + 1) + ">>\nendobj\n";
}

function getStructTreeString(id) {
    return getObjStart(id) + " <</Type /StructTreeRoot>>\nendobj\n";
}

function getXFACatalogString(id, xfaStart, sTreeIndex) {
    return getObjStart(id) + " <</NeedsRendering true/AcroForm " + getObjRef(xfaStart) +
        "/Extensions<</ADBE<</BaseVersion/1.7/ExtensionLevel 5>>>>" +
        "/MarkInfo<</Marked true>>/Type /Catalog /Pages " + getObjRef(id + 1) + ">>\nendobj\n";
}

function getPageTreeString(id, pageCount) {
    var str = getObjStart(id) + " <</Type /Pages /Kids [ ";
    var start = id + 1;
    for (var i = 0; i < pageCount; i++) {
        str += getObjRef(i + start) + " ";
    }
    str += "] /Count " + pageCount + ">>\nendobj\n";
    return str;
}

function getPageString(pageId, pageTreeStart, resourceStart, pageContentId, pdfPage) {
    return getObjStart(pageId) + " <</Type /Page /Parent " + getObjRef(pageTreeStart)
        + " /Resources " + getObjRef(resourceStart) + " /Contents " + getObjRef(pageContentId)
        + " /MediaBox [0 0 " + pdfPage._width + " " + pdfPage._height + "] /Rotate " + pdfPage._rotation
        + ">>\nendobj\n";
}

function getContentString(pageConentID, curPage) {
    var contentStr = "";
    var totalTexts = curPage._texts.length;
    for (var i = 0; i < totalTexts; i++) {
        var textObj = curPage._texts[i];
        contentStr += "BT /" + textObj._fontName + " " + textObj._fontSize + " Tf " + textObj._x + " " + textObj._y + " Td (" + textObj._fontText + ")Tj ET\n";
    }
    var tempArr = new Array();
    EcmaPDF.writeBytes(contentStr, tempArr);
    return getObjStart(pageConentID) + " <</Length " + tempArr.length + ">>\nstream\n" + contentStr + "\nendstream\nendobj\n";
}

function getResourceString(resourceStart, resourceLen, pdfDoc) {
    var str = getObjStart(resourceStart) + " <</Font <<";
    for (var i = 0; i < resourceLen; i++) {
        var rFont = pdfDoc._fontResources[i];
        str += "/" + rFont._name + " " + getObjRef(resourceStart + 1 + i) + " ";
    }
    str += ">> >>\nendObj\n";
    return str;
}

function getFontDefString(fontID, pdfResource) {
    //note the stream already contains dictionary tags
    return getObjStart(fontID) + pdfResource._stream + "\nendobj\n";
}

function getZeroLead(num) {
    var numStr = "" + num;
    var balance = 10 - numStr.length;
    for (var i = 0; i < balance; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

function getXrefString(xRef) {
    var len = xRef.length;
    var str = "xref\n0 " + (len + 1) + "\n0000000000 65535 f \n";
    for (var i = 0; i < len; i++) {
        str += getZeroLead(xRef[i]) + " 00000 n \n";
    }
    return str;
}

function getXFADefinitionString(id, xfaTempID) {
    return getObjStart(id) + "\n<</XFA " + getObjRef(xfaTempID) + "/Fields[]>>\nendobj\n";
}

function getXFATemplateString(id, sLen, tempStr) {
    return getObjStart(id) + "\n<</Length " + sLen + ">>stream\n" + tempStr + "\nendstream\nendobj\n";
}

PdfDocument.prototype.createPdfString = function (xdpStr) {

//    var sss = "10 0 obj <</Type /page /subtype /cool /Annot [7 0 R 13 0 R 18 0 R]/font <</matrix [0 0 0]>>>>\nStream ";
//    var ddd = new Array();
//    EcmaPDF.writeBytes(sss,ddd);
//    console.log(EcmaPDF.getDictionaryString(ddd,0));

    var xRef = new Array();
    var pdfData = new Array();
    var pageCount = this._pages.length;
    var docStart = 1;
    var pageTreeStart = 2;
    var pageStart = 3;
    var contentStart = pageStart + pageCount;
    var resourcesStart = contentStart + pageCount;
    var fontResourceStart = resourcesStart + 1;
    var fontResLen = this._fontResources.length;
    var sTreeIndex = fontResourceStart + fontResLen;
    var xfaDefStart = sTreeIndex;

    //writeout version
    EcmaPDF.writeBytes("%PDF-1.7\n", pdfData);
    //writeout catalog
    var temp = null;
    if (xdpStr) {
        temp = getXFACatalogString(docStart, xfaDefStart, sTreeIndex);
    } else {
        temp = getCatalogString(docStart);
    }

    xRef.push(pdfData.length);
    EcmaPDF.writeBytes(temp, pdfData);
    //writeout pagetree
    temp = getPageTreeString(pageTreeStart, pageCount);
    xRef.push(pdfData.length);
    EcmaPDF.writeBytes(temp, pdfData);
    //add pages 
    for (var i = 0; i < pageCount; i++) {
        var curPage = this._pages[i];
        var pageID = pageStart + i;
        var pageConentID = contentStart + i;
        temp = getPageString(pageID, pageTreeStart, resourcesStart, pageConentID, curPage);
        xRef.push(pdfData.length);
        EcmaPDF.writeBytes(temp, pdfData);
    }
    //add page contents
    for (var i = 0; i < pageCount; i++) {
        var curPage = this._pages[i];
        var pageConentID = contentStart + i;
        temp = getContentString(pageConentID, curPage);
        xRef.push(pdfData.length);
        EcmaPDF.writeBytes(temp, pdfData);
    }
    // add Resources
    temp = getResourceString(resourcesStart, fontResLen, this);
    xRef.push(pdfData.length);
    EcmaPDF.writeBytes(temp, pdfData);
    //add each font dictionary
    for (var i = 0; i < fontResLen; i++) {
        temp = getFontDefString(fontResourceStart + i, this._fontResources[i]);
        xRef.push(pdfData.length);
        EcmaPDF.writeBytes(temp, pdfData);
    }

    if (xdpStr) {
        var xfaTemplateStart = xfaDefStart + 1;
        temp = getXFADefinitionString(xfaDefStart, xfaTemplateStart);
        xRef.push(pdfData.length);
        EcmaPDF.writeBytes(temp, pdfData);

        var tb = new Array();
        EcmaPDF.writeBytes(xdpStr, tb);

        temp = getXFATemplateString(xfaTemplateStart, tb.length, xdpStr);
        xRef.push(pdfData.length);
        EcmaPDF.writeBytes(temp, pdfData);
    }

    var xRefStart = pdfData.length;
    //add xref table
    temp = getXrefString(xRef);
    EcmaPDF.writeBytes(temp, pdfData);
    //add trailer
    temp = "trailer <</Size " + (xRef.length + 1) + " /Root 1 0 R>>\nstartxref\n" + xRefStart + "\n%%EOF";
    EcmaPDF.writeBytes(temp, pdfData);
    return EcmaPDF.bytesToString(pdfData);
};
