import React from 'react';

const HomePage = () => {
    return (
        <div className="home-page">
            <Carousel />
            <p className="paragraph">
            Smile Foundation is an NGO in India directly benefitting over 15,00,000 children and their families every year, through more than 400 live welfare projects on education, healthcare, livelihood and women empowerment, in over 2000 remote villages and slums across 25 states of India.

We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Following this model of Civic Driven Change, Smile Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.

            </p>
            <Footer /> //home
        </div>
    );
};

export default HomePage;
