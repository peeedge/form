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
 * EcmaScriptObjects.js
 * ---------------
 */

var T_AREA = 1, T_CONTENTAREA = 2, T_DRAW = 3, T_FIELD = 4, T_PAGEAREA = 5,
    T_PAGESET = 6, T_SUBFORM = 7, T_SUBFORMSET = 8;

var ContainerObjects = {
    "area": 0, "contentArea": 0, "draw": 0, "field": 0, "pageArea": 0, "pageSet": 0,
    "subform": 0, "subformSet": 0
};

var T_BOOLEAN = 11, T_DATE = 12, T_DATETIME = 13, T_DECIMAL = 14, T_EXDATA = 15,
    T_FLOAT = 16, T_INTEGER = 17, T_TEXT = 18, T_TIME = 19;

var ContentObjects = {
    "boolean": 0, "date": 0, "dateTime": 0, "decimal": 0, "exData": 0, "float": 0,
    "integer": 0, "text": 0, "time": 0
};

var T_ARC = 21, T_ASSIST = 22, T_BARCODE = 23, T_BIND = 24, T_BINDITEMS = 25,
    T_BOOKEND = 26, T_BORDER = 27, T_BREAK = 28, T_BREAKAFTER = 29,
    T_BREAKBEFORE = 30, T_BUTTON = 31, T_CALCULATE = 32, T_CAPTION = 33,
    T_CERTIFICATES = 34, T_CHECKBUTTON = 35, T_CHOICELIST = 36, T_COLOR = 37,
    T_COMB = 38, T_COMMAND = 39, T_CONNECT = 40, T_CORNER = 41, T_DATAGROUP = 42,
    T_DATAVALUE = 43, T_DATETIME = 44, T_DATETIMEEDIT = 45, T_DELETE = 46,
    T_DEFAULTUI = 47, T_DESC = 48, T_DIGESTMETHOD = 49, T_DIGESTMETHODS = 50,
    T_DSIGDATA = 51, T_EDGE = 52, T_ENCODING = 53, T_ENCODINGS = 54,
    T_ENCRYPT = 55, T_EVENT = 56, T_EXCLGROUP = 57, T_EXECUTE = 58,
    T_EXOBJECT = 59, T_EXTRAS = 60, T_FILL = 61, T_FILTER = 62, T_FONT = 63,
    T_FORMAT = 64, T_IMAGE = 65, T_IMAGEEDIT = 66, T_INSTANCEMANAGER = 67,
    T_ISSUERS = 68, T_ITEMS = 69, T_KEEP = 70, T_KEYUSAGE = 71, T_LINE = 72,
    T_LINEAR = 73, T_MANIFEST = 74, T_MAP = 75, T_MARGIN = 76, T_MDP = 77,
    T_MEDIUM = 78, T_MESSAGE = 79, T_NUMERICEDIT = 80, T_OCCUR = 81, T_OIDS = 82,
    T_OVERFLOW = 83, T_PACKET = 84, T_PARA = 85, T_PASSWORDEDIT = 86,
    T_PATTERN = 87, T_PICTURE = 88, T_PROTO = 89, T_QUERY = 90, T_RADIAL = 91,
    T_REASONS = 92, T_RECORDSET = 93, T_RECTANGLE = 94, T_SCRIPT = 95,
    T_SCRIPTPROPERTY = 96, T_SIGNATURE = 97, T_SIGNDATA = 98, T_SIGNING = 99,
    T_SOLID = 100, T_SOURCE = 101, T_STIPPLE = 102, T_SUBJECTDN = 103,
    T_SUBJECTDNS = 104, T_SUBMIT = 105, T_TEXTEDIT = 106, T_TIMESTAMP = 107,
    T_TRAVERSAL = 108, T_TRAVERSE = 109, T_UI = 110, T_VALIDATE = 111,
    T_VALUE = 112, T_WSDLCONNECTION = 113, T_XMLCONNECTION = 114,
    T_XSDCONNECTION = 115;

var NodeObjects = {
    "arc": 0, "assist": 0, "barcode": 0, "bind": 0, "bindItems": 0, "bookend": 0,
    "border": 0, "Break": 0, "breakAfter": 0, "breakBefore": 0, "button": 0,
    "calculate": 0, "caption": 0, "certificates": 0, "checkButton": 0, "choiceList": 0,
    "color": 0, "comb": 0, "command": 0, "connect": 0, "corner": 0, "dataGroup": 0,
    "dataValue": 0, "dateTime": 0, "dateTimeEdit": 0, "Delete": 0, "defaultUI": 0, "desc": 0,
    "digestMethod": 0, "digestMethods": 0, "dSigData": 0, "edge": 0, "encoding": 0,
    "encodings": 0, "encrypt": 0, "event": 0, "exclGroup": 0, "execute": 0,
    "exObject": 0, "extras": 0, "fill": 0, "filter": 0, "font": 0, "format": 0,
    "image": 0, "imageEdit": 0, "instanceManager": 0, "issuers": 0, "items": 0,
    "keep": 0, "keyUsage": 0, "line": 0, "linear": 0, "manifest": 0, "map": 0,
    "margin": 0, "mdp": 0, "medium": 0, "message": 0, "numericEdit": 0, "occur": 0,
    "oids": 0, "overflow": 0, "packet": 0, "para": 0, "passwordEdit": 0, "pattern": 0,
    "picture": 0, "proto": 0, "query": 0, "radial": 0, "reasons": 0, "recordSet": 0,
    "rectangle": 0, "script": 0, "scriptProperty": 0, "signature": 0, "signData": 0,
    "signing": 0, "solid": 0, "source": 0, "stipple": 0, "subjectDN": 0, "subjectDNs": 0,
    "submit": 0, "textEdit": 0, "timeStamp": 0, "traversal": 0, "traverse": 0, "ui": 0,
    "validate": 0, "value": 0, "wsdlConnection": 0, "xmlConnection": 0, "xsdConnection": 0
};

var T_CERTIFICATE = 121, T_CONNECTSTRING = 122, T_DELETE = 123, T_HANDLER = 124, T_INSERT = 125,
    T_OID = 126, T_OPERATION = 127, T_PASSWORD = 128, T_REASON = 129, T_REF = 130,
    T_ROOTELEMENT = 131, T_SELECT = 132, T_SOAPACTION = 133, T_SOAPADDRESS = 134,
    T_SPEAK = 135, T_TOOLTIP = 136, T_UPDATE = 137, T_URI = 138, T_USER = 139,
    T_WSDLADDRESS = 140;

var TextNodeObjects = {
    "certificate": 0, "connectString": 0, "delete": 0, "handler": 0, "insert": 0,
    "oid": 0, "operation": 0, "password": 0, "reason": 0, "ref": 0, "rootElement": 0,
    "select": 0, "soapAction": 0, "soapAddress": 0, "speak": 0, "toolTip": 0,
    "update": 0, "uri": 0, "user": 0, "wsdlAddress": 0
};

var T_CONNECTIONSET = 151, T_DATAMODEL = 152, T_FORM = 153, T_TEMPLATE = 154, T_SOURCESET = 155, T_XFA = 156,
    T_EVENTPSEUDOMODEL = 157;

var ModelObjects = {
    "connectionSet": 0, "dataModel": 0, "form": 0, "template": 0, "sourceSet": 0, "xfa": 0
};

var T_VARIABLES = 161;
var T_HYPHENATION = 162;

var LCPROPERTIES = {
    access: 0, accessKey: 0, action: 0, activity: 0, addRevocationInfo: 0,
    after: 0, afterTarget: 0, aliasNode: 0, all: 0, allowMacro: 0, allowNeutral: 0,
    allowRichText: 0, anchorType: 0, appType: 0, archive: 0, aspect: 0,
    baselineShift: 0, before: 0, beforeTarget: 0, bind: 0, binding: 0, blank: 0,
    blankOrNotBlank: 0, bofAction: 0, bookendLeader: 0, bookendTrailer: 0,
    borderColor: 0, borderWidth: 0, bottomInset: 0, break: 0, calculationsEnabled: 0,
    cap: 0, change: 0, charEncoding: 0, checksum: 0, circular: 0, classAll: 0,
    classId: 0, classIndex: 0, className: 0, codeBase: 0, codeType: 0, colSpan: 0,
    columnWidths: 0, commandType: 0, commitKey: 0, commitOn: 0, connection: 0,
    contains: 0, content: 0, contentType: 0, context: 0, count: 0,
    credentialServerPolicy: 0, crlSign: 0, cSpace: 0, currentPage: 0,
    currentRecordNumber: 0, currentValue: 0, cursorLocation: 0, cursorType: 0,
    data: 0, dataColumnCount: 0, dataDescription: 0, dataEncipherment: 0,
    dataLength: 0, dataPrep: 0, dataRowCount: 0, db: 0, decipherOnly: 0,
    delayedOpen: 0, delimiter: 0, digitalSignature: 0, disable: 0,
    editValue: 0, embedPDF: 0, encipherOnly: 0, endChar: 0, eofAction: 0,
    errorCorrectionLevel: 0, executeType: 0, fillColor: 0, fontColor: 0,
    format: 0, formatMessage: 0, formattedValue: 0, formatTest: 0, fracDigits: 0,
    from: 0, fullText: 0, h: 0, hAlign: 0, hand: 0, highlight: 0, href: 0,
    hScrollPolicy: 0, id: 0, imagingBBox: 0, index: 0, initial: 0, initialNumber: 0,
    input: 0, instanceIndex: 0, intact: 0, inverted: 0, isContainer: 0,
    isDefined: 0, isNull: 0, join: 0, keyAgreement: 0, keyCertSign: 0,
    keyDown: 0, keyEncipherment: 0, labelRef: 0, language: 0, layout: 0,
    leadDigits: 0, leader: 0, leftInset: 0, lineHeight: 0, lineThrough: 0,
    lineThroughPeriod: 0, locale: 0, lockType: 0, long: 0, mandatory: 0,
    mandatoryMessage: 0, marginLeft: 0, marginRight: 0, mark: 0, match: 0, max: 0,
    maxChars: 0, maxH: 0, maxLength: 0, maxW: 0, min: 0, minH: 0, minW: 0,
    model: 0, modifier: 0, moduleHeight: 0, moduleWidth: 0, multiLine: 0, name: 0,
    newContentType: 0, newText: 0, next: 0, nonRepudiation: 0, ns: 0, nullTest: 0,
    numbered: 0, numberOfCells: 0, numPages: 0, oddOrEven: 0, oneOfChild: 0,
    open: 0, operation: 0, orientation: 0, output: 0, overflowLeader: 0,
    overflowTarget: 0, overflowTrailer: 0, overline: 0, overlinePeriod: 0,
    override: 0, pagePosition: 0, parent: 0, parentSubform: 0, passwordChar: 0,
    permissions: 0, placement: 0, platform: 0, posture: 0, presence: 0, preserve: 0,
    prevContentType: 0, previous: 0, prevText: 0, printCheckDigit: 0, priority: 0,
    radius: 0, radixOffset: 0, rate: 0, rawValue: 0, ready: 0, recordsAfter: 0,
    recordsBefore: 0, reenter: 0, ref: 0, relation: 0, relevant: 0, reserve: 0,
    restoreState: 0, rightInset: 0, role: 0, rotate: 0, rowColumnRatio: 0, runAt: 0,
    save: 0, savedValue: 0, scope: 0, scriptTest: 0, selectedIndex: 0, selEnd: 0,
    selStart: 0, server: 0, shape: 0, shift: 0, short: 0, signatureType: 0, size: 0,
    slope: 0, soapFaultCode: 0, soapFaultString: 0, somExpression: 0, spaceAbove: 0,
    spaceBelow: 0, startAngle: 0, startChar: 0, startNew: 0, stateless: 0, stock: 0,
    stroke: 0, sweepAngle: 0, tabDefault: 0, tabStops: 0, target: 0, targetType: 0,
    textEncoding: 0, textEntry: 0, textIndent: 0, textLocation: 0, thickness: 0,
    timeout: 0, timeStamp: 0, title: 0, topInset: 0, trailer: 0, transferEncoding: 0,
    transient: 0, truncate: 0, type: 0, typeface: 0, underline: 0, underlinePeriod: 0,
    upsMode: 0, url: 0, urlPolicy: 0, usage: 0, use: 0, usehref: 0, uuid: 0,
    validationMessage: 0, validationsEnabled: 0, vAlign: 0, value: 0, valueRef: 0,
    variation: 0, version: 0, vScollPolicy: 0, w: 0, weight: 0, wideNarrowRatio: 0,
    x: 0, xdpContent: 0, y: 0
};

var FormCalcOperators = {
    "and": "&&", "or": "||", "not": "!", "ne": "!=", "eq": "==", "ge": ">=",
    "gt": ">", "le": "<=", "lt": "<", "do": "{", "then": "{", "endif": "}",
    "endwhile": "}", "endfor": "}", "end": "}", "EndFunc": "}",
    "Func": "function"
};

var FormCalcFunctions = {
    "abs": 0, "avg": 0, "ceil": 0, "count": 0, "floor": 0, "max": 0, "min": 0,
    "mod": 0, "round": 0, "sum": 0, "date": 0, "date2num": 0, "num2date": 0,
    "datefmt": 0, "localdatefmt": 0, "time": 0, "time2num": 0, "num2gmtime": 0,
    "num2time": 0, "timefmt": 0, "localtimefmt": 0, "isodate2num": 0,
    "isotime2num": 0, "apr": 0, "cterm": 0, "fv": 0, "ipmt": 0, "npv": 0,
    "pmt": 0, "ppmt": 0, "pv": 0, "rate": 0, "term": 0, "choose": 0, "oneof": 0,
    "within": 0, "exists": 0, "hasvalue": 0, "unitvalue": 0, "unittype": 0,
    "at": 0, "concat": 0, "decode": 0, "encode": 0, "format": 0, "left": 0,
    "len": 0, "lower": 0, "ltrim": 0, "parse": 0, "replace": 0, "rtrim": 0,
    "right": 0, "space": 0, "str": 0, "stuff": 0, "substr": 0, "upper": 0,
    "wordnum": 0, "get": 0, "post": 0, "put": 0
};

var SomSearchRegex = new RegExp("^(\\@|\\$|\\#|_){0,1}[A-Za-z0-9_-]+(\\[(\\d|\\*|\\+\\d|\\-\\d)+\\]){0,1}$");
var XMLNS_XFA = "xmlns:xfa=\"http://www.xfa.org/schema/xfa-data/1.0/\"";

var TYPE_TEXTEDIT = 0;
var TYPE_BUTTON = 1;
var TYPE_PASSWORDEDIT = 2;
var TYPE_NUMERICEDIT = 3;
var TYPE_DATETIMEEDIT = 4;
var TYPE_CHECKBUTTON = 5;
var TYPE_CHOICELIST = 6;
var TYPE_SIGNATURE = 7;
var TYPE_IMAGEEDIT = 8;

var AvailableNames = {};
var AvailableVariables = {};
var AvailableVariableScripts = {};
var processingEle = null;

var eleNames = {};

var parseXFAXML;

if (window.DOMParser) {
    parseXFAXML = function (xmlStr) {
        return (new window.DOMParser()).parseFromString(xmlStr, "text/xml");
    };
} else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXFAXML = function (xmlStr) {
        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
    };
} else {
    parseXFAXML = function () {
        return null;
    }
}

function isArgumentsZero(arr) {
    for (var i = 0, ii = arr.length; i < ii; i++) {
        if (!arr[i] || arr[i] > 0) {
            return false;
        }
    }
    return true;
}

function xLoanTerm(nPrincipal, nInterest, nPayment) {
    var nRemaining = nPrincipal;
    var nMonths = 0;
    while (nRemaining > 0.0) {
        nRemaining = nRemaining - nPayment + nRemaining * nInterest;
        nMonths++;
    }
    return nMonths;
}

