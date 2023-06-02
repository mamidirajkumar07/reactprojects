import React from 'react';
import "./Chillbro.css";


class ChillBroBodycontent extends React.Component {
    render() {
        const {img1, alt} = this.props;
        return(
            <div>
                <div class='typedtxt'>
                <h3 className='typedAnim header text-center'>What is BroChill?|</h3>
                </div>
                <div className='container d-flex'>
                    <p>
                    Brochill is a vernacular content platform. It is a personalizable content discovery platform.
                    Creators post personalisable images and videos, and users consume them. 
                    All content is curated based on trends, events and festivals
                    </p>
                    <img className='50vw' src={img1} alt={alt} />
                </div>
            </div>
        );
    }
}

export default ChillBroBodycontent;