import React from 'react';

const AboutPage = () => (
    <div className='page-grid'>
        <section className='page-space'>
            <p className='page-title'>About</p>
            <p className='page-sub-title'>Learn Quran Academy Australia</p>
        </section>
        <section className='page-grid-bg section-one'>
            <div className='page-space'>
                <div className='grid-section-one'>
                    <img src='http://www.learnquran.com.au/vendor/local/imgs/quranic/australian-boy-learning-quran.webp' />
                    <div>
                        <p className='section-title'>
                            Let's start learning Quran with us
                        </p>
                        <p className='body'>Learn Quran Academy is pioneer organization who brought concept of online teaching in 2006. We started with the aim of spreading education about Islam and Quran online. Our courses are available to all age groups, now we have students from all over the world. Hundreds of students have completed Quran Reading, Tajweed, Tafseer, Translation and Memorization courses with us. Our courses are devised to build moral character of students according to Islam.</p>
                        <p className='body'>Learn Quran Academy is available round the clock 24/7. Our teachers and staff is highly Qualified, trained and professional in their work. We have qualified female teachers for Muslim sisters who are not comfortable going outside of their home. We have a web portal for our students through which they can check their daily lessons, schedules and find more interact with teachers. We are determined to make best use of internet that is spreading message of Quran in the whole world.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='page-space section-two'>
            <p className='section-title'>Why choose learn Quran academy</p>
            <div className='about-card-container'>
                {aboutCardData.map(data => <AboutCard key={data.iconUrl} {...data} />)}
            </div>
        </section>
        <section className='page-grid-bg'>
            <div className='page-space section-three'>
                <div>
                    <p className='section-title'>
                        Start Your<br />
                        Online Quran Learning<br />
                        Class Today
                    </p>
                    <p className='section-three-body'>
                        No Obligation Lessons to Evaluate our Quran Reading Service & Teachers, After the free lessons you can decide to continue or discontinue Quran learning with us!
                    </p>
                    <button className='car-button'>Get Started</button>
                </div>
                <img src='http://www.learnquran.com.au/vendor/local/imgs/quranic/austrailan-girl-learning-online-quran.webp' />
            </div>
        </section>
        <section className='page-space section-four'>
            <img src='http://www.learnquran.com.au/vendor/local/imgs/quranic/boy-memorize-quran-online.webp' />
            <div>
                <p className='section-title'>
                    Learn Quran <br />
                    in an Interactive way Class<br />
                    Today
                </p>
                <p className='section-three-body'>
                    No Obligation Lessons to Evaluate our Quran Reading Service & Teachers, After the free lessons you can decide to continue or discontinue Quran learning with us!
                </p>
                <button className='car-button'>Get Started</button>
            </div>
        </section>
    </div>

)

const AboutCard = ({ iconUrl, title, body }) => (
    <div className='about-card'>
        <img src={iconUrl} />
        <p className='card-title'>{title}</p>
        <p className='about-card-body'>{body}</p>
    </div>
)

const aboutCardData = [
    {
        iconUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/clock.svg',
        title: '24/7 Learn Online',
        body: 'Learn Quran Academy is available online round the clock. No matters where you live on globe you can have our services Online at your convenient time.'
    },
    {
        iconUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/quran-teacher.svg',
        title: '1 on 1 Online Quran Session',
        body: 'We provide one-on-one Online Quran learning sessions to help you and your family to learn Quran more comfortably.'
    },
    {
        iconUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/islamic-studies.svg',
        title: 'Islamic Teachings',
        body: 'Along with Quran learning course we will enable you to have a good understanding & become enlightened to the splendid teachings of Islam.'
    },
    {
        iconUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/staff.svg',
        title: 'Qualified staff',
        body: 'Learn Quran Academy has best qualified, experienced, courteous and well trained Online Quran teachers to make you learn Quran Online effectively.'
    },
    {
        iconUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/hafiza-quran.svg',
        title: 'Female Tutor',
        body: 'We have highly qualified, well trained and extremely capable Female tutors; who are committed to broadcast the essence of the Holy Quran.'
    },
    {
        iconUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/hafiza-quran.svg',
        title: 'Webportal',
        body: 'Learn Quran Academy has interactive website and Student web portal with responsive design to access it from any device you have.'
    },
]

export default AboutPage
