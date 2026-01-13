
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;

      // Color
      colors[i] = 0; // R
      colors[i + 1] = Math.random() * 0.8 + 0.2; // G (cyan-ish)
      colors[i + 2] = Math.random() * 0.8 + 0.2; // B (cyan-ish)
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );



    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.001,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Wave points
    const generateWavePoints = () => {
      const waveGeometry = new THREE.BufferGeometry();
      const waveCount = 1000;
      const wavePositions = new Float32Array(waveCount * 3);
      const waveColors = new Float32Array(waveCount * 3);
  
      for (let i = 0; i < waveCount; i++) {
        const angle = (i / waveCount) * Math.PI * 20;
        const radius = 25 + Math.sin(angle * 0.5) * 5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.sin(angle * 0.5) * 10;
  
        wavePositions[i * 3] = x;
        wavePositions[i * 3 + 1] = y;
        wavePositions[i * 3 + 2] = z;
  
        waveColors[i * 3] = 0; // R
        waveColors[i * 3 + 1] = 0.8; // G
        waveColors[i * 3 + 2] = 1; // B
      }
  
      waveGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(wavePositions, 3)
      );
      waveGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(waveColors, 3)
      );
  
      const waveMaterial = new THREE.PointsMaterial({
        size: 0.15,
        sizeAttenuation: true,
        transparent: true,
        alphaTest: 0.001,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
      });
  
      const wavePoints = new THREE.Points(waveGeometry, waveMaterial);
      scene.add(wavePoints);
  
      return wavePoints;
    };
  
    const wavePoints = generateWavePoints();

    // Animation
    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0003;
        particlesRef.current.rotation.y += 0.0005;
      }

      wavePoints.rotation.z += 0.001;

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (cameraRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }

      if (rendererRef.current) {
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    // Handle mouse move
    const handleMouseMove = (event: MouseEvent) => {
      if (particlesRef.current) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        particlesRef.current.rotation.x += mouseY * 0.0005;
        particlesRef.current.rotation.y += mouseX * 0.0005;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }

      
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
      }

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-gradient-to-br from-dark-darker via-dark-light to-dark-darker"
    />
  );
};

export default ParticleBackground;
