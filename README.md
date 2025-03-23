# etiquette

灘校文化祭企画抽選システム

## Features

- 企画ごとのチケット発行、管理
- チケットの検証、問い合わせ

## Structure

Bun Workspace を使用した monorepo です

```
/etiquette
├─ /packages - 共有ライブラリ
│  └─ /qr - QRコード関連のライブラリ
└─ /apps - フロントエンド / バックエンド
   ├─ /frontend - React
   └─ /backend - Hono
```

## How to Deploy

TODO

細かい情報は部内ドライブにアップロードします
