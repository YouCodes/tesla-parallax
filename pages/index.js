import Head from 'next/head'
import Image from 'next/image'
import {useRef} from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import { config } from 'react-spring'
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/Navbar'

export default function Home() {
  const ref = useRef()
  return (
    <div>
      <Head>
        <title>Tesla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax pages={8} ref={ref}>
<main>
  <ParallaxLayer>
     <Navbar />
  </ParallaxLayer>
   <ParallaxLayer
    offset={0}
    speed={0.1}
    factor={1}
    style={{ textAlign: 'center', width: '100%', height: 'auto'}}>
<img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD" alt="Red Model 3 parked on weathered concrete in front of a cityscape" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" />
</ParallaxLayer>
<ParallaxLayer
offset={0.15}
style={{ textAlign: 'center', width: '100%', height: 'auto'}}> 
<h1 className=""><font size="7"><strong>Model 3</strong></font></h1>
</ParallaxLayer>
<ParallaxLayer
  offset={1}
    speed={0.1}
      factor={1}>
<img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70" alt="Metallic blue Model Y driving down a hillside highway" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" />
</ParallaxLayer>
<ParallaxLayer
offset={1.35}
style={{ textAlign: 'center', width: '100%', height: 'auto'}}> 
<h1 className=""><font size="7"><strong>Model Y</strong></font></h1>
</ParallaxLayer>
<ParallaxLayer
  offset={2}
    speed={0.1}
      factor={1}>
   <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD" alt="Solid black Model S accelerating on an elevated highway	" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" />
</ParallaxLayer>
<ParallaxLayer
offset={2.25}
style={{ textAlign: 'center', width: '100%', height: 'auto'}}> 
<h1 className=""><font size="7"><strong>Model S</strong></font></h1>
</ParallaxLayer>
<ParallaxLayer
offset={3}
speed={0.1}
  factor={1}>
  <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/27fd9006-d653-4d01-bc64-f30df30de1a4/bvlatuR/std/4096x2560/MX-Homepage-Desktop-LHD" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/27fd9006-d653-4d01-bc64-f30df30de1a4/bvlatuR/std/4096x2560/MX-Homepage-Desktop-LHD" alt="Pearl white Model X navigating a mountainous road" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" />
</ParallaxLayer>
<ParallaxLayer
offset={3.25}
style={{ textAlign: 'center', width: '100%', height: 'auto'}}> 
<h1 className=""><font size="7"><strong>Model X</strong></font></h1>
</ParallaxLayer>
<ParallaxLayer
offset={4}
speed={0.1}
  factor={1}>
  <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D" alt="Ranch style home powered by Tesla solar panels and Powerwall" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" />
</ParallaxLayer>
<ParallaxLayer
offset={4.25}
style={{ textAlign: 'center', width: '100%', height: 'auto'}}> 
<h1 className=""><font size="7"><strong>Solar Panels</strong></font></h1>
</ParallaxLayer>
<ParallaxLayer
offset={5}
speed={0.1}
  factor={1}>
<img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D" alt="Home outfitted with Tesla Solar Roof" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" />
</ParallaxLayer>
<ParallaxLayer
offset={5.35}
style={{ textAlign: 'center', width: '100%', height: 'auto'}}> 
<h1 className=""><font size="7"><strong>Solar Roof</strong></font></h1>
</ParallaxLayer>
<ParallaxLayer
offset={6}
speed={0.1}
  factor={1}>
   <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories" alt="Gen 3 Wall Connector with tempered white glass faceplate" class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" />
</ParallaxLayer>
<ParallaxLayer
offset={6.35}
style={{ textAlign: 'center', width: '100%', height: 'auto'}}> 
<h1 className=""><font size="7"><strong>Accessories</strong></font></h1>
</ParallaxLayer>
   <ParallaxLayer offset={7} speed={2} className="bg-[#DFDFDE]" />
<ParallaxLayer
    offset={7}
    speed={1}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    }}
     onClick={() => ref.current.scrollTo(0)}>
    <p>Click Anywhere to Scroll Up</p>
  </ParallaxLayer>
<ParallaxLayer
offset={7.85}
speed={1}
>
      <footer className="">
        <a
          className="flex items-center justify-center"
          href="https://louisyou.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouCodes{' '}
          <Image src="/img/girl.gif" alt="" width={24} height={24} className="rounded-full"/>
        </a>
      </footer>
      </ParallaxLayer>
      </main>
      </Parallax>
    </div>
  )
}
