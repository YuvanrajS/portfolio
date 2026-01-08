import ResumeImg from '../assets/resume.jpg';
export default function Resume(){
    const config ={
     link : 'https://drive.google.com/file/d/1noV_9q3_O6xhjSLV6OMkz9L_LLvx-c38/view?usp=drive_link'
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id = 'Resume'>
        <div className='md:w-1/2 py-5 flex justify-center'>
            <img className='w-[400px]' src ={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex px-5 justify-center text-white'>
        <div className='flex px-5 flex-col justify-center'>
            <h1 className='text-4xl px-8 underline decoration-blue-700 flex-col mb-3  font-bold'>Resume</h1>
            <p className='pb-2'>You, can view my Resume<a className='button m-5 flex justify-center'href={config.link}>Download</a></p> 
            
            </div>
        </div>
    </section>
}