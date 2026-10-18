---
layout: default
title: Home
wide: true
---

<section class="intro">
  <img src="{{ '/assets/img/headshot.jpg' | relative_url }}" class="intro-photo" width="144" height="144" alt="Edwin Espinoza">

  <div class="intro-body">
    <h1>Edwin Espinoza</h1>
    <p class="intro-role">Data Scientist · Machine Learning · AI</p>
    <p class="intro-location">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>
      San Diego, CA
    </p>

    <p class="lead">
      Master’s student in Data Science with 5+ years of experience applying Machine Learning and AI across finance,
      retail, and marketplace domains. Proven track record building predictive models and leading end-to-end
      analytics and experimentation initiatives to drive measurable business impact. Led ML teams for 2 years.
    </p>

    <ul class="actions">
      <li>
        <a class="button button--primary" href="mailto:e6espinoza@ucsd.edu">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z"/></svg>
          Email
        </a>
      </li>
      <li>
        <a class="button button--secondary" href="https://linkedin.com/in/aldair-ai">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.48 2.48 0 102.5 6a2.48 2.48 0 002.48-2.5zM3 8.98h4v12H3zM9 8.98h3.8v1.64h.05a4.17 4.17 0 013.75-2.06c4 0 4.75 2.63 4.75 6.05v6.37h-4v-5.64c0-1.35 0-3.08-1.88-3.08s-2.17 1.47-2.17 3v5.72H9z"/></svg>
          LinkedIn
        </a>
      </li>
      <li>
        <a class="button button--secondary" href="https://github.com/aldair-ai">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.19-3.37-1.19-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95a3.87 3.87 0 011.03-2.69 3.6 3.6 0 01.1-2.65s.84-.27 2.75 1.02a9.47 9.47 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02a3.6 3.6 0 01.1 2.65 3.87 3.87 0 011.03 2.69c0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0012 2z"/></svg>
          GitHub
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="home-projects" aria-labelledby="selected-projects">
  <div class="section-head">
    <h2 id="selected-projects">Selected projects</h2>
    <a href="{{ '/projects' | relative_url }}">All projects →</a>
  </div>

  <div class="grid">
    <article class="card card--link">
      <h3 class="card-title"><a href="{{ '/projects#abaudit' | relative_url }}">abaudit</a></h3>
      <p class="card-text">Open source Python library that audits the statistical validity of A/B test results.</p>
      <ul class="tags">
        <li class="tag">Python</li>
        <li class="tag">Experimentation</li>
        <li class="tag">PyPI</li>
      </ul>
    </article>

    <article class="card card--link">
      <h3 class="card-title"><a href="{{ '/projects#statistical-thinking' | relative_url }}">Statistical Thinking for Reliable ML</a></h3>
      <p class="card-text">Reproducible notebooks on why published findings fail to replicate, and what rigorous experimental design looks like.</p>
      <ul class="tags">
        <li class="tag">Causal inference</li>
        <li class="tag">Multiple testing</li>
      </ul>
    </article>

    <article class="card card--link">
      <h3 class="card-title"><a href="{{ '/projects#ml-theory' | relative_url }}">Machine Learning Theory</a></h3>
      <p class="card-text">The mathematical foundations of modern ML, from perceptrons to double descent, implemented from scratch.</p>
      <ul class="tags">
        <li class="tag">Learning theory</li>
        <li class="tag">SVM</li>
        <li class="tag">Double descent</li>
      </ul>
    </article>
  </div>
</section>
