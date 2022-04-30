/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
tsParticles.loadJSON('particles-js', 'assets/particlesConfig.json').then(function(p) {
    // p is the loaded container, for using it later
    console.log('callback - particles.js config loaded');
  });