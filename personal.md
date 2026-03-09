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

    {% raw %}
    {% for post in site.posts %}
      {% if post.category == "personal" %}
    {% endraw %}

    <article class="post">

      {% raw %}
      {% if post.cover %}
      <img
        src="{{ post.cover | relative_url }}"
        alt="{{ post.title }}"
        class="post-image"
      >
      {% endif %}
      {% endraw %}

      <h2>
        {% raw %}
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% endraw %}
      </h2>

      <p>
        {% raw %}
        {{ post.excerpt }}
        {% endraw %}
      </p>

      <p>
        {% raw %}
        <a href="{{ post.url | relative_url }}">Read article →</a>
        {% endraw %}
      </p>

    </article>

    <hr>

    {% raw %}
      {% endif %}
    {% endfor %}
    {% endraw %}

  </main>
</div>