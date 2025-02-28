import AboutImg from '../assets/about.png';
export default function About(){
const config = {
    line1: "Hi, I'm Yuvanraj, I'm a Artificial Intelligence and Data Science Student and a Aspiring full stack developer. I have developed strong technical skills in Python, Java, SQL, and Web Development. I have successfully completed projects including a house price prediction model and a web portal for ticket booking, showcasing my passion for technology and problem-solving",
    line2: "",
    line3: ''
}

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id = 'About'>
        <div className='md:w-1/2 py-5'>
            <img src ={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 border-primary mb-3 w-[170px] font-bold'>About Me</h1>
            <p className='pb-3'>{config.line1}</p>
            </div>
        </div>
    </section>
}