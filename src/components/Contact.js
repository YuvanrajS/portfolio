export default function Contact(){
    const config ={
        email : 'yuvan8681@gmail.com',
    }
    return <section className='flex flex-col bg-primary px-5 py-32' id = 'Contact'>
        <div className='flex flex-col items-center text-white'>
            <h1 className='text-4xl border-b-4 text-white border-secondary mb-3 w-[130px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, kindly contact me.</p>
            <p className='py-2'><span className='font-bold'>Email :<a href="mailto:yuvan8681@gmail.com">yuvan8681@gmail.com</a></span></p>
            <p className='py-2'><span className='font-bold'>WhatsApp :<a href="https://wa.link/z5qeqv">8778973086</a></span></p>
        </div>
    </section>
}