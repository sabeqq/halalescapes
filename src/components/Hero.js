import React from 'react'
import './Hero.css' 
import paintstroke from '../images/paintstroke.png';

function Hero() {
    return (
        <div className='HeroParent'>
            <div className='HeroLeft'>
                <div className='herotext1'>
                    <h6>HALAL FRIENDLY HOLIDAYS THAT BEST MATCH YOU.</h6>
                </div>
                <div className='herotext2'>
                    <h1>
                        Halal Travel,
                    </h1>
                    <h1>
                        Halal food,
                    </h1>
                    <h1>
                        Halal living.
                    </h1>
                </div>
                <div className='herotext3'>
                    <p>
                    Finding you packages that include hotels with full privacy and Halal food. So rest assured, no more peaky neighbours and you ll always find halal food nearby.
                    </p>
                </div>
                <div className='herobuttons'>

                </div>
                <div className='herotrust'>

                </div>

            </div>
            <div className='HeroRight'>
                <img src={paintstroke} alt="holiday" className="holidayhero"/> 

            </div>
            
        </div>
    )
}

export default Hero
