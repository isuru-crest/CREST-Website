---
title: "A paper accepted in Mining Software Repositories (MSR) 2020"
date: "2020-03-10 15:01:00"
author: "Nguyen Khoi Tran"
featured_image: ""
video_link: "null"
quote_author: "null"
quote_text: "null"
categories: 
    - research topic
    - cyber security
tags: 
    - Research Paper
    - Software
format: "null"
type: "blog"
is_featured: true
main_content: "This is main content."
---


We are delighted to announce that our paper PUMiner: Mining security posts from Q&A websites using PU learning has been accepted for presentation and publication in the top quality conference Mining Software Repository (MSR), Seoul, South Korea 2020 (Core rank A).

The paper provides a new machine learning way to retrieve information security with no negative class.

Congratulations to all the authors!!!

Paper Title:PUMiner: Mining Security Posts from Developer Question and Answer Websites with PU Learning

Author:Triet H. M. Le, David Hin, Roland Croft, M. Ali Babar

Abstract: Security is an increasing concern in software development. Developer Question and Answer (Q&A) websites provide a large amount of security discussion. Existing studies have used human-defined rules to mine security discussions, but these works still miss many posts, which may lead to an incomplete analysis of the security practices reported on Q&A websites. Traditional supervised Machine Learning methods can automate the mining process; however, the required negative (non-security) class is too expensive to obtain. We propose a novel learning framework, PUMiner, to automatically mine security posts from Q&A websites. PUMiner builds a context-aware embedding model to extract features of the posts, and then develops a two-stage PU model to identify security content using the labelled Positive and Unlabelled posts. We evaluate PUMiner on more than 17.2 million posts on Stack Overflow and 52,611 posts on Security StackExchange. We show that PUMiner is effective with the validation performance of at least 0.85 across all model configurations. Moreover, Matthews Correlation Coefficient (MCC) of PUMiner is 0.906, 0.534 and 0.084 points higher than one-class SVM, positive-similarity filtering, and one-stage PU models on unseen testing posts, respectively. PUMiner also performs well with an MCC of 0.745 for scenarios where string matching totally fails. Even when the ratio of the labelled positive posts to the unlabelled ones is only 1:100, PUMiner still achieves a strong MCC of 0.65, which is 160% better than fully-supervised learning. Using PUMiner, we provide the largest and up-to-date security content on Q&A websites for practitioners and researchers.

Preprint: https://arxiv.org/abs/2003.03741