particlesJS('particles-js', {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#ff0000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: '',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: '#fff',
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    },
    array: []
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: false
    },
    modes: {
      grab:{
        distance: 100,
        line_linked:{
          opacity: 0.1
        }
      },
      bubble:{
        distance: 200,
        size: 80,
        duration: 0.4
      },
      repulse:{
        distance: 200,
        duration: 0.4
      },
      push:{
        particles_nb: 4
      },
      remove:{
        particles_nb: 2
      }
    },
    mouse:{}
  },
  retina_detect: false,
  fn: {
    interact: {},
    modes: {},
    vendors:{}
  },
  tmp: {}
});