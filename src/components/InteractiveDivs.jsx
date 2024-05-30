// src/InteractiveDivs.js
import React, { useEffect, useRef } from 'react';
import './InteractiveDivs.css';

const InteractiveDivs = () => {
    const numbersDivRef = useRef(null);
    const numberRefs = useRef([]);

    useEffect(() => {
        const incrementNumbers = () => {
            numberRefs.current.forEach((ref) => {
                let count = 0;
                const interval = setInterval(() => {
                    if (count >= 100) {
                        clearInterval(interval);
                    } else {
                        count++;
                        ref.textContent = count;
                    }
                }, 20);
            });pm
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    incrementNumbers();
                    observer.disconnect(); // Stop observing after numbers start increasing
                }
            });
        }, { threshold: 0.1 });

        if (numbersDivRef.current) {
            observer.observe(numbersDivRef.current);
        }

        return () => {
            if (numbersDivRef.current) {
                observer.unobserve(numbersDivRef.current);
            }
        };
    }, []);

    return (
        <div className="container4">
            <div className="numbers-div" ref={numbersDivRef}>
                {[...Array(3)].map((_, index) => (
                    <span
                        key={index}
                        className="number"
                        ref={el => numberRefs.current[index] = el}
                    >
                     40K+
                    </span>
                ))}
            </div>
            <div className="content-div">
                <div className="upper-part">
                    <div className="photos">
                        <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bdd6f41b61394c61129a7e_v1%20review%20img%201.svg" className="circle-photo" alt="Photo 1" />
                        <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bdd7c5d42815524b44319d_v1%20review%20img%202.svg" className="circle-photo" alt="Photo 2" />
                        <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bdd7d7da639731885d557c_v1%20review%20img%203.svg" className="circle-photo" alt="Photo 3" />
                    </div>
                    <div className="text-logo">
                        <h2>Understanding Your Aspirations, And Developing Comprehensive Strategies That Stand The Test Of Time.</h2>
                        <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bde06e5f59f644cbc5dcca_v1%20about%20icon%202.svg" className="logo" alt="Logo" />
                    </div>
                </div>
                <div className="lower-part">
                    <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bddcd0df98aaa21d6ee4f4_v1%20about%20img%201.png" className="medium-photo" alt="Photo 4" />
                    <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bddd33686946adb23c18da_v1%20about%20img%202.png" className="medium-photo" alt="Photo 5" />
                </div>
                <div className="background-coins">
                    <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bde06e5f59f644cbc5dcca_v1%20about%20icon%202.svg" className="coin" alt="Coin" />
                    <img src="https://assets-global.website-files.com/65b8d5c5e2ef493dbe7c1b86/65bde06e5f59f644cbc5dcca_v1%20about%20icon%202.svg" className="coin" alt="Coin" />
                    {/* Add more coins as needed */}
                </div>
            </div>
        </div>
    );
};

export default InteractiveDivs;
