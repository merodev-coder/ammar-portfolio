import React from "react";
import Globe from "react-globe.gl"
import Button from "../componants/button";
const About = () => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("merodev1310@gmail.com");

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <section className="c-space my-20 max-w-7xl mx-auto" id="about" >
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="xl:row-span-3 col-span-1">
                    <div className="grid-container">
                        <img src="assets/grid1.png" className="w-full
                        sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Hi, I am Ammar
                            </p>
                            <p className="grid-subtext">
                                I have honed my skills in full stack development
                                , with a focus on both scalable backends and animated 3D websites.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" className="w-full
                        sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext"> Full Stack Developer</p>
                            <p className="grid-subtext">I specialize in JavaScript with a focus on React, Node.js, TypeScript and Three.js</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center item-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"

                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I'm based in Egypt, but I'm available for remote work.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding.</p>
                            <p className="grid-subtext">Coding is my passion. I enjoy the stress, the late nights, and the pain — because every line of code brings me closer to who I want to become.</p>

                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={copied ? "assets/tick.svg" : "assets/copy.svg"} alt="" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">merodev1310@gmail.com</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
