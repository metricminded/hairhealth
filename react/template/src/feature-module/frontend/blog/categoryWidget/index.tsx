import React from 'react';
import { Link } from 'react-router-dom';

const CategoryWidget: React.FC = ()=> {

        return(
            <div className="card category-widget">
            <div className="card-header">
                <h4 className="card-title">Blog Categories</h4>
            </div>
            <div className="card-body">
                <ul className="categories">
                    <li><Link to="#">Cardiology <span>(62)</span></Link></li>
                    <li><Link to="#">Health Care <span>(27)</span></Link></li>
                    <li><Link to="#">Nutritions <span>(41)</span></Link></li>
                    <li><Link to="#">Health Tips <span>(16)</span></Link></li>
                    <li><Link to="#">Medical Research <span>(55)</span></Link></li>
                    <li><Link to="#">Health Treatment <span>(07)</span></Link></li>
                </ul>
            </div>
        </div>
        );
    }

export default CategoryWidget;