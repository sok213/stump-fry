import React, { Component } from 'react';
import s from './GeneratedSection.module.scss';
import { MoonLoader } from 'react-spinners';

class GeneratedSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialActs: [
                'Ask a friend or family member out for lunch.',
                'Go to a cafe you’ve never been to.',
                'Go to the mall and purchase a small item.',
                'Find and attend a free event at meetup.com or eventbrite.com',
                'Join a class that teaches something you are interested in (Yoga, Art, Public Speaking, Dance, Martial Arts, etc.)',
                'Turn off your computer, put down your phone, and walk outside for an hour.',
                'Attend a farmers market.',
                'Find a yard sale and go to it.',
                'Go to a bar and order sparkling water.',
                'Go to the library and ask the librarian what their favorite books are.',
                'Buy tickets to a concert and go to it.',
                'Put on a dress shirt, skinny jeans, and go to a club.',
                'Enroll in college.',
                'Volunteer for your local community.'
            ],
            healthActs: [
                'Walk for 2 miles.',
                'Find the nearest park and run around it until you get bored.',
                'Join a gym.',
                'Meditate for 10 minutes.',
                'If you don’t know how to do yoga, join a yoga class or watch a video, then start doing yoga.',
                'Begin a healthy diet starting now.',
                'Drink 12 ounces of water.',
                'Stretch for 30 minutes.',
                'Make yourself a cup of green tea with no sugar.',
                'Ask a friend out for a jogging session.',
                'Take a very cold shower.',
                'Make a doctors appointment for a routine checkup.',
                'Make a dentist appointment for a routine checkup.',
                'Set your alarm to wake up 1 hour earlier than usual.',
                'Go for a swim.'
            ],
            creativeActs: [
                'Paint a picture of your favorite animal.',
                'Draw something that you feel is missing from your life.',
                'Create a musical piece.',
                'Write a poem and publish it online.',
                'Write a one page short story and share it with the world.',
                'Film a 5 minute vlog.',
                'Make a compilation video.',
                'Create a playlist for all your activities (driving, working out, shopping, reading, working, etc.)',
                'Find a recipe of your favorite type of food and attempt to cook it.',
                'Purchase and build a Lego set piece.',
                'Try to mix your own cocktail, give it a name, then drink it.'
            ],
            miscActs: [
                'Take a shower.',
                'Clean and re-arrange your living space.',
                'Give away or sell all your un-used possessions.',
                'Apply for a better job.',
                'Learn a programming language.',
                'Delete your Facebook.',
                'If you have a car, wash your car. If you don’t, go do laundry.',
                'Wash your clothes.',
                'Clean out your junk drawer.',
                'Text “Hello” to a random contact on your phone.',
                'Donate $5 to a non-profit organization of your choice.',
                'Leave a friendly comment on a YouTube video.',
                'Create a bucket list.',
                'Write a letter to your future self and specify what year you are allowed to open it. Then, put it in a sealed envelope and don’t open it until the specified year.',
                'Buy a painting and hang it on your wall.',
                'Wash your dishes.',
                'Watch a motivational video in its entirety.'
            ],
            randomActs: [],
            selectedActivity: null,
            ctaClicked: false,
            loading: false
        }
    }

    showLoading = () => {
        this.setState({ loading: true });
    }

    hideLoading = () => {
        this.setState({ loading: false });
    }

    shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    componentDidMount() {
        const socialActs = this.state.socialActs;
        const healthActs = this.state.healthActs;
        const creativeActs = this.state.creativeActs;
        const randomActs = this.shuffleArray(socialActs.concat(healthActs).concat(creativeActs));
        this.setState({ randomActs });
    }

    generateAction = () => {
        this.setState({ ctaClicked: true });
        let selectedActivity = null;

        if(this.props.activeCategory === 'social') {
            let genRandomIndex = Math.floor(Math.random() * (this.state.socialActs.length - 1));
            selectedActivity = this.state.socialActs[genRandomIndex];
        } else if(this.props.activeCategory === 'health') {
            let genRandomIndex = Math.floor(Math.random() * (this.state.healthActs.length - 1));
            selectedActivity = this.state.healthActs[genRandomIndex];
        } else if(this.props.activeCategory === 'creative') {
            let genRandomIndex = Math.floor(Math.random() * (this.state.creativeActs.length - 1));
            selectedActivity = this.state.creativeActs[genRandomIndex];
        } else if(this.props.activeCategory === 'misc') {
            let genRandomIndex = Math.floor(Math.random() * (this.state.miscActs.length - 1));
            selectedActivity = this.state.miscActs[genRandomIndex];
        } else if(this.props.activeCategory === 'random') {
            let genRandomIndex = Math.floor(Math.random() * (this.state.randomActs.length - 1));
            selectedActivity = this.state.randomActs[genRandomIndex];
        }

        this.setState({ selectedActivity });
        this.showLoading(selectedActivity);

        setTimeout(function() {
            this.hideLoading(selectedActivity);
        }.bind(this), 1500);
    }

    toggleDisable = () => {
        if(this.props.activeCategory === null) {
            return s.disabledCta;
        }

        return null;
    }

    renderContent = () => {

        if(this.state.loading) {
            return (
                <div className={s.loadingContainer}>
                    <MoonLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
            );
        }

        if(this.props.activeCategory === null || !this.state.ctaClicked) {
            return (
                <div className={s.instructionsContainer}>
                    <h1>Instructions</h1>
                    <p>This is a very simple tool used to generate productive activities of what you could be doing with your time instead of endlessly browsing mindless content on the internet.</p>
                    <ul className={s.steps}>
                        <li>Choose a category of activities you favor above.</li>
                        <li>Click the "Generate Activity" button and wait for a suggested activity to be generated.</li>
                    </ul>
                </div>
            );
        }

        return (
            <div className={s.generateActivityContainer}>
                <p>{this.state.selectedActivity}</p>
            </div>
        )
    }

    render() {
        return (
            <div className={s.container}>
                <div className={s.answerContainer}>
                    {this.renderContent()}
                </div>
                <div className={s.buttonContainer}>
                    <button 
                        className={`
                            ${s.generateCta}
                            ${this.toggleDisable()}
                        `}
                        onClick={this.generateAction}
                    >
                        Generate Activity
                    </button>
                </div>
            </div>
        );
    }
}

export default GeneratedSection;
