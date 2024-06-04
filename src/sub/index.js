/*
 * @Author: WeijianXu weijian.xu@unidt.com
 * @Date: 2024-05-20 18:37:09
 * @LastEditors: WeijianXu weijian.xu@unidt.com
 * @LastEditTime: 2024-05-20 18:37:45
 * @FilePath: \output-verbatimd:\app\me\webpack-plugin-jszip\src\sub\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function sub(a, b) {
  return [
    a[0] - b[0],
    a[1] - b[1],
    a[2] - b[2],
  ];
}
