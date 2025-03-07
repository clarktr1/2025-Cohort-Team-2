import React from "react";

interface HeroSectionProps {
    imageSrc: string;
    title: React.ReactNode;
    subtitle: string;
}

const HeroSection = ({ imageSrc, title, subtitle }: HeroSectionProps) => {
    return (
        <div className="w-full rounded-lg overflow-hidden relative">
            {/* Background Image */}
            <img
                src={imageSrc}
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-neutral-900/75" />
            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-medium text-orange-200 drop-shadow-lg text-center">
                    {title}
                </h1>
                <h2 className="mt-4 text-2xl font-normal text-orange-200 drop-shadow-md text-center">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
};

export default HeroSection;
