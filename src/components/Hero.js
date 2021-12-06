import React from 'react'
import './Hero.css' 
import paintstroke from '../images/paintstroke.png';

import couples from '../images/couples.png';
import smallfamilies from '../images/small-families.png';
import budget from '../images/budget.png';
import peaceofmind from '../images/peace-of-mind.png';
import trust from '../images/trust.png';






function Hero() {
    return (
        <div className='Main'>
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
                <button class="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-500">Start Your Trip</button>
                </div>

                <div className='herotrust'>
                <img src={trust} alt="holiday" className="herotrust"/> 
                </div>


                <div className='herotrust'>

                </div>

            </div>
            <div className='HeroRight'>
                <img src={paintstroke} alt="holiday" className="holidayhero"/> 

            </div>
            
            
        </div>
        <div className='travelcomp'>
            <div className='travelcomptitle'>
                <h1>Your Halal Travel Companion</h1>

            </div>
            <div className='travelcompicons'>

                <div className='travelimages1'>
                    <div className='inner-travel-img'>
                        <img src={couples} alt="holiday1" className="travelimg1"/>
                    </div>
                    <div className='inner-travel-txt'>
                    <h1>For Couples</h1>
                    <p1>Built Wicket longer admire do barton vanity itself do in it.</p1>
                    </div>
                </div>


                <div className='travelimages2'>
                <div className='inner-travel-img'>
                    <img src={smallfamilies} alt="holiday2" className="travelimg2"/>
                </div> 
                <div className='inner-travel-txt'>
                    <h1>Small families</h1>
                    <p1>Engrossed listening. Park gate sell they west hard for the.</p1>
                    </div>
                </div>


                <div className='travelimages3'>
                <div className='inner-travel-img'>
                    <img src={budget} alt="holiday3" className="travelimg3"/> 
                </div>
                <div className='inner-travel-txt'>
                    <h1>Budget</h1>
                    <p1>Barton vanity itself do in it. Preferd to men it engrossed listening. </p1>
                </div>
                </div>

                
                <div className='travelimages4'>
                <div className='inner-travel-img'>
                    <img src={peaceofmind} alt="holiday4" className="travelimg4"/> 
                </div>
                <div className='inner-travel-txt'>
                    <h1>Peace of mind</h1>
                    <p1>A personal travel expert will arrange everything for your and make sure you holiday is perfect. </p1>
                </div>
                </div>
                

            </div>

        


            <div>

            </div>
            
            
        </div>


        </div>
    )
}

export default Hero
