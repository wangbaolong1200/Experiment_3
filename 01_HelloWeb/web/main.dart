// Dart与HTML集成 （https://dart.dev/tutorials/web/low-level-html/connect-dart-html）

import 'dart:html';

void main() {
  int a = 1;
  int b = 2;
  int c = a + b;
  querySelector('#RipVanWinkle')!.innerHtml =
      'Dart已经集成到HTML中。<br/> $c = $a + $b';
}
