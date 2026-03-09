---
layout: default
title: Personal
---

<div class="layout">

{% include sidebar.html %}

<main class="content">

<h1>Personal</h1>

<p class="hero">
Essays and reflections on music, games, movies, and other things I find interesting.
</p>

<div class="post-list">

{% for post in site.posts %}
  {% if post.category == "personal" %}

  <article class="post-preview">

    <h2>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
    </h2>

    <p class="post-excerpt">
      {{ post.excerpt }}
    </p>

    <a class="read-more" href="{{ post.url | relative_url }}">
      Read article →
    </a>

  </article>

  {% endif %}
{% endfor %}

</div>

</main>
</div>