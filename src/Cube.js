import * as THREE from "three";
import React, {} from "react";
import './Cube.css'
import Model from "./Model?url";
import {Canvas} from '@react-three/fiber'
import {OrbitControls,
     //useFBX
     } from "@react-three/drei";




const Cube = () => {
return (
    <div className="contCu">
        <Canvas camera={{ near: 1, far: 800, position: [50, 50, 50] }}>
            <color attach="background" args={['#e1dfdd']} />
            <OrbitControls enableZoom={false}></OrbitControls>
            <Model scale={.4}></Model>
            <ambientLight intensity={4}></ambientLight>
            <pointLight position={[10, 10, 10]} />

        </Canvas>
    </div>
  );
 }

  


export default Cube;