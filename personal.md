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
                <img src="{{ post.cover | relative_url }}" class="post-image" alt="{{ post.title }}">
            {% endif %}

            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            
            <small>{{ post.date | date: "%B %d, %Y" }}</small>

            <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
            </article>

            {% unless forloop.last %}<hr>{% endunless %}
        {% endif %}
        {% endfor %}

  </main>
</div>