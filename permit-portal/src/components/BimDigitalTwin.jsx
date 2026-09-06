import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BimDigitalTwin({ plotArea = 200, builtUpArea = 120, height = 9 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const width = currentRef.clientWidth;
    const heightPx = currentRef.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // Slate-900

    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(20, 20, 30);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, heightPx);
    currentRef.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight.position.set(10, 20, 15);
    scene.add(dirLight);

    // Plot Boundary (Ground Mesh)
    const sideLen = Math.sqrt(plotArea) || 14;
    const groundGeo = new THREE.PlaneGeometry(sideLen, sideLen);
    const groundMat = new THREE.MeshBasicMaterial({ color: 0x1e293b, side: THREE.DoubleSide });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = Math.PI / 2;
    scene.add(ground);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(40, 20, 0x3b82f6, 0x334155);
    scene.add(gridHelper);

    // 3D Building Mass Model (BIM Digital Twin)
    const buildingSide = Math.sqrt(builtUpArea) || 10;
    const bldgGeo = new THREE.BoxGeometry(buildingSide, height, buildingSide);
    const bldgMat = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.85,
      wireframe: false
    });
    const building = new THREE.Mesh(bldgGeo, bldgMat);
    building.position.y = height / 2;
    scene.add(building);

    // Roof Rainwater Catchment Volume Highlight
    const roofGeo = new THREE.BoxGeometry(buildingSide, 0.2, buildingSide);
    const roofMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = height + 0.1;
    scene.add(roof);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      scene.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (currentRef.contains(renderer.domElement)) {
        currentRef.removeChild(renderer.domElement);
      }
    };
  }, [plotArea, builtUpArea, height]);

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
      <div className="absolute top-3 left-3 z-10 bg-slate-950/80 text-white text-[10px] font-mono px-3 py-1.5 rounded-lg border border-slate-800">
        3D BIM DIGITAL TWIN / HEIGHT: {height}m | RWH CATCHMENT ACTIVE
      </div>
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