var FormCalc = {
    /*##############################################################################
     *  Arithmetic Functions
     *##############################################################################  
     */
    abs: function () {
        if (x) {
            return Math.abs(x);
        }
        return null;
    },
    avg: function () {
        var sum = 0;
        var len = arguments.length;
        if (arguments[0] instanceof Array) {
            var arr = arguments[0];
            len = arr.length;
            for (var i = 0; i < len; i++) {
                var rr = arr[i];
                if (rr) {
                    sum += arr[i];
                }
            }
        } else {
            for (var i = 0; i < len; i++) {
                sum += arguments[i];
            }
        }
        return (sum / len);
    },
    ceil: function (x) {
        if (x) {
            return Math.ceil(x);
        }
        return null;
    },
    count: function () {
        var sum = 0;
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            if (arguments[i]) {
                sum++;
            }
        }
        return sum;
    },
    floor: function (x) {
        if (x) {
            return Math.floor(x);
        }
        return null;
    },
    max: function () {
        var maxim = 0;
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            if (arguments[i]) {
                maxim = Math.max(maxim, arguments[i]);
            }
        }
        return maxim;
    },
    min: function () {
        var minim = Number.MAX_VALUE;
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            if (arguments[i]) {
                minim = Math.min(minim, arguments[i]);
            }
        }
        return minim;
    },
    mod: function (x, y) {
        if (x && y) {
            return (x % y)
        }
        return null;
    },
    round: function () {
        if (arguments[0] && arguments[0]) {
            var nums = arguments[0];
            var dec = arguments.length === 2 ? arguments[1] : 0;
            return Math.round(nums * Math.pow(10, dec)) / Math.pow(10, dec);
        }
        return null;
    },
    sum: function () {
        var total = 0;
        var len = arguments.length;
        if (arguments[0] instanceof Array) {
            var arr = arguments[0];
            len = arr.length;
            for (var i = 0; i < len; i++) {
                if (arr[i]) {
                    total += arr[i];
                }
            }
        } else {
            for (var i = 0; i < len; i++) {
                if (arguments[i]) {
                    total += arguments[i];
                }
            }
        }
        return total;
    },
    date2num: function (d1, f1, k1) {
        console.log("Date2Num not implemented");
        return 0;
    },
    isodate2num: function () {
        console.log("IsoDate2Num not implemented");
        return 0;
    },
    localdatefmt: function (n1, k1) {
//    0 Locale-specific default style
//    1 Locale-specific short style
//    2 Locale-specific medium style
//    3 Locale-specific long style
//    4 Locale-specific full style
        console.log("LocalDateFmt not implemented");
        return "YYYY/MM/DD";
    },
    localtimefmt: function (n1, k1) {
        console.log("LocalTimeFmt not implemented");
        return "HH:mm:ss";
    },
    num2date: function (n1, f1, k1) {
        console.log("Num2Date not implemented");
        return "01/01/1900";
    },
    num2gmttime: function (n1, f1, k1) {
        console.log("Num2GMTTime not implemented");
        return "00:00:00";
    },
    num2time: function (n1, f1, k1) {
        console.log("Num2Time not implemented");
        return "00:00:00";
    },
    time: function () {
        var d = new Date();
        return d.getTime();
    },
    time2num: function (d1, f1, k1) {
        console.log("Time2Num not implemented");
        return 0;
    },
    timefmt: function (n1, k1) {
        console.log("TimeFmt not implemented");
        return "HH:mm:ss";
    },
    /*##############################################################################
     *  Financial Functions
     *##############################################################################  
     */

    apr: function (principal, payment, periods) {

        if (isArgumentsZero(arguments)) {
            return null;
        }
        var maxIterations = 500;
        var eps = 0.005;
        var delta = 0.0000001;
        var rr = 0.05;
        var nPmtZero = principal / periods;
        var nPmtCur = this.tempPmt(principal, rr, periods);
        var i = 1;

        do {
            if (Math.abs(nPmtCur - nPmtZero) < delta) {
                break;
            }
            rr *= (payment - nPmtZero) / (nPmtCur - nPmtZero);
            nPmtCur = this.tempPmt(principal, rr, periods);
        } while (!(++i > maxIterations || Math.abs(payment - nPmtCur) < eps));

        return (Math.abs(nPmtCur - nPmtZero) < delta) ? 0 : 12 * rr;
    },
    tempPmt: function (nPrincipal, nInterest, nPeriods) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        var intRate = Math.pow((1 + nInterest), nPeriods);
        return (nPrincipal * nInterest / ((1 - 1 / intRate)));
    },
    cterm: function (rate, fv, pv) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        return Math.log(fv / pv) / Math.log(1 + rate);
    },
    fv: function (payment, rate, periods) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        if (rate === 0) {
            return payment * periods;
        } else {
            var intRate = Math.pow((1 + rate), periods - 1);
            return payment * (1 + rate) * (intRate - 1) / rate + payment;
        }
    },
    ipmt: function (principal, rate, payment, startMon, nMonths) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        rate /= 12;
        startMon = parseFloat(startMon);
        nMonths = parseFloat(nMonths);
        if (payment <= principal * rate) {
            return 0;
        } else if (nMonths + startMon - 1 > xLoanTerm(principal, rate, payment)) {
            return 0;
        } else {
            var principalRemaining = principal;
            var principalPaidInPeriod = 0;
            var ratePaidInPeriod = 0;
            for (var i = 1; i < startMon; i++) {
                ratePaidInPeriod = principalRemaining * rate;
                principalPaidInPeriod = payment - ratePaidInPeriod;
                principalRemaining -= principalPaidInPeriod;
                if (principalRemaining <= 0)
                    break;
            }
            var ratePaid = 0.;
            for (var i = startMon; i < startMon + nMonths; i++) {
                ratePaidInPeriod = principalRemaining * rate;
                principalPaidInPeriod = payment - ratePaidInPeriod;
                principalRemaining -= principalPaidInPeriod;
                ratePaid += ratePaidInPeriod;
                if (principalRemaining <= 0)
                    break;
            }
            return ratePaid;
        }
    },
    npv: function () {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        var rate = parseFloat(arguments[0]);
        var nVal = 0;
        var nDenom = 1;
        for (var i = 1; i < arguments.length; i++) {
            if (null === arguments[i]) {
                return null;
            }
            nDenom *= (1 + rate);
            nVal += parseFloat(arguments[i]) / nDenom;
        }
        return nVal;
    },
    pmt: function (principal, periodRate, periods) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        var payment = (periodRate * principal) / (1 - (Math.pow((1 + periodRate), -periods)));
        return Math.round(payment * Math.pow(10, 2)) / Math.pow(10, 2);
    },
    ppmt: function (principal, rate, payment, startMon, nMonths) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        principal = parseFloat(principal);
        rate = parseFloat(rate);
        payment = parseFloat(payment);
        startMon = parseInt(startMon);
        nMonths = parseInt(nMonths);

        rate /= 12;
        if (payment <= principal * rate) {
            return 0;
        } else if (nMonths + startMon - 1 > xLoanTerm(principal, rate, payment)) {
            return 0;
        } else {
            var principalRemaining = principal;
            var principalPaidIperiod = 0;
            var rpp = 0;
            for (var i = 1; i < startMon; i++) {
                rpp = principalRemaining * rate;
                principalPaidIperiod = payment - rpp;
                principalRemaining -= principalPaidIperiod;
                if (principalRemaining <= 0) {
                    break;
                }
            }
            var principlePaid = 0;
            for (var i = startMon; i < startMon + nMonths; i++) {
                rpp = principalRemaining * rate;
                principalPaidIperiod = payment - rpp;
                principalRemaining -= principalPaidIperiod;
                principlePaid += principalPaidIperiod;
                if (principalRemaining <= 0) {
                    break;
                }
            }
            return principlePaid;
        }
        return 0;
    },
    pv: function (payment, rate, periods) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        if (payment === null || rate === null) {
            return null;
        }
        var payment = parseFloat(payment);
        var rate = parseFloat(rate);
        var periods = parseInt(periods);
        if (rate === 0) {
            return payment * periods;
        } else {
            var intRate = Math.pow((1 + rate), periods);
            return payment * (1 - 1 / intRate) / rate;
        }
    },
    rate: function (fv, pv, periods) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        fv = parseFloat(fv);
        pv = parseFloat(pv);
        periods = parseInt(periods);
        return Math.exp(Math.log(fv / pv) / periods) - 1;
    },
    term: function (payment, rate, fv) {
        if (isArgumentsZero(arguments)) {
            return null;
        }
        if (fv <= payment) {
            return 1;
        } else {
            return Math.log((fv - payment) / payment * rate + (1 + rate)) / Math.log(1 + rate);
        }
    },
    /*##############################################################################
     *  Logical Functions
     *##############################################################################  
     */

    choose: function () {
        var n1 = arguments[0];
        return arguments[n1];
    },
    exists: function (v) {
        if (v && v.className !== "nullSom") {
            return 1;
        }
        return 0;
    },
    hasvalue: function () {
        console.log("hasValue not implemented");
        return false;
    },
    oneof: function () {
        var strParam1 = arguments[0];
        for (var idx = 1; idx < arguments.length; idx++) {
            if (strParam1 === arguments[idx]) {
                return true;
            }
        }
        return false;
    },
    within: function () {
        return arguments[1] < arguments[0] && arguments[2] > arguments[0];
    },
    /*##############################################################################
     *  String Functions
     *##############################################################################  
     */

    at: function (s1, s2) {
        return s1.indexof(s2) + 1;
    },
    concat: function () {
        var str = "";
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            str + -arguments[i];
        }
    },
    decode: function (s1, s2) {
        if (s2 === "url") {
            return decodeURI(s1);
        } else if (s2 === "html") {
            return decodeHTMLSpecial(s1);
        } else if (s2 === "xml") {
            return decodeHTMLSpecial(s1);
        }
        return "s1";
    },
    encode: function (s1, s2) {
        if (s2 === "url") {
            return encodeURI(s1);
        } else if (s2 === "html") {
            return encodeHTMLSpecial(s1);
        } else if (s2 === "xml") {
            return encodeHTMLSpecial(s1);
        }
    },
    format: function () {
        var s1 = arguments[0]; //picture clause
        var s2 = arguments[1]; //YYYY[MM[DD]] or YYYY[-MM[-DD]]
        console.log("Format not implemented");
        return "";
    },
    left: function (s1, n1) {
        return s1.substring(0, n1);
    },
    len: function (s1) {
        return s1.length;
    },
    lower: function (s1) {
        return s1.toLowerCase();
    },
    ltrim: function (s1) {
        return s1.replace(/^\s+/, "");
    },
    parse: function (s1, s2) {
        console.log("parse not implemented");
        return s2;
    },
    replace: function () {
        var s1 = arguments[0];
        var s2 = arguments[1];
        if (arguments.length === 3) {
            var s3 = arguments[2];
            return s1.replace(s2, s3);
        } else {
            return s1.replace(s2, "");
        }
    },
    right: function (s1, n1) {
        var len = s1.length;
        var maxRead = Math.min(len, n1);
        var result = "";
        for (var i = 0; i < maxRead; i++) {
            result = s1.charAt(len - i - 1) + result;
        }
        return result;
    },
    rtrim: function (s1) {
        return s1.replace(/\s+$/, "");
    },
    space: function (s1) {
        var str = "";
        for (var i = 0; i < s1; i++) {
            str += " ";
        }
        return str;
    },
    str: function () {
        var result = "";
        var outLen = 10;
        var val = arguments[0];
        var strLen = val.length;
        switch (arguments.length) {
            case 1:
                if (strLen < outLen) {
                    var gap = outLen - strLen;
                    result = val;
                    for (var i = 0; i < gap; i++) {
                        result = " " + result;
                    }
                } else {
                    result = result.subString(0, outLen);
                }
                break;
            case 2:
                outLen = arguments[1];
                if (strLen < outLen) {
                    var gap = outLen - strLen;
                    result = val;
                    for (var i = 0; i < gap; i++) {
                        result = " " + result;
                    }
                } else {
                    result = result.subString(0, outLen);
                }
                break;
            case 3:
                outLen = arguments[1];
                console.log("Str not implemented");
                break;
        }
        return result;
    },
    stuff: function () {
        var s1 = arguments[0];
        var n1 = arguments[1];
        var n2 = arguments[2];

        if (arguments.length === 4) {
            var s2 = arguments[3];
            n1 = n1 < 1 ? 1 : n1;
            var prefix = s1.substring(0, n1 - 1);
            var suffix = s1.substring(n1 - 1, s1.length);
            var encSuff = suffix.substring(n2, suffix.length);
            return prefix + s2 + encSuff;
        } else {
            n1 = n1 < 1 ? 1 : n1;
            var prefix = s1.substring(0, n1 - 1);
            var suffix = s1.substring(n1 - 1, s1.length);
            var encSuff = suffix.substring(n2, suffix.length);
            return prefix + encSuff;
        }
    },
    substr: function (s1, n1, n2) {
        return s1.substring(n1 - 1, n1 + n2 - 1);
    },
    uuid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (match) {
                var randomNibble = Math.random() * 16 | 0;
                var nibble = (match === 'y') ?
                    (randomNibble & 0x3 | 0x8) :
                    randomNibble;
                return nibble.toString(16);
            }
        );
    },
    upper: function (s1) {
        return s1.toUpperCase();
    },
    wordNum: function () {
        var Ones = new Array("Zero", "One", "Two", "Three", "Four", "Five", "Six",
            "Seven", "Eight", "Nine");
        var Teens = new Array("Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
            "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen");
        var Tens = new Array("Zero", "Ten", "Twenty", "Thirty", "Forty", "Fifty",
            "Sixty", "Seventy", "Eighty", "Ninety", "Hundred");
        var Thousands = new Array("Thousand", "Million", "Billion", "Trillion",
            "Quadrillion", "Quintillion");
        var Cents = new Array("Cent");
        var Comma = new Array("");
        var Ands = new Array("", "And ");
        var Dollars = new Array("Dollar");
        var Space = " ";
        var Hyphen = "-";
        var QUINTILLION = 1000000000000000000;
        var n = arguments[0];
        var f = arguments[1];
        if (isNaN(n) || !isFinite(n) || n < 0) {
            return "xxxxxxxxxx";
        }
        if (f < 0 || 2 < f) {
            f = 0;
        }
        var dollars = n;
        var cents = Math.floor(((n - Math.floor(dollars) + 0.005) * 100));
        if (cents >= 100) {
            dollars += 1;
            cents -= 100;
        }
        var s = new Array();
        var thousands = 6;
        for (var div = QUINTILLION; div >= 1; div /= 1000) {
            var number = Math.floor(dollars / div);
            var hundreds = Math.floor(number / 100);
            var tens = Math.floor((number - hundreds * 100) / 10);
            var ones = Math.floor(number - hundreds * 100 - tens * 10);
            if (number >= 1) {
                dollars -= (div * number);
            }
            if (hundreds >= 1) {
                s.push(Ones[hundreds]);
                s.push(Space);
                s.push(Tens[10]);
                s.push(Space);
                if (tens > 0 || ones > 0)
                    s.push(Ands[0]);
            }
            if (tens >= 1) {
                s.push((tens === 1) ? Teens[ones] : Tens[tens]);
                s.push((ones > 0 && tens !== 1) ? Hyphen : Space);
            }
            if (ones >= 1 && tens !== 1) {
                if (tens > 0 && ones > 0) {
                    var o = Ones[ones];
                    s.push(o.toLowerCase());
                }
                else {
                    s.push(Ones[ones]);
                }
                s.push(Space);
            }
            thousands--;
            if (thousands >= 0 && number >= 1) {
                s.push(Thousands[thousands]);
                s.push(Comma[0]);
                s.push(Space);
            }
        }
        if (n < 1.) {
            s.push(Ones[0]);
            s.push(Space);
        }
        if (f === 1 || f === 2) {
            s.push(Dollars[0]);
            if (Math.floor(n) !== 1) {
                s.push('s');
            }
            if (f === 2) {
                s.push(Space);
                s.push(Ands[1]);
                var tens = Math.floor(cents / 10);
                var ones = Math.floor(cents - tens * 10);
                if (tens > 0) {
                    s.push((tens === 1) ? Teens[ones] : Tens[tens]);
                }
                if (tens !== 1) {
                    if (tens > 0 && ones > 0) {
                        var o = Ones[ones];
                        s.push(Hyphen);
                        s.push(o.toLowerCase());
                    }
                    else if (tens === 0) {
                        s.push(Ones[ones]);
                    }
                }
                s.push(Space);
                s.push(Cents[0]);
                if (cents !== 1.)
                    s.push('s');
            }
        }
        if (s[s.length - 1] === ' ') {
            s.pop();
        }
        return s.join("");
    },
    /*##############################################################################
     *  URL Functions
     *##############################################################################  
     */

    get: function () {
        var s1 = arguments[0];//url
        var s2 = arguments[1];//parameters

        var xmlhttp;
        if (window) {
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", s1, true);
//                xmlhttp.setRequestHeader("Content-type", s3);
//                xmlhttp.setRequestHeader("Content-type", s3+";charset="+s4);
            xmlhttp.send(s2);
        }

        return "";
    },
    post: function () {
        var s1 = arguments[0];//url
        var s2 = arguments[1];//parameters

        var xmlhttp;
        if (window) {
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("POST", s1, true);
//                xmlhttp.setRequestHeader("Content-type", s3);
//                xmlhttp.setRequestHeader("Content-type", s3+";charset="+s4);
            xmlhttp.send(s2);
        }

        return "";
    },
    put: function () {
        console.log("put is not implemented yet");
    },
    /*##############################################################################
     *  Miscellaneous Built-in Functions
     *##############################################################################  
     */

    ref: function () {
        console.log("Ref is not implemented in javascript");
    },
    unittype: function (str) {
        if (str.indexOf("in") !== -1) {
            return "in";
        }
        else if (str.indexOf("mm") !== -1 || str.indexOf("millimeters") !== -1) {
            return "mm";
        }
        else if (str.indexOf("cm") !== -1 || str.indexOf("centimeters") !== -1) {
            return "cm";
        }
        else if (str.indexOf("mp") !== -1 || str.indexOf("millipoints") !== -1) {
            return "mp";
        }
        else {
            return "pt";
        }
    },
    unitvalue: function (str, name) {
        if (arguments.length === 1) {
            return parseInt(str);
        } else {
            if (name === "pt" || name === "points") {
                if (str.indexOf("in") !== -1) {
                    return 72 * parseInt(str);
                }
                else if (str.indexOf("mm") !== -1 || str.indexOf("millimeters") !== -1) {
                    return 2.83464 * parseInt(str);
                }
                else if (str.indexOf("cm") !== -1 || str.indexOf("centimeters") !== -1) {
                    return 28.3464 * parseInt(str);
                }
                else if (str.indexOf("mp") !== -1 || str.indexOf("millipoints") !== -1) {
                    return 1000 * parseInt(str);
                }
                else {
                    return parseInt(str);
                }
            } else if (name === "in" || name === "inches") {
                if (str.indexOf("in") !== -1) {
                    return parseInt(str);
                }
                else if (str.indexOf("mm") !== -1 || str.indexOf("millimeters") !== -1) {
                    return 25.4 * parseInt(str);
                }
                else if (str.indexOf("cm") !== -1 || str.indexOf("centimeters") !== -1) {
                    return 2.54 * parseInt(str);
                }
                else if (str.indexOf("mp") !== -1 || str.indexOf("millipoints") !== -1) {
                    return 72571.42 * parseInt(str);
                }
                else {
                    return 72 * parseInt(str);
                }
            } else if (name === "mm") {
                if (str.indexOf("in") !== -1) {
                    return 25.4 * parseInt(str);
                }
                else if (str.indexOf("mm") !== -1 || str.indexOf("millimeters") !== -1) {
                    return parseInt(str);
                }
                else if (str.indexOf("cm") !== -1 || str.indexOf("centimeters") !== -1) {
                    return 10 * parseInt(str);
                }
                else if (str.indexOf("mp") !== -1 || str.indexOf("millipoints") !== -1) {
                    return 0.0003528 * parseInt(str);
                }
                else {
                    return 0.3528 * parseInt(str);
                }
            } else if (name === "cm" || name === "centimeters") {
                if (str.indexOf("in") !== -1) {
                    return 2.54 * parseInt(str);
                }
                else if (str.indexOf("mm") !== -1 || str.indexOf("millimeters") !== -1) {
                    return 0.1 * parseInt(str);
                }
                else if (str.indexOf("cm") !== -1 || str.indexOf("centimeters") !== -1) {
                    return parseInt(str);
                }
                else if (str.indexOf("mp") !== -1 || str.indexOf("millipoints") !== -1) {
                    return 0.000035 * parseInt(str);
                }
                else {
                    return 0.035 * parseInt(str);
                }
            } else if (name === "mp" || name === "millipoints") {
                if (str.indexOf("in") !== -1) {
                    return 72000 * parseInt(str);
                }
                else if (str.indexOf("mm") !== -1 || str.indexOf("millimeters") !== -1) {
                    return 2834.65 * parseInt(str);
                }
                else if (str.indexOf("cm") !== -1 || str.indexOf("centimeters") !== -1) {
                    return 28346.45 * parseInt(str);
                }
                else if (str.indexOf("mp") !== -1 || str.indexOf("millipoints") !== -1) {
                    return parseInt(str);
                }
                else {
                    return 0.001 * parseInt(str);
                }
            }
        }
    }
};

function XPTS(str) {
    var n = str.charAt(0);
    if (!isNaN(parseFloat(n)) && isFinite(n)) {
        str = str.toLowerCase();
        var digit = str.substring(0, str.length - 2);
        var cal = str.substring(digit.length, str.length);

        var retValue = parseFloat(digit);

        if (cal === "pt") {
            //nothing
        } else if (cal === "px") {
            retValue *= (72 / 96); //assume 96 dpi system
        } else if (cal === "mm") {
            retValue *= 2.83464567;
        } else if (cal === "cm") {
            retValue *= 28.3464567;
        } else if (cal === "in") {
            retValue *= 72;
        } else if (cal === "em") {
            retValue *= 12;
        }

        return Math.round((retValue) * Math.pow(10, 2)) / Math.pow(10, 2);
    } else {
        return 0;
    }
}
//end of EcmaParser

function xSom(str) {
    return processingEle.xSom(str);
}

function nullSom() {
    this.className = "nullSom";
    this.xSom = function () {
        return new nullSom();
    };
}

//    var monthMMM = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
//    var monthLong = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
//    var weekNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function inherit(p) {
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== "object" && t !== "function")
        throw TypeError();
    function f() {
    }

    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
}

function extendTemplate(temp, som) {
    var names = Object.getOwnPropertyNames(temp);
    for (var i = 0, ii = names.length; i < ii; i++) {
        var desc = Object.getOwnPropertyDescriptor(temp, names[i]);
        Object.defineProperty(som, names[i], desc);
    }
}

String.prototype.hashCode = function () {
    var hash = 0, i, chr, len;
    if (this.length === 0)
        return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

Object.defineProperty(Object.prototype, "extendTemplate", {
    writable: true,
    enumerable: false, // Make it nonenumerable
    configurable: true,
    value: function (o) {
        var names = Object.getOwnPropertyNames(o);
        for (var i = 0, ii = names.length; i < ii; i++) {
            if (names[i] in this) {
                continue;
            }
            var desc = Object.getOwnPropertyDescriptor(o, names[i]);
            Object.defineProperty(this, names[i], desc);
        }
    }
});

function object() {
    this.className = "";
}

function list() {
    this.xmlArray = new Array();
    this.xmlParent = null;
    this.xmlModel = null;
}

list.prototype = inherit(new object());

Object.defineProperty(list.prototype, "length", {
    get: function () {
        return this.xmlArray.length;
    }, configurable: true, enumerable: true
});

Object.defineProperty(list.prototype, "append", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        //first update list
        this.xmlArray.push(objParam);
        objParam.parent = this.xmlParent;
        objParam.model = this.xmlModel;
    }
});

Object.defineProperty(list.prototype, "clear", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        this.xmlArray.splice(0, this.xmlArray.length);
    }
});

Object.defineProperty(list.prototype, "insert", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam1, objParam2) {
        var size = this.xmlArray.length;
        objParam1.parent = this.xmlParent;
        objParam.model = this.xmlModel;
        //first update list
        var cName = objParam1.className;
        var pos = -1;
        var classPos = 0;
        for (var i = 0; i < size; i++) {
            if (this.xmlArray[i] === objParam2) {
                pos = i;
                break;
            }
            var xn = this.xmlArray[i].className;
            if (xn === cName) {
                classPos++;
            }
        }
        if (pos !== -1) {
            this.xmlArray.splice(pos, 0, objParam1);
        } else {
            this.xmlArray.push(objParam1);
        }
    }
});

Object.defineProperty(list.prototype, "insertPosition", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, index) {
        objParam.parent = this.xmlParent;
        objParam.model = this.xmlModel;
        this.xmlArray.splice(index, 0, objParam);
    }
});

Object.defineProperty(list.prototype, "replacePosition", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, index) {
        objParam.parent = this.xmlParent;
        objParam.model = this.xmlModel;
        this.xmlArray[index] = objParam;
    }
});

Object.defineProperty(list.prototype, "item", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        return this.xmlArray[intParam];
    }
});

Object.defineProperty(list.prototype, "remove", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        //first update list
        var pos = -1;
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (objParam === this.xmlArray[i]) {
                pos = i;
                break;
            }
        }
        if (pos > -1) {
            this.xmlArray.splice(pos, 1);
        }
    }
});

