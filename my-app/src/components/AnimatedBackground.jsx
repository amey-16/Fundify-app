"use client";
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Sphere } from "@react-three/drei"
import { useRef } from "react"

function AnimatedSphere({ position, scale, color }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.5
    meshRef.current.position.x = position[0] + Math.cos(time * 0.3) * 0.3
    meshRef.current.rotation.y = time * 0.2
    meshRef.current.rotation.z = time * 0.1
  })

  return (
    (<Sphere ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.7} transparent opacity={0.6} />
    </Sphere>)
  );
}

export default function AnimatedBackground() {
  return (
    (<div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Environment preset="sunset" background />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere position={[-4, 0, -5]} scale={2} color="#88c9ff" />
        <AnimatedSphere position={[4, 0, -5]} scale={1.5} color="#8888ff" />
        <AnimatedSphere position={[0, 3, -5]} scale={1} color="#ff88ff" />
        <AnimatedSphere position={[-2, -2, -3]} scale={0.8} color="#88ffff" />
        <AnimatedSphere position={[3, 2, -4]} scale={1.2} color="#ffff88" />
      </Canvas>
    </div>)
  );
}

