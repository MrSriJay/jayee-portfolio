import { ArrowDown } from "lucide-react";
import {useEffect, useState} from "react";

export const MainSection = () => {
  return (
    <section id="main"
             className="elative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center  z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Jayanga </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Palihena</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Skilled Software Engineer with 3+ years of experience in full-stack development, specializing in robust architecture, clean code, and user-centered web and application design using Python, Java, Java Spring, and PHP.
                </p>

                <div className="opacity-0 animate-fade-in-delay-4 pt-4 ">
                    <a href="#projects" className="cosmic-button">View my Work</a>
                </div>
                
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -transalate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-muted-foreground text-sm mb-2">Scroll</span>
            <ArrowDown className=" h-5 w-5 text-primary"/>
        </div>
    </section>
  )
}