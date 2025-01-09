import FloatingCan from '@/components/FloatingCan'
import { useGSAP } from '@gsap/react'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import { useRef } from 'react'
import { Group } from 'three'

type Props = {}

export default function Scene(props: Props) {
    const can1Ref = useRef<Group>(null);
    const can2Ref = useRef<Group>(null);
    const can3Ref = useRef<Group>(null);
    const can4Ref = useRef<Group>(null);
    const can5Ref = useRef<Group>(null);

    const can1GroupRef = useRef<Group>(null);
    const can2GroupRef = useRef<Group>(null);

    const groupRef = useRef<Group>(null);

    const FLOAT_SPEED = 1.5

    useGSAP(()=>{
        if (
            !can1Ref.current ||
            !can2Ref.current ||
            !can3Ref.current ||
            !can4Ref.current ||
            !can5Ref.current ||
            !can1GroupRef.current ||
            !can2GroupRef.current ||
            !groupRef.current
        ) 
          return;

            // Set can starting location
            gsap.set(can1Ref.current.position, { x: -1.5 });
            gsap.set(can1Ref.current.rotation, { z: -0.5 });

            gsap.set(can2Ref.current.position, { x: 1.5 });
            gsap.set(can2Ref.current.rotation, { z: 0.5 });

            gsap.set(can3Ref.current.position, { y: 5, z: 2 });
            gsap.set(can4Ref.current.position, { y: 2, z: 4 });

            gsap.set(can5Ref.current.position, { y: -5 });
    })

  return (
    <group ref={groupRef} >

        <group ref={can1GroupRef}>
        <FloatingCan ref={can1Ref} flavor='blackCherry' floatingSpeed={FLOAT_SPEED}/>
        </group>

        <group ref={can2GroupRef}>
        <FloatingCan ref={can2Ref} flavor='lemonLime' floatingSpeed={FLOAT_SPEED}/>
        </group>


        <FloatingCan ref={can3Ref} flavor='grape' floatingSpeed={FLOAT_SPEED}/>

        <FloatingCan ref={can4Ref} flavor='strawberryLemonade' floatingSpeed={FLOAT_SPEED}/>

        <FloatingCan ref={can5Ref} flavor='watermelon' floatingSpeed={FLOAT_SPEED}/>
        
        
        
        
        
        
        <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5}/>
    </group>
  )
}