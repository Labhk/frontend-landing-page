import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import HeroSection from '@/Components/HeroSection'
import Features from '@/Components/Features'
import Footer from '@/Components/Footer'
import Support from '@/Components/Support';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
      <HeroSection/>
      <Support/>
      <Features/>
      <Footer/>
    </div>
    </>
  )
}
