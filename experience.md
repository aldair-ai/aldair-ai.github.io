---
layout: default
title: Experience
education:
  - title: M.S. in Data Science
    school: University of California, San Diego (UCSD)
    dates: Expected March 2027
    logo: ucsd.png
  - title: MicroMaster in Statistics and Data Science
    school: Massachusetts Institute of Technology (MITx)
    logo: mitx.png
  - title: B.S. in Computer Science
    school: National University of Engineering
    logo: uni.png
---

<header class="page-header">
  <h1>Experience</h1>
  <p class="lead">Education, work, talks and teaching.</p>
</header>

<section class="section" aria-labelledby="education">
  <h2 id="education">Education</h2>
  {% include timeline.html items=page.education %}
</section>

<section class="section" aria-labelledby="work">
  <h2 id="work">Work Experience</h2>
  {% comment %}
    Roles, descriptions and impact lines live in _data/roles.yml (shared with the Home page).
    Each role there has a "TODO impact" placeholder for a quantified impact line.
  {% endcomment %}
  {% include timeline.html items=site.data.roles detailed="true" %}
</section>

<section class="section" aria-labelledby="talks">
  <h2 id="talks">Talks &amp; Presentations</h2>

  <ul class="compact-list">
    <li>
      <div>
        <p class="compact-title">CCAT – Data FirstStep</p>
        <p class="compact-meta">Keynote · University audience, 150+ attendees</p>
      </div>
      <span class="compact-date">June 2024</span>
    </li>
    <li>
      <div>
        <p class="compact-title">CLAIN Hackathon – OCR &amp; Speech Recognition Solutions</p>
        <p class="compact-meta">4th place · 30 teams · 250+ professionals</p>
      </div>
      <span class="compact-date">June 2023</span>
    </li>
    <li>
      <div>
        <p class="compact-title">Credicorp Internal Audit Conference</p>
        <p class="compact-meta">Corporate conference · 500+ attendees</p>
      </div>
      <span class="compact-date">August 2023</span>
    </li>
  </ul>
</section>

<section class="section" aria-labelledby="teaching">
  <h2 id="teaching">Teaching Experience</h2>

  <ul class="compact-list compact-list--logos">
    <li>
      <img src="{{ '/assets/img/logos/isil.png' | relative_url }}" class="logo logo--sm" width="32" height="32" alt="" loading="lazy">
      <div>
        <p class="compact-title">ISIL, Peru</p>
        <p class="compact-meta">Instructor · Data Science &amp; Machine Learning</p>
      </div>
      <span class="compact-date">2024 – Present</span>
    </li>
    <li>
      <img src="{{ '/assets/img/logos/sama.jpg' | relative_url }}" class="logo logo--sm" width="32" height="32" alt="" loading="lazy">
      <div>
        <p class="compact-title">CC. SAMA (PAD), Peru</p>
        <p class="compact-meta">Instructor</p>
      </div>
      <span class="compact-date">2024 – 2025</span>
    </li>
  </ul>
</section>

<section class="section" aria-labelledby="skills">
  <h2 id="skills">Skills</h2>

  <div class="skill-rows">
    <div class="skill-row">
      <h3 class="skill-label">Programming</h3>
      <ul class="tags">
        <li class="tag">Python</li><li class="tag">R</li><li class="tag">Scala</li><li class="tag">C++</li>
      </ul>
    </div>
    <div class="skill-row">
      <h3 class="skill-label">Databases</h3>
      <ul class="tags">
        <li class="tag">MySQL</li><li class="tag">Oracle</li><li class="tag">MongoDB</li><li class="tag">NoSQL</li><li class="tag">BigQuery</li>
      </ul>
    </div>
    <div class="skill-row">
      <h3 class="skill-label">ML &amp; AI</h3>
      <ul class="tags">
        <li class="tag">XGBoost</li><li class="tag">TensorFlow</li><li class="tag">PyTorch</li><li class="tag">Hugging Face</li><li class="tag">LLMs</li><li class="tag">RAG</li><li class="tag">YOLO</li>
      </ul>
    </div>
    <div class="skill-row">
      <h3 class="skill-label">Data Engineering</h3>
      <ul class="tags">
        <li class="tag">Spark</li><li class="tag">PySpark</li><li class="tag">Databricks</li><li class="tag">Airflow</li>
      </ul>
    </div>
    <div class="skill-row">
      <h3 class="skill-label">Languages</h3>
      <ul class="tags">
        <li class="tag">English</li><li class="tag">Portuguese</li><li class="tag">Spanish</li>
      </ul>
    </div>
  </div>
</section>
