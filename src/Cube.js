import * as THREE from "three";
import rubik_cub from './rubiks_cube.glb';
import React, { Suspense, useLayoutEffect, useEffect, useRef } from "react";
import './Cube.css'
import Model2 from "./Model2?url";
import Model3 from "./Model3?url";
import {Canvas, useFrame } from '@react-three/fiber'
import {Html, ScrollControls, useScroll, useGLTF, useAnimations, OrbitControls,
     //useFBX
     } from "@react-three/drei";




const Cube = () => {
    
  /*function Moyu({...props}) {
    const scroll = useScroll()
    const { scene, nodes, animations } = useGLTF(rubik_cub)

    return <primitive object={scene} {...props} /> 
  }
  */
return (
    <div className="contCu">
        <Canvas camera={{ near: 1, far: 800, position: [50, 50, 50] }}>
            <color attach="background" args={['#e1dfdd']} />
            <OrbitControls enableZoom={false}></OrbitControls>
            <Model2></Model2>
            <ambientLight ></ambientLight>
            <pointLight position={[10, 10, 10]} />

        </Canvas>
    </div>
  );
 }

  


export default Cube;