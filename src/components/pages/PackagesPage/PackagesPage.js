import React from 'react';

const PackagesPage = () => (
    <div className='grid'>
        <div className='packages-flex'>
            <div className='space-v4' />
            <div className='packages-header'>
                <h1 className='packages-title'>Fee & Packages</h1>
                <h2 className='packages-subtitle'>Learn Quran Academy Australia</h2>
                <div className='space-v3' />
                <p className='packages-paragraph'>We are accepting the fee in three currencies now: USD, GBP and AUD. If you are not in these three, you can still ask us the options of fees for you as well. You can choose the following schedules or a customized schedule as well which is not mentioned here. Weekends classes are possible as well with the same rate ratio.</p>
                <div className='space-v1' />
                <p className='packages-paragraph'> Choose your best suited per week plan below and then go for the free trial lesson for that. You can choose any of the following plans.</p>
            </div>
            <div className='space-v2' />
            <div className='packages-card-grid'>
                {planData.map(data => <PackagesCard key={data.title1} {...data} />)}
            </div>
            <div className='space-v6' />
            <div className='packages-trial-session'>
                <img src='http://www.learnquran.com.au/vendor/local/imgs/quranic/austrailan-girl-learning-online-quran.webp' />
                <div>
                    <h2 className='packages-subtitle'>Are you interested in Trial Session?</h2>
                    <p className='packages-paragraph'>You can try our Free Trial Session, No Obligation Lessons to Evaluate our Quran Reading Service & Teachers, After the free lessons you can decide to continue or discontinue Learn Quran Online with us.!</p>
                    <button className='btn-1'>Start Free Trail Now</button>
                </div>
            </div>
            <div className='space-v6' />
        </div>
    </div>
)

export default PackagesPage


const PackagesCard = ({
    title1,
    title2,
    planDes1,
    planDes2,
    planDes3,
    planDes4,
}) => (
        <div className='packages-card'>
            <div className='card-packages-shape' />
            <h3 className='packagaes-card-title1'>{title1}</h3>
            <div className='space-v4' />
            <h3 className='packagaes-card-title2'>{title2}</h3>
            <div>
                <p><span className='check'>&#10003;</span> {planDes1}</p>
                <p><span className='check'>&#10003;</span> {planDes2}</p>
                <p><span className='check'>&#10003;</span> {planDes3}</p>
                <p><span className='check'>&#10003;</span> {planDes4}</p>
            </div>
            <button className='btn-1'>Book Now</button>
        </div>
    )


const planData = [
    {
        title1: '30 AUD per Month',
        title2: '2 Days/Week',
        planDes1: 'Basic Quran Reading',
        planDes2: 'Quran Memorization',
        planDes3: 'Salah/Kalmas/Duas',
        planDes4: 'Urdu/Arabic Language',
    },
    {
        title1: '40 AUD per Month',
        title2: '3 Days/Week',
        planDes1: 'Basic Quran Reading',
        planDes2: 'Quran Memorization',
        planDes3: 'Salah/Kalmas/Duas',
        planDes4: 'Urdu/Arabic Language',
    },
    {
        title1: '50 AUD per Month',
        title2: '4 Days/Week',
        planDes1: 'Basic Quran Reading',
        planDes2: 'Quran Memorization',
        planDes3: 'Salah/Kalmas/Duas',
        planDes4: 'Urdu/Arabic Language',
    },
    {
        title1: '60 AUD per Month',
        title2: '5 Days/Week',
        planDes1: 'Basic Quran Reading',
        planDes2: 'Quran Memorization',
        planDes3: 'Salah/Kalmas/Duas',
        planDes4: 'Urdu/Arabic Language',
    },
]