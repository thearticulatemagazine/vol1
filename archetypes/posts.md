---
title:  "{{ replace .Name "-" " " | title }}"
authid: 
categories: []
date: {{ .Date | time.Format .Site.Params.dateFormat }}
img: 
tags: []
description: ""
summary: ""
draft: true
---