import React, {useEffect} from 'react';
import HopeLogo from '../assets/Logo&Title.svg';
import SahiLogo from '../assets/Sahi_logo.svg'

const About = () => {
  useEffect (() => {
    window.scrollTo (0, 0);
  }, []);

  return (
    <section className="mt-16  ">
      <div className="h-96 w-full overflow-hidden">
        <img src="1.jpg" className="md:-mt-96" alt="" />
      </div>
      <div className="max-container padding-y padding-x">
        <h1 className=" mb-8 text-left font-mono text-4xl text-theme_black">
          <span className="text-theme_red">Hope</span>
          {' '}
          through
          {' '}
          <span className="text-theme_green">sahityotsav</span>
        </h1>
        <div className="flex max-md:flex-col max-md:items-center justify-between gap-12">
          <p className="font-poppins md:w-2/3">
            Sahityotsav, Kerala's premier literary festival, returns this year with a powerful theme: Festival of Hope. In a world often shrouded in darkness, we turn to the enduring power of words to illuminate stories of resilience, resistance, and the unwavering pursuit of a just future.
            <br /><br />
            This year, Malappuram East District Sahityotsav celebrates the hope that burns brightest in the hearts of the marginalized. We will amplify the voices of minorities and disadvantaged communities, showcasing their struggles and aspirations through literature, poetry, and discourse.
            <br /><br />
            We honor the unwavering hope of the Palestinians, their enduring dream of a homeland. Their story resonates with student movements across the globe who raise their voices in solidarity, demanding a world free from oppression.
            <br /><br />
            Real change begins when we choose hope. By believing that we have the power to make an impact, we take the first step on the journey to changing our world. The choice is yours. But you are not alone.
            <br /><br />
            Sahityotsav 2024 is a platform for these narratives of hope, a space where the written word becomes a catalyst for change. We invite authors, poets, activists, and dreamers to share stories that ignite the flame of hope within us all. Let us gather, listen, and together, imagine a brighter tomorrow
          </p>
          <div className='flex  md:flex-col md:gap-6 gap-12 items-center'>
            <img src={HopeLogo} className="h-64" alt="" />
            <img src={SahiLogo} className="h-64 w-32" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
