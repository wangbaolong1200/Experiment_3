define(['dart_sdk'], (function load__web__main(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var main = Object.create(dart.library);
  var $innerHtml = dartx.innerHtml;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    let a = 1;
    let b = 2;
    let c = a + b;
    dart.nullCheck(html.querySelector("#RipVanWinkle"))[$innerHtml] = "Dart已经集成到HTML中。<br/> " + dart.str(c) + " = " + dart.str(a) + " + " + dart.str(b);
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAKM,YAAI;AACJ,YAAI;AACJ,YAAI,AAAE,CAAD,GAAG,CAAC;AAE0B,IADT,AAAE,eAAhC,mBAAc,gCACV,AAAmC,mCAAZ,CAAC,qBAAI,CAAC,qBAAI,CAAC;EACxC","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
