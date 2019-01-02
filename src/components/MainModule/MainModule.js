import React, { Component } from 'react';
import s from './MainModule.module.scss';

class MainModule extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.mainModuleContainer}>
                <div className={s.mainModule}>
                    <div className={s.mainPanel}>
                        {/* TODO: 
                            1) Create acitvity navigation bar.
                            2) 
                        */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainModule;
