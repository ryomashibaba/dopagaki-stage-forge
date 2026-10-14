# DOPAGAKI STAGE FORGE

**独創的で、建築としても走行体験としても面白いステージパーツを量産・選別・保存するための独立Publicリポジトリ。**

このリポジトリは DOPAGAKI SLOPE のゲーム本体ではありません。公開ゲームv7、既存の3D物理・描画・SF景観、サイトデプロイ設定を含みません。

## Current status: P3 offline native-assisted autopilot QA / public static audits

- `tools/validate.mjs`: B3.8 Track Director /1 JSON の独立した形式・制限チェック（Node 22、追加依存なし）
- `tests/validate.test.mjs`: バリデータの回帰テスト
- `examples/format-smoke.json`: JSON形式検証専用。完成ステージではありません
- `catalog.json`: 正式採用パーツ一覧。**現在は空**です
- `experiments/P2_INDEX.json`: 最初の4系統の実験候補（ファイルハッシュ・基本統計。JSON本体は未公開）
- `tools/inspect-stage.mjs`: 空間の大きさ、走行ガイド、建築物の比率などを調べる独立した比較ツール
- `tools/audit-geometry.mjs`: 幅・勾配・接続部の左右端の不一致を調べる**静的**監査（CIで動作）
- `tools/verify-with-b38.mjs`: 手元にあるB3.8の既存ランタイムを指定した場合だけ純正物理で自動操舵テストするローカル用アダプタ（CIには本体コードを含めない）
- `experiments/P3_INDEX.json`: 4案のP3版のSHA256、24条件のローカル試走結果、未検証事項
- `docs/PART_CONTRACT.md`: パーツ管理・多様性・装飾・接続の規約
- `docs/SAFETY_AND_CURATION.md`: 公開時の安全条件・採用基準
- `.github/workflows/validate.yml`: PRとmainへのpush時に標準GitHub-hosted runnerで独立テストを実施

## Run locally

```sh
node --test tests/*.test.mjs
node tools/validate.mjs examples/format-smoke.json
node tools/validate.mjs path/to/your/course.json
node tools/audit-geometry.mjs path/to/your/course.json
# 任意：手元のB3.8コードを使う場合だけ
node tools/verify-with-b38.mjs --runtime path/to/B3.8/director path/to/your/course.json
```

表示される **FORMAT PASS はJSONの形の検証だけ**です。段差・衝突・自動試走・Windows WebGL操作・ゲーム本編互換性の検証を意味しません。

## Production plan

1. P1: 安全な公開基盤と形式検証（P1）
2. P2: 独立した構造候補4系統と複数視点の診断プレビュー（候補ZIPを配布、GitHubにはメタデータを先行登録）
3. P3: 走行面・段差・速度帯のローカルB3.8自動操舵を実施。28〜96m/sの24条件を完走。静的幾何監査をCI化。**Windows手動評価・JSON本体のGitHub登録・実ゲーム互換は未実施**（詳細は `docs/P3_VERIFICATION.md`）
4. P4: 系統横断のバッチ生成、多様性比較、候補の審査
5. P5: 明示承認済みのステージだけ `approved/` に固定保存
6. P6: 公開ゲームへの取り込みは別工程・別承認

HANGING BASILICA A3 は **HG-001候補**として参照されていますが、**そのJSONはまだこのリポジトリにアップロードしていません**。ユーザー自作コースも非公開のままです。

**No automatic deployment. No private code import. No auto-approval.**