Object.defineProperty(list.prototype, "namedItem", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (this.xmlArray[i].name === strParam) {
                return this.xmlArray[i];
            }
        }
        return null;
    }
});

function node() {

    this.name = "";
    this.nameID = 0;
    this.parent = null;

    this.id = "";
    this.isContainer = false;
    this.isNull = false;
    this.model = null;
    this.ns = "";
    this.oneOfChild = false;

    this._nodes = null;
    this.isWidget = false;
    this.isBound = false;
    this.use = "";
    this.usehref = "";

}

node.prototype = inherit(new object());

Object.defineProperty(node.prototype, "somExpression", {
    get: function () {
        var cur = this;
        var result = "";
        while (cur.parent !== null) {
            var curName = cur.name;
            if (curName.length > 0) {
                curName = curName + "[" + cur.index + "]";
            } else {
                curName = "#" + cur.className + "[" + cur.classIndex + "]";
            }
            result = result.length > 0 ? curName + "." + result : curName;
            cur = cur.parent;
        }
        return result.length > 0 ? cur.name + "[0]." + result : cur.name + "[0]";
    }, configurable: true, enumerable: true
});

Object.defineProperty(node.prototype, "nodes", {
    get: function () {
        if (this._nodes === null) {
            this._nodes = new list();
            this._nodes.xmlParent = this;
            this._nodes.xmlModel = this.model;
        }
        return this._nodes;
    }, configurable: true, enumerable: true
});

Object.defineProperty(node.prototype, "all", {
    get: function () {
        var arr = new Array();
        for (var z = 0, zz = this.parent.nodes.length; z < zz; z++) {
            var cur = this.parent.nodes.item(z);
            if (this.name === cur.name) {
                arr.push(cur);
            }
        }
        return arr;
    }, configurable: true, enumerable: true
});

Object.defineProperty(node.prototype, "classAll", {
    get: function () {
        var arr = new Array();
        for (var z = 0, zz = this.parent.nodes.length; z < zz; z++) {
            var cur = this.parent.nodes.item(z);
            if (this.classID === cur.classID) {
                arr.push(cur);
            }
        }
        return arr;
    }, configurable: true, enumerable: true
});

Object.defineProperty(node.prototype, "classIndex", {
    get: function () {
        var cName = this.className;
        var parList = this.parent.nodes;
        var count = 0;
        for (var z = 0, zz = parList.length; z < zz; z++) {
            var t = parList.item(z);
            if (t === this) {
                return count;
            }
            if (t.className === cName) {
                count++;
            }
        }
        return 0;
    }, configurable: true, enumerable: true
});

Object.defineProperty(node.prototype, "index", {
    get: function () {
        if (this.name.length > 0) {
            var sName = this.name;
            var parList = this.parent.nodes;
            var count = 0;
            for (var z = 0, zz = parList.length; z < zz; z++) {
                var t = parList.item(z);
                if (t === this) {
                    return count;
                }
                if (t.name === sName) {
                    count++;
                }
            }
        }
        return 0; //implement later
    }, configurable: true, enumerable: true
});

Object.defineProperty(node.prototype, "resolveNode", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        if (strParam === "$") {
            return this;
        }
        var scriptStr = formCalcToJavascript(strParam, true);
        return eval(scriptStr);
    }
});

Object.defineProperty(node.prototype, "resolveNodes", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        var scriptStr = formCalcToJavascript(strParam, true);
        return eval(scriptStr);
    }
});

Object.defineProperty(node.prototype, "applyXSL", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        return "";
    }
});

Object.defineProperty(node.prototype, "assignNode", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2, intParam) {
        console.log("assignNode not implemented");
        return {};
    }
});

Object.defineProperty(node.prototype, "clone", {
    writable: true, enumerable: true, configurable: true,
    value: function (boolParam) {
        return cloneObject(this);
    }
});

function cloneObject(obj) {
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            copy[attr] = obj[attr];
        }
        return copy;
    }
    return null;
}

Object.defineProperty(node.prototype, "getAttribute", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        if (strParam in this) {
            return this[strParam];
        } else {
            return "";
        }
    }
});

Object.defineProperty(node.prototype, "getElement", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam, intParam) {
        var arr = new Array();
        var list = this.nodes;
        for (var i = 0, ii = list.length; i < ii; i++) {
            var it = list.item(i);
            if (!it.isContainer && it.className === strParam) {
                arr.push(it);
            }
        }
        return arguments.length === 2 ? arr[intParam] : arr[0];
    }
});

Object.defineProperty(node.prototype, "isPropertySpecified", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam, boolParam, intParam) {
        return strParam in this;
    }
});

Object.defineProperty(node.prototype, "loadXML", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam, boolParam, boolParam) {
        var pp = parseXFAXML(strParam);
        var sNode = {};
        generateTemplateModel(pp.documentElement, sNode);
        sNode.className = pp.documentElement.nodeName;
        this.nodes.append(sNode);
    }
});

Object.defineProperty(node.prototype, "saveFilteredXML", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, strParam) {
        console.log("saveFilteredXML not implemented");
        return "";
    }
});

function generateSomXML(obj) {
    var str = "";
    var cn = obj.className;
    var nn = obj.name;
    if (obj.model.className === "form") {

        if (cn === "subform" || cn === "field" || cn === "value") {
            str += "<" + cn;
            if (nn.length > 0) {
                str += " name=\"" + nn + "\"";
            }
            str += ">";
            var list = obj.nodes;
            for (var i = 0, ii = list.length; i < ii; i++) {
                str += generateSomXML(list.item(i));
            }
            str += "</" + cn + ">";

        } else if (cn in ContentObjects) {
            str += "<" + cn + ">" + obj.value + "</" + cn + ">";
        } else {
            var list = obj.nodes;
            for (var i = 0, ii = list.length; i < ii; i++) {
                str += generateSomXML(list.item(i));
            }
        }
    } else if (obj.model.className === "dataModel") {

        if (cn === "data") {
            str += "<" + nn + " " + XMLNS_XFA + ">";
            var list = obj.nodes;
            for (var i = 0, ii = list.length; i < ii; i++) {
                str += generateSomXML(list.item(i));
            }
            str += "</" + nn + ">";
        } else if (cn === "dataGroup") {
            str += "<" + nn + ">";
            var list = obj.nodes;
            for (var i = 0, ii = list.length; i < ii; i++) {
                str += generateSomXML(list.item(i));
            }
            str += "</" + nn + ">";
        } else if (cn === "dataValue") {
            str += "<" + nn + ">" + obj.value + "</" + nn + ">";
        }
    }
    return str;
}

Object.defineProperty(node.prototype, "saveXML", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + generateSomXML(this);
    }
});

Object.defineProperty(node.prototype, "setAttribute", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2) {
        this[strParam1] = strParam2;
    }
});

Object.defineProperty(node.prototype, "setElement", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, strParam) {
        console.log("setElement not implemented");
    }
});

Object.defineProperty(node.prototype, "fireEvent", {
    writable: true, enumerable: true, configurable: true,
    value: function (eventStr) {
        try {
            eval(eventStr);
        } catch (err) {
            console.log(eventStr);
            console.log(err);
        }
    }
});

Object.defineProperty(node.prototype, "fireCalculate", {
    writable: true, enumerable: true, configurable: true,
    value: function (eventStr) {
        try {
            var str = eval(eventStr);
            return str;
        } catch (err) {
            console.log(eventStr);
            console.log(err);
            return "";
        }
    }
});

function container() {
    this.isContainer = true;
    this.domElement = null;
}

container.prototype = inherit(new node());

Object.defineProperty(container.prototype, "getDelta", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        console.log("getDelta not implemented");
        return {};
    }
});

Object.defineProperty(container.prototype, "getDeltas", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("getDeltas not implemented");
        return {};
    }
});

function content() {
}

content.prototype = inherit(new node());

function model() {
    this.aliasNode = null;
    this.context = null;
}

model.prototype = inherit(new node());

Object.defineProperty(model.prototype, "clearErrorList", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("clearErrorList not implemented");
    }
});

Object.defineProperty(model.prototype, "createNode", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2, strParam3) {
        var nn = new node();
        nn.className = strParam1;
        if (arguments.length > 1) {
            nn.name = strParam2;
        }
    }
});

Object.defineProperty(model.prototype, "isCompatibleNS", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2, strParam3) {
        console.log("isCompatibleNS not implemented");
        return false;
    }
});

function textNode() {
    this.default = "";
    this.value = "";
}

textNode.prototype = inherit(new node());

function arc() {
    this.className = "arc";
    this.classID = T_ARC;
    this.circular = false;
    this.hand = "even";
    this.startAngle = "";
    this.sweepAngle = "";
}

arc.prototype = inherit(new node());

function area() {
    this.className = "area";
    this.classID = T_AREA;
    this.colSpan = "1";
    this.relevant = "";
    this.layout = "position";

    this._x = 0;
    this._y = 0;
}

area.prototype = inherit(new container());

Object.defineProperty(area.prototype, "x", {
    get: function () {
        return this._x + "pt";
    }, set: function (v) {
        this._x = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(area.prototype, "y", {
    get: function () {
        return this._y + "pt";
    }, set: function (v) {
        this._y = XPTS(v);
    }, configurable: true, enumerable: true
});

function assist() {
    this.className = "assist";
    this.classID = T_ASSIST;
    this.role = "";
}

assist.prototype = inherit(new node());

function barcode() {
    this.className = "barcode";
    this.classID = T_BARCODE;
    this.charEncoding = "UTF-8";
    this.checksum = "none";
    this.dataColumnCount = "";
    this.dataLength = "";
    this.dataPrep = "";
    this.dataRowCount = "";
    this.endChar = "";
    this.errorCorrectionLevel = "0";
    this.moduleHeight = "5mm";
    this.moduleWidth = "0.25mm";
    this.printCheckDigit = "0";
    this.rowColumnRatio = "";
    this.startChar = "";
    this.textLocation = "";
    this.truncate = "";
    this.type = "";
    this.upsMode = "";
    this.wideNarrowRatio = "";
}

barcode.prototype = inherit(new node());

function bind() {
    this.className = "bind";
    this.classID = T_BIND;
    this.contentType = "text/plain";
    this.match = "once";
    this.ref = "";
    this.transferEncoding = "";
}

bind.prototype = inherit(new node());

function bindItems() {
    this.className = "bindItems";
    this.classID = T_BINDITEMS;
    this.connection = "";
    this.labelRef = "";
    this.valueRef = "";
    this.ref = "";
}

bindItems.prototype = inherit(new node());

function bookend() {
    this.className = "bookend";
    this.classID = T_BOOKEND;
    this.leader = "";
    this.trailer = "";
}

bookend.prototype = inherit(new node());

function boolean() {
    this.className = "boolean";
    this.classID = T_BOOLEAN;
    this.default = "";
    this.value = "";
}

boolean.prototype = inherit(new content());

function border() {
    this.className = "border";
    this.classID = T_BORDER;
    this.break = "close";
    this.hand = "even";
    this.presence = "visible";
    this.relevant = "";
}

border.prototype = inherit(new node());

function breakXFA() {
    this.className = "Break";
    this.classID = T_BREAK;
    this.after = "";
    this.afterTarget = "";
    this.before = "";
    this.beforeTarget = "";
    this.bookendLeader = "";
    this.bookendTrailer = "";
    this.overflowLeader = "";
    this.overflowTarget = "";
    this.overflowTrailer = "";
    this.startNew = "";
}

breakXFA.prototype = inherit(new node());

function breakAfter() {
    this.className = "breakAfter";
    this.classID = T_BREAKAFTER;
    this.leader = "";
    this.startNew = "0";
    this.target = "";
    this.targetType = "auto";
    this.trailer = "";
}

breakAfter.prototype = inherit(new node());

function breakBefore() {
    this.className = "breakBefore";
    this.classID = T_BREAKBEFORE;
    this.leader = "";
    this.startNew = "0";
    this.target = "";
    this.targetType = "auto";
    this.trailer = "";
}

breakBefore.prototype = inherit(new node());

function button() {
    this.className = "button";
    this.classID = T_BUTTON;
    this.highlight = "push";
}

button.prototype = inherit(new node());

function calculate() {
    this.className = "calculate";
    this.classID = T_CALCULATE;
    this.override = "";
}

calculate.prototype = inherit(new node());

function caption() {
    this.className = "caption";
    this.classID = T_CAPTION;
    this.placement = "left"; //right,top,bottom,inline
    this.presence = "visible";
    this.reserve = "0pt";
}

caption.prototype = inherit(new node());

function certificate() {
    this.className = "certificate";
    this.classID = T_CERTIFICATE;
}

certificate.prototype = inherit(new textNode());

function certificates() {
    this.className = "certificates";
    this.classID = T_CERTIFICATES;
    this.credentialServerPolicy = "";
    this.url = "";
    this.urlPolicy = "";
}

certificates.prototype = inherit(new node());

function checkButton() {
    this.className = "checkButton";
    this.classID = T_CHECKBUTTON;
    this.allowNeutral = "0";
    this.mark = "default";
    this.shape = "";
    this.size = "";
}

checkButton.prototype = inherit(new node());

function choiceList() {
    this.className = "choiceList";
    this.classID = T_CHOICELIST;
    this.commitOn = "select";
    this.open = "";
    this.textEntry = "";
}

choiceList.prototype = inherit(new node());

function color() {
    this.className = "color";
    this.classID = T_COLOR;
    this.cSpace = "SRGB";
    this.value = "";
}

color.prototype = inherit(new node());

function comb() {
    this.className = "comb";
    this.classID = T_COMB;
    this.numberOfCells = "0";
}

comb.prototype = inherit(new node());

function command() {
    this.className = "command";
    this.classID = T_COMMAND;
    this.timeout = "";
    this.delayedOpen = "";
}

command.prototype = inherit(new node());

function connect() {
    this.className = "connect";
    this.classID = T_CONNECT;
    this.connection = "";
    this.delatyedOpen = "";
    this.ref = "";
    this.timeout = "";
    this.usage = "";
}

connect.prototype = inherit(new node());

function connectionSet() {
    this.className = "connectionSet";
    this.classID = T_CONNECTIONSET;
}

connectionSet.prototype = inherit(new model());

function connectString() {
    this.className = "connectString";
    this.classID = T_CONNECTSTRING;
}

connectString.prototype = inherit(new textNode());

function contentArea() {
    this.className = "contentArea";
    this.classID = T_CONTENTAREA;
    this.relevant = "";

    this._x = 0;
    this._y = 0;
    this._h = 0;
    this._w = 0;

}

contentArea.prototype = inherit(new container());

Object.defineProperty(contentArea.prototype, "x", {
    get: function () {
        return this._x + "pt";
    }, set: function (v) {
        this._x = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(contentArea.prototype, "y", {
    get: function () {
        return this._y + "pt";
    }, set: function (v) {
        this._y = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(contentArea.prototype, "h", {
    get: function () {
        return this._h + "pt";
    }, set: function (v) {
        this._h = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(contentArea.prototype, "w", {
    get: function () {
        return this._w + "pt";
    }, set: function (v) {
        this._w = XPTS(v);
    }, configurable: true, enumerable: true
});


function corner() {
    this.className = "corner";
    this.classID = T_CORNER;
    this.inverted = "0";
    this.join = "square";
    this.presence = "visible";
    this.radius = "0pt";
    this.stroke = "";
    this.thickness = "";
}

corner.prototype = inherit(new node());

function dataGroup() {
    this.className = "dataGroup";
    this.classID = T_DATAGROUP;
    this.isRecord = false;
}

dataGroup.prototype = inherit(new node());

function dataModel() {
    this.className = "dataModel";
    this.classID = T_DATAMODEL;
}

dataModel.prototype = inherit(new model());

function dataValue() {
    this.className = "dataValue";
    this.classID = T_DATAVALUE;
    this.default = "";
    this.contains = "data";
    this.contentType = "text/plain";
    this.isNull = true;
    this.value = "";
}

dataValue.prototype = inherit(new node());

function dataWindow() {
    this.className = "dataWindow";
    this.currentRecordNumber = 0;
    this.isDefined = true;
    this.recordsAfter = 0;
    this.recordsBefore = 0;
}

dataWindow.prototype = inherit(new object());

Object.defineProperty(dataWindow.prototype, "gotoRecord", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("gotoRecord not implemented");
    }
});

Object.defineProperty(dataWindow.prototype, "isRecordGroup", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam) {
        console.log("isRecordGroup not implemented");
        return false;
    }
});

Object.defineProperty(dataWindow.prototype, "moveCurrentRecord", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("moveCurrentRecord not implemented");
    }
});

Object.defineProperty(dataWindow.prototype, "record", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("record not implemented");
        return {};
    }
});

function dateXFA() { //dont use Date();
    this.className = "date";
    this.classID = T_DATE;
    this.default = "";
    this.value = "";
}

dateXFA.prototype = inherit(new content());

function dateTime() {
    this.className = "dateTime";
    this.classID = T_DATETIME;
    this.default = "";
    this.value = "";
}

dateTime.prototype = inherit(new content());

function dateTimeEdit() {
    this.className = "dateTimeEdit";
    this.classID = T_DATETIMEEDIT;
    this.hScrollPolicy = "auto";
}

dateTimeEdit.prototype = inherit(new node());

function decimal() {
    this.className = "decimal";
    this.classID = T_DECIMAL;
    this.default = "";
    this.fracDigits = "2";
    this.leadDigits = "0";
    this.value = "";
}

decimal.prototype = inherit(new content());

function defaultUi() {
    this.className = "defaultUi";
    this.classID = T_DEFAULTUI;
}

defaultUi.prototype = inherit(new node());

function Delete() {
    this.className = "delete";
    this.classID = T_DELETE;
}

Delete.prototype = inherit(new textNode());

function delta() {
    this.currentValue = "";
    this.savedValue = "";
    this.target = "";
}

Object.defineProperty(delta.prototype, "restore", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("restore not implemented");
        return null;
    }
});

function deltas() {
    this.className = "deltas";
}

deltas.prototype = inherit(new list());

function desc() {
    this.className = "desc";
    this.classID = T_DESC;
}

desc.prototype = inherit(new node());

Object.defineProperty(desc.prototype, "metadata", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("metadata not implemented");
        return null;
    }
});

function digestMethod() {
    this.className = "digestMethod";
    this.classID = T_DIGESTMETHOD;
}

digestMethod.prototype = inherit(new node());

function digestMethods() {
    this.className = "digestMethods";
    this.type = "";
    this.classID = T_DIGESTMETHODS;
}

digestMethods.prototype = inherit(new node());

function draw() {
    this.className = "draw";
    this.classID = T_DRAW;
    this.default = "";
    this.anchorType = "topLeft";
    this.appType = "";
    this.colSpan = "1";
    this.hAlign = "left";
    this.locale = "ambient";
    this.presence = "visible";
    this.rawValue = null;
    this.relevant = "";
    this.rotate = "0";
    this.vAlign = "top";
    this.isWidget = true;

    this._x = 0;
    this._y = 0;
    this._h = 0;
    this._w = 0;
    this._minW = 0;
    this._minH = 0;
    this._maxW = 0;
    this._maxH = 0;
}

draw.prototype = inherit(new container());

