define(['dart_sdk'], (function load__web__main(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var main = Object.create(dart.library);
  var $text = dartx.text;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    JSArrayOfMapOfString$Object: () => (T.JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(T.MapOfString$Object())))(),
    JSArrayOfJsObject: () => (T.JSArrayOfJsObject = dart.constFn(_interceptors.JSArray$(js.JsObject)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$(args) {
    let dartStatus = html.DivElement.as(html.querySelector("#dart-status"));
    dartStatus[$text] = "Dart is running!";
    let myData = js.JsObject.jsify(T.JSArrayOfMapOfString$Object().of([new (T.IdentityMapOfString$Object()).from(["year", "2001", "population", 2]), new (T.IdentityMapOfString$Object()).from(["year", "2002", "population", 4]), new (T.IdentityMapOfString$Object()).from(["year", "2003", "population", 6]), new (T.IdentityMapOfString$Object()).from(["year", "2004", "population", 8]), new (T.IdentityMapOfString$Object()).from(["year", "2005", "population", 100])]));
    let chart = js.context._get("chart");
    dart.dsend(chart, 'callMethod', ["source", T.JSArrayOfJsObject().of([myData])]);
    dart.dsend(chart, 'callMethod', ["render", []]);
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;6BAOuB;AACV,qBAA2C,mBAA9B,mBAAc;AACF,IAApC,AAAW,UAAD,UAAQ;AAEd,iBAAkB,kBAAM,oCAC1B,2CAAC,QAAQ,QAAQ,cAAc,KAC/B,2CAAC,QAAQ,QAAQ,cAAc,KAC/B,2CAAC,QAAQ,QAAQ,cAAc,KAC/B,2CAAC,QAAQ,QAAQ,cAAc,KAC/B,2CAAC,QAAQ,QAAQ,cAAc;AAG7B,gBAAQ,AAAO,gBAAC;AACgB,IAA9B,WAAN,KAAK,iBAAY,UAAU,0BAAC,MAAM;AACJ,IAAxB,WAAN,KAAK,iBAAY,UAAU;EAC7B","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
