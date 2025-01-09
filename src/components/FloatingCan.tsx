"use client"

import { Float } from '@react-three/drei';
import { forwardRef, ReactNode } from 'react';
import { Group } from 'three';
import { SodaCan, SodaCanProps } from './SodaCan';

type FloatingCanProps = {
    flavor?:SodaCanProps["flavor"];
    floatingSpeed?: number;
    rotationIntensity?: number;
    floatingIntensity?: number;
    floatingRange?: [number, number];
    children?: ReactNode
}

const FloatingCan = forwardRef<Group, FloatingCanProps>(({
    flavor = "blackCherry",
    floatingSpeed = 1.5,
    rotationIntensity = 1,
    floatingIntensity = 1,
    floatingRange = [-0.1, 0.1],
    children,
    ...props
}, ref

) => {
  return (
    <group ref={ref} {...props}>
        <Float
        speed={floatingSpeed}
        rotationIntensity={rotationIntensity}
        floatIntensity={floatingIntensity}
        floatingRange={floatingRange}
            >
            {children}
            <SodaCan flavor={flavor}/>
        </Float>
    </group>
  )
})

FloatingCan.displayName = "FloatingCan"

export default FloatingCan;