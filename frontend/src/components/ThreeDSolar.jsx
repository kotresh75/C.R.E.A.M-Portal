import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows, RoundedBox, Cylinder } from '@react-three/drei';

const Tree = ({ position, scale = 1 }) => (
  <group position={position} scale={scale}>
    <Cylinder args={[0.1, 0.15, 0.6]} position={[0, 0.3, 0]}>
      <meshStandardMaterial color="#78350f" roughness={0.9} />
    </Cylinder>
    <RoundedBox args={[1, 1, 1]} radius={0.5} smoothness={4} position={[0, 0.9, 0]}>
      <meshStandardMaterial color="#10B981" roughness={0.8} />
    </RoundedBox>
  </group>
);

const EcoHome = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle bobbing and subtle tilt for the entire island
    groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Floating Island Base */}
      <RoundedBox args={[7, 0.3, 5.5]} radius={0.15} position={[0, 0.15, 0]}>
        <meshStandardMaterial color="#d1fae5" roughness={1} />
      </RoundedBox>
      <RoundedBox args={[6.8, 0.2, 5.3]} radius={0.1} position={[0, 0.05, 0]}>
        <meshStandardMaterial color="#a7f3d0" roughness={1} />
      </RoundedBox>
      
      {/* Landscaping / Trees */}
      <Tree position={[-2.5, 0.3, 1.8]} scale={0.8} />
      <Tree position={[2.5, 0.3, -1.8]} scale={1.2} />
      <Tree position={[-2.8, 0.3, -1.2]} scale={0.9} />
      <Tree position={[2.8, 0.3, 1.5]} scale={0.7} />

      {/* Main House Body */}
      <RoundedBox args={[3.5, 2.2, 2.8]} radius={0.05} position={[0, 1.4, 0]}>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
      </RoundedBox>

      {/* Modern Slanted Roof */}
      <group position={[0, 2.5, 0]} rotation={[0, 0, 0.12]}>
        {/* Roof Base */}
        <RoundedBox args={[4.2, 0.2, 3.2]} radius={0.05} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </RoundedBox>
        
        {/* Solar Panels Grid */}
        <group position={[0, 0.22, 0]}>
          {[[-1, 0.7], [0.5, 0.7], [-1, -0.7], [0.5, -0.7]].map((pos, i) => (
            <mesh key={i} position={[pos[0], 0, pos[1]]}>
              <boxGeometry args={[1.4, 0.05, 1.2]} />
              <meshPhysicalMaterial color="#0f172a" metalness={0.9} roughness={0.1} clearcoat={1} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Large Modern Windows */}
      <mesh position={[-0.4, 1.4, 1.41]}>
        <boxGeometry args={[2.2, 1.2, 0.05]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
      </mesh>
      
      {/* Side Window */}
      <mesh position={[-1.76, 1.4, 0]}>
        <boxGeometry args={[0.05, 1.2, 1.2]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
      </mesh>

      {/* Front Door */}
      <mesh position={[1.1, 0.8, 1.41]}>
        <boxGeometry args={[0.6, 1.2, 0.05]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Attached Garage Extension */}
      <RoundedBox args={[2, 1.4, 2.4]} radius={0.05} position={[2.7, 1.0, 0.2]}>
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </RoundedBox>
      
      {/* Garage Door */}
      <mesh position={[2.7, 0.85, 1.41]}>
        <boxGeometry args={[1.5, 1.1, 0.05]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.4} />
      </mesh>

      {/* Driveway */}
      <mesh position={[2.7, 0.31, 2.0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>
    </group>
  );
};

const ThreeDSolar = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', cursor: 'grab', position: 'relative', zIndex: 10 }}>
      <Canvas camera={{ position: [8, 6, 12], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#10B981" />
        <directionalLight position={[0, 5, 10]} intensity={0.4} color="#38bdf8" />
        <Environment preset="city" />
        
        <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.5}>
          <group scale={0.75}>
            <EcoHome />
          </group>
        </Float>

        <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={20} blur={3} far={5} color="#064e3b" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
      </Canvas>
    </div>
  );
};

export default ThreeDSolar;
