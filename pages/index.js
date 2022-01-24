import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StyledButton from '../components/button';
import RoadmapCard from '../components/roadmap-card';
import TeamMeber from '../components/team-member';
import NFTFeatCard from '../components/nft-feat-card';
import FAQElement from '../components/faq-element';
import { useState, useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(NET({
  //       el: vantaRef.current,
  //       THREE,
  //       color: 0xed8ca6,
  //       backgroundColor: 0x0
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <div className={styles.heroContainer}>
        {/* <div className={styles.heroBG} /> */}
        <div className={styles.title}>PORTAL REALMS</div>
        <div className={styles.subTitle}>LAUNCHING MID FEB 2022</div>

        {/* using : as seperator in label */}
        <StyledButton marginRight="2rem" label="WHITELIST / 0.05 Ξ :10 FEB - 8PM CET" />
        <StyledButton label="PUBLIC MINT / 0.08 Ξ :24 FEB - 8PM CET" bg={true} />

        <div className={styles.cardContainer}>
          <div className={styles.imageWrapper}>
            <Image src='/images/Card_Bio.png' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.imageWrapper} style={{ marginRight: 0 }}>
            <Image src='/images/Card_Invictus.png' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.centerImageWrapper}>
            <Image src='/images/Card_Nova.png' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>

      {/* portal-realms section */}

      <div className={styles.prContainer}>
        <div className={styles.gridImage}>
          <Image src='/images/grid.svg' layout='fill' objectFit='contain' />
        </div>

        <div className={styles.ringImage}>
          <Image src='/images/rings.svg' layout='fill' objectFit='contain' />
        </div>

        <div className={styles.prContent}>
          <h1>Be part of the Portal Realms</h1>
          <p>Choose your Leaders, deploy Signature Units, and build a home base. Play exciting Timeline cards which affect the Past, Present, and Future.</p>
        </div>
      </div>

      {/* One Card Section */}
      <div className={styles.cardSectionContainer} name='cards'>
        <div className={styles.contentContainer}>
          <h1>One Card,<br />Unlimited Uses</h1>
          <h3>All Portal Realms NFTs allows you to play in multiple games which we will launch over time. This creates network effect on the NFT where every new game introduced gives exponential increase in its utility.</h3>
          <h3>Our inaugural drop will consist of 1st Edition Ageless, Mythic and Legendary NFTs.  Each mint will come with up to 100 free boosters.</h3>

          <p>Price: <span>0.05 ETH/mint</span></p>
          <p>Quantity: <span>3888 mints</span></p>
          <p>Launch: <span>24 Feb 2022</span></p>

          <button>Receive up to 100 free boosters per mint!</button>
        </div>
        <div className={styles.cardSectionImages}>
          <div className={styles.cardSectionBanner}>
            <h5>1st</h5>
            <p>Edition</p>
          </div>
          <div className={styles.purpleGrid}>
            <Image src='/images/purple-grid.svg' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.bubbleImage}>
            <Image src='/images/bubble.svg' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.blackCardImage}>
            <Image src='/images/Card-Backing-2.png' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>

      {/* NFT Features Section */}
      <div className={styles.nftFeatContainer}>
        <h1>NFT Features</h1>
        <div className={styles.nftFeatCardsContainer}>
          <NFTFeatCard image="/images/nft-feat1.png" title="Metaverse Ready" content="See your 3D assets roam the world of infinite possibilities across platforms" />
          <NFTFeatCard image="/images/nft-feat2.png" title="One Card, Infinite uses" content="Play multiple games with a single collection and use your cards across dozens of game systems." />
          <NFTFeatCard image="/images/nft-feat3.png" title="Play-To-Earn" content="Discover and earn rewards as you play and explore!" />
          <NFTFeatCard image="/images/nft-feat4.png" title="Bond your NFTs" content="Stake your cards to support communities and professional gaming team" />
        </div>
      </div>

      {/* Roadmap Section */}

      <div className={styles.roadmapContainer} name='roadmap'>
        <h1>Roadmap</h1>
        <div className={styles.roadmapCardsContainer}>
          {/* using : as seperator in content */}
          <RoadmapCard image="/images/roadmap-img1.png" year="Q1 2022" content="→ Website goes live :→ Whitepaper published :→ Introduce faction and lores :→ 1st edition NFT drop" />
          <RoadmapCard image="/images/roadmap-img2.png" year="Q2 2022" content="→ Publish core game mechanics :→ 1st citizen booster drop :→ Live playtest of game with community" />
          <RoadmapCard image="/images/roadmap-img3.png" year="Q3-Q4 2022" content="→ Alpha game mainnet launch :→ Release marketplace :→ Release Grand Library :→ New expansion launch :→ First world tournament" />
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
