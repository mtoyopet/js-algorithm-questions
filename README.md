
## Gitpodを利用します
1. [こちらにアクセスしてください](https://gitpod.io/#https://github.com/mtoyopet/js-algorithm-questions)
2. 初めてgitpodを使用する場合はgitpodのアカウント作成画面が出るので作成をお願いします。(Githubのアカウントと連携して作成できます。)

## JESTがインストールされているかチェック
```
jest -v
```

## JESTを実行する
```
jest <ファイル名>
```

例
```
jest 01_fizzbuzz/test.js
```

JESTを実行した結果サンプル

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