Object.defineProperty(draw.prototype, "x", {
    get: function () {
        return this._x + "pt";
    }, set: function (v) {
        this._x = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(draw.prototype, "y", {
    get: function () {
        return this._y + "pt";
    }, set: function (v) {
        this._y = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(draw.prototype, "h", {
    get: function () {
        return this._h + "pt";
    }, set: function (v) {
        this._h = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(draw.prototype, "w", {
    get: function () {
        return this._w + "pt";
    }, set: function (v) {
        this._w = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(draw.prototype, "minH", {
    get: function () {
        return this._minH + "pt";
    }, set: function (v) {
        this._minH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(draw.prototype, "minW", {
    get: function () {
        return this._minW + "pt";
    }, set: function (v) {
        this._minW = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(draw.prototype, "maxH", {
    get: function () {
        return this._maxH + "pt";
    }, set: function (v) {
        this._maxH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(draw.prototype, "maxW", {
    get: function () {
        return this._maxW + "pt";
    }, set: function (v) {
        this._maxW = XPTS(v);
    }, configurable: true, enumerable: true
});

function dSigData() {
    this.className = "dSigData";
}

dSigData.prototype = inherit(new node());

function edge() {
    this.className = "edge";
    this.classID = T_EDGE;
    this.cap = "square";
    this.presence = "visible";
    this.stroke = "solid";
    this.thickness = "0.8pt";
}

edge.prototype = inherit(new node());

function encoding() {
    this.className = "encoding";
    this.classID = T_ENCODING;
}

encoding.prototype = inherit(new node());

function encodings() {
    this.className = "encodings";
    this.classID = T_ENCODINGS;
    this.type = "";
}

encodings.prototype = inherit(new node());

function encrypt() {
    this.className = "encrypt";
    this.classID = T_ENCRYPT;
    this.format = "";
}

encrypt.prototype = inherit(new node());

function event() {
    this.className = "event";
    this.classID = T_EVENT;
    this.activity = "";
    this.ref = "";
}

event.prototype = inherit(new node());

function eventPseudoModel() {
    this.className = "eventPseudoModel";
    this.name = "event";
    this.nameID = "event".hashCode();
    this.cancelAction = false;
    this.change = "";
    this.commitKey = 0;
    this.fullText = "";
    this.keyDown = true;
    this.modifier = false;
    this.newContentType = "";
    this.newText = "";
    this.prevContentType = "";
    this.prevText = "";
    this.reenter = false;
    this.selEnd = 0;
    this.selStart = 0;
    this.shift = false;
    this.soapFaultCode = "";
    this.soapFaultString = "";
    this.target = "";
}

eventPseudoModel.prototype = inherit(new model());

Object.defineProperty(eventPseudoModel.prototype, "emit", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("emit not implemented");
    }
});

Object.defineProperty(eventPseudoModel.prototype, "reset", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("reset not implemented");
    }
});

function iterateAndFireCalculate(nn, arr) {
    var cn = nn.className;
    if (cn === "field") {
        var eventsArr = findChildren(nn, T_CALCULATE);
        for (var z = 0, zz = eventsArr.length; z < zz; z++) {
            var scr = findChild(eventsArr[z], T_SCRIPT);
            if (scr !== null) {
                processingEle = nn;
                var raw = nn.fireCalculate(scr.value);
                if (raw) {
                    switch (nn.getSubType()) {
                        case TYPE_DATETIMEEDIT:
                        case TYPE_NUMERICEDIT:
                        case TYPE_TEXTEDIT:
                            nn.rawValue = raw;
                            break;
                        default:
                            nn.rawValue = raw;
                    }
                } else {
                    nn.rawValue = null;
                }
                arr.push(0);
            }
        }
    }

    var list = nn.nodes;

    if (cn === "template" || cn === "subformSet" || cn === "form" || nn.isContainer) {
        for (var i = 0, ii = list.length; i < ii; i++) {
            var child = list.item(i);
            iterateAndFireCalculate(child, arr);
        }
    }
}


function fireNodeEvent(nn, activity, arr) {
    var cn = nn.className;

    if (cn.indexOf("subform") === 0 || cn === "exclGroup" || cn === "field") {
        var eventsArr = findChildren(nn, T_EVENT);
        for (var z = 0, zz = eventsArr.length; z < zz; z++) {
            if (eventsArr[z].activity === activity) {
                var scr = findChild(eventsArr[z], T_SCRIPT);
                if (scr !== null) {
                    processingEle = nn;
                    nn.fireEvent(scr.value);
                    arr.push(0);
                }
            }
        }
    }
}

function iterateAndFireEvent(nn, activity, arr) {
    var cn = nn.className;

    if (cn.indexOf("subform") === 0 || cn === "exclGroup" || cn === "field") {
        var eventsArr = findChildren(nn, T_EVENT);
        for (var z = 0, zz = eventsArr.length; z < zz; z++) {
            if (eventsArr[z].activity === activity) {
                var scr = findChild(eventsArr[z], T_SCRIPT);
                if (scr !== null) {
                    processingEle = nn;
                    nn.fireEvent(scr.value);
                    arr.push(0);
                }
            }
        }
    }

    var list = nn.nodes;

    if (cn === "template" || cn === "subformSet" || cn === "form" || nn.isContainer) {
        for (var i = 0, ii = list.length; i < ii; i++) {
            var child = list.item(i);
            iterateAndFireEvent(child, activity, arr);
        }
    }
}

function exclGroup() {
    this.isContainer = true;
    this.className = "exclGroup";
    this.classID = T_EXCLGROUP;
    this.default = "";
    this.access = "open";
    this.accessKey = "";
    this.anchorType = "topLeft";
    this.appType = "";
    this.borderColor = "";
    this.borderWidth = "0pt";
    this.colSpan = "1";
    this.fillColor = "";
    this.hAlign = "left";
    this.layout = "position"; //lr-tb //rl-tb //row //table //tb
    this.mandatory = "";
    this.mandatoryMessage = "";
    this.presence = "visible";
//    this.rawValue = "";
    this.relevant = "";
    this.transient = "";
    this.validationMessage = "";
    this.vAlign = "top";

    this._x = 0;
    this._y = 0;
    this._h = 0;
    this._w = 0;
    this._minW = 0;
    this._minH = 0;
    this._maxW = 0;
    this._maxH = 0;

    this.eventModel = new eventPseudoModel();
}

exclGroup.prototype = inherit(new node());

Object.defineProperty(exclGroup.prototype, "rawValue", {
    get: function () {
        var fArr = findChildren(this, T_FIELD);
        for (var i = 0, ii = fArr.length; i < ii; i++) {
            var f = fArr[i];
            var fv = findChild(f, T_VALUE);
            if (fv) {
                var kk = fv.hashtagText;
                if (kk) {
                    return kk;
                }
            }
        }
        return null;

    }, set: function (v) {
        var fArr = findChildren(this, T_FIELD);
        for (var i = 0, ii = fArr.length; i < ii; i++) {
            var f = fArr[i];
            var ft = findChild(f, T_ITEMS);
            var fv = findChild(f, T_VALUE);

            if (ft !== null) {
                var ig = findChild(ft, T_INTEGER);
                if (ig === null) {
                    ig = findChild(ft, T_TEXT);
                }
                if (ig !== null) {
                    var val = ig.value;
                    if (fv === null) {
                        fv = new value();
                        this.nodes.append(fv);
                    }
                    if (v === val) {
                        fv.hashtagText = v;
                    } else {
                        fv.hashtagText = null;
                    }
                }
            }
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "x", {
    get: function () {
        return this._x + "pt";
    }, set: function (v) {
        this._x = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "y", {
    get: function () {
        return this._y + "pt";
    }, set: function (v) {
        this._y = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "h", {
    get: function () {
        return this._h + "pt";
    }, set: function (v) {
        this._h = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "w", {
    get: function () {
        return this._w + "pt";
    }, set: function (v) {
        this._w = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "minH", {
    get: function () {
        return this._minH + "pt";
    }, set: function (v) {
        this._minH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "minW", {
    get: function () {
        return this._minW + "pt";
    }, set: function (v) {
        this._minW = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "maxH", {
    get: function () {
        return this._maxH + "pt";
    }, set: function (v) {
        this._maxH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(exclGroup.prototype, "maxW", {
    get: function () {
        return this._maxW + "pt";
    }, set: function (v) {
        this._maxW = XPTS(v);
    }, configurable: true, enumerable: true
});


Object.defineProperty(exclGroup.prototype, "execEvent", {
    writable: true, enumerable: true, configurable: true,
    value: function (param) {
        fireNodeEvent(this, param, new Array());
    }
});

Object.defineProperty(exclGroup.prototype, "execInitialize", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        fireNodeEvent(this, "initialize", new Array());
    }
});

Object.defineProperty(exclGroup.prototype, "execValidate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("execValidate not implemented");
    }
});

Object.defineProperty(exclGroup.prototype, "selectedMember", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("selectedMember not implemented");
        return {};
    }
});

function exData() {
    this.className = "exData";
    this.classID = T_EXDATA;
    this.default = "";
    this.contentType = "text/plain";
    this.contentHTML = "";
    this.href = "";
    this.maxLength = "-1";
    this.transferEncoding = "";

    this.value = "";
}

exData.prototype = inherit(new content());

function execute() {
    this.className = "execute";
    this.classID = T_EXECUTE;
    this.connection = "";
    this.executeType = "import";
    this.runAt = "client";
}

execute.prototype = inherit(new node());

function exObject() {
    this.className = "exObject";
    this.classID = T_EXOBJECT;
    this.archive = "";
    this.classId = "";
    this.codeBase = "";
    this.codeType = "";
}

exObject.prototype = inherit(new node());

function extras() {
    this.className = "extras";
    this.classID = T_EXTRAS;
    this.type = "";
}

extras.prototype = inherit(new node());

function field() {
    this.className = "field";
    this.classID = T_FIELD;
    this._subType = -1;
    this.multiLine = "0";
    this.default = "";
    this.access = "open";
    this.accessKey = "";
    this.anchorType = "topLeft";
    this.appType = "";
    this.borderColor = "";
    this.borderWidth = "0pt";
    this.colSpan = "1";
    this.editValue = "";
    this.fillColor = "";
    this.fontColor = "";
    this.formatMessage = "";
    this.formattedVaue = "";
    this.hAlign = "left";
    this.locale = "ambient";
    this.mandatory = "";
    this.mandatoryMessage = "";
    this.presence = "visible";
    this.relevant = "";
    this.rotate = "0";
    this.selectedIndex = -1;
    this.transient = "";
    this.validationMessage = "";
    this.vAlign = "top";
    this.type = "";
    this.isWidget = true;

    this._x = 0;
    this._y = 0;
    this._h = 0;
    this._w = 0;
    this._minW = 0;
    this._minH = 0;
    this._maxW = 0;
    this._maxH = 0;

    this.eventModel = new eventPseudoModel();
}

field.prototype = inherit(new container());

Object.defineProperty(field.prototype, "x", {
    get: function () {
        return this._x + "pt";
    }, set: function (v) {
        this._x = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "y", {
    get: function () {
        return this._y + "pt";
    }, set: function (v) {
        this._y = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "h", {
    get: function () {
        return this._h + "pt";
    }, set: function (v) {
        this._h = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "w", {
    get: function () {
        return this._w + "pt";
    }, set: function (v) {
        this._w = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "minH", {
    get: function () {
        return this._minH + "pt";
    }, set: function (v) {
        this._minH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "minW", {
    get: function () {
        return this._minW + "pt";
    }, set: function (v) {
        this._minW = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "maxH", {
    get: function () {
        return this._maxH + "pt";
    }, set: function (v) {
        this._maxH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "maxW", {
    get: function () {
        return this._maxW + "pt";
    }, set: function (v) {
        this._maxW = XPTS(v);
    }, configurable: true, enumerable: true
});


Object.defineProperty(field.prototype, "getSubType", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        if (this._subType !== -1) {
            return this._subType;
        }
        var ui = findChild(this, T_UI);

        if (ui) {
            var uList = ui.nodes;
            for (var i = 0, ii = uList.length; i < ii; i++) {
                var u = uList.item(i);
                var cc = u.className;
                if ("textEdit" === cc) {
                    this._subType = TYPE_TEXTEDIT;
                    this.multiLine = u.multiLine;
                } else if ("button" === cc) {
                    this._subType = TYPE_BUTTON;
                } else if ("passwordEdit" === cc) {
                    this._subType = TYPE_PASSWORDEDIT;
                } else if ("numericEdit" === cc) {
                    this._subType = TYPE_NUMERICEDIT;
                } else if ("dateTimeEdit" === cc) {
                    this._subType = TYPE_DATETIMEEDIT;
                } else if ("checkButton" === cc) {
                    this._subType = TYPE_CHECKBUTTON;
                } else if ("choiceList" === cc) {
                    this._subType = TYPE_CHOICELIST;
                } else if ("signature" === cc) {
                    this._subType = TYPE_SIGNATURE;
                }
            }
        }

        if (this._subType === -1) {
            this._subType = TYPE_TEXTEDIT;
        }
        return this._subType;
    }
});

Object.defineProperty(field.prototype, "rawValue", {
    get: function () {

        var vChild = findChild(this, T_VALUE);
        var type = this.getSubType();

        if (vChild !== null) {
            var vList = vChild.nodes;
            switch (type) {
                case TYPE_TEXTEDIT :
                case TYPE_PASSWORDEDIT:
                case TYPE_CHOICELIST:
                    var t = findChild(vChild, T_TEXT);
                    if (t !== null) {
                        return t.value;
                    }
                    var ex = findChild(vChild, T_EXDATA);
                    if (ex !== null) {
                        return ex.contentHTML;
                    }
                case TYPE_CHECKBUTTON:
                    if (this.parent.className === "exclGroup") {
                        return this.parent.rawValue;
                    } else {
                        var ing = findChild(vChild, T_INTEGER);
                        if (ing !== null) {
                            return ing.value;
                        }
                    }
                case TYPE_NUMERICEDIT:
                    for (var i = 0, ii = vList.length; i < ii; i++) {
                        var ni = vList.item(i);
                        var ncs = ni.className;
                        if (ncs === "integer" || ncs === "float" || ncs === "decimal") {
                            return ni.value;
                        }
                    }
                    return "";
                case TYPE_DATETIMEEDIT:
                    for (var i = 0, ii = vList.length; i < ii; i++) {
                        var di = vList.item(i);
                        var dcs = di.className;
                        if (dcs === "date" || dcs === "time" || dcs === "dateTime") {
                            return di.value;
                        }
                    }
                    return "";
            }
        }
        return "";

    }, set: function (newValue) {

        var vChild = findChild(this, T_VALUE);
        if (vChild === null) {
            vChild = new value();
            this.nodes.append(vChild);
        }

        var type = this.getSubType();
        var vList = vChild.nodes;
        switch (type) {
            case TYPE_TEXTEDIT :
            case TYPE_PASSWORDEDIT:
            case TYPE_CHOICELIST:
                vChild.hashtagText = newValue;
                break;
            case TYPE_CHECKBUTTON:
                if (this.parent.className === "exclGroup") {
                    this.parent.rawValue = newValue;
                } else {
                    var ing = findChild(vChild, T_INTEGER);
                    if (ing === null) {
                        ing = new integer();
                        ing.parent = vChild;
                        vChild.nodes.append(ing);
                    }
                    ing.value = newValue;
                }
                break;
            case TYPE_NUMERICEDIT:
                var altered = false;
                for (var i = 0, ii = vList.length; i < ii; i++) {
                    var ni = vList.item(i);
                    var ncs = ni.className;
                    if (!newValue) {
                        ni.value = null;
                    } else if (ncs === "float" || ncs === "decimal") {
                        ni.value = newValue;
                        altered = true;
                    } else if (ncs === "integer") {
                        ni.value = newValue;
                        altered = true;
                    }
                }
                if (!altered) {
                    var dd = new decimal();
                    dd.value = newValue;
                    vChild.nodes.append(dd);
                }
                break;
            case TYPE_DATETIMEEDIT:
                for (var i = 0, ii = vList.length; i < ii; i++) {
                    var di = vList.item(i);
                    var dcs = di.className;
                    if (dcs === "date" || dcs === "time" || dcs === "dateTime") {
                        di.value = newValue;
                    }
                }
                break;
        }

    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "toString", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        var raw = this.rawValue;
        if (raw) {
            if (this.getSubType() === TYPE_NUMERICEDIT) {
                return parseFloat(raw);
            } else {
                var isNum = !isNaN(raw - 0) && raw !== "";
                return isNum ? parseFloat(raw) : raw;
            }
        }
        return raw;
    }
});

Object.defineProperty(field.prototype, "parentSubform", {
    get: function () {
        console.log("parentSubform not implemented for field");
        return "";
    }, configurable: true, enumerable: true
});

Object.defineProperty(field.prototype, "addItem", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2) {
        var argLen = arguments.length;
        if (argLen === 1) {
            var itemArr = findChildren(this, T_ITEMS);
            var tt = new text();
            tt.value = strParam1;
            if (itemArr.length === 0) {
                var it = new items();
                this.nodes.append(it);

                it.nodes.append(tt);
            } else if (itemArr.length === 1) {
                itemArr[0].nodes.append(tt);
            } else if (itemArr.length === 2) {
                itemArr[0].nodes.append(tt);
                var tt2 = new text();
                tt2.value = strParam1;
                itemArr[1].nodes.append(tt2);
            }
        } else if (argLen === 2) {
            var itemArr = findChildren(this, T_ITEMS);
            var tt = new text();
            tt.value = strParam1;
            var tt2 = new text();
            tt2.value = strParam2;
            if (itemArr.length === 0) {
                var it = new items();
                this.nodes.append(it);
                it.nodes.append(tt);
                var it2 = new items();
                this.nodes.append(it2);
                it2.nodes.append(tt2);
            } else if (itemArr.length === 1) {
                itemArr[0].nodes.append(tt);
                var it2 = new items();
                this.nodes.append(it2);
                it2.nodes.append(tt2);
            } else if (itemArr.length === 2) {
                itemArr[0].nodes.append(tt);
                itemArr[1].nodes.append(tt2);
            }
        }
    }
});

Object.defineProperty(field.prototype, "boundItem", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        console.log("boundItem not implemented");
        return "";
    }
});

Object.defineProperty(field.prototype, "clearItems", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        var itemArr = findChildren(this, T_ITEMS);
        for (var z = 0, zz = itemArr.length; z < zz; z++) {
            itemArr[z].nodes.clear();
        }
    }
});

Object.defineProperty(field.prototype, "deleteItem", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("deleteItem not implemented");
        return false;
    }
});

Object.defineProperty(field.prototype, "execCalculate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        iterateAndFireCalculate(this, new Array());
    }
});

Object.defineProperty(field.prototype, "execEvent", {
    writable: true, enumerable: true, configurable: true,
    value: function (param) {
        fireNodeEvent(this, param, new Array());
    }
});

Object.defineProperty(field.prototype, "execInitialize", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        fireNodeEvent(this, "initialize", new Array());
    }
});

Object.defineProperty(field.prototype, "execValidate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("execValidate not implemented");
    }
});

Object.defineProperty(field.prototype, "getDisplayItem", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("getDisplayItem not implemented");
        return "";
    }
});

Object.defineProperty(field.prototype, "getItemState", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("getItemState not implemented");
        return false;
    }
});

Object.defineProperty(field.prototype, "getSavedItem", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        console.log("getSavedItem not implemented");
        return "false";
    }
});

Object.defineProperty(field.prototype, "setItemState", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam, boolParam) {
        console.log("setItemState not implemented");
    }
});

function fill() {
    this.className = "fill";
    this.classID = T_FILL;
    this.presence = "visible";
}

fill.prototype = inherit(new node());

function filter() {
    this.className = "filter";
    this.classID = T_FILTER;
    this.addRevocationInfo = "";
}

filter.prototype = inherit(new node());

function float() {
    this.className = "float";
    this.classID = T_FLOAT;
    this.default = "";
    this.value = 0.0;
}

float.prototype = inherit(new content());

function font() {
    this.className = "font";
    this.classID = T_FONT;
    this.baselineShift = "0pt";
    this.fontHorizontalScale = "100%";
    this.fontVerticalScale = "100%";
    this.kerningMode = "none";
    this.letterSpacing = "0";
    this.lineThrough = "0";
    this.lineThroughPeriod = "all";
    this.overline = "0";
    this.overlinePerioad = "all";
    this.posture = "normal";
    this.size = "10pt";
    this.typeface = "Courier";
    this.underline = "0";
    this.underlinePeriod = "all";
    this.weight = "normal";
}

font.prototype = inherit(new node());

function form() {
    this.className = "form";
    this.classID = T_FORM;
    this.name = "form";
}

form.prototype = inherit(new model());

Object.defineProperty(form.prototype, "execCalculate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        iterateAndFireCalculate(this, new Array());
    }
});


Object.defineProperty(form.prototype, "execInitialize", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        fireNodeEvent(this, "initialize", new Array());
    }
});

Object.defineProperty(form.prototype, "execValidate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("execValidate not implemented");
    }
});

Object.defineProperty(form.prototype, "formNodes", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("formNodes not implemented");
        return {};//list object
    }
});

Object.defineProperty(form.prototype, "recalculate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        iterateAndFireCalculate(this, new Array());
    }
});

Object.defineProperty(form.prototype, "remerge", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("remerge not implemented");
    }
});


function template() {
    this.className = "template";
    this.classID = T_TEMPLATE;
}

template.prototype = inherit(new model());

Object.defineProperty(template.prototype, "createNode", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("creteNode not implemented");
    }
});

Object.defineProperty(template.prototype, "execCalculate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        iterateAndFireCalculate(this, new Array());
    }
});

Object.defineProperty(template.prototype, "execInitialize", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        fireNodeEvent(this, "initialize", new Array());
    }
});

Object.defineProperty(template.prototype, "execValidate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("execValidate not implemented");
    }
});

Object.defineProperty(template.prototype, "formNodes", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("formNodes not implemented");
    }
});

Object.defineProperty(template.prototype, "recalculate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        iterateAndFireCalculate(this, new Array());
    }
});

