import profile from '../assets/threeassets/profile.jpg'
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber'
import { Line, Text, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three'
import { useRef, Suspense, useEffect } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
extend({ OrbitControls })
// react, react three fiber, background, load 360 image
const deg2rad = degrees => degrees * (Math.PI / 180);
let cameraX = 0
const Orbit = () => {
    const { camera, gl } = useThree()
    camera.rotation.set(deg2rad(-30), 0, 0);
    camera.position.set(cameraX, 6, 6)
    return (
        <orbitControls args={[camera, gl.domElement]} />
    );
}



const Background = props => {

    const { gl } = useThree();

    const texture = useTexture('https://i.ibb.co/X3Vj5G7/space.jpg')
    const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
    return (
        <primitive attach="background" object={formatted.texture} />
    )
}

const Box = props => {
    const ref = useRef()
    const texture = useLoader(THREE.TextureLoader, 'https://i.ibb.co/3YS0Y3j/profile.jpg')
    useFrame(state => {
        ref.current.rotation.y += .01
    })
    return (
        <mesh onClick={() => console.log('mmd')} ref={ref} {...props} castShadow receiveShadow>
            <boxBufferGeometry camera={{ position: [3, 3, 10] }} />
            <meshPhysicalMaterial map={texture} />
            <axesHelper />
        </mesh>
    )
}



const Bulb = props => {

    return (
        <mesh onClick={(e) => console.log('bulb')} {...props}>
            <pointLight castShadow />
        </mesh>
    );
}

function Threebg() {
    useEffect(() => {
        window.onscroll = () => {
            cameraX -= 100
        }
    }, [])
    return (
        <div style={{ height: '100vh', width: '100vw', position: 'fixed' }}>
            <Canvas linear flat onClick={(e) => console.log('canvas')}>
                <Stars onClick={(e) => console.log('stars')} />
                <Suspense fallback={null}>
                    <Background onClick={(e) => console.log('background')} />
                </Suspense>

                <Suspense fallback={null}>
                    <Box onClick={(e) => console.log('box')} position={[2, 1, 1]} />
                </Suspense>
                <ambientLight intensity={0.2} />
                {/*
                <Text color="hotpink" anchorX="center" anchorY="middle" fontSize="2" position={[0, 3, 0]}>
                    hello world!
                </Text>
                */}
                <Bulb position={[0, 3, 0]} />
                <Orbit />
            </Canvas>
        </div>
    );
}

export default ThreeBg;