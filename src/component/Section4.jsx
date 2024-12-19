import React from 'react';

const Section4 = () => {
    return (
        <section className="mt-[60px] w-full h-auto container">
            <>
                <iframe
                    className="w-full  aspect-video"
                    src="https://www.youtube.com/embed/5FJaP75YUhY?rel=0&mute=1&controls=1&autoplay=0"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </>
        </section>
    );
};

export default Section4;