Object.defineProperty(template.prototype, "remerge", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("remerge not implemented");
    }
});

function format() {
    this.className = "format";
    this.classID = T_FORMAT;
}

format.prototype = inherit(new node());

function handler() {
    this.className = "handler";
    this.classID = T_HANDLER;
    this.type = "";
    this.version = "";
}

handler.prototype = inherit(new textNode());

function hyphenation() {
    this.className = "hyphenation";
    this.classID = T_HYPHENATION;
    this.excludeAllCaps = "0";
    this.excludeInitialCap = "0";
    this.ladderCount = 0;
    this.pushCharacterCount = "3";
}

hyphenation.prototype = inherit(new node());

function image() {
    this.className = "image";
    this.classID = T_IMAGE;
    this.default = "";
    this.aspect = "fit";
    this.contentType = "text/plain";
    this.href = "";
    this.transferEncoding = "";
    this.value = "";
}

image.prototype = inherit(new node());

function imageEdit() {
    this.className = "imageEdit";
    this.classID = T_IMAGEEDIT;
    this.data = "";
    this.value = "";
}

imageEdit.prototype = inherit(new node());

function insert() {
    this.className = "insert";
    this.classID = T_INSERT;
    this.value = "";
}

imageEdit.prototype = inherit(new textNode());

function instanceManager() {
    this.className = "instanceManager";
    this.classID = T_INSTANCEMANAGER;
    this.name = "";
    this.templateDOM = null;
    this.instances = new Array();
    this.count = "0";
}

instanceManager.prototype = inherit(new node());

Object.defineProperty(instanceManager.prototype, "min", {
    get: function () {
        var occ = findChild(this, T_OCCUR);
        if (occ !== null) {
            return occ.min;
        }
        return "1";
    }, set: function (newValue) {
        var occ = findChild(this, T_OCCUR);
        if (occ !== null) {
            occ.min = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(instanceManager.prototype, "max", {
    get: function () {
        var occ = findChild(this, T_OCCUR);
        if (occ !== null) {
            return occ.max;
        }
        return "-1";
    }, set: function (newValue) {
        var occ = findChild(this, T_OCCUR);
        if (occ !== null) {
            occ.max = newValue;
        }
    }, configurable: true, enumerable: true
});


Object.defineProperty(instanceManager.prototype, "addInstance", {
    writable: true, enumerable: true, configurable: true,
    value: function (param1) {
        var cc = parseInt(this.count);
        var max = parseInt(this.max);
        max = max === -1 ? Number.MAX_VALUE : max;
        if (cc < max) {
            var tn = this.templateDOM;
            var sn = getObjectFromClass(tn.className);
            extendTemplate(tn, sn);
            var insPar = this.parent;
            var pos = -1;
            var manPos = -1;
            for (var z = 0, zz = insPar.nodes.length; z < zz; z++) {
                var temp = insPar.nodes.item(z);
                var search = this.name.substring(1);
                if (temp.className.indexOf("subform") === 0 && temp.name === search) {
                    pos = z;
                }
                if (temp.className === "instanceManager" && temp.name === this.name) {
                    manPos = z;
                }
            }
            if (pos !== -1) {
                this.parent.nodes.insertPosition(sn, pos + 1);
            } else {
                this.parent.nodes.insertPosition(sn, manPos + 1);
            }
            sn.instanceManager = this;
            generateSomModel(tn, sn);
            this.count = "" + (cc + 1);

            if (param1 === 1) {
                sn.execInitialize();
                var fArr = findChildren(sn, T_FIELD);
                for (var i = 0, ii = fArr.length; i < ii; i++) {
                    fArr[i].execInitialize();
                }
            }

            return sn;
        }
    }
});

Object.defineProperty(instanceManager.prototype, "removeInstance", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        var cc = parseInt(this.count);
        var min = parseInt(this.min);
        if (cc > min) {
            var insPar = this.parent;
            var pos = 0;
            for (var z = 0, zz = insPar.nodes.length; z < zz; z++) {
                var temp = insPar.nodes.item(z);
                var search = this.name.substring(1);
                if (temp.className.indexOf("subform") === 0 && temp.name === search) {
                    if (pos === intParam) {
                        insPar.nodes.remove(temp);
                        this.count = "" + (cc - 1);
                        break;
                    }
                    pos++;
                }
            }
        }
    }
});

Object.defineProperty(instanceManager.prototype, "insertInstance", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam, boolParam) {
        console.log("insertInstance not implemented");
        return {};
    }
});


Object.defineProperty(instanceManager.prototype, "moveInstance", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam1, intParam2) {
        if (intParam1 === intParam2) {
            return;
        }
        var insPar = this.parent;
        for (var z = 0, zz = insPar.nodes.length; z < zz; z++) {
            var temp = insPar.nodes.item(z);
            if (temp.className === "instanceManager" && temp.name === this.name) {
                var oldIndex = intParam1 + z + 1;
                var newIndex = intParam2 + z + 1;
                var arr = insPar.nodes.xmlArray;
                arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
                break;
            }
        }
    }
});


Object.defineProperty(instanceManager.prototype, "setInstances", {
    writable: true, enumerable: true, configurable: true,
    value: function (intParam) {
        var balance = intParam - parseInt(this.count);
        if (balance > 0) {
            for (var i = 0; i < balance; i++) {
                this.addInstance(1);
            }
        } else {
            balance = Math.abs(balance);
            while (balance !== 0 && parseInt(this.count) > 0) {
                var nName = this.name.substring(1);
                var cName = this.templateDOM.className;
                var arr = findNamedChildren(this.parent, cName, nName);
                if (arr.length > 0) {
                    this.parent.nodes.remove(arr.pop());
                    this.count = "" + (parseInt(this.count) - 1);
                }
            }
        }
    }
});


function integer() {
    this.className = "integer";
    this.classID = T_INTEGER;
    this.default = "";
    this.value = 0;
}

integer.prototype = inherit(new content());

function issuers() {
    this.className = "issuers";
    this.classID = T_ISSUERS;
    this.type = "";
}

issuers.prototype = inherit(new node());

function items() {
    this.className = "items";
    this.classID = T_ITEMS;
    this.presence = "visible";
    this.ref = "";
    this.save = "0";
}

items.prototype = inherit(new node());

function keep() {
    this.className = "keep";
    this.classID = T_KEEP;
    this.intact = "none";
    this.next = "none";
    this.previous = "none";
}

keep.prototype = inherit(new node());

function keyUsage() {
    this.className = "keyUsage";
    this.classID = T_KEYUSAGE;
    this.crlSign = "Yes";
    this.dataEncipherment = "";
    this.decipherOnly = "Yes";
    this.digitalSignature = "Yes";
    this.encipherOnly = "Yes";
    this.keyAgreement = "Yes";
    this.keyCertSign = "Yes";
    this.keyEncipherment = "Yes";
    this.nonRepudiation = "Yes";
    this.type = "";
    this.use = "";
    this.usehref = "";
}

keyUsage.prototype = inherit(new node());

function line() {
    this.className = "line";
    this.classID = T_LINE;
    this.hand = "even";
    this.slope = "\\";
    this.use = "";
    this.usehref = "";
}

line.prototype = inherit(new node());

function linear() {
    this.className = "linear";
    this.classID = T_LINEAR;
    this.type = "toRight";
    this.use = "";
    this.usehref = "";
}

linear.prototype = inherit(new node());

function manifest() {
    this.className = "manifest";
    this.classID = T_MANIFEST;
    this.default = "";
    this.action = "";
}

manifest.prototype = inherit(new node());

function map() {
    this.className = "map";
    this.classID = T_MAP;
    this.bind = "";
    this.from = "";
}

map.prototype = inherit(new node());

function margin() {
    this.className = "margin";
    this.classID = T_MARGIN;
    this.bottomInset = "0pt";
    this.leftInset = "0pt";
    this.rightInset = "0pt";
    this.topInset = "0pt";
}

margin.prototype = inherit(new node());

function mdp() {
    this.className = "mdp";
    this.classID = T_MDP;
    this.permission = "2";
    this.signatureType = "";
}

mdp.prototype = inherit(new node());

function medium() {
    this.className = "medium";
    this.classID = T_MEDIUM;
    this.imagingBBox = "";
    this.long = "0pt";
    this.orientation = "portrait";
    this.short = "0pt";
    this.stock = "default";
}

medium.prototype = inherit(new node());


function message() {
    this.className = "message";
    this.classID = T_MESSAGE;
}

message.prototype = inherit(new node());

function numericEdit() {
    this.className = "numericEdit";
    this.classID = T_NUMERICEDIT;
    this.hScrollPolicy = "auto";
}

numericEdit.prototype = inherit(new node());

function occur() {
    this.className = "occur";
    this.classID = T_OCCUR;
    this.initial = "1";
    this.max = "1";
    this.min = "1";
    this.hScrollPolicy = "auto";
}

occur.prototype = inherit(new node());

function oid() {
    this.className = "oid";
    this.classID = T_OID;
}

oid.prototype = inherit(new textNode());

function oids() {
    this.className = "oids";
    this.classID = T_OIDS;
    this.type = "";
}

oids.prototype = inherit(new node());

function operation() {
    this.className = "operation";
    this.classID = T_OPERATION;
    this.input = "";
    this.output = "";
}

operation.prototype = inherit(new textNode());

function overflow() {
    this.className = "overflow";
    this.classID = T_OVERFLOW;
    this.leader = "";
    this.target = "";
    this.trailer = "";
}

overflow.prototype = inherit(new node());

function packet() {
    this.className = "packet";
    this.classID = T_PACKET;
    this.content = "";
}

packet.prototype = inherit(new node());

Object.defineProperty(packet.prototype, "getAttribute", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        return this[strParam];
    }
});

Object.defineProperty(packet.prototype, "removeAttribute", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam) {
        delete this[strParam];
    }
});

Object.defineProperty(packet.prototype, "setAttribute", {
    writable: true, enumerable: true, configurable: true,
    value: function (strParam1, strParam2) {
        return this[strParam1] = strParam2;
    }
});

function pageArea() {
    this.className = "pageArea";
    this.classID = T_PAGEAREA;
    this.blankOrNotBlank = "any";
    this.blank = "0";
    this.initialNumber = "1";
    this.numbered = "auto";
    this.oddOrEven = "";
    this.pagePosition = "any";
    this.relevant = "";

    this.occurCount = 0;
}

pageArea.prototype = inherit(new container());

Object.defineProperty(pageArea.prototype, "getOccur", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        var oc = findChild(this, T_OCCUR);
        if (oc === null) {
            oc = new occur();
        }
        return oc;
    }
});

function pageSet() {
    this.className = "pageSet";
    this.classID = T_PAGESET;
    this.relation = "ordered";
    this.relevant = "";
}

pageSet.prototype = inherit(new container());

function para() {
    this.className = "para";
    this.classID = T_PARA;
    this.hAlign = "left";
    this.hyphenate = "1";
    this.lineHeight = "0pt";
    this.marginLeft = "0pt";
    this.marginRight = "0pt";
    this.preserve = "0";
    this.radixOffset = "";
    this.spaceAbove = "0pt";
    this.spaceBelow = "0pt";
    this.tabDefault = "";
    this.tabStops = "";
    this.textIndent = "";
    this.vAlign = "top";
}

para.prototype = inherit(new node());

function password() {
    this.className = "password";
    this.classID = T_PASSWORD;
}

password.prototype = inherit(new textNode());

function passwordEdit() {
    this.className = "passwordEdit";
    this.classID = T_PASSWORDEDIT;
    this.hScrollPolicy = "auto";
    this.passwordChar = "*";
}

passwordEdit.prototype = inherit(new node());

function pattern() {
    this.className = "pattern";
    this.classID = T_PATTERN;
    this.type = "";
}

pattern.prototype = inherit(new node());

function picture() {
    this.className = "picture";
    this.classID = T_PICTURE;
    this.default = "";
    this.value = "";
}

picture.prototype = inherit(new node());

function proto() {
    this.className = "proto";
    this.classID = T_PROTO;
}

proto.prototype = inherit(new node());

function query() {
    this.className = "query";
    this.classID = T_QUERY;
    this.commandType = "unknown";
}

query.prototype = inherit(new node());

function radial() {
    this.className = "radial";
    this.classID = T_RADIAL;
    this.type = "toEdge";
}

radial.prototype = inherit(new node());

function reason() {
    this.className = "reason";
    this.classID = T_REASON;
}

reason.prototype = inherit(new node());

function reasons() {
    this.className = "reasons";
    this.classID = T_REASONS;
}

reasons.prototype = inherit(new node());

function recordSet() {
    this.className = "recordSet";
    this.classID = T_RECORDSET;
    this.bofAction = "moveLast";
    this.cursorLocation = "client";
    this.cursorType = "forwardOnly";
    this.eofAction = "moveLast";
    this.lockType = "unspecified";
    this.max = "1";
}

recordSet.prototype = inherit(new node());

function rectangle() {
    this.className = "rectangle";
    this.classID = T_RECTANGLE;
    this.hand = "even";
    this.presence = "visible";
}

rectangle.prototype = inherit(new node());

function ref() {
    this.className = "ref";
    this.classID = T_REF;
}

ref.prototype = inherit(new textNode());

function rootElement() {
    this.className = "rootElement";
    this.classID = T_ROOTELEMENT;
}

rootElement.prototype = inherit(new textNode());

function script() {
    this.className = "script";
    this.classID = T_SCRIPT;
    this.default = "";
    this.binding = "XFA";
    this.contentType = "text/plain";
    this.runAt = "client";
    this.stateless = "";
    this.value = "";
}

script.prototype = inherit(new textNode());

function select() {
    this.className = "select";
    this.classID = T_SELECT;
}

select.prototype = inherit(new textNode());

function signature() {
    this.className = "signature";
    this.classID = T_SIGNATURE;
}

signature.prototype = inherit(new node());

function signatureProperties() {
    this.className = "signatureProperties";
    this.classID = -1;
}

signatureProperties.prototype = inherit(new node());

function signaturePseudoModel() {
    this.className = "signaturePseudoModel";
}

signaturePseudoModel.prototype = inherit(new object());

Object.defineProperty(signaturePseudoModel.prototype, "clear", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, boolParam) {
        console.log("clear not implemented");
        return false;
    }
});

Object.defineProperty(signaturePseudoModel.prototype, "enumerate", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam, boolParam) {
        console.log("enumerate not implemented");
        return {};
    }
});

Object.defineProperty(signaturePseudoModel.prototype, "sign", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam1, strParam2, strParam3, strParam4, boolParam4, boolParam5, objParam6, objParam7) {
        console.log("sign not implemented");
        return false;
    }
});

Object.defineProperty(signaturePseudoModel.prototype, "verify", {
    writable: true, enumerable: true, configurable: true,
    value: function (objParam1, boolParam2, objParam3, objParam4) {
        console.log("verify not implemented");
        return false;
    }
});

function signData() {
    this.className = "signData";
    this.classID = T_SIGNDATA;
    this.operation = "";
    this.ref = "";
    this.target = "";
}

signData.prototype = inherit(new node());

function signing() {
    this.className = "signing";
    this.classID = T_SIGNING;
    this.type = "";
}

signing.prototype = inherit(new node());

function soapAction() {
    this.className = "soapAction";
    this.classID = T_SOAPACTION;
}

soapAction.prototype = inherit(new textNode());

function soapAddress() {
    this.className = "soapAddress";
    this.classID = T_SOAPADDRESS;
}

soapAddress.prototype = inherit(new textNode());

function solid() {
    this.className = "solid";
    this.classID = T_SOLID;
}

solid.prototype = inherit(new node());

function source() {
    this.className = "source";
    this.classID = T_SOURCE;
    this.db = "";
}

source.prototype = inherit(new node());

Object.defineProperty(source.prototype, "addNew", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("addNew not implemented");
    }
});

Object.defineProperty(source.prototype, "cancel", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("cancel not implemented");
        return false;
    }
});

Object.defineProperty(source.prototype, "cancelBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("cancelBatch not implemented");
    }
});

Object.defineProperty(source.prototype, "close", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("close not implemented");
    }
});

Object.defineProperty(source.prototype, "delete", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("delete not implemented");
    }
});

Object.defineProperty(source.prototype, "first", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("first not implemented");
    }
});

Object.defineProperty(source.prototype, "hasDataChanged", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("hasDataChanged not implemented");
        return false;
    }
});

Object.defineProperty(source.prototype, "isBOF", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("isBOF not implemented");
        return false;
    }
});

Object.defineProperty(source.prototype, "isEOF", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("isEOF not implemented");
        return false;
    }
});

Object.defineProperty(source.prototype, "last", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("last not implemented");
    }
});

Object.defineProperty(source.prototype, "next", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("next not implemented");
    }
});

Object.defineProperty(source.prototype, "open", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("open not implemented");
    }
});

Object.defineProperty(source.prototype, "previous", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("previous not implemented");
    }
});

Object.defineProperty(source.prototype, "requery", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("requery not implemented");
    }
});

Object.defineProperty(source.prototype, "resync", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("resync not implemented");
    }
});

Object.defineProperty(source.prototype, "update", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("update not implemented");
    }
});

Object.defineProperty(source.prototype, "updateInBatch", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("updateInBatch not implemented");
    }
});

function sourceSet() {
    this.className = "sourceSet";
    this.classID = T_SOURCESET;
}

sourceSet.prototype = inherit(new model());

function speak() {
    this.className = "speak";
    this.classID = T_SPEAK;
    this.disable = "1";
    this.priority = "custom";
}

speak.prototype = inherit(new textNode());

function stipple() {
    this.className = "stipple";
    this.classID = T_STIPPLE;
    this.rate = "50";
}

stipple.prototype = inherit(new node());

function subform() {
    this.instanceManager = null;

    this.className = "subform";
    this.classID = T_SUBFORM;
    this.allowMacro = "1";
    this.anchorType = "topLeft";
    this.appType = "";
    this.borderColor = "";
    this.borderWidth = "0pt";
    this.colSpan = "1";
    this.columnWidths = "";
    this.fillColor = "";
    this.hAlign = "left";
    this.instanceIndex = 0;
    this.layout = "position";
    this.locale = "ambient";
    this.presence = "visible";
    this.relevant = "";
    this.restoreState = "none";
    this.scope = "";
    this.validationMessage = "";
    this.vAlign = "top";

    this._x = 0;
    this._y = 0;
    this._h = 0;
    this._w = 0;
    this._minW = 0;
    this._minH = 0;
    this._maxW = 0;
    this._maxH = 0;

    this.eventModel = new eventPseudoModel();
}

subform.prototype = inherit(new container());

