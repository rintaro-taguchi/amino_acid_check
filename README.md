# amino_acid_check

GitHub Pages で公開できる、最小構成のアミノ酸配列一致判定ページです。ユーザーが入力した配列を正規化し、選択した鎖の正解配列と完全一致するかを判定します。

## 特徴

* HTML / CSS / JavaScript だけで動作します
* サーバーやデータベースは不要です
* 正常なα鎖 / 正常なβ鎖 / 鎌状赤血球のβ鎖 を UI で選んで判定できます
* 小文字、空白、改行、タブを含む入力に対応しています
* 判定結果に応じて色分け表示されます

## ファイル構成

```text
amino_acid_check/
├── index.html
├── style.css
└── script.js
```

## 使い方

1. `index.html` をブラウザで開きます。
2. 判定対象で 正常なα鎖 / 正常なβ鎖 / 鎌状赤血球のβ鎖 のいずれかを選びます。
3. アミノ酸配列を入力します。
4. 「判定する」を押すと結果が表示されます。

## 判定ルール

* 入力を大文字に変換します
* 空白、改行、タブを削除します
* 有効な 1 文字表記のアミノ酸だけかを確認します
* 選択した鎖の正解配列と完全一致するかを判定します

### 正解配列

* 正常なα鎖

  * `MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTPAVHASLDKFLASVSTVLTSKYR`
* 正常なβ鎖

  * `MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLAHHFGKEFTPPVQAAYQKVVAGVANALAHKYH`
* 鎌状赤血球のβ鎖

  * `MVHLTPVEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLAHHFGKEFTPPVQAAYQKVVAGVANALAHKYH`

## ローカルでの確認

静的ファイルなので、任意のローカルサーバーで表示できます。たとえば Python がある場合は次のコマンドで確認できます。

```bash
python3 -m http.server 8000
```

その後、`http://127.0.0.1:8000/index.html` を開いてください。

## GitHub Pages での公開

1. このリポジトリを GitHub に push します。
2. GitHub の Settings から Pages を開きます。
3. 公開元ブランチを指定します。
4. ルートにある `index.html` が公開されるようにします。

## 補足

* 入力内容は保存しません
* 外部ライブラリは使っていません
* 判定は完全一致で行うため、1文字でも異なる場合は不正解になります
