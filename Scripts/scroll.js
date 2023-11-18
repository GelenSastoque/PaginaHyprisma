function scrollToSection(id) {
    // Get the section with the specified ID
    var section = document.getElementById(id);
  
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  }