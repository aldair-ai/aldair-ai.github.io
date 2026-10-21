---
layout: default
description: "Projects by Edwin Aldair Espinoza: abaudit, a multi-agent host advisor, Spanish loan intent classification, a hackathon assistant and research notebooks."
title: Projects
---

<header class="page-header">
  <h1>Projects</h1>
  <p class="lead">
    Selected projects in statistical engineering, machine learning theory, and production-ready open source software.
  </p>
</header>

<!-- ===== Project cards (content in _data/projects.yml) ===== -->
<div class="stack">
  {% for entry in site.data.projects %}
    {% include project-card.html project=entry large="true" %}
  {% endfor %}
</div>

<!-- ===== Research notes ===== -->
<section class="section" aria-labelledby="research-notes">
  <h2 id="research-notes">Research notes</h2>

  <ul class="research-list">
    <li class="research-item">
      <div>
        <h3 class="research-title">Statistical Thinking for Reliable ML</h3>
        <p class="research-desc">
          A structured portfolio of reproducible notebooks examining how and why published research findings
          fail to replicate, and what rigorous experimental design looks like in practice.
        </p>
        <p class="research-meta">10 modules · causal inference · multiple testing · publication bias · PPV · distribution shift</p>
      </div>
      <a class="research-link" href="https://github.com/aldair-ai/statistical-thinking">{% include icon.html name="github" %}GitHub</a>
    </li>
    <li class="research-item">
      <div>
        <h3 class="research-title">Machine Learning Theory</h3>
        <p class="research-desc">
          A deep-dive into the mathematical foundations of modern machine learning, from first principles to the
          phenomena that explain why large neural networks work better than classical theory predicts.
        </p>
        <p class="research-meta">6 notebooks · ERM · VC theory · SVM · Perceptron · double descent · benign overfitting</p>
      </div>
      <a class="research-link" href="https://github.com/aldair-ai/ml-concepts">{% include icon.html name="github" %}GitHub</a>
    </li>
  </ul>
</section>
