import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'

const Target = (props) => {
    const { nodes, materials } = useGLTF('models/figma.glb')
    return (
        <Float floatIntensity={1}>
            <group position={[-6, 12, 0]} scale={1.5} {...props}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.figma_Texture_0.geometry}
                    material={materials.Texture}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('models/figma.glb')

export default Target