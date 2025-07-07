import React from 'react'
import './detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../buttton/Button'
import { faArrowLeft, faShield, faStar } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward'
import ProductCard from '../productcard/ProductCard'
const DetailPage = () => {
    return (
        <div className='detail-wrap'>
            <div className='detail'>
                <div className=' productName'>
                    <p><FontAwesomeIcon icon={faArrowLeft} /> Back to List</p>

                    <div className='mt-5'>
                        <h3>The Segall Chair</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis earum debitis quaerat quam tenetur. Laborum, eaque? Atque expedita harum vitae modi, tenetur perferendis, accusamus eius voluptatem delectus reiciendis vero.</p>
                        <div className='d-flex color'>
                            <li className='li'>Color:</li>
                            <li className='black'>Black</li>
                            <li className='pink'>Pink</li>
                            <li className='gray'>Gray</li>
                            <li className='brown'>Brown</li>
                        </div>
                        <p>QTY: 3</p>
                        <Button btnStyle='addToCart'>Add to Cart $444</Button>
                    </div>
                </div>
                <div className='productImgs'>
                    <div className='primaryPhoto'>
                        <img src="https://www.marthastewart.com/thmb/xvJtnsUvU9L167SP0UA_XFERPbA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marthastewart-livingroomlayout-PrudenceHomeandDesignLLCJulieLeffellPhotography-41830b9362ca4966bf56b1a4a7400f95.png" alt="" />
                    </div>
                    <div className='d-flex justify-content-between w-75'>
                        <div className='d-flex gap-5 '>
                            <div>1</div>
                            <div>3</div>
                            <div>3</div>
                            <div>5</div>
                        </div>
                        <div className='d-flex gap-3'>
                            <p>5</p>
                            <p>5</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='tabs-cont'>
                <div className="tabs">
                    <div>Details</div>
                    <div>Product Specs</div>
                    <div>Reviews</div>
                    <div>Warranty Info</div>
                </div>

                <div className="content">
                    <div className="column ">
                        <p>Lorem ipsum dolor sit amet consectetur. Amet risus nisl sapien dignissim sit luctus. Facilisi ferment scelerisque ipsum viverra leo porta eni eros. dignissim sit luctus. Facilisi ferment scelerisque ipsum viverra leo porta eni eros.dignissim sit luctus. Facilisi ferment scelerisque ipsum viverra leo porta eni eros.</p>
                    </div>
                    <div className="column">
                        <p>Lorem ipsum dolor sit amet consectetur. Amet risus nisl sapien dignissim sit luctus. Facilisi ferment scelerisque ipsum viverra leo porta eni eros. dignissim sit luctus. Facilisi ferment scelerisque ipsum viverra leo porta eni eros.</p>
                    </div>
                    <div className="column features">
                        <ul>
                            <li><FontAwesomeIcon icon={faStar} /> Over 10,000 five-star reviews</li>
                            <li><FontAwesomeIcon icon={faShield} />Lifetime warranty included</li>
                            <li><FontAwesomeIcon icon={faAward} /> Sustainably sourced materials</li>
                            <li><FontAwesomeIcon icon={faAward} /> Award-winning design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='might-Like'>
                <h3>Other Products You Might Like</h3>

                <div className='w-100 product-grid'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}

export default DetailPage