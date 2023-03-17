"use strict";(self.webpackChunkmy_second_brain=self.webpackChunkmy_second_brain||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"M\u1ed9t s\u1ed1 kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n v\u1ec1 th\u1ed1ng k\xea trong Machine learning","metadata":{"permalink":"/blog/M\u1ed9t s\u1ed1 kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n v\u1ec1 th\u1ed1ng k\xea trong Machine learning","editUrl":"https://github.com/whoisltd/my-second-brain/blob/main/docs/blog/2022-01-17-some-statics-concept-in-machine-learning/index.md","source":"@site/blog/2022-01-17-some-statics-concept-in-machine-learning/index.md","title":"M\u1ed9t s\u1ed1 kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n v\u1ec1 th\xf4ng k\xea trong Machine Learning","description":"Th\u1ed1ng k\xea l\xe0 m\u1ed9t ph\u1ea7n quan tr\u1ecdng kh\xf4ng th\u1ec3 thi\u1ebfu trong machine learning. Th\u1ed1ng k\xea gi\xfap ta c\xf3 th\u1ec3 hi\u1ec3u \u0111\u01b0\u1ee3c b\u1ed9 d\u1eef li\u1ec7u c\u1ee7a m\xecnh. D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t v\xe0i kh\xe1i ni\u1ec7m m\xecnh \u0111\xe3 t\xecm hi\u1ec3u v\xe0 l\u01b0u l\u1ea1i. Quantile","date":"2022-01-17T00:00:00.000Z","formattedDate":"January 17, 2022","tags":[{"label":"statics","permalink":"/blog/tags/statics"},{"label":"machine-learning","permalink":"/blog/tags/machine-learning"},{"label":"concept","permalink":"/blog/tags/concept"}],"readingTime":6.715,"hasTruncateMarker":false,"authors":[{"name":"Dat Le","title":"Maintainer of My Second Brain","url":"https://linktr.ee/whoisltd","imageURL":"https://github.com/whoisltd.png","key":"whoisltd"}],"frontMatter":{"slug":"M\u1ed9t s\u1ed1 kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n v\u1ec1 th\u1ed1ng k\xea trong Machine learning","title":"M\u1ed9t s\u1ed1 kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n v\u1ec1 th\xf4ng k\xea trong Machine Learning","authors":["whoisltd"],"tags":["statics","machine-learning","concept"]},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"Th\u1ed1ng k\xea l\xe0 m\u1ed9t ph\u1ea7n quan tr\u1ecdng kh\xf4ng th\u1ec3 thi\u1ebfu trong machine learning. Th\u1ed1ng k\xea gi\xfap ta c\xf3 th\u1ec3 hi\u1ec3u \u0111\u01b0\u1ee3c b\u1ed9 d\u1eef li\u1ec7u c\u1ee7a m\xecnh. D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t v\xe0i kh\xe1i ni\u1ec7m m\xecnh \u0111\xe3 t\xecm hi\u1ec3u v\xe0 l\u01b0u l\u1ea1i. ![Quantile](./Iqr_with_quantile.png)\\n\\n## **M\xf4 t\u1ea3 m\u1ed9t t\u1eadp d\u1eef li\u1ec7u**\\n\\nGi\u1ea3 s\u1eed ta c\xf3 m\u1ed9t b\u1ed9 d\u1eef li\u1ec7u v\u1ec1 th\u1eddi gian ch\u1ea1y b\u1ed9 100m trong 6 l\u1ea7n ch\u1ea1y c\u1ee7a b\u1ea3n th\xe2n (th\u1eddi gian t\xednh b\u1eb1ng gi\xe2y). Ta s\u1ebd thu \u0111\u01b0\u1ee3c m\u1ed9t b\u1ea3ng d\u1eef li\u1ec7u nh\u01b0 sau:\\n\\n![img](https://cldup.com/ce5pxlT19Z-3000x3000.png)\\n\\n  T\u1eeb b\u1ed9 d\u1eef li\u1ec7u tr\xean ta c\xf3 th\u1ec3 suy ra m\u1ed9t s\u1ed1 th\xf4ng tin c\u01a1 b\u1ea3n nh\u01b0 l\u1ea7n ch\u1ea1y n\xe0o nhanh nh\u1ea5t hay ch\u1eadm nh\u1ea5t tuy nhi\xean ta c\u1ea7n bi\u1ebft nhi\u1ec1u h\u01a1n th\u1ebf.\\n\\n## **Xu h\u01b0\u1edbng t\u1eadp trung (Central Tendencies)**\\n\\nM\u1ed9t trong nh\u1eefng ph\u01b0\u01a1ng ph\xe1p \u0111o l\u01b0\u1eddng ph\u1ed5 bi\u1ebfn trong th\u1ed1ng k\xea l\xe0 \u0111o xu h\u01b0\u1edbng t\u1eadp trung theo 3 tham s\u1ed1:\\n\\n- Trung b\xecnh (mean ho\u1eb7c average)\\n- Trung v\u1ecb (Media)\\n- Mode (S\u1ed1 c\xf3 t\u1ea7n su\u1ea5t xu\u1ea5t hi\u1ec7n nhi\u1ec1u nh\u1ea5t trong m\u1eabu)\\n\\n**Mean**\\n\\nL\xe0 t\u1ed5ng c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c gi\xe1 tr\u1ecb trong c\u1ee7a d\u1eef li\u1ec7u chia cho k\xedch th\u01b0\u1edbc m\u1eabu. Trong v\xed d\u1ee5 tr\xean s\u1ed1 gi\xe2y trung b\xecnh 6 l\u1ea7n ch\u1ea1y l\xe0:\\n\\n![img](https://cldup.com/RZz9Hh1CQp-3000x3000.png)\\n\\nV\u1edbi S<sub>i</sub> l\xe0 s\u1ed1 gi\xe2y c\u1ee7a l\u1ea7n ch\u1ea1y th\u1ee9 i.\\n\\n**Median**\\n\\nTrong l\xfd thuy\u1ebft x\xe1c su\u1ea5t v\xe0 th\u1ed1ng k\xea, s\u1ed1 trung v\u1ecb l\xe0 m\u1ed9t s\u1ed1 t\xe1ch gi\u1eefa n\u1eeda l\u1edbn h\u01a1n v\xe0 b\xe9 h\u01a1n c\u1ee7a m\u1ed9t m\u1eabu sao cho 2 n\u1eeda c\xf3 s\u1ed1 ph\u1ea7n t\u1eed b\u1eb1ng nhau. \\n\\nMedian \u0111\u1ef1\u1edbc t\xednh b\u1eb1ng c\xe1ch s\u1eafp x\u1ebfp d\u1eef li\u1ec7u v\xe0 l\u1ea5y ph\u1ea7n t\u1eed \u1edf gi\u1eefa. N\u1ebfu s\u1ed1 l\u01b0\u1ee3ng ph\u1ea7n t\u1eed l\xe0 m\u1ed9t s\u1ed1 ch\u1eb5n th\xec median l\xe0 trung b\xecnh c\u1ee7a 2 gi\xe1 tr\u1ecb \u1edf gi\u1eefa.\\n\\nV\xed d\u1ee5 ta c\xf3 2 t\u1eadp sau:\\n\\nS<sub>1</sub> = {7, 3, 3, 4, 5}\\n\\nS<sub>2</sub> = {8, 4, 5, 6, 7, 8}\\n\\nTr\u01b0\u1edbc khi t\xednh trung v\u1ecb, ta c\u1ea7n s\u1eafp x\u1ebfp S<sub>1</sub> v\xe0 S <sub>2</sub> theo th\u1ee9 t\u1ef1 t\u0103ng d\u1ea7n:\\n\\nS<sub>1</sub> = {3, 3, 4, 5, 7}\\n\\nS<sub>2</sub> = {3, 4, 5, 6, 7, 8}\\n\\nT\u1eeb \u0111\xf3 c\xf3 th\u1ec3 th\u1ea5y Median (S<sub>1</sub>) = 4, Median(S<sub>2</sub>) = (5+6) / 2 = 5.5\\n\\n**Quantile**\\n\\nQuantile l\xe0 d\u1ea1ng t\u1ed5ng qu\xe1t c\u1ee7a Median, l\xe0 nh\u1eefng gi\xe1 tr\u1ecb (\u0111i\u1ec3m c\u1eaft) chia t\u1eadp m\u1eabu th\xe0nh p ph\u1ea7n c\xf3 s\u1ed1 ph\u1ea7n t\u1eed b\u1eb1ng nhau. Khi \u0111\xf3 ta g\u1ecdi c\xe1c \u0111i\u1ec3m n\xe0y l\xe0 p-quantiles. Median t\u01b0\u01a1ng \u1ee9ng v\u1edbi 2-quantiles. C\xf3 m\u1ed9t quantile ph\u1ed5 bi\u1ebfn \u0111\u01b0\u1ee3c d\xf9ng trong x\xe1c su\u1ea5t th\u1ed1ng k\xea l\xe0 [t\u1ee9 ph\xe2n v\u1ecb](https://vi.wikipedia.org/wiki/T%E1%BB%A9_ph%C3%A2n_v%E1%BB%8B) (4-quantiles).\\n\\nV\xed d\u1ee5:\\n\\nS<sub>1</sub> = {5, 7, 9, 14, 25, 34, 48}\\n\\nTa th\u1ea5y gi\xe1 tr\u1ecb Median c\u1ee7a t\u1eadp S<sub>1</sub> = 14. Median c\u1ee7a ph\u1ea7n d\u01b0\u1edbi {5, 7, 9} = 7 v\xe0 median c\u1ee7a ph\u1ea7n tr\xean {25, 34, 48} = 34. Nh\u01b0 v\u1eady, ta l\u1ea7n l\u01b0\u1ee3t c\xf3 Q<sub>1</sub> = 7, Q<sub>2</sub> = 14, Q<sub>3</sub> = 34. \\n\\n**Mode**\\n\\nMode l\xe0 s\u1ed1 c\xf3 t\u1ea7n su\u1ea5t xu\u1ea5t hi\u1ec7n nhi\u1ec1u nh\u1ea5t trong t\u1eadp d\u1eef li\u1ec7u. V\xed d\u1ee5:\\n\\nS<sub>1</sub> = {1, 1, 1, 2, 3, 4}\\n\\nMode(S<sub>1</sub>) = 1. V\xec 1 xu\u1ea5t hi\u1ec7n nhi\u1ec1u nh\u1ea5t trong t\u1eadp S<sub>1</sub>\\n\\n## **\u0110o l\u01b0\u1eddng s\u1ef1 bi\u1ebfn thi\xean c\u1ee7a d\u1eef li\u1ec7u (Variation of Data)**\\n\\n\u0110\u1ec3 \u0111o l\u01b0\u1eddng s\u1ef1 bi\u1ebfn thi\xean (s\u1ef1 thay \u0111\u1ed5i) ( th\u01b0\u1eddng so v\u1edbi gi\xe1 tr\u1ecb trung b\xecnh) c\u1ee7a d\u1eef li\u1ec7u ng\u01b0\u1eddi ta th\u01b0\u1eddng d\xf9ng c\xe1c tham s\u1ed1 nh\u01b0 **Range** (kho\u1ea3ng bi\u1ebfn thi\xean), **Interquartile Range** (IQR - kho\u1ea3ng t\u1ee9 ph\xe2n v\u1ecb), **Standard Deviation** (\u0111\u1ed9 l\u1ec7ch chu\u1ea9n), **Variance** (ph\u01b0\u01a1ng sai) v\xe0 **Standard Error** (sai s\u1ed1 chu\u1ea9n).\\n\\n**Range**\\n\\n\u0110\u01b0\u1ee3c t\xednh b\u1eb1ng c\xe1ch l\u1ea5y gi\xe1 tr\u1ecb l\u1edbn nh\u1ea5t tr\u1eeb gi\xe1 tr\u1ecb nh\u1ecf nh\u1ea5t trong m\u1eabu. V\u1edbi v\xed d\u1ee5 th\u1eddi gian ch\u1ea1y 100m ta c\xf3:\\n\\nRange = 25.1 - 17.9 = 7.2 (s)\\n\\n**Deviation**\\n\\nTrong th\u1ed1ng k\xea, khi mu\u1ed1n \u0111o l\u01b0\u1eddng s\u1ef1 ph\xe2n t\xe1n c\u1ee7a d\u1eef li\u1ec7u so v\u1edbi gi\xe1 tr\u1ecb trung t\xe2m ta d\xf9ng kh\xe1i ni\u1ec7m \u0111\u1ed9 l\u1ec7ch (devation). Gi\u1ea3 s\u1eed ta s\u1eed d\u1ee5ng gi\xe1 tr\u1ecb trung b\xecnh l\xe0m gi\xe1 tr\u1ecb trung t\xe2m, khi \u0111\xf3 c\xf3 t\u1ed5ng \u0111\u1ed9 l\u1ec7ch c\u1ee7a t\u1ea5t c\u1ea3 quan s\xe1t v\u1edbi gi\xe1 tr\u1ecb trung b\xecnh trong m\u1eabu c\xf3 n gi\xe1 tr\u1ecb l\xe0:\\n\\n![img](https://cldup.com/1_gclwcaeU-3000x3000.png)\\n\\nV\xec c\xe1c gi\xe1 tr\u1ecb s<sub>i</sub> c\xf3 th\u1ec3 l\u1edbn, b\u1eb1ng hay nh\u1ecf h\u01a1n Mean n\xean gi\xe1 tr\u1ecb \u0111\u1ed9 l\u1ec7ch m\u1ed7i l\u1ea7n quan s\xe1t s\u1ebd c\xf3 nh\u1eefng gi\xe1 tr\u1ecb \xe2m, d\u01b0\u01a1ng hay 0 v\xe0 \u0111i\u1ec1u n\xe0y s\u1ebd d\u1eabn \u0111\u1ebfn k\u1ebft qu\u1ea3 t\u1ed5ng \u0111\u1ed9 l\u1ec7ch d c\xf3 th\u1ec3 b\u1eb1ng 0. \u0110\u1ec3 tr\xe1nh s\u1ef1 b\u1ea5t ti\u1ec7n n\xe0y, ch\xfang ta s\u1ebd d\xf9ng gi\xe1 tr\u1ecb tuy\u1ec7t \u0111\u1ed1i cho c\xe1c \u0111\u1ed9 l\u1ec7ch v\xe0 c\u0169ng \u0111\u1ec3 kh\xf4ng b\u1ecb \u1ea3nh h\u01b0\u1edfng t\u1eeb k\xedch th\u01b0\u1edbc m\u1eabu ch\xfang ta s\u1ebd d\xf9ng c\xf4ng th\u1ee9c t\u1ed5ng \u0111\u1ed9 l\u1ec7ch nh\u01b0 sau:\\n\\n![img](https://cldup.com/h6NX_KuGQ5-3000x3000.png)\\n\\nTuy nhi\xean, v\u1ea5n \u0111\u1ec1 c\u1ee7a gi\xe1 tr\u1ecb tuy\u1ec7t \u0111\u1ed1i l\xe0 t\xednh kh\xf4ng li\xean t\u1ee5c t\u1ea1i g\u1ed1c t\u1ecda \u0111\u1ed9 n\xean ch\xfang ta s\u1ebd s\u1eed d\u1ee5ng c\xe1c c\xf4ng c\u1ee5 kh\xe1c \u0111\u1ec3 \u0111o l\u01b0\u1eddng s\u1ef1 ph\xe2n t\xe1n c\u1ee7a d\u1eef li\u1ec7u nh\u01b0 ph\u01b0\u01a1ng sai (variance) v\xe0 \u0111\u1ed9 l\u1ec7ch chu\u1ea9n (standard deviation).\\n\\n**Variance v\xe0 Standard deviation**\\n\\nTrong x\xe1c su\u1ea5t th\u1ed1ng k\xea c\xf3 hai kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n l\xe0 **population** (t\u1ea1m d\u1ecbch: qu\u1ea7n th\u1ec3) v\xe0 **sample**. Population l\xe0 m\u1ed9t t\u1eadp h\u1ee3p c\xf3 s\u1ed1 l\u01b0\u1ee3ng l\u1edbn c\xe1c c\xe1 th\u1ec3 (hay c\xe1c t\xean g\u1ecdi kh\xe1c nh\u01b0 ph\u1ea7n t\u1eed, th\xe0nh vi\xean, v.v.) v\xe0 m\u1ed9t sample l\xe0 m\u1ed9t t\u1eadp con hay t\u1eadp m\u1eabu c\u1ee7a population. \u0110\u1ec3 ti\u1ec7n vi\u1ec7c minh h\u1ecda, c\xe1c kh\xe1i ni\u1ec7m hay c\xf4ng th\u1ee9c trong b\xe0i vi\u1ebft n\xe0y \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng tr\xean c\xe1c sample thay v\xec population.\\n\\nV\xec h\u1ea1n ch\u1ebf c\u1ee7a gi\xe1 tr\u1ecb tuy\u1ec7t \u0111\u1ed1i trong c\xf4ng th\u1ee9c t\xednh **\u0111\u1ed9 l\u1ec7ch** n\xean ch\xfang ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng kh\xe1i ni\u1ec7m **ph\u01b0\u01a1ng sai (variance)** \u0111\u1ec3 \u0111o l\u01b0\u1eddng s\u1ef1 ph\xe2n t\xe1n c\u1ee7a d\u1eef li\u1ec7u. Ph\u01b0\u01a1ng sai \xe1p d\u1ee5ng cho t\u1eadp m\u1eabu (sample) g\u1ed3m n ph\u1ea7n t\u1eed g\u1ecdi l\xe0 ph\u01b0\u01a1ng sai m\u1eabu (sample variance) c\xf3 c\xf4ng th\u1ee9c nh\u01b0 sau:\\n\\n![img](https://cldup.com/VErEhbqy5K-3000x3000.png)\\n\\nL\u01b0u \xfd r\u1eb1ng, n\u1ebfu ph\u01b0\u01a1ng sai \xe1p d\u1ee5ng tr\xean t\u1eadp population c\xf3 N c\xe1 th\u1ec3 th\xec c\xf4ng th\u1ee9c s\u1ebd l\xe0:\\n\\n![img](https://cldup.com/B_DCgio2ID-3000x3000.png)\\n\\nV\u1ea5n \u0111\u1ec1 d\xf9ng (n-1) hay N li\xean quan \u0111\u1ebfn c\xe1c kh\xe1i ni\u1ec7m \u01b0\u1edbc l\u01b0\u1ee3ng ch\u1ec7ch (biased estimator) v\xe0 \u01b0\u1edbc l\u01b0\u1ee3ng kh\xf4ng ch\u1ec7ch (unbiased estimator). C\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam t\u1ea1i [\u0111\xe2y](https://en.wikipedia.org/wiki/Bessel%27s_correction).\\n\\nPh\u01b0\u01a1ng sai l\xe0 tham s\u1ed1 r\u1ea5t t\u1ed1t \u0111\u1ec3 \u0111o l\u01b0\u1eddng s\u1ef1 bi\u1ebfn thi\xean (hay ph\xe2n t\xe1n) c\u1ee7a d\u1eef li\u1ec7u trong m\u1eabu v\xec n\xf3 \u0111\xe3 quan t\xe2m \u0111\u1ebfn \u0111\u1ed9 l\u1ec7ch c\u1ee7a m\u1ed7i quan s\xe1t so v\u1edbi s\u1ed1 trung b\xecnh, lo\u1ea1i b\u1ecf \u1ea3nh h\u01b0\u1edfng c\u1ee7a k\xedch th\u01b0\u1edbc m\u1eabu v\xe0 l\xe0 h\xe0m m\u01b0\u1ee3t. Tuy nhi\xean, \u0111i\u1ec3m y\u1ebfu c\u1ee7a ph\u01b0\u01a1ng sai l\xe0 kh\xf4ng c\xf9ng \u0111\u01a1n v\u1ecb t\xednh v\u1edbi Mean. \u0110\u01a1n v\u1ecb t\xednh c\u1ee7a ph\u01b0\u01a1ng sai l\xe0 b\xecnh ph\u01b0\u01a1ng c\u1ee7a \u0111\u01a1n v\u1ecb t\xednh c\u1ee7a trung b\xecnh. Ch\u1eb3n h\u1ea1n, \u0111\u01a1n v\u1ecb t\xednh c\u1ee7a th\u1eddi gian ch\u1ea1y trung b\xecnh l\xe0 gi\xe2y trong kh\xed \u0111\xf3 \u0111\u01a1n v\u1ecb t\xednh c\u1ee7a ph\u01b0\u01a1ng sai l\xe0 gi\xe2y b\xecnh ph\u01b0\u01a1ng. \u0110\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 n\xe0y, ng\u01b0\u1eddi ta l\u1ea5y c\u0103n b\u1eadc 2 c\u1ee7a ph\u01b0\u01a1ng sai v\xe0 k\u1ebft qu\u1ea3 n\xe0y g\u1ecdi l\xe0 **\u0111\u1ed9 l\u1ec7ch chu\u1ea9n (Standard Deviation)**. C\xf4ng th\u1ee9c \u0111\u1ed9 l\u1ec7ch chu\u1ea9n (\xe1p d\u1ee5ng tr\xean t\u1eadp m\u1eabu):\\n\\n![img](https://cldup.com/xYiN6A8o7X-3000x3000.png)\\n\\n**Correlation**\\n\\nTrong l\xfd thuy\u1ebft x\xe1c su\u1ea5t v\xe0 th\u1ed1ng k\xea, h\u1ec7 s\u1ed1 t\u01b0\u01a1ng quan (Coefficient Correlation) cho bi\u1ebft \u0111\u1ed9 m\u1ea1nh c\u1ee7a m\u1ed1i quan h\u1ec7 tuy\u1ebfn t\xednh gi\u1eefa hai bi\u1ebfn s\u1ed1 ng\u1eabu nhi\xean. T\u1eeb t\u01b0\u01a1ng quan (Correlation) \u0111\u01b0\u1ee3c th\xe0nh l\u1eadp t\u1eeb Co- (c\xf3 ngh\u0129a \u201ctogether\u201d) v\xe0 Relation (quan h\u1ec7).\\n\\nH\u1ec7 s\u1ed1 t\u01b0\u01a1ng quan gi\u1eefa 2 bi\u1ebfn c\xf3 th\u1ec3 d\u01b0\u01a1ng (positive) ho\u1eb7c \xe2m (negative). H\u1ec7 s\u1ed1 t\u01b0\u01a1ng quan d\u01b0\u01a1ng cho bi\u1ebft r\u1eb1ng gi\xe1 tr\u1ecb 2 bi\u1ebfn t\u0103ng c\xf9ng nhau c\xf2n h\u1ec7 s\u1ed1 t\u01b0\u01a1ng quan \xe2m th\xec n\u1ebfu m\u1ed9t bi\u1ebfn t\u0103ng th\xec bi\u1ebfn kia gi\u1ea3m.\\n\\nM\u1ed9t kh\xe1i ni\u1ec7m quan tr\u1ecdng kh\xe1c li\xean quan \u0111\u1ebfn t\xednh t\u01b0\u01a1ng quan l\xe0 hi\u1ec7p ph\u01b0\u01a1ng sai (covariance). N\u1ebfu ph\u01b0\u01a1ng sai d\xf9ng \u0111\u1ec3 \u0111o l\u01b0\u1eddng s\u1ef1 bi\u1ebfn thi\xean c\u1ee7a m\u1ed9t bi\u1ebfn ng\u1eabu nhi\xean (hay d\u1eef li\u1ec7u tr\xean m\u1ed9t t\u1eadp m\u1eabu) th\xec hi\u1ec7p ph\u01b0\u01a1ng sai \u0111o l\u01b0\u1eddng s\u1ef1 bi\u1ebfn thi\xean c\u1ee7a hai bi\u1ebfn ng\u1eabu nhi\xean (hay d\u1eef li\u1ec7u tr\xean hai t\u1eadp m\u1eabu c\xf9ng s\u1ed1 c\xe1 th\u1ec3). C\xf4ng th\u1ee9c hi\u1ec7p ph\u01b0\u01a1ng sai c\u1ee7a hai bi\u1ebfn (hay hai t\u1eadp m\u1eabu c\xf3 c\xf9ng n c\xe1 th\u1ec3) x, y:\\n\\n![img](https://cldup.com/BU7VQs5VdH-3000x3000.png)\\n\\nC\xf4ng th\u1ee9c t\xednh h\u1ec7 s\u1ed1 t\u01b0\u01a1ng quan d\u1ef1a tr\xean hi\u1ec7p ph\u01b0\u01a1ng sai nh\u01b0 sau:\\n\\n![img](https://cldup.com/03fGbeVD2F-3000x3000.png)\\n\\nV\u1edbi sdx v\xe0 sdy t\u01b0\u01a1ng \u1ee9ng l\xe0 \u0111\u1ed9 l\u1ec7ch chu\u1ea9n c\u1ee7a x v\xe0 y."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/whoisltd/my-second-brain/blob/main/docs/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"M\u1ed9t s\u1ed1 kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n v\u1ec1 th\xf4ng k\xea trong Machine Learning","permalink":"/blog/M\u1ed9t s\u1ed1 kh\xe1i ni\u1ec7m c\u01a1 b\u1ea3n v\u1ec1 th\u1ed1ng k\xea trong Machine learning"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/whoisltd/my-second-brain/blob/main/docs/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/whoisltd/my-second-brain/blob/main/docs/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/whoisltd/my-second-brain/blob/main/docs/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);