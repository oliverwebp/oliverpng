import * as THREE from "three";

import React, { Suspense, useLayoutEffect, useEffect } from "react";
import './Cube.css'

import { useLoader, Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ScrollControls, useScroll, useGLTF, useAnimations } from "@react-three/drei";




const Cube = () => {
    

  return (
    <div className="contCu">
        <Canvas camera={{ position: [100, 0, 10] }}>
            <Suspense fallback='null'>
            <color attach="background" args={['#e1dfdd']} />
                <ScrollControls>
                    <Moyu scale={.008}></Moyu>
                </ScrollControls>
                <ambientLight intensity={1} />
            </Suspense>
        </Canvas>
    </div>
  );

  function Moyu({...props}) {
    const scroll = useScroll()
    const { scene, nodes, animations } = useGLTF('/rubiks_cube.glb')
    const { actions } = useAnimations(animations, scene)
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    useEffect(() => void (actions['Scene'].play().paused = true), [actions])
    useFrame((state, delta) => {
        const action = actions['Scene']
        // The offset is between 0 and 1, you can apply it to your models any way you like
        const offset = 1 - scroll.offset
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
     
      })

    return <primitive object={scene} {...props} /> 
  }
};

export default Cube;