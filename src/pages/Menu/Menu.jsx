import React from "react";
import { MenuButton } from '../../components';
import '../pages.scss';

const StartGame = () => {

}

const Menu = () => {
    return (
        <div>
        <h1>The Duality of Choice</h1>
        <MenuButton title={'Start Your Adventure'} func={() => this.StartGame()}/>
    </div>
    )
};

export default Menu;