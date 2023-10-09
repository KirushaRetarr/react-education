import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/profile.svg" />
          </li>
        </ul>
      </header>
    );
  }
}
