const Home = () => {
    return(
        <section className="h-[100vh] w-[100%] flex flex-col">
            <h1 className="portfolio-logo text-[3rem] font-semibold text-center w-[100%] mt-[18rem] lg:mt-[10rem] sm:text-[6rem] lg:text-[11rem]">PORTFOLIO</h1>
            <div className="w-[100%] flex items-center mt-auto gap-[1rem]">
                <span className="w-[100%] bg-[#000] h-[.5px]"></span>
                <p className="text-[.5rem] lg:text-[1rem]">bolaks.creatives</p>
            </div>
        </section>
    );

}

export default Home