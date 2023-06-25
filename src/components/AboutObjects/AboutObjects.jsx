import { useGLTF } from '@react-three/drei';

function AboutObjects() {
  return (
    <group scale={[1.5, 1.5, 1.5]} castShadow receiveShadow dispose={null}>
      <Book />
      <Target />
      <Arrow />
      {/* <Flag /> */}
      <Mac />
      {/* <ReactLogo /> */}
      <Cup2 />
      <Coffee />
      {/* <Baguette />  */}
    </group>
  );
}

export default AboutObjects;

function Book(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/book/model.gltf'
  );

  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return (
    <primitive
      receiveShadow
      castShadow
      object={scene}
      scale={1.6}
      rotation={[-1.57, 0, 2.2]}
      position={[0.5, 0.07, 3]}
      {...props}
    />
  );
}

function Target(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  );

  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return (
    <primitive
      receiveShadow
      castShadow
      object={scene}
      scale={0.45}
      rotation={[0, -0.4, 0]}
      position={[1, -0.01, -2.6]}
      {...props}
    />
  );
}

// function Flag(props) {
//   const { scene } = useGLTF('./model/flag.gltf');

//   scene.traverse(function (node) {
//     if (node.isMesh) {
//       node.castShadow = true;
//       node.receiveShadow = true;
//     }
//   });

//   return (
//     <primitive
//       receiveShadow
//       castShadow
//       object={scene}
//       scale={0.5}
//       rotation={[0, -0.6, 0]}
//       position={[2.1, -0.01, 0.8]}
//       {...props}
//     />
//   );
// }

function Arrow(props) {
  const { scene } = useGLTF('./model/arrow.gltf');

  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return (
    <primitive
      receiveShadow
      castShadow
      object={scene}
      scale={0.75}
      rotation={[1.55, 0, 3.5]}
      position={[-1.2, 0.65, 1.85]}
      {...props}
    />
  );
}

function Mac(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return (
    <primitive
      receiveShadow
      castShadow
      object={scene}
      scale={0.26}
      rotation={[0, 0.5, 0]}
      position={[-1.5, -0.12, 0]}
      {...props}
    />
  );
}

// function ReactLogo(props) {
//   const { scene } = useGLTF('./model/reactlogo.gltf');

//   scene.traverse(function (node) {
//     if (node.isMesh) {
//       node.castShadow = true;
//       node.receiveShadow = true;
//     }
//   });

//   return (
//     <primitive
//       receiveShadow
//       castShadow
//       object={scene}
//       scale={0.2}
//       rotation={[0, 1.57, 0]}
//       position={[-2.1, -0.05, -2]}
//       {...props}
//     />
//   );
// }

function Cup2(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-saucer/model.gltf'
  );

  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return (
    <primitive
      receiveShadow
      castShadow
      object={scene}
      scale={1.2}
      position={[-2.5, 0.01, 0]}
      {...props}
    />
  );
}

function Coffee(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf'
  );

  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return (
    <primitive
      receiveShadow
      castShadow
      object={scene}
      scale={1.2}
      position={[-2.5, 0.04, 0]}
      {...props}
    />
  );
}

// function Baguette(props) {
//   const { scene } = useGLTF('./model/bread.gltf');

//   scene.traverse(function (node) {
//     if (node.isMesh) {
//       node.castShadow = true;
//       node.receiveShadow = true;
//     }
//   });

//   return (
//     <primitive
//       receiveShadow
//       castShadow
//       object={scene}
//       scale={0.7}
//       rotation={[0, 1, 0]}
//       position={[0.9, 0.01, 2.7]}
//       {...props}
//     />
//   );
// }
