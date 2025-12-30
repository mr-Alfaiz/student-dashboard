const Hero = () => {
    return (
        <div>
          <section className="flex px-6 pt-12 pb-7 bg-white justify-between items-center ">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl ml-3 -mt-12 font-semibold" >welcome <span className="text-gradient-to-r-from-sky-400 to text-sky-600">United Baptist model <br></br> secondary school </span></h1>
      </div>
  
            <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
            
             <img src='/img/log1.jpg' alt="hero img" width={400} height={400} className="shadow-lg  rounded-full"/>
            </div>

            
      </section>
        </div>
    )
}
export default Hero