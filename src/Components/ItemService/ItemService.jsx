import './ItemService.css';
import { Link } from 'react-router-dom';
import { FaShieldVirus } from 'react-icons/fa';
import { SiSpeedtest } from 'react-icons/si';
import { SiHomeassistant } from 'react-icons/si';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { IoMdWater } from 'react-icons/io';


const ItemService = ( { id, title, image, price, feature1, feature2, feature3, feature4, feature5 } ) => {

    return (
        <div className="divStyle">
            <img src={image} alt="" className="imageStyle" />
            <div className="descriptionDiv">
                <p className="titleStyle">{title}</p>
                <ul className="ulStyle">
                    <li><MdPrecisionManufacturing /> {feature1}</li>
                    <li><SiSpeedtest /> {feature2}</li>
                    <li><SiHomeassistant /> {feature3}</li>
                    <li><FaShieldVirus /> {feature4}</li>
                    <li><IoMdWater /> {feature5}</li>
                </ul>
            </div>
            <div className="priceCartDiv">
                <p className="priceStyle">$ {price}</p>
                <p className="priceDetail">*price per day</p>
                <p className="seeDetailStyle"><Link to={`/services/${id}`} className="linkSeeDetailsStyle">See details</Link></p>
                <button className="buttonAddStyle">Buy</button>
            </div>
        </div>
    );
}

export default ItemService;