if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'multiplatform-sandbox'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'multiplatform-sandbox'.");
}
this['multiplatform-sandbox'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  B.prototype = Object.create(A.prototype);
  B.prototype.constructor = B;
  function A() {
  }
  A.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'A',
    interfaces: []
  };
  function B() {
    A.call(this);
  }
  B.prototype.printSomething = function () {
    println('Hello from JavaScript!');
  };
  B.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'B',
    interfaces: [A]
  };
  _.A = A;
  _.B = B;
  Kotlin.defineModule('multiplatform-sandbox', _);
  return _;
}(typeof this['multiplatform-sandbox'] === 'undefined' ? {} : this['multiplatform-sandbox'], kotlin);
