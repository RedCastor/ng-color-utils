(function(angular) {
    "use strict";
    angular.module("ngColorUtils").factory("hex2rgba", [ function() {
        return {
            get: function(hex, alpha) {
                var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
                var matches = patt.exec(hex);
                var r = parseInt(matches[1], 16);
                var g = parseInt(matches[2], 16);
                var b = parseInt(matches[3], 16);
                var a = parseFloat(alpha).toFixed(1);
                var rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")";
                return rgba;
            }
        };
    } ]);
})(window.angular);
//# sourceMappingURL=ng-color-utils.js.map
