import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#050816",
          },
        },

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#00F5FF",
          },

          links: {
            enable: true,
            color: "#00F5FF",
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 2,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
