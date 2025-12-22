import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingSphere = ({ position, scale, color, speed = 1, distort = 0.3 }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
  speed?: number;
  distort?: number;
}) => {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Particles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number],
    scale: Math.random() * 0.05 + 0.02,
  }));

  return (
    <>
      {particles.map((particle, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0} floatIntensity={1}>
          <mesh position={particle.position}>
            <sphereGeometry args={[particle.scale, 8, 8]} />
            <meshBasicMaterial color="#14b8a6" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
          
          {/* Main spheres */}
          <FloatingSphere position={[-3, 1, -2]} scale={1.2} color="#14b8a6" speed={1.5} distort={0.4} />
          <FloatingSphere position={[3.5, -1, -3]} scale={0.8} color="#a855f7" speed={1} distort={0.3} />
          <FloatingSphere position={[1, 2.5, -4]} scale={0.6} color="#0ea5e9" speed={2} distort={0.2} />
          <FloatingSphere position={[-2, -2, -2]} scale={0.4} color="#8b5cf6" speed={1.2} distort={0.5} />
          
          {/* Particles */}
          <Particles />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
