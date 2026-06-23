---
layout: default
title: Sophia Ruger
---

<!-- ABOUT SECTION -->
<section id="about">
  <h2 class="section-title">About</h2>

<!--
  <div class="card-row">
    <div class="card">
      <h3>Who I Am</h3>
      <p>I'm a geospatial data analyst and environmentalist with a passion for using cartography as an art and science to solve challenges. I combine my creativity, technical skills and complex-adaptive thinking to tell stories through spatial data. In my free time I enjoy hiking, bouldering, sewing, and other creative endeavors! </p>
    </div>
    <div class="card">
      <h3>What I Do</h3>
      <p>From spatial analysis and cartographic design to environmental and social impact assessments, I build spatial solutions that help organizations make better decisions. I have experience in coding (Python, R, SQL), data reporting, 2D and 3D catrographic visualization (ArcGIS Online(AGOL), Leaflet), statstical analysis, science communication, and leadership.</p>
    </div>
    <div class="card">
      <h3>My Approach</h3>
      <p>Every project I undertake is driven by a commitment to accuracy, clarity, and a deep respect for the social, cultural, or environmental landscapes I am mapping. Above all, I am searching for clients with guiding values similar to my own: the use of technology as a force for good.</p>
    </div>
  </div> 
  -->

<div class="about-row">
  <div class="about-text">
    <div class="about-block">
      <h3>Who I Am</h3>
      <p>I'm a geospatial data analyst and environmentalist with a passion for using cartography as an art and science to solve challenges. I combine my creativity, technical skills and complex-adaptive thinking to tell stories through spatial data. In my free time I enjoy hiking, bouldering, sewing, and other creative endeavors!</p>
    </div>
    <div class="about-block">
      <h3>What I Do</h3>
      <p>From spatial analysis and cartographic design to environmental and social impact assessments, I build spatial solutions that help organizations make better decisions. I have experience in coding (Python, R, SQL), data reporting, 2D and 3D cartographic visualization (ArcGIS Online (AGOL), Leaflet), statistical analysis, science communication, and leadership.</p>
    </div>
    <div class="about-block">
      <h3>My Approach</h3>
      <p>Every project I undertake is driven by a commitment to accuracy, clarity, and a deep respect for the social, cultural, or environmental landscapes I am mapping. Above all, I am searching for clients with guiding values similar to my own: the use of technology as a force for good.</p>
    </div>
  </div>

  <img src="assets/images/headshot.jpg" alt="Sophia Ruger" class="about-headshot" />
</div>

  
</section>

<hr class="section-divider" />

<!-- PROJECTS SECTION -->
<section id="projects">
  <h2 class="section-title">Professional Projects</h2>

  <div class="project-grid">

    <!-- PROJECT CARD 1
         To edit: change the image source, title, description, and link.
         The onclick passes: title, description, image path, project URL -->
    <div class="project-card" onclick="openModal(
      'Dog Licensing Compliance',
      'An analysis of licencing compliance at the jurisdiction and tract level for Maricopa County Animal Care and Control. MCACC offers resources to support responsible pet ownership and prevent pet surrender, such as behavior guidance and access to low-cost veterinary care for residents in the Phoenix metropolitan area of Arizona. The organization provides a wide range of services, including pet adoptions, vaccination and microchipping clinics, spay and neuter programs, and incident-response, though the service area the authors aim to address in this study is dog licensing (Ruger, S., Flores, A., Ngo, C., & Sheehan, C.).',
      'assets/images/project1.jpg',
      'https://storymaps.arcgis.com/stories/b3b3e8ea42c74dbca0faf812afe59355'
    )">
      <img src="assets/images/project1.jpg" alt="Dog Licensing Compliance" />
      <div class="project-card-body">
        <h4>Dog Licensing Compliance</h4>
        <p>Multivariate analysis to better understand pet owner compliance and target interventions.</p>
        <span class="project-tag">AGOL · Hot Spot Analysis</span>
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
    Interested in collaborating or have a project in mind? Connect with me below.
  </p>
  <p style="text-align:center;">
    <a href="mailto:503soph@gmail.com" style="color:#2a7f6f; font-weight:500;">503soph@gmail.com</a>
    &nbsp;·&nbsp;
    <a href="https://www.linkedin.com/in/sophia-ruger-13b313271/" style="color:#2a7f6f; font-weight:500;" target="_blank">LinkedIn</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/sgruger" style="color:#2a7f6f; font-weight:500;" target="_blank">GitHub</a>
  </p>
</section>
