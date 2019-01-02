import React, { Component } from 'react';
import s from './MainModule.module.scss';
import Footer from './../Footer/Footer';

class MainModule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navItems: [
                'social',
                'health',
                'creative',
                'random'
            ],
            activeCategory: null
        }
    }

    navClick = (selectedCategory) => {
        this.setState({ activeCategory: selectedCategory })
    }

    renderNavItem(title) {
        return (
            <div 
                class={`
                    ${s.card}
                `}
                onClick={this.navClick.bind(this, title)}
            >
                <p>{title.toLowerCase()}</p>
                <div 
                    className={`
                        ${s.underline}
                        ${this.state.activeCategory === title ? s.activeTab : null}
                    `}
                ></div>
            </div>
        );
    }

    render() {
        return (
            <div className={s.mainModuleContainer}>
                <div className={s.mainModule}>
                    <div className={s.mainPanel}>
                        <div className={s.navContainer}>
                            <div class={s.scrollingWrapper}>
                                {this.state.navItems.map((item) => {
                                    return this.renderNavItem(item);
                                })}
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainModule;
