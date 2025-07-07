import React from 'react'
import '../collections/collection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faChair, faCouch, faList, faRug, faTent } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons/faMoneyCheck'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Link, Outlet } from 'react-router-dom'
const Collection = () => {
    return (
        <div className='collection-container'>
            <div>
                <div className="collection-body">
                    <div className='all_fur  mt-5 '>
                        <h3>All Furnitures</h3>
                    </div>
                </div>
                <div className='items d-flex gap-2'>
                    <div className=''>
                        <p>Showing 114 items </p>
                        <div className='mt-4 ul'>
                            <li> <Link className='Li' to = '/collections/sofas' as ={Link}><FontAwesomeIcon icon={faList} />  Category</Link> </li>
                            <li><Link className='Li' to = '/collections/sofas' as ={Link}><FontAwesomeIcon icon={faCouch} />  Sofas</Link> </li>
                            <li><Link className='Li' to = '/collections/rugs' as ={Link}> <FontAwesomeIcon icon={faRug} />  Rugs</Link></li>
                             <li>
                                <Link className='Li' to='/collections/chairs' as={Link}><FontAwesomeIcon icon={faChair} /> Chairs</Link>
                            </li>
                            <li> <Link className='Li' to='/collections/tables' as={Link} ><FontAwesomeIcon icon={faChair} /> Tables</Link> </li>
                            <li><Link className='Li' to='/collections/outdoor' as={Link} ><FontAwesomeIcon icon={faTent} /> Out-Door</Link> </li>
                        </div>
                    </div>
                    <div className=' sortMain w-75'>
                        <div className='w-100 sort'>
                            <p>Sort By:</p>
                            <ul className='sort-list'>
                            <li> <FontAwesomeIcon icon={faCalendar} /> Date</li>
                            <li> <FontAwesomeIcon icon={faMoneyCheck} /> Price</li>
                            <li> <FontAwesomeIcon icon={faStar} /> relivance</li>
                            <li className='reset'>Reset</li>
                            </ul>
                            
                        </div>
                        <div className='outlet'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection