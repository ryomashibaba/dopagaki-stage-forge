# DOPAGAKI STAGE FORGE

**独創的で、建築としても走行体験としても面白いステージパーツを量産・選別・保存するための独立Publicリポジトリ。**

このリポジトリは DOPAGAKI SLOPE のゲーム本体ではありません。公開ゲームv7、既存の3D物理・描画・SF景観、サイトデプロイ設定を含みません。

## Current status: P1 bootstrap / in review

- `tools/validate.mjs`: B3.8 Track Director /1 JSON の独立した形式・制限チェック（Node 22、追加依存なし）
- `tests/validate.test.mjs`: バリデータの回帰テスト
- `examples/format-smoke.json`: JSON形式検証専用。完成ステージではありません
- `catalog.json`: 正式採用パーツ一覧。**現在は空**です
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
2. P2: 独立した構造ジェネレータ＋複数視点の構造プレビュー
3. P3: 連続走行面・段差・物理の検証と速度帯測定
4. P4: 系統横断のバッチ生成、多様性比較、候補の審査
5. P5: 明示承認済みのステージだけ `approved/` に固定保存
6. P6: 公開ゲームへの取り込みは別工程・別承認

HANGING BASILICA A3 は **HG-001候補**として参照されていますが、**そのJSONはまだこのリポジトリにアップロードしていません**。ユーザー自作コースも非公開のままです。

**No automatic deployment. No private code import. No auto-approval.**
