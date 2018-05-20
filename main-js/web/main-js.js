if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main-js'.");
}
if (typeof this['multiplatform-sandbox'] === 'undefined') {
  throw new Error("Error loading module 'main-js'. Its dependency 'multiplatform-sandbox' was not found. Please, check whether 'multiplatform-sandbox' is loaded prior to 'main-js'.");
}
this['main-js'] = function (_, Kotlin, $module$multiplatform_sandbox) {
  'use strict';
  var numberToInt = Kotlin.numberToInt;
  var toByte = Kotlin.toByte;
  var toChar = Kotlin.toChar;
  var toShort = Kotlin.toShort;
  var Number_0 = Kotlin.kotlin.Number;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var B = $module$multiplatform_sandbox.B;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  C.prototype = Object.create(Number_0.prototype);
  C.prototype.constructor = C;
  function C(doubleVal) {
    Number_0.call(this);
    this.doubleVal = doubleVal;
  }
  C.prototype.toByte = function () {
    return toByte(numberToInt(this.doubleVal));
  };
  C.prototype.toChar = function () {
    return toChar(numberToInt(this.doubleVal));
  };
  C.prototype.toDouble = function () {
    return this.doubleVal;
  };
  C.prototype.toFloat = function () {
    return this.doubleVal;
  };
  C.prototype.toInt = function () {
    return numberToInt(this.doubleVal);
  };
  C.prototype.toLong = function () {
    return Kotlin.Long.fromNumber(this.doubleVal);
  };
  C.prototype.toShort = function () {
    return toShort(numberToInt(this.doubleVal));
  };
  C.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'C',
    interfaces: [Number_0]
  };
  function main(args) {
    var b = new B();
    b.printSomething();
    var c = new C(1234.5678);
    println(c.toFloat());
  }
  _.C = C;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('main-js', _);
  return _;
}(typeof this['main-js'] === 'undefined' ? {} : this['main-js'], kotlin, this['multiplatform-sandbox']);
