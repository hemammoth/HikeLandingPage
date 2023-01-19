import React from 'react'
import LearnMoreSection from '../components/LearnMoreSection';
import StatsSection from '../components/StatsSection';
import HikeDifferenceSection from '../components/HikeDifferenceSection';

function Home() {
    return (
        <section id='home'>
            <LearnMoreSection/>
            <StatsSection/>
            <HikeDifferenceSection/>
        </section>
    )
}

export default Home