"use strict";(self.webpackChunkmy_second_brain=self.webpackChunkmy_second_brain||[]).push([[9877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={slug:"What i know about RAG",title:"What i know about RAG",authors:["whoisltd"],tags:["deep-learning","nlp","natural-language-processing","retrieval","llm"]},i=void 0,l={unversionedId:"nlp/rag",id:"nlp/rag",title:"What i know about RAG",description:"What is know about RAG",source:"@site/docs/nlp/rag.md",sourceDirName:"nlp",slug:"/nlp/What i know about RAG",permalink:"/docs/nlp/What i know about RAG",draft:!1,editUrl:"https://github.com/whoisltd/my-second-brain/blob/main/docs/nlp/rag.md",tags:[{label:"deep-learning",permalink:"/docs/tags/deep-learning"},{label:"nlp",permalink:"/docs/tags/nlp"},{label:"natural-language-processing",permalink:"/docs/tags/natural-language-processing"},{label:"retrieval",permalink:"/docs/tags/retrieval"},{label:"llm",permalink:"/docs/tags/llm"}],version:"current",frontMatter:{slug:"What i know about RAG",title:"What i know about RAG",authors:["whoisltd"],tags:["deep-learning","nlp","natural-language-processing","retrieval","llm"]},sidebar:"tutorialSidebar",previous:{title:"NLP for Question Answering",permalink:"/docs/nlp/NLP for Question Answering"}},s={},u=[{value:"What is know about RAG",id:"what-is-know-about-rag",level:2},{value:"What is RAG?",id:"what-is-rag",level:3},{value:"When to use Retrieval-Augmented Generation?",id:"when-to-use-retrieval-augmented-generation",level:3},{value:"Retrieval-Augmented Generation vs Fine-tuning",id:"retrieval-augmented-generation-vs-fine-tuning",level:3},{value:"How does RAG work?",id:"how-does-rag-work",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-know-about-rag"},"What is know about RAG"),(0,r.kt)("h3",{id:"what-is-rag"},"What is RAG?"),(0,r.kt)("p",null,"Retrieval-Augemented Generation, is an AI framework to improve"),(0,r.kt)("p",null,"the responses of Large Language Models (LLMs). RAG helps LLMs give better answers by using both their own knowledge and externa information sources."),(0,r.kt)("p",null,"Generic LLM often use, such as GPT, LLM with RAG."),(0,r.kt)("p",null,"In the retrieval phase, an algorithm finds relevant information based on the user's question. The source can be public information like the internet or a set of private documents."),(0,r.kt)("p",null,"In the generation phase, the LLM uses both the retrieved information and its own knowledge to form an answer. It can also provide source links for transparency."),(0,r.kt)("h3",{id:"when-to-use-retrieval-augmented-generation"},"When to use Retrieval-Augmented Generation?"),(0,r.kt)("p",null,"RAG is typically used for knowledge-intensive NLP tasks. It is a good way to incorporate new information into LLMs."),(0,r.kt)("p",null,"For example, the Llama 2 model is trained with data that has no mention of itself, the Llama 2 model. So if we ask the model a question about Llama2,"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"what is so special about llama 2?")),(0,r.kt)("p",null,"The Llama 2 model says"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Llama 2 is a unique and special animal for several reasons. Here are some of the most notable features that make it stand out\u2026")),(0,r.kt)("p",null,"Which is not quite what you mean. But with RAG and documents of Llama 2 publications, it says"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Llama 2 is a collection of pretrained and fine-tuned large language models (LLMs) developed and released by GenAI, Meta. The models are optimized for dialogue use cases and outperform open-source chat models on most benchmarks tested\u2026")),(0,r.kt)("p",null,"Thats pretty right on! So RAG is a good way to incorporate now of proprietary information to LLMs."),(0,r.kt)("h3",{id:"retrieval-augmented-generation-vs-fine-tuning"},"Retrieval-Augmented Generation vs Fine-tuning"),(0,r.kt)("p",null,"RAG and fine-tuning are the two most popular ways to incorporate new incorporation in LLMs. Both require additional data but they are used differently."),(0,r.kt)("p",null,"Fine-tuining perform additional training with the new data. We will get a new LLM model that captures your data.  We will then use the new model to replace it with the old one."),(0,r.kt)("p",null,"In contrast, RAG does not require changing the model. It incorporates the new data in the prompt."),(0,r.kt)("h3",{id:"how-does-rag-work"},"How does RAG work?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://agi-sphere.com/wp-content/uploads/2023/09/image-5-1024x498.png",alt:"Retrieval Augmented Generation (RAG) pipeline."})),(0,r.kt)("p",null,"In above workflow, documents are first broken down into chunks of sentences. They are then transformed into embeddings (a bunch of numbers) using a sentence transformer model. Those embeddings are then stored in a vector database with indexing for fast search and retrieval."),(0,r.kt)("p",null,"The RAG pipeline is implemented using the LangChain RetrievalQA. Is uses the similarity search to search the question against the database. The maching sentences and the question are used as the input to the Llama 2 Chat LLM."),(0,r.kt)("p",null,"That's why the LLM can aswer questions based on the document: RAG uses vector search to find relevant sentences and icludes them in the prompt."))}d.isMDXComponent=!0}}]);