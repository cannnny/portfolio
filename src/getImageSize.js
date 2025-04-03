const { imageSize } = require('image-size');
const path = require('path');
const fs = require('fs');

// 画像ファイルのパスを指定
const imagePath = path.join(__dirname, '../public/favicon.png'); // publicディレクトリを指定

try {
  // ファイルをBufferとして読み込む
  const fileBuffer = fs.readFileSync(imagePath);

  // Bufferを渡して画像サイズを取得
  const dimensions = imageSize(fileBuffer);

  console.log(`画像の幅: ${dimensions.width}px`);
  console.log(`画像の高さ: ${dimensions.height}px`);
} catch (error) {
  console.error('画像サイズの取得中にエラーが発生しました:', error.message);
}