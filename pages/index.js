import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StyledButton from '../components/button';
import RoadmapCard from '../components/roadmap-card';
import TeamMeber from '../components/team-member';
import FAQElement from '../components/faq-element';
import { useState, useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE,
        color: 0xed8ca6,
        backgroundColor: 0x0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <div className={styles.heroContainer} ref={vantaRef}>
        <div className={styles.title}>PORTAL REALMS</div>
        <div className={styles.subTitle}>LAUNCHING MID FEB 2022</div>
        <StyledButton marginRight="2rem" label1="PRIVATE MINT" label2="10 FEB - 8:00PM CET" />
        <StyledButton label1="PRIVATE MINT" bg={true} label2="10 FEB - 8:00PM CET" />

        <div className={styles.cardContainer}>
          <div className={styles.imageWrapper}>
            <Image src='/images/Card_Bio.png' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src='/images/Card_Invictus.png' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src='/images/Card_Nova.png' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src='/images/Card_Lush.png' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src='/images/Card_Secluded.png' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>

      {/* Story Section */}

      <div className={styles.storyContainer}>
        <div className={styles.firstPara}>In the beginning was the<br /> word, and the word was -</div>
        <div className={styles.secondPara}>Earth, far in the future... Drained from supporting human life has fallen into a desperate<br /> need for energy. Humanity attempted to unlock the solution by hastily experimenting<br /> with anti-matter. The consequences were devastating.</div>
        <video autoPlay loop muted src='/video/hero_bg.mp4' type='video/mp4' />
      </div>

      {/* CircleContent */}

      <div className={styles.circleContentContainer}>
        <div className={styles.circlesWrapper}>
          {/* <div className={styles.upperArrowWrapper}>
            <Image src='/images/arrow.svg' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.bottomArrowWrapper}>
            <Image src='/images/arrow.svg' layout='fill' objectFit='contain' />
          </div> */}
          <div className={styles.yellowCirle}>
            <p>Be part of PortalRealms</p>
          </div>
          <div className={styles.transparentCircle}>
            <p>Imagine a huge world map with zones and locations based on rich lore. Players will have to explore the world and travel to locations in order to collect all the cards they need to build the best deck they can to conquer the world.</p>
          </div>
        </div>
      </div>

      {/* One Card Section */}
      <div className={styles.cardSectionContainer} name='cards'>
        <div className={styles.contentContainer}>
          <h1>One Card,<br />Unlimited Uses</h1>
          <p>By introducing cards which can only be farmed during a specific duration, it creates FOMO and hype and almost guaranteed earnings for any players who decide to farm those cards</p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.blackCardImageWrapper}>
            <Image src='/images/Card-Backing-1.png' layout='fill' objectFit='contain' />
          </div>
          <div className={`${styles.blackCardImageWrapper} ${styles.blackCardAbsolute}`}>
            <Image src='/images/Card-Backing-2.png' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>

      {/* Roadmap Section */}

      <div className={styles.roadmapContainer} name='roadmap'>
        <h1>Roadmap</h1>
        <div className={styles.roadmapCardsContainer}>
          <RoadmapCard image="/images/ellipse.svg" year="2022" content="Obtainable Platform Live Xela: Spaceship XR Alpha $CTZN Private Round" />
          <RoadmapCard image="/images/ellipse.svg" year="2022" content="Obtainable Platform Live Xela: Spaceship XR Alpha $CTZN Private Round " />
          <RoadmapCard image="/images/ellipse.svg" year="2022" content="Obtainable Platform Live Xela: Spaceship XR Alpha $CTZN Private Round " />
        </div>
      </div>

      {/* FAQ Section */}

      {/* Todo */}
      {/* <div className={styles.faqConatiner}>
        <h1>FAQ</h1>
        <FAQElement label='About Portal' content='Some dummy content' />
        <FAQElement label='Shipping' content='Some dummy content' />
        <FAQElement label='How it works' content='Some dummy content' />
        <FAQElement label='Lorem ipsum' content='Some dummy content' />
      </div> */}

      {/* Team Section */}

      <div className={styles.teamContainer} name='team'>
        <div className={styles.teamHeading}>Meet the amazing team</div>
        <div className={styles.teamSubHeading}>The senior team behind Origami has decades of experience<br /> building software, communities, successful ventures and<br /> companies and merchandising game collectibles. Say hello!</div>
        <div className={styles.teamMembersContainer}>
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#ECD6FD" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#FFDEE2" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#CCD5FF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#E2FFEF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#DCFCFF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#F9F0D9" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#DCFCFF" />
          <TeamMeber memTile="Eugene" memSubTitle="Creative Director" color="#F9F0D9" />
        </div>
      </div>
    </div>
  )
}
