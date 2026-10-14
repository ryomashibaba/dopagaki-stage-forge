# DOPAGAKI STAGE FORGE

**独創的で、建築としても走行体験としても面白いステージパーツを量産・選別・保存するための独立Publicリポジトリ。**

このリポジトリは DOPAGAKI SLOPE のゲーム本体ではありません。公開ゲームv7、既存の3D物理・描画・SF景観、サイトデプロイ設定を含みません。

## Current status: P2 first experimental batch / independent public tooling

- `tools/validate.mjs`: B3.8 Track Director /1 JSON の独立した形式・制限チェック（Node 22、追加依存なし）
- `tests/validate.test.mjs`: バリデータの回帰テスト
- `examples/format-smoke.json`: JSON形式検証専用。完成ステージではありません
- `catalog.json`: 正式採用パーツ一覧。**現在は空**です
- `experiments/P2_INDEX.json`: 最初の4系統の実験候補（ファイルハッシュ・基本統計。JSON本体は未公開）
- `tools/inspect-stage.mjs`: 空間の大きさ、走行ガイド、建築物の比率などを調べる独立した比較ツール
- `docs/PART_CONTRACT.md`: パーツ管理・多様性・装飾・接続の規約
- `docs/SAFETY_AND_CURATION.md`: 公開時の安全条件・採用基準
- `.github/workflows/validate.yml`: PRとmainへのpush時に標準GitHub-hosted runnerで独立テストを実施

## Run locally

```sh
node --test tests/*.test.mjs
node tools/validate.mjs examples/format-smoke.json
node tools/validate.mjs path/to/your/course.json
```

表示される **FORMAT PASS はJSONの形の検証だけ**です。段差・衝突・自動試走・Windows WebGL操作・ゲーム本編互換性の検証を意味しません。

## Production plan

1. P1: 安全な公開基盤と形式検証（このPR）
2. P2: 独立した構造候補4系統と複数視点の診断プレビュー（候補ZIPを配布、GitHubにはメタデータを先行登録）
3. P3: 走行面・段差・衝突・速度帯・Windowsでの物理検証、候補生成ソースと承認対象データのGitHub保存
4. P4: 系統横断のバッチ生成、多様性比較、候補の審査
5. P5: 明示承認済みのステージだけ `approved/` に固定保存
6. P6: 公開ゲームへの取り込みは別工程・別承認

HANGING BASILICA A3 は **HG-001候補**として参照されていますが、**そのJSONはまだこのリポジトリにアップロードしていません**。ユーザー自作コースも非公開のままです。

**No automatic deployment. No private code import. No auto-approval.**
