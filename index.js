const particlesJS = require('particles.js')

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});