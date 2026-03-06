import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('models/react.glb')
    return (
        <Float floatIntensity={1}>
            <group position={[6, 8, 0]} scale={0.2} {...props}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('models/react.glb')

export default ReactLogo