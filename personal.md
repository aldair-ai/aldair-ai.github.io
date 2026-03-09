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

    {% for post in site.posts %}
      {% if post.category == "personal" %}

      <article class="post">

        {% if post.cover %}
        <img
          src="{{ post.cover | relative_url }}"
          alt="{{ post.title }}"
          class="post-image"
        >
        {% endif %}

        <h2>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>

        <p>{{ post.excerpt }}</p>

        <p>
          <a href="{{ post.url | relative_url }}">Read article →</a>
        </p>

      </article>

      <hr>

      {% endif %}
    {% endfor %}

  </main>
</div>