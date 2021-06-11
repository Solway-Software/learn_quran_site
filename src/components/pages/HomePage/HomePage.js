import React from 'react';

const HomePage = () => (
    <div className='page-container grid'>
        <div className='bg-secondary-color bg1-color'></div>
        <div className='home-flex'>
            <section className='section-one-flex'>
                <div>
                    <h3 className='color-white font-light rtl mt3'> قال النبي صلى الله عليه وسلم</h3>
                    <h2 className='primary-color font-light rtl'>طْلُبُوا الْعِلْمَ مِنَ الْمَهْدِ اِلىَ اللَّهْدِ</h2>
                    <h1 className='color-white primary-font mt3 font-500'>Seeking the religious knowledge is an obligation upon every Muslim.</h1>
                    <button className='btn-1 mt2 font-secondary section-one-btn font-500'>REQUEST DEMO CLASS</button>
                </div>
                <img
                    src='http://www.learnquran.com.au/vendor/local/imgs/slider/boy-praying-with-quran-kareem.webp'
                    className='mt2'
                />
            </section>
            <section className='section-two-flex'>
                <img src='http://www.learnquran.com.au/vendor/local/imgs/quranic/teenager-learning-quran.webp'/>
                <div>
                    <h2 className='primary-color primary-font font-500 mt4'>Welcome to <br />Learn Quran in an Interactive way</h2>
                    <p className='secondary-font color-white'>Learn Quran Academy knows raising children well versed with divine knowledge is a huge responsibility on every Muslim parent. As a matter of fact, the onus of burden lies solely on parents, but we sincerely wishes to share this huge responsibility on Muslims. It is not mere a claim, we know what it means. We take responsibility for good results of Quran learning. The way we achieve these exceptional results is by following slow but calculated steps, which ensure deep ingrain of Quranic verses. Eventually, taking your child step by step, we reach the highest level where they can learn to read the Quran online with Tajweed.</p>
                    <div className='space-1' />
                    <p className='secondary-font color-white'>Not only do we promise you the quality of learning, but we also make sure that your comfort is given priority. For this, comfort of home and your selected timings, supervision of parents and guidance of expert Quran Teachers is what puts Learn Quran Academy on a higher pedestal.</p>
                    <button className='btn-1 mt2 font-secondary section-one-btn font-500'>Take Free Clases Now</button>
                </div>
            </section>
            <section className='section-three-flex'>
                <div>
                    <h2 className='primary-color primary-font font-500 mt6'>A few reasons why we might be the right fit</h2>
                    <div className='mt4'>
                        {homeData.map(data => <HomeCard key={data.icon} {...data} />)}
                    </div>
                    <button className='btn-1 mt2 bg-secondary-color font-secondary section-one-btn font-500'>Take Free Clases Now</button>
                </div>
                <img src='http://www.learnquran.com.au/vendor/local/imgs/quranic/boy-hafiz-quran.webp'/>
            </section>
        </div>
    </div>
)

export default HomePage


const HomeCard = ({ icon, title, body }) => (
    <div className='home-card'>
        <img src={icon} />
        <h3 className='primary-color primary-font font-500'>{title}</h3>
        <p className='secondary-font font-400'>{body}</p>
    </div>
)

const homeData = [
    {
        icon: 'http://www.learnquran.com.au/vendor/local/imgs/icons/clock.svg',
        title: '24/7 Learn Online',
        body: 'We provide 24/7 service for learning. Which help students to learn Quran quickly and smoothly.'
    },
    {
        icon: 'http://www.learnquran.com.au/vendor/local/imgs/icons/quran-teacher.svg',
        title: '1 on 1 Online Quran Session',
        body: 'We provide one-on-one Online Quran learning sessions to help you and your family to learn Quran more comfortably.'
    },
    {
        icon: 'http://www.learnquran.com.au/vendor/local/imgs/icons/hafiza-quran.svg',
        title: '1 on 1 Online Quran Session',
        body: 'We have highly qualified, well trained and extremely capable Female tutors; who are committed to broadcast the essence of the Holy Quran.'
    },
]