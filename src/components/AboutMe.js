import { SiSpringboot } from 'react-icons/si';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { BiLogoJavascript, BiLogoFacebook, BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagram } from 'react-icons/bi';

const AboutMe = () => {
    return ( 
        <div className="about-me-page">
            <h1>WHO AM I</h1>
            <a href="https://www.facebook.com/profile.php?id=100002759184124" target="_blank" 
            rel="noopener noreferrer" className="fa fa-facebook"><BiLogoFacebook /></a>
            <a href="https://github.com/MaciejKlonicki" target="_blank" 
            rel="noopener noreferrer" className='github'><BiLogoGithub /></a>
            <a href="https://pl.linkedin.com/in/maciej-k%C5%82onicki" target="_blank" 
            rel="noopener noreferrer" className='linkedin'><BiLogoLinkedinSquare /></a>
            <a href="https://instagram.com/iskaayy?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" 
            rel="noopener noreferrer" className='instagram'><BiLogoInstagram /></a>
            <p>
                Hello, my name is Maciek and I am Junior Java Developer. My IT career began in early 2023.<br />
                I managed to land my first job in February, which was a personal fulfillment of my professional dream to become a programmer. <br />
                I took my first steps in the company Unity-t, and the beginnings were challenging because I was still studying and had to prepare for my engineering thesis defense. <br />
                However, motivated by my first job as a programmer, I did my best to balance both aspects. <br />
                While working at Unity-t, I used technologies such as Kotlin, Spring, Java, PostgreSQL, Liquibase, React, and Gradle. <br />
                My first job provided me with a wealth of knowledge and skills that I continue to draw upon to this day. <br />
                <br />
                The next step in my career path was with Transition Technologies PSC. Changing jobs meant further broadening my horizons. <br />
                Initially, I joined an academy where I, along with other participants, received training for future work. <br />
                It was a completely new experience for me, as I started working with new technologies and looked at code from a completely different perspective. <br />
                The company offers me continuous development opportunities, the chance to work in international teams, and diverse projects that allow me to keep growing. <br />
                <br />
                Moving to my personal life, I live in Kielce, and I am a part-time student pursuing a degree in Computer Science at the local university. <br />
                As a hobby, I enjoy watching sports like MMA and soccer, playing board games, and learning about history. <br />
                In my free time, I spend time with my family, and I recently became a father as well.
            </p>
            <h3>MY SKILLS</h3>
            <div className="logo-position">
                <h1><SiSpringboot /></h1>
                <h1><FaJava /></h1>
                <h1><SiPostgresql /></h1>
                <h1><BsGit /></h1>
                <h1><FaReact /></h1>
                <h1><BiLogoJavascript /></h1>
            </div>
        </div>
     );
}
 
export default AboutMe;