# OBS連携

Glemir のアバター映像を OBS Studio に取り込み、配信画面に合成する方法を説明します。

![OBS Studio で Glemir の映像を取り込んだ状態](/images/obs.png)

## 仕組み

Glemir は 1920×1080 の映像を Syphon（macOS）または Spout（Windows）経由で出力します。OBS 側でこの映像をソースとして取り込みます。

```
Glemir → Syphon/Spout → OBS Studio → 配信
```

## macOS（Syphon）

macOS 版の OBS Studio には Syphon Client が標準で搭載されています。

### 手順

1. Glemir を起動し、アバターが表示されている状態にする
2. OBS Studio を起動する
3. ソースの「+」ボタンから **Syphon Client** を選択
4. ソースのプロパティで Glemir の出力を選択する
5. 必要に応じてソースの位置やサイズを調整する

::: tip
Glemir の映像は透過背景で出力されます。OBS 側で「Allow Transparency」が有効になっていることを確認してください。
:::

## Windows（Spout）

Windows 版の OBS Studio には Spout が標準搭載されていないため、プラグインのインストールが必要です。

- [obs-spout2-plugin](https://github.com/Off-World-Live/obs-spout2-plugin) — OBS 用の Spout2 プラグイン

### 手順

1. Glemir を起動し、アバターが表示されている状態にする
2. OBS Studio を起動する
3. ソースの「+」ボタンから **Spout2 Capture** を選択
4. ソースのプロパティで Glemir の出力を選択する
5. 必要に応じてソースの位置やサイズを調整する

## 背景の設定

Glemir は透過背景で映像を出力するため、アバターを配信画面に直接合成できます。

透過がうまく動作しない環境では、クロマキーグリーンの背景に切り替えて OBS のクロマキーフィルタで背景を除去する方法も使用できます。