Object.defineProperty(subform.prototype, "x", {
    get: function () {
        return this._x + "pt";
    }, set: function (v) {
        this._x = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(subform.prototype, "y", {
    get: function () {
        return this._y + "pt";
    }, set: function (v) {
        this._y = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(subform.prototype, "h", {
    get: function () {
        return this._h + "pt";
    }, set: function (v) {
        this._h = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(subform.prototype, "w", {
    get: function () {
        return this._w + "pt";
    }, set: function (v) {
        this._w = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(subform.prototype, "minH", {
    get: function () {
        return this._minH + "pt";
    }, set: function (v) {
        this._minH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(subform.prototype, "minW", {
    get: function () {
        return this._minW + "pt";
    }, set: function (v) {
        this._minW = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(subform.prototype, "maxH", {
    get: function () {
        return this._maxH + "pt";
    }, set: function (v) {
        this._maxH = XPTS(v);
    }, configurable: true, enumerable: true
});

Object.defineProperty(subform.prototype, "maxW", {
    get: function () {
        return this._maxW + "pt";
    }, set: function (v) {
        this._maxW = XPTS(v);
    }, configurable: true, enumerable: true
});


Object.defineProperty(subform.prototype, "execCalculate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        iterateAndFireCalculate(this, new Array());
    }
});

Object.defineProperty(subform.prototype, "execEvent", {
    writable: true, enumerable: true, configurable: true,
    value: function (param) {
        fireNodeEvent(this, param, new Array());
    }
});

Object.defineProperty(subform.prototype, "execInitialize", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        fireNodeEvent(this, "initialize", new Array());
    }
});

Object.defineProperty(subform.prototype, "execValidate", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("execValidate not implemented");
    }
});


function subformSet() {
    this.className = "subformSet";
    this.classID = T_SUBFORMSET;
    this.instanceIndex = 0;
    this.relation = "ordered";
    this.relevant = "";
}

subformSet.prototype = inherit(new container());

function subjectDN() {
    this.className = "subjectDN";
    this.classID = T_SUBJECTDN;
    this.delimiter = ",";
}

subjectDN.prototype = inherit(new node());

function subjectDNs() {
    this.className = "subjectDNs";
    this.classID = T_SUBJECTDNS;
    this.type = "";
}

subjectDNs.prototype = inherit(new node());

function submit() {
    this.className = "submit";
    this.classID = T_SUBMIT;
    this.embedPDF = "";
    this.format = "";
    this.target = "";
    this.textEncoding = "";
    this.xdpContent = "";
}

submit.prototype = inherit(new node());


function text() {
    this.className = "text";
    this.classID = T_TEXT;
    this.default = "";
    this.value = null;
    this.maxChars = "0";
}

text.prototype = inherit(new content());

function textEdit() {
    this.className = "textEdit";
    this.classID = T_TEXTEDIT;
    this.hScrollPolicy = "auto";
    this.multiline = "1";
    this.vScrollPolicy = "auto";
    this.allowRichText = "0";
}

textEdit.prototype = inherit(new node());

function time() {
    this.className = "time";
    this.classID = T_TIME;
    this.default = "";
    this.value = null;
}

time.prototype = inherit(new content());

function toolTip() {
    this.className = "toolTip";
    this.classID = T_TOOLTIP;
}

toolTip.prototype = inherit(new textNode());

function traversal() {
    this.className = "traversal";
    this.classID = T_TRAVERSAL;
}

traversal.prototype = inherit(new node());

function traverse() {
    this.className = "traverse";
    this.classID = T_TRAVERSE;
    this.operation = "";
    this.ref = "";
}

traverse.prototype = inherit(new node());

function ui() {
    this.className = "ui";
    this.classID = T_UI;
}

ui.prototype = inherit(new node());

function update() {
    this.className = "update";
    this.classID = T_UPDATE;
}

update.prototype = inherit(new textNode());

function uri() {
    this.className = "uri";
    this.classID = T_URI;
}
uri.prototype = inherit(new textNode());

function user() {
    this.className = "user";
    this.classID = T_USER;
}

user.prototype = inherit(new textNode());

function validate() {
    this.className = "validate";
    this.classID = T_VALIDATE;
    this.formatTest = "warning";
    this.nullTest = "disabled";
    this.scriptTest = "";
    this.disableAll = "1";
}

validate.prototype = inherit(new node());

function value() {
    this.className = "value";
    this.classID = T_VALUE;
    this.override = false;
    this.relevant = "";
}

value.prototype = inherit(new node());

Object.defineProperty(value.prototype, "hashtagText", {
    get: function () {
        var t = findChild(this, T_TEXT);
        if (t) {
            return t.value;
        }
        var ex = findChild(this, T_EXDATA);
        if (ex) {
            return ex.value;
        }
        return null;

    }, set: function (newValue) {
        var t = findChild(this, T_TEXT);
        if (t === null) {
            t = findChild(this, T_EXDATA);
            if (t !== null) {
                t.contentHTML = newValue;
            }
        }
        if (t === null) {
            t = new text();
            this.nodes.append(t);
        }
        t.value = newValue;
    }, configurable: true, enumerable: true
});


function variables() {
    this.className = "variables";
    this.classID = T_VARIABLES;
}

variables.prototype = inherit(new container());

function wsdlAddress() {
    this.className = "wsdlAddress";
    this.classID = T_WSDLADDRESS;
}

wsdlAddress.prototype = inherit(new textNode());

function wsdlConnection() {
    this.className = "wsdlConnetion";
    this.classID = T_WSDLCONNECTION;
    this.dataDescription = "";
}

wsdlConnection.prototype = inherit(new node());

Object.defineProperty(wsdlConnection.prototype, "execute", {
    writable: true, enumerable: true, configurable: true,
    value: function () {
        console.log("execute is not implemented");
    }
});

function xfa() {
    this.className = "xfa";
    this.classID = T_XFA;
    this.name = "xfa";
    this.timeStamp = "";
    this.uuid = "";
}

xfa.prototype = inherit(new model());

function xmlConnection() {
    this.className = "xmlConnetion";
    this.classID = T_XMLCONNECTION;
    this.dataDescription = "";
}

xmlConnection.prototype = inherit(new node());

function xsdConnection() {
    this.className = "xsdConnetion";
    this.classID = T_XSDCONNECTION;
    this.dataDescription = "";
}

xsdConnection.prototype = inherit(new node());

//injecting to array

Object.defineProperty(Array.prototype, "xSom", {
    writable: true, enumerable: true, configurable: true,
    value: function (str) {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            var tt = this[i].xSom(str);
            if (tt instanceof Array && tt.length > 0) {
                for (var j = 0, jj = tt.length; j < jj; j++) {
                    result.push(tt[j]);
                }
            } else if (tt !== null) {
                result.push(tt);
            }
        }
        return result;
    }
});

Object.defineProperty(Array.prototype, "access", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].access);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].access = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "accessKey", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].accessKey);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].accessKey = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "action", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].action);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].action = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "activity", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].activity);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].activity = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "addRevocationInfo", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].addRevocationInfo);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].addRevocationInfo = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "after", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].after);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].after = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "afterTarget", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].afterTarget);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].afterTarget = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "aliasNode", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].aliasNode);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].aliasNode = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "all", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].all);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].all = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "allowMacro", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].allowMacro);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].allowMacro = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "allowNeutral", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].allowNeutral);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].allowNeutral = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "allowRichText", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].allowRichText);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].allowRichText = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "anchorType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].anchorType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].anchorType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "appType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].appType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].appType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "archive", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].archive);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].archive = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "aspect", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].aspect);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].aspect = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "baselineShift", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].baselineShift);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].baselineShift = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "before", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].before);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].before = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "beforeTarget", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].beforeTarget);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].beforeTarget = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "bind", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].bind);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].bind = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "binding", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].binding);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].binding = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "blank", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].blank);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].blank = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "blankOrNotBlank", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].blankOrNotBlank);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].blankOrNotBlank = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "bofAction", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].bofAction);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].bofAction = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "bookendLeader", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].bookendLeader);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].bookendLeader = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "bookendTrailer", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].bookendTrailer);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].bookendTrailer = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "borderColor", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].borderColor);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].borderColor = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "borderWidth", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].borderWidth);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].borderWidth = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "bottomInset", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].bottomInset);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].bottomInset = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "break", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].break);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].break = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "calculationsEnabled", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].calculationsEnabled);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].calculationsEnabled = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "cap", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].cap);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].cap = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "change", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].change);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].change = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "charEncoding", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].charEncoding);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].charEncoding = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "checksum", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].checksum);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].checksum = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "circular", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].circular);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].circular = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "classAll", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].classAll);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "classId", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].classId);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].classId = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "classIndex", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].classIndex);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "className", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].className);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "codeBase", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].codeBase);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].codeBase = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "codeType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].codeType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].codeType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "colSpan", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].colSpan);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].colSpan = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "columnWidths", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].columnWidths);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].columnWidths = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "commandType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].commandType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].commandType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "commitKey", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].commitKey);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].commitKey = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "commitOn", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].commitOn);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].commitOn = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "connection", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].connection);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].connection = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "contains", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].contains);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].contains = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "content", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].content);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].content = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "contentType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].contentType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].contentType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "context", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].context);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].context = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "count", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].count);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].count = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "credentialServerPolicy", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].credentialServerPolicy);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].credentialServerPolicy = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "crlSign", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].crlSign);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].crlSign = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "cSpace", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].cSpace);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].cSpace = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "currentPage", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].currentPage);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].currentPage = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "currentRecordNumber", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].currentRecordNumber);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].currentRecordNumber = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "currentValue", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].currentValue);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].currentValue = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "cursorLocation", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].cursorLocation);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].cursorLocation = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "cursorType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].cursorType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].cursorType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "data", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].data);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].data = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "dataColumnCount", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].dataColumnCount);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].dataColumnCount = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "dataDescription", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].dataDescription);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].dataDescription = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "dataEncipherment", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].dataEncipherment);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].dataEncipherment = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "dataLength", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].dataLength);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].dataLength = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "dataPrep", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].dataPrep);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].dataPrep = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "dataRowCount", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].dataRowCount);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].dataRowCount = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "db", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].db);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].db = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "decipherOnly", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].decipherOnly);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].decipherOnly = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "delayedOpen", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].delayedOpen);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].delayedOpen = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "delimiter", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].delimiter);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].delimiter = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "digitalSignature", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].digitalSignature);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].digitalSignature = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "disable", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].disable);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].disable = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "editValue", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].editValue);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].editValue = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "embedPDF", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].embedPDF);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].embedPDF = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "encipherOnly", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].encipherOnly);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].encipherOnly = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "endChar", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].endChar);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].endChar = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "eofAction", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].eofAction);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].eofAction = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "errorCorrectionLevel", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].errorCorrectionLevel);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].errorCorrectionLevel = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "executeType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].executeType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].executeType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "fillColor", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].fillColor);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].fillColor = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "fontColor", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].fontColor);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].fontColor = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "format", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].format);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].format = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "formatMessage", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].formatMessage);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].formatMessage = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "formattedValue", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].formattedValue);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].formattedValue = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "formatTest", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].formatTest);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].formatTest = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "fracDigits", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].fracDigits);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].fracDigits = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "from", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].from);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].from = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "fullText", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].fullText);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].fullText = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "h", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].h);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].h = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "hAlign", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].hAlign);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].hAlign = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "hand", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].hand);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].hand = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "highlight", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].highlight);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].highlight = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "href", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].href);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].href = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "hScrollPolicy", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].hScrollPolicy);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].hScrollPolicy = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "id", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].id);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].id = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "imagingBBox", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].imagingBBox);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].imagingBBox = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "index", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].index);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].index = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "initial", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].initial);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].initial = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "initialNumber", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].initialNumber);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].initialNumber = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "input", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].input);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].input = newValue;
        }
    }, configurable: true, enumerable: true
});

//Object.defineProperty(Array.prototype, "instanceIndex", {get: function () {
//        var result = new Array();
//        for (var i = 0, ii = this.length; i < ii; i++) {
//            result.push(this[i].instanceIndex);
//        }
//        return result;
//    }, set: function (newValue) {
//        for (var i = 0; this.length; i++) {
//            this[i].instanceIndex = newValue;
//        }
//    }, configurable: true, enumerable: true});

Object.defineProperty(Array.prototype, "intact", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].intact);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].intact = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "inverted", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].inverted);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].inverted = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "isContainer", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].isContainer);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "isDefined", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].isDefined);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "isNull", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].isNull);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].isNull = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "keyAgreement", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].keyAgreement);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].keyAgreement = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "keyCertSign", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].keyCertSign);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].keyCertSign = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "keyDown", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].keyDown);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].keyDown = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "keyEncipherment", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].keyEncipherment);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].keyEncipherment = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "labelRef", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].labelRef);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].labelRef = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "language", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].language);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].language = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "layout", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].layout);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].layout = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "leadDigits", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].leadDigits);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].leadDigits = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "leader", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].leader);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].leader = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "leftInset", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].leftInset);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].leftInset = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "lineHeight", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].lineHeight);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].lineHeight = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "lineThrough", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].lineThrough);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].lineThrough = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "lineThroughPeriod", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].lineThroughPeriod);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].lineThroughPeriod = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "locale", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].locale);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].locale = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "lockType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].lockType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].lockType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "long", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].long);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].long = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "mandatory", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].mandatory);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].mandatory = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "mandatoryMessage", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].mandatoryMessage);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].mandatoryMessage = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "marginLeft", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].marginLeft);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].marginLeft = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "marginRight", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].marginRight);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].marginRight = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "mark", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].mark);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].mark = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "match", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].match);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].match = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "max", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].max);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].max = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "maxChars", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].maxChars);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].maxChars = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "maxH", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].maxH);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].maxH = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "maxLength", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].maxLength);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].maxLength = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "maxW", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].maxW);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].maxW = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "min", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].min);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].min = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "minH", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].minH);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].minH = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "minW", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].minW);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].minW = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "model", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].model);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "modifier", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].modifier);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].modifier = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "moduleHeight", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].moduleHeight);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].moduleHeight = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "moduleWidth", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].moduleWidth);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].moduleWidth = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "multiLine", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].multiLine);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].multiLine = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "name", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].name);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].name = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "newContentType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].newContentType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].newContentType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "newText", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].newText);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].newText = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "next", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].next);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].next = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "nonRepudiation", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].nonRepudiation);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].nonRepudiation = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "ns", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].ns);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "nullTest", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].nullTest);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].nullTest = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "numbered", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].numbered);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].numbered = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "numberOfCells", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].numberOfCells);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].numberOfCells = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "numPages", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].numPages);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].numPages = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "oddOrEven", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].oddOrEven);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].oddOrEven = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "oneOfChild", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].oneOfChild);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].oneOfChild = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "open", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].open);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].open = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "operation", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].operation);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].operation = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "orientation", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].orientation);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].orientation = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "output", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].output);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].output = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "overflowLeader", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].overflowLeader);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].overflowLeader = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "overflowTarget", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].overflowTarget);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].overflowTarget = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "overflowTrailer", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].overflowTrailer);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].overflowTrailer = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "overline", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].overline);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].overline = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "overlinePeriod", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].overlinePeriod);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].overlinePeriod = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "override", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].override);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].override = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "pagePosition", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].pagePosition);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].pagePosition = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "parent", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].parent);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "parentSubform", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].parentSubform);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].parentSubform = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "passwordChar", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].passwordChar);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].passwordChar = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "permissions", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].permissions);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].permissions = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "placement", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].placement);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].placement = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "platform", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].platform);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "posture", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].posture);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].posture = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "presence", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].presence);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].presence = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "preserve", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].preserve);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].preserve = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "prevContentType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].prevContentType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].prevContentType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "previous", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].previous);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].previous = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "prevText", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].prevText);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].prevText = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "printCheckDigit", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].printCheckDigit);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].printCheckDigit = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "priority", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].priority);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].priority = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "radius", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].radius);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].radius = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "radixOffset", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].radixOffset);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].radixOffset = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "rate", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].rate);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].rate = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "rawValue", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].rawValue);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].rawValue = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "ready", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].ready);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "recordsAfter", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].recordsAfter);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "recordsBefore", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].recordsBefore);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "reenter", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].reenter);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].reenter = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "ref", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].ref);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].ref = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "relation", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].relation);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "relevant", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].relevant);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].relevant = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "reserve", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].reserve);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].reserve = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "restoreState", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].restoreState);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].restoreState = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "rightInset", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].rightInset);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].rightInset = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "role", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].role);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].role = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "rotate", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].rotate);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].rotate = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "rowColumnRatio", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].rowColumnRatio);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].rowColumnRatio = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "runAt", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].runAt);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].runAt = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "save", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].save);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].save = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "savedValue", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].savedValue);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].savedValue = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "scope", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].scope);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].scope = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "scriptTest", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].scriptTest);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].scriptTest = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "selectedIndex", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].selectedIndex);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].selectedIndex = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "selEnd", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].selEnd);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].selEnd = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "selStart", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].selStart);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].selStart = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "server", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].server);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].server = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "shape", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].shape);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].shape = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "shift", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].shift);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].shift = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "short", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].short);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].short = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "signatureType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].signatureType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].signatureType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "size", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].size);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].size = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "slope", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].slope);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].slope = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "soapFaultCode", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].soapFaultCode);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].soapFaultCode = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "soapFaultString", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].soapFaultString);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].soapFaultString = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "somExpression", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].somExpression);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "spaceAbove", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].spaceAbove);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].spaceAbove = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "spaceBelow", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].spaceBelow);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].spaceBelow = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "startAngle", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].startAngle);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].startAngle = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "startChar", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].startChar);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].startChar = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "startNew", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].startNew);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].startNew = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "stateless", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].stateless);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].stateless = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "stock", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].stock);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].stock = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "stroke", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].stroke);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].stroke = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "sweepAngle", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].sweepAngle);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].sweepAngle = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "tabDefault", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].tabDefault);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].tabDefault = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "tabStops", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].tabStops);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].tabStops = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "target", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].target);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].target = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "targetType", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].targetType);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].targetType = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "textEncoding", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].textEncoding);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].textEncoding = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "textEntry", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].textEntry);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].textEntry = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "textIndent", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].textIndent);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].textIndent = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "textLocation", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].textLocation);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].textLocation = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "thickness", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].thickness);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].thickness = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "timeout", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].timeout);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].timeout = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "timeStamp", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].timeStamp);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].timeStamp = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "title", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].title);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].title = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "topInset", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].topInset);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].topInset = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "trailer", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].trailer);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].trailer = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "transferEncoding", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].transferEncoding);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].transferEncoding = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "transient", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].transient);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].transient = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "truncate", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].truncate);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].truncate = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "type", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].type);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].type = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "typeface", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].typeface);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].typeface = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "underline", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].underline);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].underline = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "underlinePeriod", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].underlinePeriod);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].underlinePeriod = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "upsMode", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].upsMode);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].upsMode = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "url", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].url);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].url = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "urlPolicy", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].urlPolicy);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].urlPolicy = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "usage", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].usage);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].usage = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "use", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].use);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].use = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "usehref", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].usehref);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].usehref = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "uuid", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].uuid);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].uuid = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "validationMessage", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].validationMessage);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].validationMessage = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "validationsEnabled", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].validationsEnabled);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].validationsEnabled = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "vAlign", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].vAlign);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].vAlign = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "value", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].value);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].value = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "valueRef", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].valueRef);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "variation", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].variation);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "version", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].version);
        }
        return result;
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "vScollPolicy", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].vScollPolicy);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].vScollPolicy = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "w", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].w);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].w = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "weight", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].weight);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].weight = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "wideNarrowRatio", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].wideNarrowRatio);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].wideNarrowRatio = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "x", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].x);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].x = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "xdpContent", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].xdpContent);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].xdpContent = newValue;
        }
    }, configurable: true, enumerable: true
});

Object.defineProperty(Array.prototype, "y", {
    get: function () {
        var result = new Array();
        for (var i = 0, ii = this.length; i < ii; i++) {
            result.push(this[i].y);
        }
        return result;
    }, set: function (newValue) {
        for (var i = 0; this.length; i++) {
            this[i].y = newValue;
        }
    }, configurable: true, enumerable: true
});

function decodeHTMLSpecial(htmlStr) {

    var HTML_SPECIAL_CHARS = {
        "gt": ">", "lt": "<", "apos": "'", "amp": "&",
        "nbsp": '\u00A0', "iexcl": '\u00A1', "cent": '\u00A2', "pound": '\u00A3',
        "curren": '\u00A4', "yen": '\u00A5', "brvbar": '\u00A6', "sect": '\u00A7',
        "uml": '\u00A8', "copy": '\u00A9', "ordf": '\u00AA', "laquo": '\u00AB',
        "not": '\u00AC', "shy": '\u00AD', "reg": '\u00AE', "macr": '\u00AF',
        "deg": '\u00B0', "plusmn": '\u00B1', "sup2": '\u00B2', "sup3": '\u00B3',
        "acute": '\u00B4', "micro": '\u00B5', "para": '\u00B6', "middot": '\u00B7',
        "cedil": '\u00B8', "sup1": '\u00B9', "ordm": '\u00BA', "raquo": '\u00BB',
        "frac14": '\u00BC', "frac12": '\u00BD', "frac34": '\u00BE', "iquest": '\u00BF',
        "Agrave": '\u00C0', "Aacute": '\u00C1', "Acirc": '\u00C2', "Atilde": '\u00C3',
        "Aum1": '\u00C4', "Aring": '\u00C5', "AElig": '\u00C6', "Ccedil": '\u00C7',
        "Egrave": '\u00C8', "Eacute": '\u00C9', "Ecirc": '\u00CA', "Eum1": '\u00CB',
        "Igrave": '\u00CC', "Iacute": '\u00CD', "Icirc": '\u00CE', "Ium1": '\u00CF',
        "ETH": '\u00D0', "Ntilde": '\u00D1', "Ograve": '\u00D2', "Oacute": '\u00D3',
        "Ocirc": '\u00D4', "Otilde": '\u00D5', "Oum1": '\u00D6', "times": '\u00D7',
        "Oslash": '\u00D8', "Ugrave": '\u00D9', "Uacute": '\u00DA', "Ucirc": '\u00DB',
        "Uum1": '\u00DC', "Yacute": '\u00DD', "THORN": '\u00DE', "szlig": '\u00DF',
        "agrave": '\u00E0', "aacute": '\u00E1', "acirc": '\u00E2', "atilde": '\u00E3',
        "aum1": '\u00E4', "aring": '\u00E5', "aelig": '\u00E6', "ccedil": '\u00E7',
        "egrave": '\u00E8', "eacute": '\u00E9', "ecirc": '\u00EA', "eum1": '\u00EB',
        "igrave": '\u00EC', "iacute": '\u00ED', "icirc": '\u00EE', "ium1": '\u00EF',
        "eth": '\u00F0', "ntilde": '\u00F1', "ograve": '\u00F2', "oacute": '\u00F3',
        "ocirc": '\u00F4', "otilde": '\u00F5', "oum1": '\u00F6', "divide": '\u00F7',
        "oslash": '\u00F8', "ugrave": '\u00F9', "uacute": '\u00FA', "ucirc": '\u00FB',
        "uum1": '\u00FC', "yacute": '\u00FD', "thorn": '\u00FE', "yum1": '\u00FF',
        "fnof": '\u0192', "Alpha": '\u0391', "Beta": '\u0392', "Gamma": '\u0393',
        "Delta": '\u0394'
    };

    var str = htmlStr;

    str = str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });

    str = str.replace(/&([A-z]{1,8});/gi, function (match, charStr) {
        if (charStr in HTML_SPECIAL_CHARS) {
            return HTML_SPECIAL_CHARS[charStr];
        }
        return charStr;
    });
    return str;
}


