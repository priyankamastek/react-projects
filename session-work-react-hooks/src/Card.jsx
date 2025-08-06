import iphone13 from './assets/iphone13.jpg'
import Button from 'react-bootstrap/Button';

import './Card.css'
function Card() {
    // inline styles
  const style = {};
    return (
       <div className="card">
            <img className="card-img" src= {iphone13} alt="mobile picture"></img>
            <h3 className="card-title">Apple iPhone 13</h3>
             <div className="features">
                <strong> Key Features </strong>
            </div>
            <ul className="card-ul">
                    
                    <li> Display: 6.1-inch OLED Display</li>
                    <li> Storage: 128 GB Internal Memory </li>
                    <li> Processor: Apple A15 Bionic Chipset </li>
                    <li> Operating System: iOS 17 </li>
                    <li> Camera: Dual 12MP Primary Camera | 12 MP Front Camera </li>
                    <li> Battery: MagSafe wireless charging up to 15W10 </li>
                    <li> Highlights: Sharp and Bright Display, IP68 Water and Dust Resistant </li>
                </ul>

                <button className="btn"> Click Me </button>
               <Button variant="secondary">Click Me</Button>  
                <Button as="input" type="submit" value="Submit" />
            
        </div>

    );

}

export default Card