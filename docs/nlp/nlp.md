---
slug: NLP Basic Review
title: NLP Basic Review
authors: [whoisltd]
tags: [Deep-learning, NLP, Natural-language-processing]
sidebar_position: 1
---

## NPL  Task

**Language Modeling**: Mô hình từ ngữ, câu chữ, ... cần mô hình hóa ngôn ngữ trc khi thực hiện các task khác: text classification, information extraction,...

Text classification

Information extraction

Information retrieval

Question answering

Machine translation

Conversational agent

NLP task by difficulty:![image-20230329192740134](/home/whoisltd/.config/Typora/typora-user-images/image-20230329192740134.png)

Why is NPL challenging?

Ngôn ngữ con người mang sự mơ hồ, ý nghĩa phụ thuộc nhiều vào ngữ cảnh, thành ngữ, nhiều ngôn ngữ.

#### Approaches to NPL

- Heuristics-Based (rule based)
- Classical Machine Learning (e.g Naive Bayes, SVM, HMM, CRF,... )
- Deep Learning

### Deep learning for NLP

- Recurrent newral networks
- Long short-term memory
- Convolutional neural networks
- Autoencoders: E.g: Từ một câu sinh ra câu mới
- Transformers

#### Why DL Is Not Yet the Silver Bullet for NLP

- Overfitting on small datasets
- Interpertable models
- Cost
- On-device deployment

![image-20230329195115905](/home/whoisltd/.config/Typora/typora-user-images/image-20230329195115905.png)

Tốn tiền quá z trời.

GPU Tesla T4 vs GPT-2 1 lúc chỉ dc 4-5 người.

Tối ưu mô hình quá có thể làm giảm nhiều độ chính xác.

### embedding + word2vec

Giúp máy hiểu được ngôn ngữ : 

Giải thiết phân phối: 2 từ cũng ngữ cảnh khả năng cao giống nhau.

Word Smilarity

![image-20230329200210387](/home/whoisltd/.config/Typora/typora-user-images/image-20230329200210387.png)

Ý nghĩa của một từ( The meaning of word): xác định một từ dựa vào những từ xung quanh.

Mô hình một từ thành vector

TF IDF, Word2vec

![image-20230329201759398](/home/whoisltd/.config/Typora/typora-user-images/image-20230329201759398.png)

Word-vector: Mô hình hóa từ thành vector dựa trên số lần xuất hiện của từ trong văn bản

Word-word Matrix: 

![image-20230329202121623](/home/whoisltd/.config/Typora/typora-user-images/image-20230329202121623.png)

![image-20230329202607859](/home/whoisltd/.config/Typora/typora-user-images/image-20230329202607859.png)

### Word2vec

How to build word2vec

vector one hot

![image-20230329202930194](/home/whoisltd/.config/Typora/typora-user-images/image-20230329202930194.png)

Mô hình CBOW(continuous Bag of words)

![image-20230329203008078](/home/whoisltd/.config/Typora/typora-user-images/image-20230329203008078.png)

Lấy từ khỏi một câu làm nhãn.

Đầu vào là câu bị khuyết từ. Nhãn là từ bị khuyết.

Mô hình học các điền vào chỗ trống. 

Position của từ sẽ không quan trọng.

Word2vec là static embedding(một từ sẽ là một vector cố định) không giải quyết đc sự mơ hồ của câu. -> sài dynamic contextual embedding. 

**Mô hình CBOW**

![image-20230329203756092](/home/whoisltd/.config/Typora/typora-user-images/image-20230329203756092.png)

CBOW giống bài toán phân loại. Autoencoders tái tạo lại chính câu,...

P(Y|X)

P(X)

**Skip Gram**

Skip-gram ngược lại với CBOW

Skip Gram : một từ bị thiếu dự đoán những từ xung quanh

![image-20230330090130592](/home/whoisltd/.config/Typora/typora-user-images/image-20230330090130592.png)

**Word2Vec**

![image-20230330090156720](/home/whoisltd/.config/Typora/typora-user-images/image-20230330090156720.png)

Các vector đã có ngữ nghĩa, quan hệ với nhau. Giúp máy có thể hiểu được sau khi train trên một lượng data đủ lớn.

**Sử dung word2vec**

Lấy vector onehot * W => vector embedding của mỗi từ

![image-20230330090401169](/home/whoisltd/.config/Typora/typora-user-images/image-20230330090401169.png)

**Biểu diễn sâu**

Điểm Yếu: 

- Biểu diễn các từ vẫn còn yếu (fix embedding