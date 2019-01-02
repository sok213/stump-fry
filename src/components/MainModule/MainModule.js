import React, { Component } from 'react';
import s from './MainModule.module.scss';
import Footer from './../Footer/Footer';
import GeneratedSection from './GeneratedSection/GeneratedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUsers, 
    faHeartbeat, 
    faPalette, 
    faRandom 
} from '@fortawesome/free-solid-svg-icons';

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

    renderIcon(tab) {

        if(tab === 'social') {
            return (
                <FontAwesomeIcon icon={faUsers} className={s.icon} />
            );
        } else if(tab === 'health') {
            return (
                <FontAwesomeIcon icon={faHeartbeat} className={s.icon} />
            );
        } else if(tab === 'creative') {
            return (
                <FontAwesomeIcon icon={faPalette} className={s.icon} />
            );
        } else if(tab === 'random') {
            return (
                <FontAwesomeIcon icon={faRandom} className={s.icon} />
            );
        }
    }

    renderNavItem(title) {
        return (
            <div 
                class={`
                    ${s.card}
                `}
                onClick={this.navClick.bind(this, title)}
            >  
                {this.renderIcon(title)}
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
                            <div class={s.scrollingWrapper} id={s.style6}>
                                {this.state.navItems.map((item) => {
                                    return this.renderNavItem(item);
                                })}
                            </div>
                        </div>
                        <GeneratedSection 
                            activeCategory={this.state.activeCategory} />
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainModule;
