window._gioIslocalStorage = (function() {
    if (!("localStorage" in window && null !== window.localStorage)) return !1;
    try {
        localStorage.setItem("_gioStorage", ""), localStorage.removeItem("_gioStorage")
    } catch (a) {
        return !1
    }
    return !0
})();

var fixedEncodeURIComponent = function(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);
};

var CRC32 = function(str) {
    var CRCTable=[0x00000000,0x77073096,0xEE0E612C,0x990951BA,0x076DC419,0x706AF48F,0xE963A535,0x9E6495A3,0x0EDB8832,0x79DCB8A4,0xE0D5E91E,0x97D2D988,0x09B64C2B,0x7EB17CBD,0xE7B82D07,0x90BF1D91,0x1DB71064,0x6AB020F2,0xF3B97148,0x84BE41DE,0x1ADAD47D,0x6DDDE4EB,0xF4D4B551,0x83D385C7,0x136C9856,0x646BA8C0,0xFD62F97A,0x8A65C9EC,0x14015C4F,0x63066CD9,0xFA0F3D63,0x8D080DF5,0x3B6E20C8,0x4C69105E,0xD56041E4,0xA2677172,0x3C03E4D1,0x4B04D447,0xD20D85FD,0xA50AB56B,0x35B5A8FA,0x42B2986C,0xDBBBC9D6,0xACBCF940,0x32D86CE3,0x45DF5C75,0xDCD60DCF,0xABD13D59,0x26D930AC,0x51DE003A,0xC8D75180,0xBFD06116,0x21B4F4B5,0x56B3C423,0xCFBA9599,0xB8BDA50F,0x2802B89E,0x5F058808,0xC60CD9B2,0xB10BE924,0x2F6F7C87,0x58684C11,0xC1611DAB,0xB6662D3D,0x76DC4190,0x01DB7106,0x98D220BC,0xEFD5102A,0x71B18589,0x06B6B51F,0x9FBFE4A5,0xE8B8D433,0x7807C9A2,0x0F00F934,0x9609A88E,0xE10E9818,0x7F6A0DBB,0x086D3D2D,0x91646C97,0xE6635C01,0x6B6B51F4,0x1C6C6162,0x856530D8,0xF262004E,0x6C0695ED,0x1B01A57B,0x8208F4C1,0xF50FC457,0x65B0D9C6,0x12B7E950,0x8BBEB8EA,0xFCB9887C,0x62DD1DDF,0x15DA2D49,0x8CD37CF3,0xFBD44C65,0x4DB26158,0x3AB551CE,0xA3BC0074,0xD4BB30E2,0x4ADFA541,0x3DD895D7,0xA4D1C46D,0xD3D6F4FB,0x4369E96A,0x346ED9FC,0xAD678846,0xDA60B8D0,0x44042D73,0x33031DE5,0xAA0A4C5F,0xDD0D7CC9,0x5005713C,0x270241AA,0xBE0B1010,0xC90C2086,0x5768B525,0x206F85B3,0xB966D409,0xCE61E49F,0x5EDEF90E,0x29D9C998,0xB0D09822,0xC7D7A8B4,0x59B33D17,0x2EB40D81,0xB7BD5C3B,0xC0BA6CAD,0xEDB88320,0x9ABFB3B6,0x03B6E20C,0x74B1D29A,0xEAD54739,0x9DD277AF,0x04DB2615,0x73DC1683,0xE3630B12,0x94643B84,0x0D6D6A3E,0x7A6A5AA8,0xE40ECF0B,0x9309FF9D,0x0A00AE27,0x7D079EB1,0xF00F9344,0x8708A3D2,0x1E01F268,0x6906C2FE,0xF762575D,0x806567CB,0x196C3671,0x6E6B06E7,0xFED41B76,0x89D32BE0,0x10DA7A5A,0x67DD4ACC,0xF9B9DF6F,0x8EBEEFF9,0x17B7BE43,0x60B08ED5,0xD6D6A3E8,0xA1D1937E,0x38D8C2C4,0x4FDFF252,0xD1BB67F1,0xA6BC5767,0x3FB506DD,0x48B2364B,0xD80D2BDA,0xAF0A1B4C,0x36034AF6,0x41047A60,0xDF60EFC3,0xA867DF55,0x316E8EEF,0x4669BE79,0xCB61B38C,0xBC66831A,0x256FD2A0,0x5268E236,0xCC0C7795,0xBB0B4703,0x220216B9,0x5505262F,0xC5BA3BBE,0xB2BD0B28,0x2BB45A92,0x5CB36A04,0xC2D7FFA7,0xB5D0CF31,0x2CD99E8B,0x5BDEAE1D,0x9B64C2B0,0xEC63F226,0x756AA39C,0x026D930A,0x9C0906A9,0xEB0E363F,0x72076785,0x05005713,0x95BF4A82,0xE2B87A14,0x7BB12BAE,0x0CB61B38,0x92D28E9B,0xE5D5BE0D,0x7CDCEFB7,0x0BDBDF21,0x86D3D2D4,0xF1D4E242,0x68DDB3F8,0x1FDA836E,0x81BE16CD,0xF6B9265B,0x6FB077E1,0x18B74777,0x88085AE6,0xFF0F6A70,0x66063BCA,0x11010B5C,0x8F659EFF,0xF862AE69,0x616BFFD3,0x166CCF45,0xA00AE278,0xD70DD2EE,0x4E048354,0x3903B3C2,0xA7672661,0xD06016F7,0x4969474D,0x3E6E77DB,0xAED16A4A,0xD9D65ADC,0x40DF0B66,0x37D83BF0,0xA9BCAE53,0xDEBB9EC5,0x47B2CF7F,0x30B5FFE9,0xBDBDF21C,0xCABAC28A,0x53B39330,0x24B4A3A6,0xBAD03605,0xCDD70693,0x54DE5729,0x23D967BF,0xB3667A2E,0xC4614AB8,0x5D681B02,0x2A6F2B94,0xB40BBE37,0xC30C8EA1,0x5A05DF1B,0x2D02EF8D];var len=str.length;var r=0xffffffff;for(var i=0;i<len;i++){r=(r>>8)^CRCTable[str[i]^(r&0x000000FF)];}
    return Math.abs(~r);
};

