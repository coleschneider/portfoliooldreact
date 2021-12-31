import { IParticlesParams } from 'react-particles-js';

export const particleConfig = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 200,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 0.5,
      direction: 'top',
      out_mode: 'out',
    },
  },
} as IParticlesParams;
