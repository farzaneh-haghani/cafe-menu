import React from "react";
import "../App.css";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items?.map((menuItem) => {
        const { id, title, img, descript, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">£{Math.floor(price) * 10}</h4>
              </header>
              <p className="item-text">{descript}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
