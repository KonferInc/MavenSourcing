import React from 'react'
import owlImage from '../assets/owl_crop.jpg'
import catImage from '../assets/cat_crop.jpg'
import rocksImage from '../assets/rocks_crop.jpg'

const Features: React.FC = () => {
    return (
        <section className="features-container">
            <div className="feature">
                <div className="feature-content">
                    <h2>Malleable</h2>
                    <p>
                        We can provide and delivery services from anywhere, and
                        of any type, around the world.
                    </p>
                </div>
                <img src={catImage} alt="Cat squeezed into a bookshelf" />
            </div>

            <div className="feature dark">
                <img src={rocksImage} alt="Stacked stones balancing" />
                <div className="feature-content">
                    <h2>Valiant</h2>
                    <p>
                        We have provided successful services to an array clients
                        - we aren't afraid to take risks. We deal with any sort
                        of client coupled with any sort of sourcing requirement.
                    </p>
                </div>
            </div>

            <div className="feature">
                <div className="feature-content">
                    <h2>Noble</h2>
                    <p>
                        We believe in integrity, and being a sly or slick
                        company is the last thing on our agenda. Take a look at
                        who we are and what we do.
                    </p>
                </div>
                <img src={owlImage} alt="Owl perched on a post" />
            </div>
        </section>
    )
}

export default Features
