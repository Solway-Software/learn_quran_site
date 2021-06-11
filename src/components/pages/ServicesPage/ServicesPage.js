import React from 'react';

const ServicesPage = () => (
    <div className='grid'>
        <div className='services-flex'>
            <div className='space-v4' />
            <div className='services-header'>
                <h1>Services</h1>
                <h2>Learn Quran Academy Australia</h2>
                <div className='space-v3' />
                <p>Learn Quran Online recitation with Tajweed. We designed special courses for kids to teach them Noorani Qauida, identification of Arabic Alphabets, Harakaat, Kasra (Zair), Dammah (Paish), Sakoon (Jazam, Maddah and leen letters, Learn standing Fatha, Kasra and Dammah, Learn Shaddah, Learn Madd, Learn Tanween, Learn Idgham, Learn Iqlab, Learn Ikhfa, Learn rules of Meem sakin.</p>
                <div className='space-v1' />
                <p>We provide Online quran tutors (Qaarias and Qari’s) to teach quran to students of all ages. Learn Quran with Tajweed. Our trained teachers provide best training of quran with tajweed. Online quran lessons are designed to teach recitation of quran in minimum time.</p>
            </div>
            <div className='space-v2' />
            <div className='services-card-grid'>
                {servicesCardData.map(data => <CardServices key={data.imgUrl} {...data} />)}
            </div>
            <div className='space-v3' />
            <div className='services-intersted'>
                <h1>Are you interested in</h1>
                <h2>Trial Session?</h2>
                <p>You can try our Free Trial Session, No Obligation Lessons to Evaluate our Quran Reading Service & Teachers, After the free lessons you can decide to continue or discontinue Learn Quran Online with us.!</p>
                <button className='btn-1'>Start Free Trial Now</button>
            </div>
            <div className='space-v6' />
        </div>
    </div>
)

export default ServicesPage

const CardServices = ({ imgUrl, title, description, buttonText }) => (
    <div className='services-card'>
        <img src={imgUrl} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className='btn-1'>{buttonText}</button>
    </div>
)

const servicesCardData = [
    {
        imgUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/norani-qaida.svg',
        title: 'Noorani Qaida',
        description: 'Norani Qaida is a basic course to recognize words of Quran & learn how to pronounce them correctly. Noorani Qaida contains all rules of tajweed (the correct method of Quran recitation) & different lessons are designed to practice these rules. For example, identification of Arabic Alphabets, Harakaat, Kasra(Zair), Dammah(Paish), Sakoon , Kasra & Dammah, Learn Shaddah, Madd, Tanween, Idgham, Ikhfa, Iqlab, & rules of Meemsakin.',
        buttonText: 'Take This Course'
    },
    {
        imgUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/quran-readings.svg',
        title: 'Quran Reading',
        description: 'We provide services of Online Quran reading, Online Quran learning, Quran recitation and holy Quran understanding through the knowledge and wisdom of our highly trained holy Quran teachers. After Norani Qaida when student get hold on rules or tajweed we move to Quran Lessons. In 30 minutes Quran teaching teacher provides instructions about Quran reading and help student to learn Quranby practicing.',
        buttonText: 'Register Your Kid Now'
    },
    {
        imgUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/quran-memorization.svg',
        title: 'Quran Memorization',
        description: 'Memorizing the Holy Quran is a spiritual moment. It’s a miracle and blessing from Allah that you’re able to absorb the Qur’an. Millions of Muslim parents have desire to make Quran memorize to their children but due to unavailability of skilled tutors they remain deprived from this great opportunity. Therefore, learn Qurans offering complete service of online Quran memorization under supervision of skilled tutors.',
        buttonText: 'Start Memorization'
    },
    {
        imgUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/islamic-teachings.svg',
        title: 'Islamic Teachings',
        description: 'this course we teach our students to learn basic Islamic principles, Duas, and how to offer salah. The teachers motivate their students to become practicing Muslim. They encourage students for performing salah, keeping fast etc We also teach our students etiquettes for blessed life, just as etiquette of Mosque, Quran recitation, dealing with people etc.',
        buttonText: 'Take Free Classes'
    },
    {
        imgUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/tafseer-tajweed.svg',
        title: 'Tafseer/Tajweed',
        description: 'Quran Reading with Tafseer/Tajweed has immense important in the preservation of Quran and its authority, as correction and beauty of the words leads to the production of perfect meanings. It is obligatory for every Muslim, kids, and adults to read the Holy Quran with Tafseer/Tajweed. Quran reading with Tajweed is one of our courses and this is for all ages and genders.',
        buttonText: 'Start Trial Today!'
    },
    {
        imgUrl: 'http://www.learnquran.com.au/vendor/local/imgs/icons/urdu-arabic.svg',
        title: 'Learn Urdu/Arabic',
        description: 'Come and join us to learn Urdu/Arabic language in a most relaxed atmosphere. We will teach you speaking and listening Urdu/Arabic Language. We are running regular Urdu/Arabic classes on weekends for adults. Whether you want to learn Urdu/Arabic for fun, family, to impress someone or career, you will find our Urdu/Arabic classes useful and enjoyable.',
        buttonText: 'Learn These Languages'
    },
]