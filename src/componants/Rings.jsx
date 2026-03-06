import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { Float } from '@react-three/drei'

const Rings = ({ ...props }) => {
    const { nodes, materials } = useGLTF('models/logotipos_3d_-_aprenda_programar.glb')
    return (
        <Float dispose={null}>
            <group  {...props} position={[-12, 4, 0]} rotation={[0, -Math.PI, 0]}>
                <mesh

                    geometry={nodes.Object_22.geometry}
                    material={materials.JAVASCRIPT}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('models/logotipos_3d_-_aprenda_programar.glb');

export default Rings
