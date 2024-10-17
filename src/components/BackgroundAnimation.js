import { useEffect } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector('canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Create geometry for the curtain
    const geometry = new THREE.PlaneGeometry(200, 200, 100, 100);
    
    // Shader material for the flowing curtain effect
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        uniform float time;
        
        void main() {
          vUv = uv;
          // Create a waving effect
          vec3 pos = position;
          pos.z += sin(vUv.y * 10.0 + time * 5.0) * 1.5; // Waving effect
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float time;

        // Define colors
        vec3 color1 = vec3(0.99, 0.58, 0.13); // color-orange (#fe9421)
        vec3 color2 = vec3(0.90, 0.02, 0.59); // color-pink (#e60696)
        vec3 color3 = vec3(0.95, 0.32, 0.34); // color-red (#f35356)
        vec3 color4 = vec3(0.01, 0.06, 0.37); // color-dark-blue
        vec3 color5 = vec3(0.37, 0.17, 0.98); // color-violet

        void main() {
          // Generate a smooth gradient based on UV coordinates
          float gradient = smoothstep(0.0, 1.0, vUv.y);
          vec3 finalColor = mix(mix(color1, color2, gradient), mix(color3, color4, gradient), sin(time + vUv.y * 10.0) * 0.5 + 0.5);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      uniforms: {
        time: { value: 0.0 }
      }
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Position camera
    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update time uniform for animation - reduced speed
      material.uniforms.time.value += 0.02; // Slow down the animation here

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div data-page-theme="gradient" className="styles_fiber__R8VPk">
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'auto' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <canvas style={{ display: 'block', width: '100%', height: '100%' }} data-engine="three.js r162"></canvas>
        </div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