function encodeHTMLSpecial(str) {
    var htmlStr = "";
    for (var i = 0; i < str.length; i++) {
        var p = str.charAt(i);
        p = escapeCharOther(p);
        htmlStr += p;
    }
    return htmlStr;
}

function escapeCharOther(original) {
    var HEX = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
    var thechar = original.charCodeAt(0);
    switch (thechar) {
        case 10:
            return "<br/>";
        case 13://carriage return has some special case;
            return "";
        case 32:
            return "&nbsp;";
        case 34:
            return "&quot;";
        case 38:
            return "&amp;";
        case 60:
            return "&lt;";
        case 62:
            return "&gt;";
    }

    if (thechar > 127) {
        var c = thechar;
        var a4 = c % 16;
        c = Math.floor(c / 16);
        var a3 = c % 16;
        c = Math.floor(c / 16);
        var a2 = c % 16;
        c = Math.floor(c / 16);
        var a1 = c % 16;
        return "&#x" + HEX[a1] + HEX[a2] + HEX[a3] + HEX[a4] + ";";
    } else {
        return original;
    }
}

function removeScriptComments(scriptStr) {
    var arr = [];
    var cc, nc;
    var nQQ = true;
    var nQ = true;
    var z = 0;
    var zz = scriptStr.length;
    while (z < zz) {
        cc = scriptStr.charCodeAt(z++);
        if (cc === 34) {
            nQQ = !nQQ;
        } else if (cc === 39) {
            nQ = !nQ;
        }
        if (nQ && nQQ && cc === 47) {
            nc = z < zz ? scriptStr.charCodeAt(z) : -1;
            if (nc === 47) { // 
                while (cc !== 10 && cc !== 13 && z < zz) {
                    cc = scriptStr.charCodeAt(z++);
                }
            } else if (nc === 42) {/* ... */
                z++;
                nc = -1;
                while (z < zz) {
                    cc = scriptStr.charCodeAt(z++);
                    if (cc === 47 && nc === 42) {
                        break;
                    }
                    nc = cc;
                }
            } else {
                arr.push(String.fromCharCode(cc));
            }
        } else {
            arr.push(String.fromCharCode(cc));
        }
    }
    return arr.join("");
}

function variablesToJavascript(scriptStr) {

    scriptStr = removeScriptComments(scriptStr);
    scriptStr = decodeHTMLSpecial(scriptStr);
    scriptStr = scriptStr.replace(/\t/gi, "    "); //tab characters
//    scriptStr = scriptStr.replace(/\.\./gi, "."); //tab characters

    var curWord = "";
    var wordArray = new Array();
    for (var z = 0; z < scriptStr.length; z++) {
        var ch = scriptStr.charAt(z);
        var cc = scriptStr.charCodeAt(z);
        if (ch === "_" || ch.toLowerCase() !== ch.toUpperCase() || (cc > 47 && cc < 58)) {
            curWord += ch;
        } else {
            if (curWord.length > 0) {
                wordArray.push(curWord);
                curWord = "";
            }
            wordArray.push(ch);
        }
    }
    if (curWord.length > 0) {
        wordArray.push(curWord);
    }

    var bracketsArr = new Array();
    var funcArr = new Array();
    var varArr = new Array();
    for (var i = 0, ii = wordArray.length; i < ii; i++) {
        var word = wordArray[i];
        if (word === "function") {
            if (wordArray[i + 2]) {
                funcArr.push(wordArray[i + 2]);
            }
        } else if (word === "{") {
            bracketsArr.push("{");
        } else if (word === "}") {
            bracketsArr.pop();
        } else if (word === "var" && bracketsArr.length === 0 && wordArray[i + 2] && wordArray[i + 1] === " ") {
            varArr.push(wordArray[i + 2]);
        }
    }
    var result = wordArray.join("");
    for (var i = 0, ii = varArr.length; i < ii; i++) {
        if (varArr[i].trim().length > 0) {
            result += "this." + varArr[i] + " = " + varArr[i] + ";\n";
        }
    }
    for (var i = 0, ii = funcArr.length; i < ii; i++) {
        if (funcArr[i].trim().length > 0) {
            result += "this." + funcArr[i] + " = " + funcArr[i] + ";\n";
        }
    }

    return "{" + result + "}";
}

function formCalcToJavascript(scriptStr, isFormCalc) {

    var lines = scriptStr.split(/\r?\n/);

    //loop below convert all matched variables to xSom("var") lookup method
    for (var i = 0, ii = lines.length; i < ii; i++) {
        var lineStr = lines[i] + "";

        if (lineStr.indexOf("//") === 0) {
            continue;
        }

        lineStr = lineStr.replace(/\$xfa/g, "xfa");
        lineStr = lineStr.replace(/\$data\./g, "xfa.datasets.data.");
        lineStr = lineStr.replace(/\$record\./g, "xfa.datasets.data.");
        lineStr = lineStr.replace(/\!data\./g, "xfa.datasets.data.");
        lineStr = lineStr.replace(/\$template\./g, "xfa.template.");
        lineStr = lineStr.replace(/\$connectionSet\./g, "xfa.connectionSet.");
        lineStr = lineStr.replace(/\$form\./g, "xfa.form.");
        lineStr = lineStr.replace(/\$event\./g, "xfa.event.");
        lineStr = lineStr.replace(/\$host\./g, "xfa.host.");
        lineStr = lineStr.replace(/\$\./g, "this.");

        if (isFormCalc) {
            lineStr = lineStr.replace(/\.\./g, ".@");
            lineStr = lineStr.replace(/\.\*/g, ".xSom(\"*\")");
        }
//        else{
//            lines[i] = lineStr;
//            continue;
//        }

        var curWord = "";
        var wordArray = new Array();
        var isSqr = false;
        for (var z = 0; z < lineStr.length; z++) {
            var ch = lineStr.charAt(z);
            var cc = lineStr.charCodeAt(z);
            if (ch.toLowerCase() !== ch.toUpperCase() || ch === "#"
                || ch === "$" || ch === "@" || ch === "_" || ch === " "
                || (!isSqr && cc > 47 && cc < 58)) {
                curWord += ch;
                isSqr = false;
            } else {
                if (ch === '[') {
                    if (curWord.length > 0) {
                        wordArray.push(curWord);
                    }
                    curWord = "[";
                    isSqr = true;
                } else if (isSqr && ((cc > 47 && cc < 58) || ch === '*' || ch === '-' || ch === '+')) {
                    curWord += ch;
                } else if (isSqr && ch === ']') {
                    isSqr = false;
                    var wLen = wordArray.length;
                    if (wLen > 0) {
                        wordArray[wLen - 1] = wordArray[wLen - 1] + curWord + "]";
                    }
                    curWord = "";
                } else {
                    if (curWord.length > 0) {
                        wordArray.push(curWord);
                        curWord = "";
                    }
                    wordArray.push(ch);
                }
            }
        }
        if (curWord.length > 0) {
            wordArray.push(curWord);
        }

        var chunkResult = "";

        var isInverted = false;

        for (var z = 0, zz = wordArray.length; z < zz; z++) {
            var temp = wordArray[z];
            var c0 = temp.charAt(0);

            var low = temp.trim();

            if (temp === "\"") {
                isInverted = !isInverted;
            }

            if (isInverted) {
                chunkResult += temp;
                continue;
            }

            if (isFormCalc) {
                var low2 = low.toLowerCase();
                if (low2 in FormCalcOperators) {
                    chunkResult += FormCalcOperators[low];
                    continue;
                }
                if (low2 in FormCalcFunctions && wordArray[z + 1] && wordArray[z + 1].trim() === "(") {
                    chunkResult += ("FormCalc." + low2);
                    continue;
                }
            }

            if (z > 0 && wordArray[z - 1].trim() === "var") {
                chunkResult += temp;
                continue;
            }

            if (temp.trim() === "value" && wordArray[z + 1] === "=") {
                chunkResult += temp;
                continue;
            }

            var hasNextBracket = (z + 1 < zz) && wordArray[z + 1].trim() === "(";

            if (low.match(SomSearchRegex) && !hasNextBracket) {
                var sqIdx = low.indexOf("[");
                var prefix = "";
                var mm = low;
                var suffix = "";
                if (sqIdx !== -1) {
                    mm = low.substring(0, sqIdx);
                    suffix = low.substring(sqIdx);
                }
                if (c0 === '@' || c0 === '$' || c0 === '_' || c0 === '#') {
                    mm = mm.substr(1);
                    prefix = c0;
                    if (c0 === '#' && mm in LCPROPERTIES) {
                        chunkResult += low.replace("#", "");
                        continue;
                    }
                }

                if (mm === "value" && z > 3) { //value has special case;
                    var valStr = wordArray[z - 2];
                    valStr = valStr.replace("#", "");
                    if (valStr in ContentObjects) {
                        chunkResult += "value";
                    } else {
                        chunkResult += "xSom('" + prefix + mm + suffix + "')";
                    }
                } else if (mm in AvailableNames || mm in NodeObjects
                    || mm in ContainerObjects || mm in TextNodeObjects
                    || mm in ContentObjects) {

                    chunkResult += "xSom('" + prefix + mm + suffix + "')";

                } else {
                    chunkResult += temp;
                }
            } else {
                chunkResult += temp;
            }
        }
        lines[i] = chunkResult;
    }
//    console.log(lines.join("\n"));
    return lines.join("\n");
}

Object.defineProperty(node.prototype, "xSom", {
    writable: true, enumerable: true, configurable: true,
    value: function (str) {

        if (this.className.indexOf("subform") === 0 && this.name.length > 0) {
            if (str === "occur") {
                return findChild(this.instanceManager, T_OCCUR);
            } else if (str === "instanceManager") {
                return this.instanceManager;
            }
        }

        var arr = new Array();

        if (str === "*") {
            var cLen = this.nodes.length;
            for (var i = 0; i < cLen; i++) {
                arr.push(this.nodes.item(i));
            }
            return arr;
        }

        var ch = str.charAt(0);
        var sqrS = str.indexOf("[");
        var sqrE = str.indexOf("]");

        if (ch === '#') {
            if (sqrS === -1) {
                var cName = str.substring(1);
                return findClassChild(this, cName);
            } else {
                var cName = str.substring(1, sqrS);
                var indexStr = str.substring(sqrS + 1, sqrE);
                arr = findClassChildren(this, cName);
                if (indexStr === "*") {
                    return arr;
                } else {
                    var cc = parseInt(indexStr);
                    if (arr.length > cc) {
                        return arr[cc];
                    } else {
                        return arr[0];
                    }
                }
            }

        } else if (ch === '@') { //only recursive down
            if (sqrS === -1) {
                var search = str.substring(1);
                findSomDownSingle(this, search.hashCode(), arr);
                return arr[0];

            } else {
                var search = str.substring(1, sqrS);
                var indexStr = str.substring(sqrS + 1, sqrE);
                findSomDownMulti(this, search.hashCode(), arr);
                if (indexStr === "*") {
                    return arr;
                } else {
                    return arr[parseInt(indexStr)];
                }
            }
        } else if (ch === '$') {
            if (sqrS === -1) {
                var search = str.substring(1);
                findSomDownSingle(this, search.hashCode(), arr);
                if (arr.length === 0 && this.parent !== null) {
                    findSomUpSingle(this.parent, search.hashCode(), arr);
                }
                return arr[0];
            } else {
                var search = str.substring(1, sqrS);
                var indexStr = str.substring(sqrS + 1, sqrE);
                findSomDownMulti(this, search.hashCode(), arr);
                if (arr.length === 0 && this.parent !== null) {
                    findSomUpMulti(this.parent, search.hashCode(), arr);
                }
                if (indexStr === "*") {
                    return arr;
                } else {
                    return arr[parseInt(indexStr)];
                }
            }
        } else if (ch === '_') { // do instance manager check          

            if (sqrS === -1) {
                var search = str;
                findManagerDownSingle(this.parent, search, arr);
                if (arr.length === 0 && this.parent !== null) {
                    findManagerUpSingle(this.parent, search, arr);
                }
                return arr[0];
            } else {
                var search = str.substring(0, sqrS);
                var indexStr = str.substring(sqrS + 1, sqrE);
                findManagerDownMulti(this.parent, search, arr);
                if (arr.length === 0 && this.parent.parent !== null) {
                    findManagerUpMulti(this.parent.parent, search, arr);
                }
                if (indexStr === "*") {
                    return arr;
                } else {
                    return arr[parseInt(indexStr)];
                }
            }
        } else {
            if (sqrS === -1) {

                if (this.name === str) {
                    return this;
                }
                ;

                var search = str;
                findSomDownSingle(this, search.hashCode(), arr);
                if (arr.length === 0 && this.parent !== null) {
                    findSomUpSingle(this.parent, search.hashCode(), arr);
                }
                if (arr.length === 0 && (search in NodeObjects || search in ContainerObjects)) {
                    return findClassChild(this, search);
                }
                if (arr.length > 0) {
                    return arr[0];
                }

            } else {
                var search = str.substring(0, sqrS);
                var indexStr = str.substring(sqrS + 1, sqrE);
                findSomDownMulti(this, search.hashCode(), arr);
                if (arr.length === 0 && this.parent !== null) {
                    findSomUpMulti(this.parent, search.hashCode(), arr);
                }
                if (arr.length === 0 && (search in NodeObjects || search in ContainerObjects)) {
                    arr = findClassChildren(this, search);
                }
                if (indexStr === "*") {
                    return arr;
                } else {
                    var val = arr[parseInt(indexStr)];
                    if (val) {
                        return val;
                    }
                }
            }
        }
        return new nullSom();
    }
});

function findNamedDescendant(nodeObj, search, arr) {
    var listLen = nodeObj.nodes.length;
    for (var i = 0; i < listLen; i++) {
        var li = nodeObj.nodes.item(i);
        if (li.name === search) {
            arr.push(li);
            return;
        }
        findNamedDescendant(li, search, arr);
    }
    return arr;
}

function findDescendant(nodeObj, id, arr) {
    var nodeList = nodeObj.nodes;
    for (var i = 0, ii = nodeList.length; i < ii; i++) {
        var li = nodeList.item(i);
        if (li.classID === id) {
            arr.push(li);
            return;
        }
        findDescendant(li, id, arr);
    }
    return arr;
}

function findDescendants(nodeObj, id, arr) {

    var nodeList = nodeObj.nodes;
    for (var i = 0, ii = nodeList.length; i < ii; i++) {
        var li = nodeList.item(i);
        if (li.classID === id) {
            arr.push(li);
        }
        findDescendants(li, id, arr);
    }
}

function findChild(nodeObj, id) {
    var list = nodeObj.nodes;
    for (var i = 0, ii = list.length; i < ii; i++) {
        var li = list.item(i);
        if (li.classID === id) {
            return li;
        }
    }
    return null;
}

function findClassChild(nodeObj, className) {
    var list = nodeObj.nodes;
    for (var i = 0, ii = list.length; i < ii; i++) {
        var li = list.item(i);
        if (li.className === className) {
            return li;
        }
    }
    return null;
}

function findManager(nodeObj, search) {
    var list = nodeObj.nodes;
    for (var i = 0, ii = list.length; i < ii; i++) {
        var li = list.item(i);
        if (li.className === "instanceManager" && li.name === search) {
            return li;
        }
    }
    return null;
}

function findChildren(nodeObj, id) {
    var arr = new Array();
    var list = nodeObj.nodes;
    for (var i = 0, ii = list.length; i < ii; i++) {
        var li = list.item(i);
        if (li.classID === id) {
            arr.push(li);
        }
    }
    return arr;
}

function findClassChildren(nodeObj, className) {
    var arr = new Array();
    var list = nodeObj.nodes;
    for (var i = 0, ii = list.length; i < ii; i++) {
        var li = list.item(i);
        if (li.className === className) {
            arr.push(li);
        }
    }
    return arr;
}

function findNamedChildren(nn, cName, nName) {
    var arr = new Array();
    for (var z = 0, zz = nn.nodes.length; z < zz; z++) {
        var cur = nn.nodes.item(z);
        if (cur.className === cName && cur.name === nName) {
            arr.push(cur);
        }
    }
    return arr;
}

function findSomUpMulti(process, search, arr) {
    var listLen = process.nodes.length;
    for (var i = 0; i < listLen; i++) {
        var li = process.nodes.item(i);
        if (li.nameID === search) {
            arr.push(li);
        }
    }
    if (process.parent !== null) {
        findSomUpMulti(process.parent, search, arr);
    }
}

function findSomUpSingle(process, search, arr) {
    if (arr[0]) {
        return;
    }
    var nList = process.nodes;
    for (var i = 0, ii = nList.length; i < ii; i++) {
        var li = nList.item(i);
        if (li.nameID === search) {
            arr.push(li);
            return;
        }
        findSomDownSingle(li, search, arr);
        if (arr.length > 0) {
            return;
        }
    }
    if (process.parent !== null) {
        findSomUpSingle(process.parent, search, arr);
    }
}

function findSomDownMulti(nodeObj, search, arr) {
    var cid = nodeObj.classID;
    if (cid < 10 || cid > 140) { //exclgroup
        var nList = nodeObj.nodes;
        for (var i = 0, ii = nList.length; i < ii; i++) {
            var li = nList.item(i);
            if (li.nameID === search) {
                arr.push(li);
            }
            findSomDownMulti(li, search, arr);
        }
    }
}

function findSomDownSingle(nodeObj, search, arr) {
    if (arr[0]) {
        return;
    }
    var cid = nodeObj.classID;

    if (cid < 10 || cid > 140) {
        var nList = nodeObj.nodes;
        for (var i = 0, ii = nList.length; i < ii; i++) {
            var li = nList.item(i);
            if (li.nameID === search) {
                arr.push(li);
                return;
            }
            findSomDownSingle(li, search, arr);
        }
    }
}

//instance manager search
function findManagerUpMulti(process, search, arr) {
    var listLen = process.nodes.length;
    for (var i = 0; i < listLen; i++) {
        var li = process.nodes.item(i);
        if (li.className === "instanceManager" && li.name === search) {
            arr.push(li);
        }
    }
    if (process.parent !== null) {
        findManagerUpMulti(process.parent, search, arr);
    }
}

function findManagerUpSingle(process, search, arr) {
    var listLen = process.nodes.length;
    for (var i = 0; i < listLen; i++) {
        var li = process.nodes.item(i);
        if (li.className === "instanceManager" && li.name === search) {
            arr.push(li);
            return;
        }
    }
    if (process.parent !== null) {
        findManagerUpSingle(process.parent, search, arr);
    }
}

function findManagerDownMulti(nodeObj, search, arr) {
    var listLen = nodeObj.nodes.length;
    for (var i = 0; i < listLen; i++) {
        var li = nodeObj.nodes.item(i);
        if (li.className === "instanceManager" && li.name === search) {
            arr.push(li);
        }
        findManagerDownMulti(li, search, arr);
    }
}

function findManagerDownSingle(nodeObj, search, arr) {
    var listLen = nodeObj.nodes.length;
    for (var i = 0; i < listLen; i++) {
        var li = nodeObj.nodes.item(i);
        if (li.className === "instanceManager" && li.name === search) {
            arr.push(li);
            return;
        }
        findManagerDownSingle(li, search, arr);
    }
}

function findDomDownMulti(nodeObj, search, arr) {
    var listLen = nodeObj.nodes.length;
    for (var i = 0; i < listLen; i++) {
        var li = nodeObj.nodes.item(i);
        if (li.name === search && !isTransient(li) && li.className !== "area"
            && li.parent.className !== "exclGroup") {
            arr.push(li);
        }
        findDomDownMulti(li, search, arr);
    }
}

