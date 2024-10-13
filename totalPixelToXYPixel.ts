/**
 * 合計ピクセル数と縦横比から縦横ピクセル数を特定する
 * @param totalPixel 合計ピクセル数
 * @param ratioX 縦横比-横
 * @param ratioY 縦横比-縦
 * @returns 縦横ピクセル数
 */
function totalPixelToXYPixel(totalPixel: number, ratioX: number, ratioY: number) {
  const scalingFactor = Math.sqrt(totalPixel / (ratioX * ratioY));
  return {
    x: scalingFactor * ratioX,
    y: scalingFactor * ratioY,
  };
}
