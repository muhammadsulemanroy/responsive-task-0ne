import group96898 from '../Assets/Group 96898.png'

const Section = () => {
return (
    <>
    <div className='min-h-[30rem]'>
    <div className='flex justify-around max-md:flex-col  max-md:min-h-[40rem] max-md:gap-[2rem]  lg:mx-[9rem] md:mx-[5rem] '>
 <div className='flex flex-col justify-around max-md:gap-[3rem]  max-md:items-center max-md:m-[2rem]  '>
   
    <h1 className='text-5xl max-md:text-center md:max-w-[27rem]'>We turn big ideas into thriving businesses</h1>
    <h6 className='max-md:text-center md:max-w-[17rem]'>We help clients understand how their brand translates into digital ecosystem</h6>
    <button className='bg-[#EA6449] max-w-[40%]'>Get a free consultation</button>
 </div>   
<img alt='' src={group96898} className='max-w-[35%] h-auto max-md:w-[100%] max-md:max-w-[100%]'/>
</div>
</div>
</>
);
}

export default Section;