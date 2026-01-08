import HeroImg from '../assets/hero.png'
import { SiLeetcode} from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


export default function Hero(){
const config = {
    subtitle :"B.Tech Artificial Intelligence and Data Science",
    social : {
        linked : 'https://www.linkedin.com/in/yuvanraj-s-93748a227',
        github : 'https://github.com/YuvanrajS',
        Leetcode:'https://leetcode.com/u/Yuvanraj_S/'
    }
}




    return <section className='flex flex-col md:flex-row  px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className='w-1/2 text-white text-5xl .oswald-<uniquifier>'>Hi, <br/> I'm Yuvanraj
        <p className='text-2xl'>{config.subtitle}</p>
        </h1> 
        <div className='flex py-5'>
            {/* <a href={config.social.twitter} className='pr-3 hover:text-white'><FaSquareXTwitter size={30}/></a> */}
            <a href={config.social.linked} className='pr-3 hover:text-white'><FaLinkedin size={30}/></a>
            <a href={config.social.github} className='pr-3 hover:text-white'><FaSquareGithub size={30}/></a>
            <a href={config.social.Leetcode} className='hover:text-white'><SiLeetcode size={30}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src = {HeroImg}/>
    </section>
}