---
layout: post
title: Using Tailwind CSS with Jekyll on GitHub Pages
category: deployment
tags: hosting deployment github-pages tailwind postcss
date: 2022-10-31
image:
  file: jekyll-tailwind.png
  alt: Jekyll and Tailwind CSS logos
---

This website is built with Jekyll, styled with Tailwind CSS, and hosted on
GitHub Pages. That combination doesn't quite work out of box. Tailwind CSS
requires PostCSS to compile and while Jekyll has a PostCSS plugin, it's not
currently [whitelisted](https://pages.github.com/versions/), meaning Tailwind
CSS won't be included in the default build produced by GitHub Pages. Let's fix
this via GitHub Actions.

## Prerequisite: a Jekyll + Tailwind CSS site that works locally

This tutorial assumes you already have a working Jekyll + Tailwind CSS website
that's built with no issues locally, but when you try to deploy it to GitHub
Pages, styles are not applied.

If that's not true and you're looking for general help on how to use Tailwind
CSS with Jekyll, look no further than this [brilliant article](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/){:target="_blank"}.

## Step 1: create a GitHub Action

...

## Step 2: configure GitHub Pages

...
