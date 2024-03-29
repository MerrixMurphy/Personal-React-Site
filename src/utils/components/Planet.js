import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Ceres from "../../layout/images/2k_ceres_fictional.jpg";
import Earth from "../../layout/images/2k_earth_daymap.jpg";
import Eris from "../../layout/images/2k_eris_fictional.jpg";
import Haumea from "../../layout/images/2k_haumea_fictional.jpg";
import Jupiter from "../../layout/images/2k_jupiter.jpg";
import MakeMake from "../../layout/images/2k_makemake_fictional.jpg";
import VenusSurface from "../../layout/images/2k_venus_surface.jpg";
import VenusAtmosphere from "../../layout/images/2k_venus_atmosphere.jpg";
import Mars from "../../layout/images/2k_mars.jpg";
import Mercury from "../../layout/images/2k_mercury.jpg";
import Neptune from "../../layout/images/2k_neptune.jpg";
import Saturn from "../../layout/images/2k_saturn.jpg";
import Uranus from "../../layout/images/2k_uranus.jpg";
let nameholder = null;
let deployed = null;
let site = null;

function Sphere(props) {
  const textures = [
    Ceres,
    Earth,
    Eris,
    Haumea,
    Jupiter,
    MakeMake,
    VenusSurface,
    VenusAtmosphere,
    Mars,
    Mercury,
    Neptune,
    Saturn,
    Uranus,
  ];
  const ranNum = Math.floor(Math.random() * (textures.length - 1));
  const texture = useLoader(TextureLoader, textures[ranNum]);
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y = mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z = 0.41;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={() =>
        nameholder
          ? window.open(site)
          : null
      }
    >
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Planet({ liveName, deploy }) {
  nameholder = liveName;
  deployed = deploy;
  if (deployed === "git"){
  site = `https://merrixmurphy.github.io/` + nameholder
  } else if (deployed === "itch") {
    if (liveName === "minifight"){
      site = "https://edwardvonbock.itch.io/trial-of-explorers"
    }
  } else {
  site = `https://` + nameholder + `.onrender.com`
  }
  return (
    <Canvas>
      <directionalLight intensity={1} position={[10, 10, 30]} />
      <Suspense fallback={null}>
        <Sphere position={[0, 0, 3]} />
      </Suspense>
    </Canvas>
  );
}

export default Planet;
