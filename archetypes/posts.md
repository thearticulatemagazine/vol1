---
title:  "{{ replace .Name "-" " " | title }}"
authid: 
categories: []
date: {{ .Date | time.Format .Site.Params.dateFormat }}
images: []
tags: []
description: ""
summary: ""
draft: true
---