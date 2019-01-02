import React, { Component } from 'react';
import s from './GeneratedSection.module.scss';

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
            ]
        }
    }

    render() {
        return (
            <div className={s.container}>
                <div className={s.answerContainer}>
                    <h1>Gen Section.</h1>
                    <p>Active Category: {this.props.activeCategory}</p>
                </div>
                <div className={s.buttonContainer}>
                    <button>Generate New</button>
                </div>
            </div>
        );
    }
}

export default GeneratedSection;
