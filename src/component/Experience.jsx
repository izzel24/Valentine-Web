import { AccumulativeShadows, Center, Environment, OrbitControls, RandomizedLight, Stage } from '@react-three/drei'
import React from 'react'
import { Model } from './Three/Box'

export default function Experience() {
  return (
    <>
        <group position={[0, -0.99, 0]}>
            <Center top>
            <Model />
            </Center>
            <ambientLight intensity={.4}/>
            <directionalLight
                castShadow
                position={[-8,16,-8]}
                intensity={0}/>
            <pointLight 
                position={[0,50,0]}
                intensity={2}/>
        </group>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <Environment preset="lobby"  />
    </>
  )
}
