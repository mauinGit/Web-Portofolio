const Footer = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between p-8 bg-[#4D869C] items-center">
            <h1 className="font-bold text-xl sm:text-2xl lg:text-4xl text-white">Portofolio</h1>
            <ul className="flex flex-row gap-10 md:gap-6 lg:gap-8 py-4">
                <li>
                    <a href="#hero" className="text-white sm:text-lg lg:text-xl">Home</a>
                </li>
                <li>
                    <a href="#skills" className="text-white sm:text-lg lg:text-xl">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="text-white sm:text-lg lg:text-xl">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="text-white sm:text-lg lg:text-xl">Contact</a>
                </li>
            </ul>
            <div className="flex flex-row gap-4">
                <a href="https://github.com/mauinGit" className="ri-github-fill ri-2x text-white"></a>
                <a href="https://www.instagram.com/adiatma__23/" className="ri-instagram-fill ri-2x text-white"></a>
                <a href="https://www.linkedin.com/in/maulanaadiatma/" className="ri-linkedin-fill ri-2x text-white"></a>
            </div>
        </div>
    );
};

export default Footer;