import projectimg1 from '../assets/1_D6s2K1y7kjE14swcgITB1w.png'
import projectimg2 from '../assets/images.jpg'
import projectimg3 from '../assets/How-to-Make-a-Portfolio-in-8-Steps-Tips-to-Attract-More-Clients-1536x894-1.png'

export default function Projects(){

    const config = {
        projects :[
            {
                image: projectimg1,
                description:'House Price Prediction with Machine Learning',
                link:'https://github.com/YuvanrajS/predicting-house-prices-using-ML.git'
            },
            {
                image:projectimg2,
                description:'Bus Ticket Booking Website with Django',
                link:'https://github.com/YuvanrajS/NANMUDHALVAN_TUESDAYBATCH_PROJECT_FILES.git'
            },
            {
                image:projectimg3    ,
                description:'Portfolio Webiste using HTML,Tailwind CSS and JavaScript',
                link:''
            }
        ]
    }
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary" id='Projects'>

        <div className="w-full">
        <div className="flex flex-col px-10 py-5 text-white">   
        <h1 className='text-4xl border-b-4 border-secondary text-white mb-3 w-[140px] font-bold'>Projects</h1>
        <p>These are some of my projects, Check them out</p>       
        </div>  
        </div>

        <div className="w-full text-white">
        <div className='flex flex-col md:flex-row px-10 gap-10'>
            {config.projects.map((project) => (
                <div className='relative'>
        <img className = 'h-[200px] w-[500px]' src ={project.image}/>
        <div className='project-desc'>
            <p className='text-center px-5 py-10'>{project.description}</p>
            <div className='flex justify-center'>
        <a className = 'button' target='_blank' href={project.link}>view project</a>
        </div>
            </div>
        </div>
            ))}
        </div>
        </div>
    </section>
}
