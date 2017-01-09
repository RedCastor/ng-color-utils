(function (angular) {
  'use strict';

  angular.module('ngColorUtils', []).factory('hex2rgba', [function () {

      return {
          /**
           * Return the rgba format css from hex and alpha
           *
           * @param string hex css color format #223344
           * @param float alpha between 0 and 1
           * @return string
           */
          get: function (hex, alpha) {
              //extract the two hexadecimal digits for each color
              var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
              var matches = patt.exec(hex);

              //convert them to decimal
              var r = parseInt(matches[1], 16);
              var g = parseInt(matches[2], 16);
              var b = parseInt(matches[3], 16);
              var a = parseFloat(alpha).toFixed(1);

              //create rgba string
              var rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")";

              //return rgba colour
              return rgba;
          }

      };

  }]);

}(window.angular));
