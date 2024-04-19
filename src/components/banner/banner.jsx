import React from 'react'
import '../styles/banner.css'
const Banner = () => {
  return (
        <div className='banner'>
            {/* left side */}
            <div className='banner-left-side'>
                <p>WHO WE ARE</p>
                <p className='prof'>We are professional Expert in</p>
                <p className='injury'>personal injury claims</p>
            </div>
            {/* right side */}
            <div className='banner-right-side'>
                <p className='hiring'>Hiring an attorney is a big decision and it should largely be based on how much the outcome of your case is going to affect your life, either in the short- or long term. Most people don’t need to just “have a lawyer” on retainer. There are some people who might — like if you own a business, are a landlord, or have other ongoing legal matters that require attention.</p>
            </div>
        </div>
)
}

export default Banner