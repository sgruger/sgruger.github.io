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
      <p>From spatial analysis and cartographic design to environmental and social impact assessments, I build spatial solutions that help organizations make better decisions. I have experience in coding (Python, R, SQL), data reporting, 2D and 3D catrographic visualization (ArcGIS Online(AGOL), Leaflet), interactive dashboards (Solara), statstical analysis, science communication, and leadership.</p>
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
      <p>Every project I undertake is driven by a commitment to accuracy, clarity, and a deep respect for the social, cultural, or environmental landscapes I am mapping. Above all, I am searching for clients with guiding values similar to my own: the use of technology as a force for good. View my professional and academic projects below!</p>
    </div>
  </div>

  <img src="assets/images/headshot.jpg" alt="Sophia Ruger" class="about-headshot" />
</div>

</section>

<hr class="section-divider" />

<!-- PHOTO GALLERY SECTION -->
<section id="gallery">
  <h2 class="section-title">Map Gallery</h2>
  <p style="text-align:center; color:#666; max-width:520px; margin: -0.5rem auto 2rem;">
    A collection of thematic maps I created that explore urban, social, and environmental dynamics.
  </p>

  <div class="slideshow">
    <button class="slide-btn slide-prev" onclick="moveSlide(-1)">&#8592;</button>

    <div class="slide-track">
      <!-- SLIDE 1 — replace src and caption -->
      <div class="slide active">
        <img src="assets/images/gallery1.jpg" alt="Map 1" />
        <p class="slide-caption">Caption for photo one</p>
      </div>
      <!-- SLIDE 2 -->
      <div class="slide">
        <img src="assets/images/gallery2.jpg" alt="Map 2" />
        <p class="slide-caption">Caption for photo two</p>
      </div>
      <!-- SLIDE 3 -->
      <div class="slide">
        <img src="assets/images/gallery3.jpg" alt="Map 3" />
        <p class="slide-caption">Caption for photo three</p>
      </div>
      <!-- SLIDE 4 -->
      <div class="slide">
        <img src="assets/images/gallery4.jpg" alt="Map 4" />
        <p class="slide-caption">Caption for photo four</p>
      </div>
      <!-- ADD MORE SLIDES by copying a <div class="slide"> block above -->
    </div>

    <button class="slide-btn slide-next" onclick="moveSlide(1)">&#8594;</button>
  </div>

  <!-- Dot indicators -->
  <div class="slide-dots" id="slideDots"></div>
</section>

<!-- PROJECTS SECTION -->
<section id="projects">
  <h2 class="section-title">Projects</h2>

  <div class="project-grid">

    <!-- PROJECT CARD 1
         To edit: change the image source, title, description, and link.
         The onclick passes: title, description, image path, project URL -->
    <div class="project-card" onclick="openModal(
      'Dog Licensing Compliance (2026)',
      'An analysis of licencing compliance at the jurisdiction and tract level using density models. MCACC provides a wide range of services, including pet adoptions, vaccination and microchipping clinics, spay and neuter programs, and incident-response, though the service area the authors aim to address in this study is dog licensing (Ruger, S., Flores, A., Ngo, C., & Sheehan, C.). Read about our findings using the link below.',
      'assets/images/project1.jpg',
      'https://storymaps.arcgis.com/stories/b3b3e8ea42c74dbca0faf812afe59355'
    )">
      <img src="assets/images/project1.jpg" alt="Dog Licensing Compliance" />
      <div class="project-card-body">
        <h4>Dog Licensing Compliance</h4>
        <p>Multivariate analysis to better understand pet owner compliance and target interventions for Maricopa County Animal Care and Control.</p>
        <span class="project-tag">AGOL · Hot Spot Analysis</span>
      </div>
    </div>

    <!-- PROJECT CARD 2 -->
    <div class="project-card" onclick="openModal(
      'Spatial Trends of Urban Habitats (Jan. 2025)',
      'A series of blogs and maps created to measure social, temporal, and spatial trends of habitat gardening. Our research found that residential habitat certifications are most common, while the rest are on other types of land including schoolyards, farmland or businesses. When observed by municipality, the certified habitats per capita tends to increase as the municipal population decreases. These findings were presented by Sophia Ruger and Dr. Kelli Larson at the 2025 CAP LTER Symposium.',
      'assets/images/project2.jpg',
      'https://www.azwildlife.org/blog/13454758'
    )">
      <img src="assets/images/project2.jpg" alt="Watershed Restoration Index" />
      <div class="project-card-body">
        <h4>Spatial Trends of Urban Habitats</h4>
        <p>Cluster Analysis of Certified Wildlife Habitat over time and space in collaboration with the Arizona Wildlife Federation.</p>
        <span class="project-tag">Ripley's K · ArcGIS Pro</span>
      </div>
    </div>

    <!-- PROJECT CARD 3 -->
    <div class="project-card" onclick="openModal(
      'Mapping Hope: Using Data to Reach Women in Need',
      'Conducted a geographic and statistical analysis of five years of Hope Women’s Center client intake data, revealing that three locations served more than 70% of all clients and identifying opportunities to improve service delivery. Produced strategic recommendations in an interal report for resource allocation, enhanced data collection, and expansion of high-impact programs to help guide future decisions and increase access to essential services for women and families across Arizona.',
      'assets/images/project3.jpg',
      'https://news.asu.edu/20250916-local-national-and-global-affairs-asu-students-provide-help-and-hope-women-crisis'
    )">
      <img src="assets/images/project3.jpg" alt="Hope Women's Center" />
      <div class="project-card-body">
        <h4>Mapping Hope: Using Data to Reach Women in Need</h4>
        <p>Quantitative reporting for one of Arizona's Largest Women's centers.</p>
        <span class="project-tag">R Studio · Multivariate Regression</span>
      </div>
    </div>

    <!-- ADD MORE PROJECTS by copying a project-card block above and editing the text/images -->

  </div>
</section>

<hr class="section-divider" />

<!-- HUGGING FACE DASHBOARD -->
<section id="dashboard">
  <h2 class="section-title">Interactive Mobility Tracker Dashboard</h2>
  <div style="display: flex; justify-content: center; margin: 2rem 0;">
    <iframe
      src="https://sgruger-nyc-mobility-dashboard.hf.space"
      frameborder="0"
      width="1100"
      height="488"
      style="border-radius: 4px; box-shadow: 0 4px 20px rgba(42,127,111,0.12);"
    ></iframe>
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
    <a href="mailto:503soph@gmail.com" style="color:#556989; font-weight:500;">503soph@gmail.com</a>
    &nbsp;·&nbsp;
    <a href="https://www.linkedin.com/in/sophia-ruger-13b313271/" style="color:#2a7f6f; font-weight:500;" target="_blank">LinkedIn</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/sgruger" style="color:#2a7f6f; font-weight:500;" target="_blank">GitHub</a>
  </p>
</section>
