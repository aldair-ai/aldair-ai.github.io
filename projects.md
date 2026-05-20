---
layout: default
title: Projects
---

<div class="layout">

  {% include sidebar.html %}

  <main class="content">

    <h1>Projects</h1>

    <p class="hero">
      Selected projects in statistical engineering, machine learning theory, and production-ready open source software.
    </p>

    <!-- ===== Project 1 ===== -->
    <section class="project">
      <h2>abaudit — A/B Test Validity Auditor</h2>

      <img
        src="{{ '/assets/img/abaudit.jpg' | relative_url }}"
        class="project-image"
        alt="abaudit library"
      >

      <p>
        Open source Python library that audits the statistical validity of A/B test results.
        Most experimentation tools tell you <em>whether</em> a result is significant —
        <strong>abaudit</strong> tells you <em>whether to trust it</em>.
      </p>

      <p>
        Built on the Ioannidis (2005) Positive Predictive Value framework, the library
        detects Sample Ratio Mismatch, optional stopping inflation, multiple metric fishing,
        and data fabrication — then computes a composite bias score and generates a
        self-contained HTML audit report.
      </p>

      <ul>
        <li>Pip-installable · CI/CD via GitHub Actions · Published on PyPI</li>
        <li>184 tests · 100% coverage · tested on Python 3.9 – 3.12</li>
        <li>Modules: <code>validity</code>, <code>design</code>, <code>runtime</code>, <code>report</code></li>
      </ul>

      <p>
        <a href="https://github.com/aldair-ai/abaudit">View on GitHub →</a>
        &nbsp;·&nbsp;
        <a href="https://pypi.org/project/abaudit/">PyPI →</a>
      </p>
    </section>

    <hr>

    <!-- ===== Project 2 ===== -->
    <section class="project">
      <h2>Statistical Thinking for Reliable ML — Research Notebooks</h2>

      <img
        src="{{ '/assets/img/dsc215.jpg' | relative_url }}"
        class="project-image"
        alt="Statistical thinking notebooks"
      >

      <p>
        A structured portfolio of reproducible notebooks examining how and why
        published research findings fail to replicate — and what rigorous experimental
        design looks like in practice.
      </p>

      <p>
        Topics include the Ioannidis PPV framework, p-hacking and P-HARKing detection,
        meta-analysis with inverse-variance weighting and funnel plots, Benford's Law
        for data fabrication detection, Bonferroni and Benjamini-Hochberg corrections,
        causal inference with potential outcomes, and distribution shift in ML systems.
        Every concept is implemented from scratch with simulations, annotated visualizations,
        and formal statistical tests.
      </p>

      <ul>
        <li>10 modules · each paired with theory notes and a fully reproducible notebook</li>
        <li>Covers: causal inference · multiple testing · publication bias · PPV · distribution shift</li>
        <li>Directly informed the design of <strong>abaudit</strong></li>
      </ul>

      <p>
        <a href="https://github.com/aldair-ai/statistical-thinking">View on GitHub →</a>
      </p>
    </section>

    <hr>

    <!-- ===== Project 3 ===== -->
    <section class="project">
      <h2>Machine Learning Theory — From Perceptrons to Double Descent</h2>

      <img
        src="{{ '/assets/img/dsc240.png' | relative_url }}"
        class="project-image"
        alt="ML theory notebooks"
      >

      <p>
        A deep-dive into the mathematical foundations of modern machine learning —
        from first principles to the phenomena that explain why large neural networks
        work better than classical theory predicts.
      </p>

      <p>
        Implementations cover: Bayes-optimal classifiers, the Perceptron with
        Novikoff convergence proofs, soft-margin SVMs via convex optimization,
        Empirical Risk Minimization with Hoeffding and VC generalization bounds,
        and the double descent phenomenon with benign overfitting.
        Each notebook reproduces a key theoretical result empirically and connects
        it to practical ML engineering decisions.
      </p>

      <ul>
        <li>6 notebooks · algorithms implemented from scratch · theory verified empirically</li>
        <li>Covers: ERM · VC theory · SVM · Perceptron · double descent · benign overfitting</li>
        <li>Includes interactive browser demos for decision boundaries and perceptron training</li>
      </ul>

      <p>
        <a href="https://github.com/aldair-ai/ml-concepts">View on GitHub →</a>
      </p>
    </section>

  </main>
</div>
