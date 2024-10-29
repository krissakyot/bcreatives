const Home = () => {
    return(
        <section className="h-[100vh] w-[100%] flex flex-col">
            <h1 className="portfolio-logo text-[3rem] font-sat font-bold text-center w-[100%] mt-[18rem] lg:mt-[10rem] sm:text-[6rem] lg:text-[11rem]"><span className="text-black">PORT</span><span className="bg-gradient-to-r from-[#91C28B] to-[#31422F] bg-clip-text text-transparent">FOLIO</span></h1>
            <div className="w-[100%] flex items-center mt-auto gap-[1rem]">
                <span className="bg-[#31422F] w-[100%] bg-[#000] h-[.7px]"></span>
                <p className="text-[#31422F] text-[.5rem] lg:text-[1rem]">bolaks.creatives</p>
            </div>
        </section>
    );

}

export default Home