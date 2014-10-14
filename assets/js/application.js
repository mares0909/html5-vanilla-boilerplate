
var VanillaApp = (function () {

   var number = 100;

   // Main application sequence
   var main = function () {

      var self = VanillaApp;

      self.myObject.greet();

   };

   return {
      main: main,
      number: number
   };

})();
;VanillaApp.myObject = (function (app) {

   // Main application sequence
   var greet = function () {

      alert("Hello!" + app.number);

   };

   return {
      greet: greet
   };

})(VanillaApp);;
// Start application when DOM ready
document.addEventListener('DOMContentLoaded', VanillaApp.main);
