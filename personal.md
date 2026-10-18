---
layout: default
title: Personal
---

<header class="page-header">
  <h1>Personal</h1>
  <p class="lead">Essays and reflections on music, games, movies, and other things I find interesting.</p>
</header>

{% assign personal_posts = site.pages | where: "category", "personal" | sort: "date" | reverse %}
<div class="stack">
  {% for post in personal_posts %}
  <article class="card card--link">
    <p class="card-eyebrow"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %-d, %Y' }}</time></p>
    <h2 class="card-title"><a href="{{ post.url | relative_url | remove: '.html' }}">{{ post.title }}</a></h2>
    <p class="card-text">{{ post.description }}</p>
  </article>
  {% endfor %}
</div>
