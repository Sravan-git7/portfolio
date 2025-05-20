import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const Scene = () => {
  // Using a placeholder model for the 3D element
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <motion.group
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, rotateY: Math.PI * 2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <mesh>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial 
            color="#4c1d95" 
            emissive="#6d28d9"
            emissiveIntensity={0.5}
            roughness={0.3} 
            metalness={0.8} 
          />
        </mesh>
      </motion.group>
    </Float>
  );
};

const HeroCanvas: React.FC = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="city" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;