String.prototype.replaceAll = function (replace, with_this) {
    var tg = this;
    while (tg.indexOf(replace) > -1) {
        tg = tg.replace(replace, with_this);
    }
    return tg;
};
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var sidebar = {
    name: '__sidebar',
    init: function() {
        jQuery('.button-toggle').bind('click', function() {
            var self = this, show = 0;
            if (jQuery(self).hasClass('button-toggle-open') == true) {
                jQuery(self).removeClass('button-toggle-open');
                jQuery(self).find('div').addClass('button-toggle-close-icon')
                    .removeClass('button-toggle-open-icon');
                jQuery('#main-content').addClass('has-sidebar');
                jQuery('.sidebar .sidebar-container').show();
                show = 1;
            } else {
                jQuery(self).addClass('button-toggle-open');
                jQuery(self).find('div').addClass('button-toggle-open-icon')
                    .removeClass('button-toggle-close-icon');
                jQuery('#main-content').removeClass('has-sidebar');
                jQuery('.sidebar .sidebar-container').hide();
                show = 0;
            }
            //commons.set(sidebar.name, show, 30);
        });
    }
};

var checkbox = {
    checked: 0,
    init: function(a, b, c) {
        var self = this;
        jQuery(a).change(function(i) {
            if (this.checked == true) {
                jQuery(b).prop('checked', true);
                self.checked = b.length;
            } else {
                jQuery(b).prop('checked', false);
                self.checked = 0;
            }

            if (typeof(c) == 'function') {
                c();
            }
        });

        var length = b.length;
        b.change(function() {
            if (this.checked == false) {
                jQuery(a).prop('checked', false);
                self.checked--;
            } else {
                self.checked++;
            }
            if (self.checked == length) {
                jQuery(a).prop('checked', true);
            }

            if (typeof(c) == 'function') {
                c(this);
            }
        });
    }
};

