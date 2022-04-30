/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
tsParticles.loadJSON('tsParticles', 'assets/particlesConfig.json').then(() => {
    // p is the loaded container, for using it later
    console.log('callback - particles.js config loaded');
  });
