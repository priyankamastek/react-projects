import iphone13 from './assets/iphone13.jpg'
import "./Card.css"; // 👈 Relative path
function Card() {

    return (

        <div className="card">
            <img className="card-img" src= {iphone13} alt="mobile picture"></img>
            <h3 className="car-title">Apple iPhone 13</h3>
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
            
        </div>

    );

}

export default Card