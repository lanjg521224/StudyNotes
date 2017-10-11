fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});


//  fis.match('*.{png,js,css}', {
//    useHash: true
//  });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

// 配置配置文件，注意，清空所有的配置，只留下以下代码即可。
// fis.match('*.{png,js,css}', {
//   release: '/static/$0'
// });