---
layout: default
title: Home
wide: true
---

<!-- ===== Hero ===== -->
<section class="home-hero">
  <img src="{{ '/assets/img/headshot.jpg' | relative_url }}" class="home-hero-photo" width="80" height="80" alt="{{ site.author }}">

  <h1 class="home-hero-title">
    <span class="home-hero-name">{{ site.author }}</span>
    <span class="home-hero-headline">Data Scientist building ML and GenAI systems you can measure and trust.</span>
  </h1>

  <p class="home-hero-sub">
    5+ years across banking, CPG and retail. Led ML teams at Credicorp.
    M.S. Data Science at UC San Diego (March 2027).
  </p>

  <p class="status-pill"><span class="status-dot" aria-hidden="true"></span>Open to Data Scientist and ML roles</p>

  <ul class="actions">
    <li><a class="button button--primary" href="{{ '/assets/cv.pdf' | relative_url }}" download>{% include icon.html name="download" %}Download CV</a></li>
    <li><a class="button button--secondary" href="{{ site.contact.linkedin }}">{% include icon.html name="linkedin" %}LinkedIn</a></li>
    <li><a class="button button--secondary" href="{{ site.contact.github }}">{% include icon.html name="github" %}GitHub</a></li>
    <li><a class="button button--secondary" href="mailto:{{ site.contact.email }}">{% include icon.html name="mail" %}Email</a></li>
  </ul>
</section>

<!-- ===== Logo strip ===== -->
<section class="home-section logo-strip reveal" aria-labelledby="logo-strip-label">
  <p class="logo-strip-label" id="logo-strip-label">Studied and worked at</p>
  <ul class="logo-strip-list">
    <li><img src="{{ '/assets/img/logos/ucsd.png' | relative_url }}" width="80" height="80" alt="UC San Diego" loading="lazy"></li>
    <li><img src="{{ '/assets/img/logos/mitx.png' | relative_url }}" width="251" height="77" alt="MITx" loading="lazy"></li>
    <li><img src="{{ '/assets/img/logos/bcp.png' | relative_url }}" width="317" height="80" alt="Credicorp (BCP)" loading="lazy"></li>
    <li><img src="{{ '/assets/img/logos/abinbev.png' | relative_url }}" width="320" height="59" alt="AB InBev" loading="lazy"></li>
    <li><img src="{{ '/assets/img/logos/insiteai.png' | relative_url }}" width="320" height="77" alt="Insite AI" loading="lazy"></li>
    <li><img src="{{ '/assets/img/logos/pichincha.png' | relative_url }}" width="320" height="67" alt="Pichincha Bank" loading="lazy"></li>
  </ul>
</section>

<!-- ===== Featured projects (content in _data/projects.yml) ===== -->
<section class="home-section reveal" aria-labelledby="featured-projects">
  <h2 id="featured-projects">Featured projects</h2>

  <div class="grid">
    {% for project in site.data.projects %}
    <article class="card project-card">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-text">{{ project.description }}</p>

      <ul class="metrics" aria-label="Highlights">
        {% for metric in project.metrics %}<li class="metric">{{ metric }}</li>{% endfor %}
      </ul>

      <div class="card-footer">
        <ul class="tags" aria-label="Tech stack">
          {% for tag in project.tags %}<li class="tag">{{ tag }}</li>{% endfor %}
        </ul>
        <p class="card-links">
          {% for link in project.links %}<a href="{{ link.url }}">{% include icon.html name=link.icon %}{{ link.label }}</a>{% endfor %}
        </p>
      </div>
    </article>
    {% endfor %}
  </div>

  <p class="section-more"><a href="{{ '/projects' | relative_url }}">All projects →</a></p>
</section>

<!-- ===== Experience snapshot (content in _data/roles.yml) ===== -->
<section class="home-section home-section--narrow reveal" aria-labelledby="experience-snapshot">
  <h2 id="experience-snapshot">Experience</h2>

  <ol class="timeline">
    {% for role in site.data.roles %}
    <li class="timeline-item">
      <img src="{{ role.logo | prepend: '/assets/img/logos/' | relative_url }}" class="logo" width="44" height="44" alt="" loading="lazy">
      <div>
        <p class="timeline-title">{{ role.title }}</p>
        <p class="timeline-company">{{ role.company }}</p>
      </div>
      <p class="timeline-date">{{ role.dates }}</p>
    </li>
    {% endfor %}
  </ol>

  <p class="section-more"><a href="{{ '/experience' | relative_url }}">Full experience →</a></p>
</section>
