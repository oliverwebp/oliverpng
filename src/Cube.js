import * as THREE from "three";

import React, { Suspense, useLayoutEffect, useEffect } from "react";
import './Cube.css'


import {Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll, useGLTF, useAnimations, OrbitControls, useFBX } from "@react-three/drei";




const Cube = () => {
    

  return (
    <div className="contCu">
        <Canvas camera={{ near: .1, far: 20000, position: [50, 50, 50] }}>
            <Suspense fallback='null'>
                
            <color attach="background" args={['#e1dfdd']} />

                <ScrollControls maxSpeed={.5}>
                    
                    <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                    <Moyu scale={.15}></Moyu>
                    
                </ScrollControls>
                <ambientLight intensity={1} />
            </Suspense>
        </Canvas>
    </div>
  );

//                    <SuzanneFBX scale={.05}></SuzanneFBX> camera position 1500

function SuzanneFBX(...props) {
  let fbx = useFBX('./1_cube.fbx')
  const scroll = useScroll()
    const { scene, nodes, animations } = useFBX('./1_cube.fbx')
    const { actions } = useAnimations(animations, scene)
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    useEffect(() => void (actions['Scene'].play().paused = true), [actions])
    useFrame((state, delta) => {
        const action = actions['Scene']
        const offset = 1 - scroll.offset
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration) * offset, 100, delta)
        state.camera.lookAt(0, 0, 0);

      })
  return <primitive object={fbx} />
}

  function Moyu({...props}) {
    const scroll = useScroll()
    const { scene, nodes, animations } = useGLTF('./rubiks_cube.glb')
    const { actions } = useAnimations(animations, scene)
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    useEffect(() => void (actions['Scene'].play().paused = true), [actions])
    useFrame((state, delta) => {
        const action = actions['Scene']
        const offset = 1 - scroll.offset
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration) * offset, 100, delta)
        state.camera.lookAt(0, 0, 0);

      })

    return <primitive object={scene} {...props} /> 
  }
};

export default Cube;