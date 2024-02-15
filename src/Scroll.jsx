import React, { useRef, useEffect } from 'react';
import "./App.css";

function Scroll() {
    const scrollRef = useRef(null);

    const observer = new IntersectionObserver((e) => {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hiddo')
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hiddo')
            }
        })
    });

    useEffect(() => {
        const element = scrollRef.current; // accessing the DOM element
        if (element) {
            const innerElements = element.querySelectorAll('.inner-element'); // Example: Selecting an element with a class name
            innerElements.forEach((el) => observer.observe(el));
        }
    }, []);


    return (
        <div ref={scrollRef}>
            <section className='justify-center items-center'>
                <div class="mouse"></div>
            </section>

            <section className='inner-element mt-40'>
                <h2>
                What is real?
                </h2>
            </section>

            <section className='inner-element mt-40'>
                <h1>How do you define real?</h1>
            </section>

            <section className='inner-element mt-40'>
                <h1>If you're talking about what you can feel</h1>
            </section>

            <section className='inner-element mt-40'>
                <h2>what you can smell, what you can taste and see,</h2>
            </section>

            <section className='inner-element mt-40'>
                <h2>then real is simply electrical signals interpreted by your brain.</h2>
            </section>

            <div className='mt-2 text-2xl text-white mb-10'>
                <h1>END</h1>
            </div>
        </div>
    )
}

export default Scroll