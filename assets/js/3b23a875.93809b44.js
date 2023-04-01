"use strict";(self.webpackChunkmy_second_brain=self.webpackChunkmy_second_brain||[]).push([[7383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,h=u["".concat(c,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={slug:"NLP Basic Review",title:"NLP Basic Review",authors:["whoisltd"],tags:["Deep-learning","NLP","Natural-language-processing"],sidebar_position:1},r=void 0,o={unversionedId:"nlp/nlp",id:"nlp/nlp",title:"NLP Basic Review",description:"NPL  Task",source:"@site/docs/nlp/nlp.md",sourceDirName:"nlp",slug:"/nlp/NLP Basic Review",permalink:"/docs/nlp/NLP Basic Review",draft:!1,editUrl:"https://github.com/whoisltd/my-second-brain/blob/main/docs/nlp/nlp.md",tags:[{label:"Deep-learning",permalink:"/docs/tags/deep-learning"},{label:"NLP",permalink:"/docs/tags/nlp"},{label:"Natural-language-processing",permalink:"/docs/tags/natural-language-processing"}],version:"current",sidebarPosition:1,frontMatter:{slug:"NLP Basic Review",title:"NLP Basic Review",authors:["whoisltd"],tags:["Deep-learning","NLP","Natural-language-processing"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Nature Language Processing",permalink:"/docs/category/nature-language-processing"}},c={},s=[{value:"NPL  Task",id:"npl--task",level:2},{value:"Approaches to NPL",id:"approaches-to-npl",level:4},{value:"Deep learning for NLP",id:"deep-learning-for-nlp",level:3},{value:"Why DL Is Not Yet the Silver Bullet for NLP",id:"why-dl-is-not-yet-the-silver-bullet-for-nlp",level:4},{value:"embedding + word2vec",id:"embedding--word2vec",level:3},{value:"Word2vec",id:"word2vec",level:3}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"npl--task"},"NPL  Task"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Language Modeling"),": M\xf4 h\xecnh t\u1eeb ng\u1eef, c\xe2u ch\u1eef, ... c\u1ea7n m\xf4 h\xecnh h\xf3a ng\xf4n ng\u1eef trc khi th\u1ef1c hi\u1ec7n c\xe1c task kh\xe1c: text classification, information extraction,..."),(0,l.kt)("p",null,"Text classification"),(0,l.kt)("p",null,"Information extraction"),(0,l.kt)("p",null,"Information retrieval"),(0,l.kt)("p",null,"Question answering"),(0,l.kt)("p",null,"Machine translation"),(0,l.kt)("p",null,"Conversational agent"),(0,l.kt)("p",null,"NLP task by difficulty:",(0,l.kt)("img",{alt:"image-20230329192740134",src:n(8250).Z,width:"429",height:"403"})),(0,l.kt)("p",null,"Why is NPL challenging?"),(0,l.kt)("p",null,"Ng\xf4n ng\u1eef con ng\u01b0\u1eddi mang s\u1ef1 m\u01a1 h\u1ed3, \xfd ngh\u0129a ph\u1ee5 thu\u1ed9c nhi\u1ec1u v\xe0o ng\u1eef c\u1ea3nh, th\xe0nh ng\u1eef, nhi\u1ec1u ng\xf4n ng\u1eef."),(0,l.kt)("h4",{id:"approaches-to-npl"},"Approaches to NPL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Heuristics-Based (rule based)"),(0,l.kt)("li",{parentName:"ul"},"Classical Machine Learning (e.g Naive Bayes, SVM, HMM, CRF,... )"),(0,l.kt)("li",{parentName:"ul"},"Deep Learning")),(0,l.kt)("h3",{id:"deep-learning-for-nlp"},"Deep learning for NLP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Recurrent newral networks"),(0,l.kt)("li",{parentName:"ul"},"Long short-term memory"),(0,l.kt)("li",{parentName:"ul"},"Convolutional neural networks"),(0,l.kt)("li",{parentName:"ul"},"Autoencoders: E.g: T\u1eeb m\u1ed9t c\xe2u sinh ra c\xe2u m\u1edbi"),(0,l.kt)("li",{parentName:"ul"},"Transformers")),(0,l.kt)("h4",{id:"why-dl-is-not-yet-the-silver-bullet-for-nlp"},"Why DL Is Not Yet the Silver Bullet for NLP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Overfitting on small datasets"),(0,l.kt)("li",{parentName:"ul"},"Interpertable models"),(0,l.kt)("li",{parentName:"ul"},"Cost"),(0,l.kt)("li",{parentName:"ul"},"On-device deployment")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329195115905",src:n(3403).Z,width:"565",height:"282"})),(0,l.kt)("p",null,"T\u1ed1n ti\u1ec1n qu\xe1 z tr\u1eddi."),(0,l.kt)("p",null,"GPU Tesla T4 vs GPT-2 1 l\xfac ch\u1ec9 dc 4-5 ng\u01b0\u1eddi."),(0,l.kt)("p",null,"T\u1ed1i \u01b0u m\xf4 h\xecnh qu\xe1 c\xf3 th\u1ec3 l\xe0m gi\u1ea3m nhi\u1ec1u \u0111\u1ed9 ch\xednh x\xe1c."),(0,l.kt)("h3",{id:"embedding--word2vec"},"embedding + word2vec"),(0,l.kt)("p",null,"Gi\xfap m\xe1y hi\u1ec3u \u0111\u01b0\u1ee3c ng\xf4n ng\u1eef: "),(0,l.kt)("p",null,"Gi\u1ea3i thi\u1ebft ph\xe2n ph\u1ed1i: 2 t\u1eeb c\u0169ng ng\u1eef c\u1ea3nh kh\u1ea3 n\u0103ng cao gi\u1ed1ng nhau."),(0,l.kt)("p",null,"Word Smilarity"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329200210387",src:n(5217).Z,width:"543",height:"101"})),(0,l.kt)("p",null,"\xdd ngh\u0129a c\u1ee7a m\u1ed9t t\u1eeb( The meaning of word): x\xe1c \u0111\u1ecbnh m\u1ed9t t\u1eeb d\u1ef1a v\xe0o nh\u1eefng t\u1eeb xung quanh."),(0,l.kt)("p",null,"M\xf4 h\xecnh m\u1ed9t t\u1eeb th\xe0nh vector"),(0,l.kt)("p",null,"TF IDF, Word2vec"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329201759398",src:n(1799).Z,width:"775",height:"426"})),(0,l.kt)("p",null,"Word-vector: M\xf4 h\xecnh h\xf3a t\u1eeb th\xe0nh vector d\u1ef1a tr\xean s\u1ed1 l\u1ea7n xu\u1ea5t hi\u1ec7n c\u1ee7a t\u1eeb trong v\u0103n b\u1ea3n"),(0,l.kt)("p",null,"Word-word Matrix: "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329202121623",src:n(4993).Z,width:"775",height:"426"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329202607859",src:n(303).Z,width:"1289",height:"518"})),(0,l.kt)("h3",{id:"word2vec"},"Word2vec"),(0,l.kt)("p",null,"How to build word2vec"),(0,l.kt)("p",null,"vector one hot"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329202930194",src:n(7593).Z,width:"602",height:"358"})),(0,l.kt)("p",null,"M\xf4 h\xecnh CBOW(continuous Bag of words)"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329203008078",src:n(1819).Z,width:"594",height:"292"})),(0,l.kt)("p",null,"L\u1ea5y t\u1eeb kh\u1ecfi m\u1ed9t c\xe2u l\xe0m nh\xe3n."),(0,l.kt)("p",null,"\u0110\u1ea7u v\xe0o l\xe0 c\xe2u b\u1ecb khuy\u1ebft t\u1eeb. Nh\xe3n l\xe0 t\u1eeb b\u1ecb khuy\u1ebft."),(0,l.kt)("p",null,"M\xf4 h\xecnh h\u1ecdc c\xe1c \u0111i\u1ec1n v\xe0o ch\u1ed7 tr\u1ed1ng. "),(0,l.kt)("p",null,"Position c\u1ee7a t\u1eeb s\u1ebd kh\xf4ng quan tr\u1ecdng."),(0,l.kt)("p",null,"Word2vec l\xe0 static embedding(m\u1ed9t t\u1eeb s\u1ebd l\xe0 m\u1ed9t vector c\u1ed1 \u0111\u1ecbnh) kh\xf4ng gi\u1ea3i quy\u1ebft \u0111c s\u1ef1 m\u01a1 h\u1ed3 c\u1ee7a c\xe2u. -> s\xe0i dynamic contextual embedding. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"M\xf4 h\xecnh CBOW")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230329203756092",src:n(7029).Z,width:"725",height:"394"})),(0,l.kt)("p",null,"CBOW gi\u1ed1ng b\xe0i to\xe1n ph\xe2n lo\u1ea1i. Autoencoders t\xe1i t\u1ea1o l\u1ea1i ch\xednh c\xe2u,..."),(0,l.kt)("p",null,"P(Y|X)"),(0,l.kt)("p",null,"P(X)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Skip Gram")),(0,l.kt)("p",null,"Skip-gram ng\u01b0\u1ee3c l\u1ea1i v\u1edbi CBOW"),(0,l.kt)("p",null,"Skip Gram : m\u1ed9t t\u1eeb b\u1ecb thi\u1ebfu d\u1ef1 \u0111o\xe1n nh\u1eefng t\u1eeb xung quanh"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230330090130592",src:n(6126).Z,width:"543",height:"300"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Word2Vec")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230330090156720",src:n(8222).Z,width:"543",height:"300"})),(0,l.kt)("p",null,"C\xe1c vector \u0111\xe3 c\xf3 ng\u1eef ngh\u0129a, quan h\u1ec7 v\u1edbi nhau. Gi\xfap m\xe1y c\xf3 th\u1ec3 hi\u1ec3u \u0111\u01b0\u1ee3c sau khi train tr\xean m\u1ed9t l\u01b0\u1ee3ng data \u0111\u1ee7 l\u1edbn."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"S\u1eed dung word2vec")),(0,l.kt)("p",null,"L\u1ea5y vector onehot * W => vector embedding c\u1ee7a m\u1ed7i t\u1eeb"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20230330090401169",src:n(3957).Z,width:"713",height:"368"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Bi\u1ec3u di\u1ec5n s\xe2u")),(0,l.kt)("p",null,"\u0110i\u1ec3m Y\u1ebfu: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bi\u1ec3u di\u1ec5n c\xe1c t\u1eeb v\u1eabn c\xf2n y\u1ebfu (fix embedding")))}u.isMDXComponent=!0},8250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329192740134-e33a2132765856d06dded6634101041c.png"},3403:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329195115905-1d33ebace259d7cbb182325d75d92e42.png"},5217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329200210387-10810278cc46c943ba7d4ae0390b7af3.png"},1799:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329201759398-3c5b12fa2c7487cee5d6132fd8f850db.png"},4993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329202121623-2b25af7335bd31fcaaa2dad1c21b35b8.png"},303:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329202607859-b1eb782071fe8ea9c0bcb72128db056d.png"},7593:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329202930194-754b9486607d51803e87d0b229581a0a.png"},1819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329203008078-6664452689f701b01ec051cd1542a814.png"},7029:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230329203756092-89e32bcc5f371f6410894dda811c2521.png"},6126:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230330090130592-cde1733f885477dfd250ffccab4cbded.png"},8222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230330090156720-055892bc3d90efaddaa16b06076c44f0.png"},3957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230330090401169-86757d36ed1df4353b36c230d0cc277a.png"}}]);