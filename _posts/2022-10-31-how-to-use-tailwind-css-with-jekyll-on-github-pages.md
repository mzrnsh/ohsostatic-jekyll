---
layout: post
title: How to use Tailwind CSS with Jekyll on GitHub Pages
category: deployment
tags: hosting deployment github-pages tailwind postcss
date: 2022-10-31
image:
  file: tailwind_gh-pages.png
  alt: Jekyll and Tailwind CSS logos
---

__OhSoStatic Jekyll__ is built with Jekyll, styled with Tailwind CSS, and hosted
on GitHub Pages. That combination doesn't quite work out of box. Tailwind CSS
requires PostCSS to compile and while Jekyll has a PostCSS plugin, it's not
currently [whitelisted](https://pages.github.com/versions/){:target="_blank"},
meaning Tailwind CSS won't be included in the default build produced by GitHub
Pages. Let's fix this via GitHub Actions.

## Prerequisite: a Jekyll + Tailwind CSS site that works locally

This tutorial assumes you already have a working Jekyll + Tailwind CSS website
that's successfully built locally, but when you try to deploy it to GitHub
Pages, styles are not applied.

If that's not true and you're looking for general help on how to use Tailwind
CSS with Jekyll, look no further than this [brilliant article](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/){:target="_blank"}.

## Step 1: create a GitHub Workflow

Create a new YAML file in `.github/workflows/` directory. Since it's all about
GitHub Pages, let's call it `github-pages.yml`. This is the contents for your
file:

```yaml
# .github/workflows/github-pages.yml

name: Build and deploy this site to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  github-pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1
          bundler-cache: true
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - name: Build site
        uses: limjh16/jekyll-action-ts@v2
        with:
          enable_cache: true
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

Now commit this file and push to GitHub.

Because the repository now includes this workflow, pushing to the `main` branch
will trigger a custom build instead of a standard one, and the generated `_site`
directory will be pushed to the `gh-pages` branch.

A couple notes about that branch:

1. It will be created and updated automatically by this workflow. No need to
create it manually now, or ever push to it directly in future.
2. There's nothing special about the name `gh-pages`. Unlike the past, GitHub
Pages can now work with _any_ branch. It's just the GitHub action
`peaceiris/actions-gh-pages` we rely on uses that name, so we'll go with it.

## Step 2: configure GitHub Pages

Open your repository on GitHub and navigate to Settings > Pages. In the **Build
and deployment** section there are two dropdown controlls: __Source__ and
__Branch__. Make sure their values are set to __Deploy from a branch__ and
__gh-pages__ respectively.

That's it: if this article is correct and you did everything according to it,
your Jekyll website should now look the same on GitHub Pages as it looks on your
machine.

It may seem confusing that we are _not_ selecting the __GitHub Actions__ option
in __Source__, but we don't need to: as far as GitHub Pages is concerned we are
telling it to deploy a normal branch that contains a pre-built static website.
It doesn't even know (or care) that the website was built with Jekyll, or that
it was styled via Tailwind CSS.
