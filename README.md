## JESTとは
- JavaScriptのユニットテストツール
- 自分の書いたプログラムで、意図した値や結果が返ってくるかチェックしてくれる
- [ユニットテストツール「Jest」の使い方](https://www.wakuwakubank.com/posts/525-javascript-jest/)

## JESTがインストールされているかチェック
```
jest -v
```

## JESTを実行する
```
jest <ディレクトリ>/test.js
```

*例*
```
jest 01_fizzbuzz/test.js
```

*JESTを実行した結果サンプル*

```
gitpod /workspace/js-algorithm-questions $ jest 03_reverseInt/test.js
 PASS  03_reverseInt/test.js
  ✓ ReverseInt関数が定義されている (2 ms)
  ✓ 0の時は0を返す (1 ms)
  ✓ 正数の時は、逆順にした正数を返す (1 ms)
  ✓ 負の数の時は逆順にした負の数を返す (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.826 s
Ran all test suites matching /03_reverseInt\/test.js/i.
```

## やり方
- functionの外にはコードは書かない
- jestを実行してすべて緑色で、「X Passed」と表示されればOK
