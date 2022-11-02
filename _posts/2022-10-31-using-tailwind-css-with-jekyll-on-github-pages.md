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

__OhSoStatic Jekyll__ is built with Jekyll, styled with Tailwind CSS, and hosted
on GitHub Pages. This setup doesn't work out of box: Tailwind CSS requires
PostCSS to compile, and because of this, it won't be included in the default
build produced by GitHub Pages. In this article we will discuss how to fix this
via GitHub Actions.

## Prerequisite: a Jekyll + Tailwind CSS site that works locally

I am assuming you already have a Tailwind CSS based Jekyll website that works
fine on your local machine. Then you tried to deploy it to GitHub Pages and no
styles were applied, and that's why you are here. If this is not true, and
you're looking for general help on how to use Tailwind CSS with Jekyll, look no
further than this [brilliant article](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/){:target="_blank"}.

## Step 1: create GitHub Action

...

## Step 2: configure GitHub Pages

...