function findDomDownSingle(nodeObj, search, arr) {
    var nodeList = nodeObj.nodes;
    for (var i = 0, ii = nodeList.length; i < ii; i++) {
        var li = nodeList.item(i);
        if (li.name === search && !isTransient(li) && li.className !== "area"
            && li.parent.className !== "exclGroup") {
            arr.push(li);
            return;
        }
        findDomDownSingle(li, search, arr);
    }
}

function isTransient(obj) {
    if (obj.name.length === 0) {
        return true;
    }
    var bb = findChild(obj, T_BIND);
    if (bb !== null && bb.match === "none") {
        return true;
    }
    return false;
}

function isGlobal(obj) {
    var bb = findChild(obj, T_BIND);
    if (bb !== null && bb.match === "global") {
        return true;
    }
    return false;
}

function isDataRef(obj) {
    var bb = findChild(obj, T_BIND);
    if (bb !== null && bb.match === "dataRef") {
        return true;
    }
    return false;
}

function generateXDPDataFromSom(somObj, gData) {

    var result = "";

    var sList = somObj.nodes;
    for (var i = 0, ii = sList.length; i < ii; i++) {
        var child = sList.item(i);
        var cName = child.className;
        var nName = child.name;
        if (isGlobal(child) && (cName === "field" || cName === "exclGroup")) {
            var raw = child.rawValue;
            if (raw && raw.length > 0) {
                gData[nName] = raw;
            }
        } else if (!isTransient(child) && (cName.indexOf("subform") === 0 || cName === "exclGroup" || cName === "field")) {
            if (cName.indexOf("subform") === 0) {
                var descStr = generateXDPDataFromSom(child, gData);
                if (descStr.length > 0) {
                    result += "<" + nName + ">" + descStr + "</" + nName + ">";
                }
            } else {
                var raw = child.rawValue;
                if (raw && raw.length > 0) {
                    result += "<" + nName + ">" + raw + "</" + nName + ">";
                }
            }
        } else {
            result += generateXDPDataFromSom(child, gData);
        }
    }
    return result;
}

function recreateDataDom(domObj, somObj) {

}

function initialMergeDomToSom(domObj, somObj) {
    var sc = somObj.className;
    var dc = domObj.className;

    if (dc === "dataValue" && (sc === "field" || sc === "exclGroup") && !isGlobal(somObj)) {
        somObj.rawValue = domObj.value;
    }

    var dHold = {};
    var dList = domObj.nodes;
    for (var i = 0, ii = dList.length; i < ii; i++) {
        var it = dList.item(i);
        var n = it.name.trim();
        if (n.length > 0) {
            if (n in dHold) {
                dHold[n].push(it);
            } else if (n.trim().length > 0) {
                dHold[n] = new Array();
                dHold[n].push(it);
            }
        }
    }

    for (var tn in dHold) {
        var arr = new Array();
        var dLen = dHold[tn].length;
        if (dLen === 1) {
            findDomDownSingle(somObj, tn, arr);
            var toLook = dHold[tn][0];
            if (toLook.className === "dataValue") {
                if (arr[0] && (arr[0].className === "field" || arr[0].className === "exclGroup")) {
                    if (!isGlobal(arr[0])) {
                        arr[0].rawValue = toLook.value;
                    }
                }
            } else {
                if (arr[0]) {
                    initialMergeDomToSom(toLook, arr[0]);
                } else {
                    findManagerDownSingle(somObj, "_" + tn, arr);
                    if (arr[0]) {
                        var ins = arr[0].addInstance(0);
                        initialMergeDomToSom(toLook, ins);
                    }
                }
            }
        } else {
            findDomDownMulti(somObj, tn, arr);
            var formLen = arr.length;
            if (formLen === 0) {
                findManagerDownSingle(somObj, "_" + tn, arr);
                if (arr[0]) {
                    for (var i = 0; i < dLen; i++) {
                        var ins = arr[0].addInstance(0);
                        initialMergeDomToSom(dHold[tn][i], ins);
                    }
                }
            } else if (dLen <= formLen) {
                for (var i = 0; i < dLen; i++) {
                    initialMergeDomToSom(dHold[tn][i], arr[i]);
                }
            } else {
                for (var i = 0; i < formLen; i++) {
                    initialMergeDomToSom(dHold[tn][i], arr[i]);
                }
                if (arr[0].className === "field") {
                    //dont do anything right now
                } else {
                    var diff = dLen - formLen;
                    arr = new Array();
                    findManagerDownSingle(somObj, "_" + tn, arr);
                    for (var i = 0; i < diff; i++) {
                        var ins = arr[0].addInstance(0);
                        initialMergeDomToSom(dHold[tn][formLen + i], ins);
                    }
                }
            }
        }
    }
}

function mergeGlobalDomToSom(domObj, somObj) {
    var tempArr = new Array();
    findDescendants(somObj, T_FIELD, tempArr);
    findDescendants(somObj, T_EXCLGROUP, tempArr);
    for (var i = 0, ii = tempArr.length; i < ii; i++) {
        var it = tempArr[i];
        if (it.name.length > 0) {
            if (isGlobal(tempArr[i])) {
                var result = new Array();
                findNamedDescendant(domObj, it.name, result);
                if (result[0]) {
                    it.rawValue = result[0].value;
                }
            }
        }
    }
}

function generateDataModel(xmlObj, dataObj) {
    for (var i = 0, ii = xmlObj.childNodes.length; i < ii; i++) {
        var child = xmlObj.childNodes[i];
        if (child.nodeType === 1) {
            var childName = child.nodeName;
            if (isDataValueNode(child)) {
                var dn = new dataValue();
                dn.value = child.textContent;
                dn.name = childName;
                dataObj.nodes.append(dn);
            } else {
                var dn = new dataGroup();
                dn.name = childName;
                dataObj.nodes.append(dn);
                generateDataModel(child, dn);
            }
        }
    }
}

function isDataValueNode(xmlObj) {
    for (var i = 0, ii = xmlObj.childNodes.length; i < ii; i++) {
        if (xmlObj.childNodes[i].nodeType === 1) {
            return false;
        }
    }
    return true;
}

function generateSomModel(tempObj, somObj) {
//    console.log(somObj);
    somObj._nodes = null;
    for (var i = 0, ii = tempObj.nodes.length; i < ii; i++) {
        var tn = tempObj.nodes.item(i);
        var tnName = tn.name.trim();

        if (tn.className.indexOf("subform") === 0 && tnName.length > 0 && somObj.className !== "template") {
            //instanceManager insertion
            var manager = findManager(somObj, tnName);
            if (manager === null) {
                manager = new instanceManager();
                manager.templateDOM = tn;
                manager.name = "_" + tnName;
                somObj.nodes.append(manager);
                var mOccur = new occur();
                var occ = findChild(tn, T_OCCUR);
                if (occ !== null) {
                    mOccur.min = occ.min;
                    mOccur.max = occ.max;
                }
                manager.nodes.append(mOccur);
            }
            var min = parseInt(manager.min);
            var count = parseInt(manager.count);

            for (var z = count; z < min; z++) {
                manager.addInstance(0);
            }
        } else {
            var sn = getObjectFromClass(tn.className);
            extendTemplate(tn, sn);
            somObj.nodes.append(sn);
            generateSomModel(tn, sn);
        }
    }
}

function generateTemplateModel(xmlObj, xfaObj) {

    for (var i = 0, ii = xmlObj.attributes.length; i < ii; i++) {
        var attrName = xmlObj.attributes[i].nodeName;
        var attrValue = xmlObj.attributes[i].nodeValue;
        xfaObj[attrName] = attrValue;
    }

    if ("name" in xfaObj && xfaObj.name.length > 0) {
        xfaObj.nameID = xfaObj.name.hashCode();
    }

    for (var i = 0, ii = xmlObj.childNodes.length; i < ii; i++) {
        var child = xmlObj.childNodes[i];
        var childName = child.nodeName;

        if (childName in ContentObjects || childName in TextNodeObjects) {
            var temp = getObjectFromClass(childName);
            var tempStr = "";
            if (childName === "exData") {
                if (child.childNodes[0]) {
                    temp.contentHTML = child.textContent;
                    tempStr = generateXMLString(child.childNodes[0]);
                }
            } else {
                tempStr = child.textContent;
            }
            temp.value = tempStr;
            xfaObj.nodes.append(temp);

        } else if (childName in NodeObjects || childName in ContainerObjects
            || childName === "break" || childName === "delete") {
            var temp = getObjectFromClass(childName);
            var nameAttr = child.getAttribute("name");
            if (nameAttr && nameAttr.length > 0) {
                if (!(nameAttr in AvailableNames)) {
                    AvailableNames[nameAttr] = 0;
                }
            }
            if (childName === "image") {
                temp.value = child.textContent;
            } else if (childName === "script") {
                temp.value = decodeHTMLSpecial(child.textContent);
            }
            xfaObj.nodes.append(temp);
            generateTemplateModel(child, temp);
        } else if (childName === "variables") {
            for (var z = 0, zz = child.childNodes.length; z < zz; z++) {
                var vc = child.childNodes[z];
                if (vc.nodeType === 1) {
                    var scrName = vc.getAttribute("name");
                    if (scrName.length > 0) {
                        if (vc.nodeName === "text") {
                            var tt = new text();
                            tt.value = vc.textContent;
                            temp[scrName] = tt;
                            AvailableVariables[scrName] = temp[scrName];
                        } else if (vc.nodeName === "script") {
                            var tempStr = variablesToJavascript(vc.textContent);
                            try {
                                AvailableVariableScripts[scrName] = tempStr;
                            } catch (err) {
                                console.log(err);
                                console.log(tempStr);
                            }
                        }
                    }
                }
            }
        }
    }
}

function generateXMLString(xmlDom) {
//1	ELEMENT_NODE
//2	ATTRIBUTE_NODE
//3	TEXT_NODE
//4	CDATA_SECTION_NODE
//5	ENTITY_REFERENCE_NODE
//6	ENTITY_NODE
//7	PROCESSING_INSTRUCTION_NODE
//8	COMMENT_NODE
//9	DOCUMENT_NODE
//10	DOCUMENT_TYPE_NODE
//11	DOCUMENT_FRAGMENT_NODE
//12	NOTATION_NODE
    var ee = xmlDom;
    if (ee.nodeType === 3 || ee.nodeType === 8 || ee.nodeType === 4 || ee.nodeType === 7) {
        return ee.textContent;
    } else {
        if (ee.nodeName === "span" && ee.getAttribute("style") === "xfa-spacerun:yes") {
            return "<span>&nbsp;</span>";
        }
        var attrString = "";
        for (var i = 0, ii = ee.attributes.length; i < ii; i++) {
            attrString += " " + ee.attributes[i].nodeName + "=\"" + ee.attributes[i].nodeValue + "\"";
        }
        var cLen = ee.childNodes.length;
        if (cLen > 0) {
            var str = "<" + ee.nodeName + attrString + ">";
            for (var i = 0; i < cLen; i++) {
                var child = ee.childNodes[i];
                str += generateXMLString(child);
            }
            str += "</" + ee.nodeName + ">";
            return str;
        } else {
            return "<" + ee.nodeName + attrString + "/>";
        }
    }
}

function updateScriptXFA(xfaObj) {
    var list = xfaObj.nodes;
    for (var i = 0, ii = list.length; i < ii; i++) {
        var child = list.item(i);
        var ch = child.className;
        if (ch === "script") {
            var isFormCalc = child.getAttribute("contentType") !== "application/x-javascript";
            child.value = formCalcToJavascript(child.value, isFormCalc);
        } else {
            updateScriptXFA(child);
        }
    }
}

function getObjectFromClass(cn) {
    switch (cn.charCodeAt(0)) {
        case 97: //a
            if (cn === "arc") {
                return new arc();
            }
            else if (cn === "area") {
                return new area();
            }
            else if (cn === "assist") {
                return new assist();
            }
            break;
        case 98: //b
            if (cn === "barcode") {
                return new barcode();
            }
            else if (cn === "bind") {
                return new bind();
            }
            else if (cn === "bindItems") {
                return new bindItems();
            }
            else if (cn === "bookend") {
                return new bookend();
            }
            else if (cn === "boolean") {
                return new boolean();
            }
            else if (cn === "border") {
                return new border();
            }
            else if (cn === "break") {
                return new breakXFA();
            }
            else if (cn === "breakAfter") {
                return new breakAfter();
            }
            else if (cn === "breakBefore") {
                return new breakBefore();
            }
            else if (cn === "button") {
                return new button();
            }
            break;
        case 99: //c
            if (cn === "calculate") {
                return new calculate();
            }
            else if (cn === "caption") {
                return new caption();
            }
            else if (cn === "certificate") {
                return new certificate();
            }
            else if (cn === "certificates") {
                return new certificates();
            }
            else if (cn === "checkButton") {
                return new checkButton();
            }
            else if (cn === "choiceList") {
                return new choiceList();
            }
            else if (cn === "color") {
                return new color();
            }
            else if (cn === "comb") {
                return new comb();
            }
            else if (cn === "command") {
                return new command();
            }
            else if (cn === "connect") {
                return new connect();
            }
            else if (cn === "connectionSet") {
                return new connectionSet();
            }
            else if (cn === "connectString") {
                return new connectString();
            }
            else if (cn === "contentArea") {
                return new contentArea();
            }
            else if (cn === "corner") {
                return new corner();
            }
            break;
        case 100: //d
            if (cn === "dataGroup") {
                return new dataGroup();
            }
            else if (cn === "dataModel") {
                return new dataModel();
            }
            else if (cn === "dataValue") {
                return new dataValue();
            }
            else if (cn === "date") {
                return new dateXFA();
            }
            else if (cn === "dateTime") {
                return new dateTime();
            }
            else if (cn === "dateTime") {
                return new dateTime();
            }
            else if (cn === "dateTimeEdit") {
                return new dateTimeEdit();
            }
            else if (cn === "decimal") {
                return new decimal();
            }
            else if (cn === "defaultUI") {
                return new defaultUI();
            }
            else if (cn === "delete") {
                return new Delete();
            }
            else if (cn === "desc") {
                return new desc();
            }
            else if (cn === "digestMethod") {
                return new digestMethod();
            }
            else if (cn === "digestMethods") {
                return new digestMethods();
            }
            else if (cn === "draw") {
                return new draw();
            }
            else if (cn === "dSigData") {
                return new dSigData();
            }
            break;
        case 101: //e
            if (cn === "edge") {
                return new edge();
            }
            else if (cn === "encoding") {
                return new encoding();
            }
            else if (cn === "encodings") {
                return new encodings();
            }
            else if (cn === "encrypt") {
                return new encrypt();
            }
            else if (cn === "event") {
                return new event();
            }
            else if (cn === "exclGroup") {
                return new exclGroup();
            }
            else if (cn === "exData") {
                return new exData();
            }
            else if (cn === "execute") {
                return new execute();
            }
            else if (cn === "exObject") {
                return new exObject();
            }
            else if (cn === "extras") {
                return new extras();
            }
            break;
        case 102: //f
            if (cn === "field") {
                return new field();
            }
            else if (cn === "fill") {
                return new fill();
            }
            else if (cn === "filter") {
                return new filter();
            }
            else if (cn === "float") {
                return new float();
            }
            else if (cn === "font") {
                return new font();
            }
            else if (cn === "form") {
                return new form();
            }
            else if (cn === "format") {
                return new format();
            }
            break;
        case 104: //h
            if (cn === "handler") {
                return new handler();
            }
            break;
        case 105: //i
            if (cn === "image") {
                return new image();
            }
            else if (cn === "imageEdit") {
                return new imageEdit();
            }
            else if (cn === "insert") {
                return new insert();
            }
            else if (cn === "instanceManager") {
                return new instanceManager();
            }
            else if (cn === "integer") {
                return new integer();
            }
            else if (cn === "issuers") {
                return new issuers();
            }
            else if (cn === "items") {
                return new items();
            }
            break;
        case 107: //k
            if (cn === "keep") {
                return new keep();
            }
            else if (cn === "keyUsage") {
                return new keyUsage();
            }
            break;
        case 108: //l
            if (cn === "line") {
                return new line();
            }
            else if (cn === "linear") {
                return new linear();
            }
            break;
        case 109: //m
            if (cn === "manifest") {
                return new manifest();
            }
            else if (cn === "map") {
                return new map();
            }
            else if (cn === "margin") {
                return new margin();
            }
            else if (cn === "mdp") {
                return new mdp();
            }
            else if (cn === "medium") {
                return new medium();
            }
            else if (cn === "message") {
                return new message();
            }
            break;
        case 110://n
            if (cn === "numericEdit") {
                return new numericEdit();
            }
            break;
        case 111://o
            if (cn === "occur") {
                return new occur();
            }
            else if (cn === "oid") {
                return new oid();
            }
            else if (cn === "oids") {
                return new oids();
            }
            else if (cn === "operation") {
                return new operation();
            }
            else if (cn === "overflow") {
                return new overflow();
            }
            break;
        case 112://p
            if (cn === "packet") {
                return new packet();
            }
            else if (cn === "pageArea") {
                return new pageArea();
            }
            else if (cn === "pageSet") {
                return new pageSet();
            }
            else if (cn === "para") {
                return new para();
            }
            else if (cn === "password") {
                return new password();
            }
            else if (cn === "passwordEdit") {
                return new passwordEdit();
            }
            else if (cn === "pattern") {
                return new pattern();
            }
            else if (cn === "picture") {
                return new picture();
            }
            else if (cn === "proto") {
                return new proto();
            }
            break;
        case 113://q
            if (cn === "query") {
                return new query();
            }
            break;
        case 114: //r
            if (cn === "radial") {
                return new radial();
            }
            else if (cn === "reason") {
                return new reason();
            }
            else if (cn === "reasons") {
                return new reasons();
            }
            else if (cn === "recordSet") {
                return new recordSet();
            }
            else if (cn === "rectangle") {
                return new rectangle();
            }
            else if (cn === "ref") {
                return new ref();
            }
            else if (cn === "rootElement") {
                return new rootElement();
            }
            break;
        case 115:
            if (cn === "script") {
                return new script();
            }
            else if (cn === "scriptProperty") {
                return new scriptProperty();
            }
            else if (cn === "select") {
                return new select();
            }
            else if (cn === "signature") {
                return new signature();
            }
            else if (cn === "signData") {
                return new signData();
            }
            else if (cn === "signing") {
                return new signing();
            }
            else if (cn === "soapAction") {
                return new soapAction();
            }
            else if (cn === "soapAddress") {
                return new soapAddress();
            }
            else if (cn === "solid") {
                return new solid();
            }
            else if (cn === "source") {
                return new source();
            }
            else if (cn === "sourceSet") {
                return new sourceSet();
            }
            else if (cn === "speak") {
                return new speak();
            }
            else if (cn === "stipple") {
                return new stipple();
            }
            else if (cn === "subform") {
                return new subform();
            }
            else if (cn === "subformset") {
                return new subformset();
            }
            else if (cn === "subjectDN") {
                return new subjectDN();
            }
            else if (cn === "subjectDNs") {
                return new subjectDNs();
            }
            else if (cn === "submit") {
                return new submit();
            }
            break;
        case 116://t
            if (cn === "template") {
                return new template();
            }
            else if (cn === "text") {
                return new text();
            }
            else if (cn === "textEdit") {
                return new textEdit();
            }
            else if (cn === "time") {
                return new time();
            }
            else if (cn === "timeStamp") {
                return new timeStamp();
            }
            else if (cn === "toolTip") {
                return new toolTip();
            }
            else if (cn === "traversal") {
                return new traversal();
            }
            else if (cn === "traverse") {
                return new traverse();
            }
            break;
        case 117: //u
            if (cn === "ui") {
                return new ui();
            }
            else if (cn === "update") {
                return new update();
            }
            else if (cn === "uri") {
                return new uri();
            }
            else if (cn === "user") {
                return new user();
            }
            break;
        case 118: //v
            if (cn === "validate") {
                return new validate();
            }
            else if (cn === "value") {
                return new value();
            }
            break;
        case 119://w
            if (cn === "wsdlAddress") {
                return new wsdlAddress();
            }
            else if (cn === "wsdlConnection") {
                return new wsdlConnection();
            }
            break;
        case 120://x
            if (cn === "xfa") {
                return new xfa();
            }
            else if (cn === "xmlConnection") {
                return new xmlConnection();
            }
            else if (cn === "xsdConnection") {
                return new xsdConnection();
            }
            break;
    }

    if (cn === "Break") {
        return new breakXFA();
    }

    var sn = {};
    eval("sn = new " + cn + "();");
    return sn;
}

//some files define console.println as function 
console.println = function (e) {
    console.log(e);
};
