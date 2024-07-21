# ドキュメント

## 環境構築

**1. git clone**

```
git clone ~~~
```

**2. パッケージインストール**

clone したディレクトリへ移動

```
npm install
```

**3. 環境変数ファイルの作成**

```
cp .env.example .env
```

**4. 起動**

```
npm run dev
```

## 開発 Tips

### Issue

- Issue にてタスクや問題を書いてください。
- IssueTemplate を使ってください。（該当のテンプレートがない場合は作成してください）
- 重複があると煩雑になるので、関連 Issue を探して#〇〇と参照を入れてください。
- assign、tag をつけてください。
- バグや表示崩れについては、Issue テンプレート`Bug report`で作成してください。
  - 機能実装やテストで見つけ次第、どんどん作成してください。
  - 必要であれば、MTG 内で修正対応について議論してください。
- 作成した Issue を必ず MTG で、いつ対応するのかをチームで決めましょう。

### PullRequest

**1. プルリクエスト前の作業**

プルリクエストを上げる前に必ず、自分が作業を行なっているブランチで `git pull origin main` を行うこと。<br/>
もし、コンフリクトが発生したら、ローカル上で解決する、解決の仕方がわからない場合は、メンバーに相談すること。

**2. `git pull origin main` を行なった後の作業**

remote に変更があった場合は、 `git pull origin main` のコマンドを実行し、remote の変更を取り込む。<br/>
package に更新がないか、確認するため、 `npm install` コマンドを実行する。<br/>
`found 0 vulnerabilities` と表示されれば OK。

**3. プルリクエスト作成時**

- `PullRequestTemplate`を使ってください。
- 作ったブランチから main ブランチへマージするプルリクを作ってください。
- プルリクに issue 番号を紐付けてください。
- レビュアーに assign つけてください。（複数つけても OK）
- レビュー依頼の際は、PR 内にメンションコメント＆念の為 Slack にてレビュアーに声掛けお願いします。

**4. マージ**

- マージはスカッシュコミット（プルリク内のコミットを 1 つににまとめてコミット）でお願いします。
  - マージの際に`Marge Pull Request`ではなく`Squash and merge`を選んでマージしてください。

### Branch

### ブランチ命名規則（**プレフィックス**をつける）

- feature: 機能追加
- fix: コード修正
- bug: バグ修正

※ 該当項目がない場合は適宜追加

**＜例＞**

```
git checkout -b 'feature/todotop_layout'
git checkout -b 'fix/todotop_layout'
git checkout -b 'bug/todotop_layout'
```

### Commit

### コミットメッセージ

- 日本語もしくは英語で端的に

**＜例＞**

```
git commit -m 'Top画面 作成'
git commit -m 'create top layout'
```

## 使用技術

- HTML (https://developer.mozilla.org/ja/docs/Web/HTML)
- CSS (https://developer.mozilla.org/ja/docs/Web/CSS)
- JavaScript (https://developer.mozilla.org/ja/docs/Web/JavaScript)
- TypeScript (https://www.typescriptlang.org)
- React.js (https://ja.react.dev)
- Next.js (https://nextjs.org)
- Firebase (https://firebase.google.com)
- Vercel (https://vercel.com)
- GitHub (https://github.co.jp)

## 推奨 VScode 拡張機能

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph&ssr=false#qna) コミットの一覧 → 詳細を閲覧できる
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) ファイルの履歴などを確認できる
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 視覚的にリポジトリ、ブランチ、ファイル、コミットの状態を確認や操作することができる

## バージョン情報

[volta](https://volta.sh) で管理

```
"node": "20以上",
https://nodejs.org/ja

"npm": "10以上"
https://docs.npmjs.com/cli/v9/commands/npm-version
```
