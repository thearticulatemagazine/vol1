---
title:  "{{ replace .Name "-" " " | title }}"
authid: 
img: 
categories: []
tags: []
date: {{ .Date | time.Format .Site.Params.dateFormat }}
description: ""
summary: ""
draft: false
---