var appStep = {
    step_setup: [],
    step_validate: [],
    step_count: 0,
    init: function(stepCount) {
        this.step_count = stepCount;
        return this;
    },
    setup: function() {
        if (this.step_setup.length == 0) {
            return;
        }

        for (var i in this.step_setup) {
            if (typeof(this.step_setup[i] == 'function')) {
                var a = this.step_setup[i];
                a(i);
            }
        }
    },
    addStepSetup: function(a) {
        if (a.length == 0) {
            return;
        }

        for (var i in a) {
            this.step_setup.push(a[i]);
        }

        return this;
    },
    addStepValidate: function(a) {
        if (a.length == 0) {
            return;
        }

        for (var i in a) {
            this.step_validate.push(a[i]);
        }

        return this;
    },
    stepValidate: function(i) {
        var ok = true;
        if (typeof(this.step_validate[i]) != 'undefined') {
            ok = this.step_validate[i]();
            if (ok == true) {

            }
        }

        return ok;
    },
    goStep: function(i) {
        var step = jQuery('#step-' + parseInt(i + 1));
        if (step.length > 0) {
            jQuery('#step-' + i).find('.btn-step').hide();
            jQuery(step).addClass('active');
        }
        //commons.checkScreenHeight();
    }
};
var gatesLoading = jQuery('#loading-container');
var commons = {
    isUsername: function(username) {
        username = username.trim();
        var re = /^[a-zA-Z0-9\_\-\.]+/;
        return re.test(username);
    },
    addCommas: function(str, commas) {
        str += '';
        var commas = typeof(commas) == 'undefined' ? ',' : commas;
        var num = str.replaceAll(commas, '');
        num = num.replace(/\D/g, '')
        return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + commas);
    },
    refresh: function(cache) {
        var type = typeof(cache) == 'undefined' ? true : cache;
        window.location.reload(cache);
    },
    gotoUrl: function(url) {
        var t = (new Date).getTime();
        if (url.indexOf('?') >= 0) {
            url = url.replace('?', '?rt=' + t + '&');
        } else {
            url += '?rt=' + t;
        }
        window.location.href = url;
    },
    ajax: function(params) {
        jQuery.ajax({
            type: params.type,
            url: params.url,
            data: params.data,
            dataType: 'json',
            timeout: typeof(params.timeout) != undefined ? params.timeout : 15000 /** 15s **/,
            error: function () {
                commons.loading.hide();
                commons.alert.show('<p>URL: ' + params.url + '</p><p>CONNECTION TIMEOUT</p>');
            },
            beforeSend: function () {
                if (typeof(params.before) == 'function') {
                    params.before();
                }
            },
            success: function (response) {
                if (typeof(response.status) != 'undefined') {
                    switch (response.status) {
                        case 'NOT_LOGIN':
                        case 'PERMISSION_DENIED':
                            commons.alert.show(response.message);
                            break;
                        case 'RESULT_OK':
                        case 'RESULT_NOT_OK':
                        default:
                            if (typeof(params.callback) == 'function') {
                                params.callback(response);
                            }
                            break;
                    }
                }
            }
        });
    },
    checkScreenHeight: function() {
        var height = jQuery(window).height(), header = 110, footer = 102,
            mainHeight = jQuery('#main-content').height(), minHeight = 500;
        if (jQuery('#main-content').hasClass('not-login')) {
            header = 56;
        }
        height = (height < minHeight) ? minHeight : height;
        height = height + (footer - header);
        jQuery('body').css('height', height).css('overflow', 'hidden');
        if ((header + mainHeight) < height - footer) {
            jQuery('.footer').parent().css('position', 'absolute')
                .css('bottom', 0);
        } else {
            jQuery('.footer').parent().removeAttr('style');
            jQuery('.main-content').css('height', height - footer);
        }
        jQuery('.footer').removeClass('hidden');
    },
    alert: {
        success: null,
        show: function(message, callback, seconds) {
            if (typeof(seconds) == 'undefined') {
                var seconds = 2000;
            }

            if (commons.alert.success === true) {
                jQuery('#flash-messenger').removeClass('alert-warning')
                    .addClass('alert-success');
            } else if (commons.alert.success === false) {
                jQuery('#flash-messenger').removeClass('alert-warning')
                    .addClass('alert-danger');
            }

            if (typeof(message) != 'undefined') {
                jQuery('#flash-messenger #alert-content').html('<strong>' + message + '</strong>');
            }
            jQuery('#flash-messenger').show()
                .unbind('click')
                .click(function() {
                    commons.alert.hide();
                });
            setTimeout(function() {
                commons.alert.hide();
                if (typeof(callback) != 'undefined') {
                    callback();
                }
            }, seconds);
        },
        hide: function() {jQuery('#flash-messenger').fadeOut('slow');}
    },
    loading: {
        show: function() {gatesLoading.show();},
        hide: function() {gatesLoading.hide()}
    },
    submitForm: function() {
        this.loading.show();
        return true;
    },
    confirmDialog: {
        callback: null,
        show: function(title, message, ok) {
            var dialog = jQuery('#confirm-dialog-modal');
            jQuery(dialog).find('.modal-title').html(title);
            jQuery(dialog).find('.modal-body').html(message);
            jQuery(dialog).modal('toggle');
            this.callback = ok;
        },
        hide: function() {
            jQuery('#confirm-dialog-modal').modal('toggle');
            this.callback = null;
        },
        ok: function() {
            if (typeof(this.callback) == 'function') {
                this.callback();
            }
            this.hide();
        }
    },
    getCookie: function(a) {
        if (document.cookie.length > 0 && (c_start = document.cookie.indexOf(a + "="), c_start != -1)) {
            c_start = c_start + a.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
        return '';
    },
    setCookie: function(a, b, c, e, d, f) {
        (new Date).getTime();
        e = "/";
        if (c == 'session') {
            c = 0;
        } else {
            c = 0 == c || "" == c ? (new Date(+new Date + 63072E7)).toGMTString() : (new Date(+new Date + 864E5 * c)).toGMTString();
        }
        a = [a + "=" + escape(b)];
        for (var g in c = {
            expires: 0,
            path: e,
            domain: d
        }) c[g] && a.push(g + "=" + c[g]);
        return f && a.push("secure"), document.cookie = a.join(";"), !0
    },
    datepicker: {

    },
    isInt: function(a) {
        if (a === parseInt(a, 10)) {
            return true;
        }
        return false;
    },
    removeSign: function(str) {
        str = str.replace(/^\s+|\s+jQuery/g, '');
        var from = "ÁÀẠẢÃĂẮẰẶẲẴÂẤẦẬẨẪáàạảãăắằặẳẵâấầậẩẫóòọỏõÓÒỌỎÕôốồộổỗÔỐỒỘỔỖơớờợởỡƠỚỜỢỞỠéèẹẻẽÉÈẸẺẼêếềệểễÊẾỀỆỂỄúùụủũÚÙỤỦŨưứừựửữƯỨỪỰỬỮíìịỉĩÍÌỊỈĨýỳỵỷỹÝỲỴỶỸĐđÑñÇç·/_,:;";
        var to   = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaooooooooooooooooooooooooooooooooooeeeeeeeeeeeeeeeeeeeeeeuuuuuuuuuuuuuuuuuuuuuuiiiiiiiiiiyyyyyyyyyyddnncc------";

        for (var i = 0, l = from.length ; i < l; i++) {
            str = str.replace(new RegExp(from[i], "g"), to[i]);
        }
        str = str.replace(/[^a-zA-Z0-9 -]/g, '').replace(/\s+/g, '-').toLowerCase();
        str = str.replace(/(-){2,}/i, '-');
        return str;
    },
    lcStorage: {
        timestamp: "timestamp_",
        getExprises: function(b, a, c, d) {
            b += "";
            a = b.indexOf(a, c);
            c = b.length - 1;
            return -1 != a ? (d = b.indexOf(d, a), -1 == d && (d = c), b.substring(a, d)) : ""
        },
        setItem: function(b, a, c) {
            var d = "",
                e = (new Date).getTime(),
                f = this.timestamp,
                e = 0 == c || "" == c ? e + 63072E7 : e + 864E5 * c,
                d = "_azs" == b ? ";" : ",";
            c = this.getExprises(a, f, 0, d);
            a = "" == c ? a + (f + e.toString() + d) : a.replace(c, f + e.toString());
            localStorage.setItem(b, a)
        },
        getItem: function(b, a) {
            var c = localStorage.getItem(b),
                d = (new Date).getTime(),
                e = this.timestamp;
            if ("" == c || null == c) return "";
            endchar = "_azs" == b ? ";" : ",";
            var f = this.getExprises(c, e, 0, endchar),
                f = f.replace(e, "");
            return "" == f || isNaN(parseInt(f)) || parseInt(f) < d ? "" : c = c.replace(e + f + endchar, "")
        },
        removeItem: function(b) {
            localStorage.removeItem(b)
        },
        flush: function() {
            localStorage.clear()
        }
    },
    get: function(b) {
        var a = "",
            c = "";
        if (_gioIslocalStorage) {
            a = commons.getCookie(b);
            if (null == a || "" == a) a = commons.lcStorage.getItem(b), null != a && "" != a && commons.setCookie(b, a, "")
        } else a = commons.getCookie(b);
        if ("" != c && "" != a) {
            b = a.split("|");
            for (var d = 0,
                     e = b.length; d < e; d++)
                if (-1 != b[d].indexOf(c + ":")) {
                    a = b[d].replace(c + ":", "");
                    break
                }
        }
        return a
    },
    set: function(b, a, c, e, d, f) {
        if (_gioIslocalStorage) {
            commons.lcStorage.setItem(b, a, c), commons.setCookie(b, a, c, e, d, f)
        } else commons.setCookie(b, a, c, e, d, f)
    },
    clone: function(obj) {
        if(obj == null || typeof(obj) != 'object')
            return obj;

        var temp = obj.constructor(); // changed

        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                temp[key] = clone(obj[key]);
            }
        }
        return temp;
    },
    logout: function() {
        var url = jQuery('#logout-url').val();
        if (typeof(url) == 'undefined') {
            return false;
        }

        if (url.indexOf('?') >= 0) {
            url += '&url=' + encodeURIComponent(window.location.pathname + window.location.search + window.location.hash);
        } else {
            url += '?url=' + encodeURIComponent(window.location.pathname + window.location.hash);
        }
        commons.gotoUrl(url);
    },
    scrollTo: function(id) {
        jQuery('html, body').animate({
                scrollTop: jQuery('#' + id).offset().top},
            'slow');
    },
    date: {
        format: function(a, b) {
            var c = new Date(a);
            var d = c.getDate(), e = c.getMonth() + 1, f = c.getFullYear();
            return typeof(b) != 'undefined'
                ? f + '-' + ((e < 10) ? '0' + e : e) + '-' + ((d < 10) ? '0' + d : d)
                : ((d < 10) ? '0' + d : d) + '/' + ((e < 10) ? '0' + e : e) + '/' + f;
        }
    },
    generateString: function(len) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < len; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },
    generateSecretString: function(len) {
        var text = '', validChars = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', //  7
            'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', // 15
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', // 23
            'Y', 'Z', '2', '3', '4', '5', '6', '7'
        ];
        for( var i= 0; i < len; i++) {
            text += validChars[Math.floor(Math.random() * validChars.length)];
        }
        return text;
    },
    ssoRefresh: function(a) {
        var t = (new Date).getTime();
        a += a.indexOf('?')  ? '&t=' + t : '?t=' + t;
        var id = 'sso-refresh', c = document.getElementById(id);
        if (c != null) {
            c.parentNode.removeChild(c);
        }
        var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true;
        b.src = a; b.id = 'sso-refresh';
        document.getElementsByTagName("head")[0].appendChild(b);
    },
    capitalize: function(s) {
        return s[0].toUpperCase() + s.slice(1);
    },
    timeFormat: function(seconds) {
        var seconds = Math.floor(seconds),
            result = '00:00:00';

        if (seconds <= 0) {
            return result;
        }

        var h = Math.floor(seconds / 3600),
            m = Math.floor((seconds - h * 3600) / 60),
            s = seconds - h * 3600 - m * 60;
        if (h < 1000) {
            return (h < 10 ? '0' + h : h) + ':' +
                (m < 10 ? '0' + m : m) + ':' +
                (s < 10 ? '0' + s : s);
        } else {
            return commons.addCommas(h) + ':' +
                (m < 10 ? '0' + m : m) + ':' +
                (s < 10 ? '0' + s : s);
        }
    },
    calculateShades: function(colorValue) {
        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        };
        // break the hexadecimal color value into R, G, B one-byte components
        // and parse into decimal values.
        // calculate a decrement value for R, G, and B based on 10% of their
        // original values.
        var red = parseInt(colorValue.substr(0, 2), 16);
        var redDecrement = Math.round(red*0.1);

        var green = parseInt(colorValue.substr(2, 2), 16);
        var greenDecrement = Math.round(green*0.1);

        var blue = parseInt(colorValue.substr(4, 2), 16);
        var blueDecrement = Math.round(blue*0.1);

        var shadeValues = [];
        var redString = null;
        var greenString = null;
        var blueString = null;

        for (var i = 0; i < 10; i++) {
            redString = red.toString(16); // convert red to hexadecimal string
            redString = pad(redString, 2); // pad the string if needed
            greenString = green.toString(16); // convert green to hexadecimal string
            greenString = pad(greenString, 2); // pad the string if needed
            blueString = blue.toString(16); // convert blue to hexadecimal string
            blueString = pad(blueString, 2); // pad the string if needed
            shadeValues[i] = '#' + redString + greenString + blueString;

            // reduce the shade towards black
            red = red - redDecrement;
            if (red <= 0) {
                red = 0;
            }
            green = green - greenDecrement;
            if (green <= 0) {
                green = 0;
            }
            blue = blue - blueDecrement;
            if (blue <= 0) {
                blue = 0;
            }
        }
        shadeValues[10] = "#000000";
        return shadeValues;
    },
    calculateTints: function(colorValue, num) {
        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        };
        // break the hexadecimal color value into R, G, B one-byte components
        // and parse into decimal values.
        // calculate an increment value for R, G, and B based on 10% of the
        // difference between their original values, and white.
        var red = parseInt(colorValue.substr(0, 2), 16);
        var redIncrement = Math.round((255 - red)*0.1);

        var green = parseInt(colorValue.substr(2, 2), 16);
        var greenIncrement = Math.round((255 - green)*0.1);

        var blue = parseInt(colorValue.substr(4, 2), 16);
        var blueIncrement = Math.round((255 - blue)*0.1);

        var tintValues = [];
        var redString = null;
        var greenString = null;
        var blueString = null;
        var len = typeof(num) == 'undefined' ? 10 : num;
        for (var i = 0; i < len; i++) {
            redString = red.toString(16); // convert red to hexadecimal string
            redString = pad(redString, 2); // pad the string if needed
            greenString = green.toString(16); // convert green to hexadecimal string
            greenString = pad(greenString, 2); // pad the string if needed
            blueString = blue.toString(16); // convert blue to hexadecimal string
            blueString = pad(blueString, 2); // pad the string if needed
            tintValues[i] = '#' + redString + greenString + blueString;

            // increase the tint towards white
            red = red + redIncrement;
            if (red >= 255) {
                red = 255; // make sure we don't go above #FF
            }
            green = green + greenIncrement;
            if (green >= 255) {
                green = 255;
            }
            blue = blue + blueIncrement;
            if (blue >= 255) {
                blue = 255;
            }
        }
        return tintValues;
    },
    getUrlVars: function() {
        var vars = [], hash;
        var queryString = window.location.search;

        if (queryString) {
            var hashes = queryString.slice(1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars[hash[0]] = hash[1];
            }

            return vars;
        } else {
            return false;
        }
    },
    getUrlHashes: function() {
        var vars = [], hash;
        var hashString = window.location.hash;
        if (hashString) {
            var hashes = hashString.slice(1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars[hash[0]] = hash[1];
            }

            return vars;
        } else {
            return false;
        }
    },
    alertFlashMessage: function(status, message) {
        var element = jQuery('#session-flash'),
            html = '<div class="alert alert-success alert-message">' + message + '</div>';
        if (status == 'fail') {
            html = '<div class="alert alert-success alert-message">' + message + '</div>'
        }
        element.html(html);
        element.show();
        setTimeout(function () {
            jQuery('#session-flash').empty().hide();
        }, 2000);
    },
    isEmail: function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
};

