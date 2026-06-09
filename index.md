---
layout: default
title: Sophia Ruger
---

<!-- ABOUT SECTION -->
<section id="about">
  <h2 class="section-title">About</h2>

  <div class="card-row">
    <div class="card">
      <h3>Who I Am</h3>
      <p>I'm a geospatial analyst and environmental scientist passionate about using data and maps to understand our world. I combine technical skill with creative thinking to tell stories through spatial data.</p>
    </div>
    <div class="card">
      <h3>What I Do</h3>
      <p>From GIS analysis and cartographic design to environmental impact assessments, I build spatial solutions that help organizations make better decisions about land, resources, and sustainability.</p>
    </div>
    <div class="card">
      <h3>My Approach</h3>
      <p>I believe good maps are both rigorous and beautiful. Every project I take on is driven by a commitment to accuracy, clarity, and a deep respect for the landscapes I'm mapping.</p>
    </div>
  </div>
</section>

<hr class="section-divider" />

<!-- PROJECTS SECTION -->
<section id="projects">
  <h2 class="section-title">Projects</h2>

  <div class="project-grid">

    <!-- PROJECT CARD 1
         To edit: change the image src, title, description, and link.
         The onclick passes: title, description, image path, project URL -->
    <div class="project-card" onclick="openModal(
      'Urban Heat Mapping',
      'An analysis of urban heat island effects across Portland using Landsat thermal imagery and census data. This project identified neighborhoods most vulnerable to extreme heat events and informed city cooling infrastructure planning.',
      'assets/images/project1.jpg',
      'https://github.com/sgruger'
    )">
      <img src="assets/images/project1.jpg" alt="Urban Heat Mapping" />
      <div class="project-card-body">
        <h4>Urban Heat Mapping</h4>
        <p>Thermal analysis of urban heat islands using Landsat imagery.</p>
        <span class="project-tag">GIS · Remote Sensing</span>
      </div>
    </div>

    <!-- PROJECT CARD 2 -->
    <div class="project-card" onclick="openModal(
      'Watershed Restoration Index',
      'A composite spatial index built in ArcGIS Pro to prioritize watershed restoration sites across the Willamette Valley. Layers included erosion risk, habitat connectivity, landowner willingness, and hydrological modeling outputs.',
      'assets/images/project2.jpg',
      'https://github.com/sgruger'
    )">
      <img src="assets/images/project2.jpg" alt="Watershed Restoration Index" />
      <div class="project-card-body">
        <h4>Watershed Restoration Index</h4>
        <p>Spatial prioritization model for restoration site selection.</p>
        <span class="project-tag">Hydrology · ArcGIS Pro</span>
      </div>
    </div>

    <!-- PROJECT CARD 3 -->
    <div class="project-card" onclick="openModal(
      'Wildfire Risk Dashboard',
      'An interactive web map built with Leaflet.js visualizing wildfire risk across Oregon based on fuel load, slope, aspect, wind patterns, and historical fire perimeters. Designed for use by county emergency managers.',
      'assets/images/project3.jpg',
      'https://github.com/sgruger'
    )">
      <img src="assets/images/project3.jpg" alt="Wildfire Risk Dashboard" />
      <div class="project-card-body">
        <h4>Wildfire Risk Dashboard</h4>
        <p>Interactive Leaflet.js map of Oregon wildfire risk factors.</p>
        <span class="project-tag">Web Mapping · Leaflet.js</span>
      </div>
    </div>

    <!-- ADD MORE PROJECTS by copying a project-card block above and editing the text/images -->

  </div>
</section>

<hr class="section-divider" />

<!-- CONTACT SECTION -->
<section id="contact">
  <h2 class="section-title">Contact</h2>
  <p style="text-align:center; color:#666; max-width:480px; margin:0 auto 1.5rem;">
    Interested in collaborating or have a project in mind? Reach out.
  </p>
  <p style="text-align:center;">
    <a href="mailto:your@email.com" style="color:#2a7f6f; font-weight:500;">your@email.com</a>
    &nbsp;·&nbsp;
    <a href="https://linkedin.com/in/yourprofile" style="color:#2a7f6f; font-weight:500;" target="_blank">LinkedIn</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/sgruger" style="color:#2a7f6f; font-weight:500;" target="_blank">GitHub</a>
  </p>
</section>
