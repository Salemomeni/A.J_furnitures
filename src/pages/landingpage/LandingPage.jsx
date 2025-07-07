import React from 'react'
import './landing.css'
import Button from '../../component/buttton/Button'
import ProductCard from '../../component/productcard/ProductCard'
const LandingPage = () => {
    return (
        <div className='main'>
            <div className='landing'>
                <div className='landing-content '>
                    <h1>Mordern Interior  Design<br /> Studio</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicingLorem <br />ipsum dolor sit amet consectetur adipisicing elit.Fuga<br />illum at officiis ipsam vel?</p>
                    <div className='d-flex gap-4 but'>
                        <Button btnStyle='shopNow' link='/collections' >Shop Now</Button>
                        <Button btnStyle='explore'>Explore</Button>
                    </div>
                </div>
            </div>
            <div >
                <ul className='miniNav'>
                    <li>All Product</li>
                    <li>Living Room</li>
                    <li>Bed Room </li>
                    <li>Out Door</li>
                </ul>
            </div>
            <div className='d-flex container mb-3 align-items-center '>
                <div className='craft-text '>
                    <h1>Crafted with execellent materail.</h1>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                    <Button btnStyle='explore1'>Explore</Button>
                </div>
                <div className='grid-container gap-3'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className='container section3' >
            <div className='section3Div'>
                <h2>About A.J's Furni</h2> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatum reprehenderit molestias ex possimus, tempora necessitatibus neque ipsa facere reiciendis pariatur, iste repellat.</p>
                <Button btnStyle="about">About</Button>
            </div>
            </div>

            <section className='section4 d-flex'>                
                <div className='section4Div1 d-flex'>
                    <div className="firstImage"></div>
                    <div className="secondImage"></div>
                    <div className="thirdImage"></div>
                </div>
                <div className='section4Div2 container'>
                    <h3 className='h3'> We Help You Make Modern Interior Design</h3>
                    <p>
                        Transform your living or working space into a sanctuary of style and functionality. At [Your Company Name], we believe modern interior design is more than just aesthetics; it's about creating environments that enhance your lifestyle and reflect your unique personality. We seamlessly blend innovation with comfort, crafting spaces that are both visually stunning and highly practical for contemporary living.
                    </p>
                    <div className='bullets'>
                        <li>Personalized Design Solutions: Tailored concepts that align with your vision and needs.</li>
                        <li>Optimal Space Utilization: Intelligent layouts that maximize every square foot.</li>
                        <li>Curated Material Selection: Sourcing premium, sustainable, and aesthetically pleasing elements.</li>
                        <li>Seamless Project Management: From concept to completion, we handle every detail with precision.</li>
                    </div>
                    <div>
                         <Button btnStyle='explore1'>Explore</Button>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default LandingPage