jQuery(document).ready(function() {
    var sidebarShow = commons.get(sidebar.name), mainContent = jQuery('#main-content');
    if (sidebarShow != '' && sidebarShow == 0) {
        jQuery('.sidebar-container').hide();
        if (jQuery(mainContent).hasClass('has-sidebar') == true) {
            jQuery(mainContent).removeClass('has-sidebar');
        }
    }

    /** sidebar **/
    sidebar.init();

    var actionsToolbox = jQuery('#actions-toolbox');
    if (actionsToolbox.length > 0) {
        var a = jQuery(actionsToolbox).offset().top;
        jQuery('.main-content').scroll(function () {
            var t = jQuery(this).scrollTop();
            if ((t + 110) >= a) {
                jQuery(actionsToolbox).addClass('actions-toolbox-fixed').css('width', jQuery('.main-content').width());
            } else {
                jQuery(actionsToolbox).removeClass('actions-toolbox-fixed').removeAttr('style');
            }
        });
    }

    jQuery('button.button-default').each(function(e) {
        var self = this;
        var href = jQuery(self).attr('data-href');
        if (typeof(href) != 'undefined') {
            jQuery(self).click(function() {
                commons.gotoUrl(href);
            });
        }
    });

    jQuery('a.loader').click(function() {
        gatesLoading.show();
    });

    jQuery('form.form-default').submit(function() {
        return commons.submitForm();
    });

    var ping = jQuery('#core-ping-server').val();
    if (typeof(ping) != 'undefined') {
        setInterval(function()  {
            jQuery.getJSON(ping + '?t=' + (new Date).getTime());
        }, 10 * 1000);
    }
});