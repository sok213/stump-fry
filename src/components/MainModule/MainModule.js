import React, { Component } from 'react';
import s from './MainModule.module.scss';
// import Footer from './../Footer/Footer';
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
        
        let icon = null;
        let color = null;

        if(tab === 'social') {
            icon = faUsers;
            color = '#347ed8';
        } else if(tab === 'health') {
            icon = faHeartbeat;
            color = '#e04a81';
        } else if(tab === 'creative') {
            icon = faPalette;
            color = '#e0d26d';
        } else if(tab === 'random') {
            icon = faRandom;
        }

        return (
            <FontAwesomeIcon icon={icon} className={s.icon} style={{ color }}/>
        );
    }

    renderNavItem(title, i) {
        return (
            <div 
                className={`
                    ${s.card}
                `}
                onClick={this.navClick.bind(this, title)}
                key={i}
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
                            <div className={s.scrollingWrapper} id={s.style6}>
                                {this.state.navItems.map((item, i) => {
                                    return this.renderNavItem(item, i);
                                })}
                            </div>
                        </div>
                        <div className={s.generatedContainer}>
                            <GeneratedSection 
                                activeCategory={this.state.activeCategory} />
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainModule;
