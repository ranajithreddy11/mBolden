import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/GigEconomy.css'
import GigEconomyImage from '../assets/GigEconomyImages/GigEconomyImage.png'
import ProjectedGross from '../assets/GigEconomyImages/ProjectedGrossChart.png'
import FastestGrowing from '../assets/GigEconomyImages/FastestGrowing.png'
import TopSkills from '../assets/GigEconomyImages/topSkills.png'


const GigEconomy = () => {
    return (
        <div className="gig-economy-page">
            <Header />
            <main>
                <div className="content-wrapper">
                    <div className="head-section">
                        <img src={GigEconomyImage} alt="gig-economy" className="head-image" />
                        <h1>The Gig Economy and Disruptive Technologies Changing the Composition of Workforces</h1>
                    </div>
                    <div className="text-section">
                        <h2>Introduction</h2>
                        <p>
                            The gig economy refers to the labor market characterized by short-term, flexible freelance or 
                            independent work performed by “gig workers” often through digital platforms or mobile apps. 
                            It is rapidly transforming the traditional workforce and this shift is driven by disruptive 
                            technologies that are reshaping when, how and where work gets done.
                        </p>
                        <h2>Rise of the Gig economy</h2>
                        <p>
                            The rise of the gig economy has been fueled by advancements in technology, changing work 
                            preferences, desire for greater autonomy among workers, and most recently, the COVID-19 
                            pandemic 1 . The gig economy generated a gross volume of US$ 455 billion in 2023 2 and 
                            accounts for nearly 12% of the global labor market 3with an estimated 154 million to 435 
                            million gig workers 4 . In Canada, 28% of the population participates in this economy and 
                            is expected to grow in the coming years 5 . This has significant implications for organizations 
                            and employers, impacting various aspects of their operations, workforce management and 
                            business strategies. Key challenges include employee engagement and retention, retaining 
                            corporate culture, enabling collaboration, workforce management and integration with less 
                            structured and non-traditional work arrangements, compliance, and ensuring commitment and 
                            satisfaction amongst workers.
                        </p>
                        
                        <div className="charts">
                            <div className="chart">
                                {/* <h3>Projected Gross Volume of the Gig Economy (Billions USD)</h3> */}
                                <img src={ProjectedGross} alt="Projected Gross Volume" />
                            </div>
                        </div>
                        
                        <h2>The Role of Disruptive Technologies:</h2>
                        <p>
                            Disruptive technology refers to innovations that significantly change how industries 
                            operate, often displacing established technologies or business models and creating 
                            new markets. Examples of disruptive technologies include cloud computing, big data 
                            analytics, Internet of Things, artificial intelligence, and machine learning, blockchain 
                            and advanced robotics 6 . The emergence of the COVID-19 pandemic triggered a rapid 
                            increase in the adoption of these technologies. As well, it has facilitated the rise 
                            of the gig economy by enabling digital platforms that connect independent workers with 
                            businesses and consumers. These technologies have resulted in numerous benefits such as 
                            higher productivity, GDP growth and improved corporate performance but has led to rise 
                            in need for skills like technological, social, and emotional and fall in the demand for 
                            physical and manual skills. 
                        </p>
                        <div className="charts">
                            <div className="chart">
                                {/* <h3>Projected Gross Volume of the Gig Economy (Billions USD)</h3> */}
                                <img src={FastestGrowing} alt="fastest growing" />
                            </div>
                        </div>
                        
                        <h2>Impact on workforce composition:</h2>
                        <p>
                            The surge of the gig economy has disrupted the traditional employer-employee relationship. 
                            With the inclusion of gig workers, organizations now have a more diverse workforce. Managing 
                            this diverse workforce composition with different expectations, motivations and work arrangements 
                            is a key challenge. Due to advancements in technology, it is estimated that 85 million jobs will 
                            be displaced, and 97 million new jobs will be created in 26 countries by 2026 7 . World Economic 
                            Forum estimates that, by 2025, 50% of employees worldwide will need reskilling due to adoption 
                            of new technology 8 . These skills will consist of technology competencies which are not yet 
                            considered crucial in the job market today. By 2030, two-thirds of the essential skills considered 
                            essential currently will change 9 . The most affected industries are construction, manufacturing, 
                            transportation, logistics and retail among others.
                        </p>
                        <div className="charts">
                            <div className="chart">
                                {/* <h3>Projected Gross Volume of the Gig Economy (Billions USD)</h3> */}
                                <img src={TopSkills} alt="top skills" />
                            </div>
                        </div>

                        <h2>Outlook</h2>
                        <p>
                            The intersection of the gig economy and disruptive technologies and its impact on the 
                            workforce is expected to continue evolving rapidly. By some economic statistics, more 
                            than 50% of the US workforce is expected to participate in the gig economy by 2027 10 . 
                            With the higher acceptance of remote work, companies can tap into a global talent pool. 
                            The rise of disruptive technologies is redefining how work gets done and the skills 
                            needed to do it. To adapt to this, organizations must embrace a culture of innovation, 
                            invest in up skilling its workforce, introduce agile and flexible business models and 
                            foster long-term resilience.
                        </p>
                        <h2>Case Studies of Companies and Industries Impacted by the Gig Economy</h2>
                        <p>
                            In the age of rapid technological advancement and evolving consumer preferences, the emergence 
                            of the gig economy has catalyzed profound transformations across multiple sectors. From 
                            transportation to hospitality, food, and technology, the gig economy has reshaped traditional 
                            business models, offering both opportunities and challenges.
                        </p>
                        <h4>Transportation</h4>
                        <p>
                            Uber’s rise to prominence highlights the impact of the gig economy in the transportation sector. 
                            Founded in 2009, Uber disrupted traditional taxi services by introducing a convenient and 
                            cost-effective ride sharing model. The company’s innovative app allowed users to request 
                            rides from nearby drivers, revolutionizing the way people commute in urban areas. Uber’s 
                            gig economy model empowered individuals to monetize their vehicles by working as independent 
                            contractors. This flexibility appealed to a diverse range of drivers, from students seeking 
                            supplemental income to professionals exploring alternative employment options. As of 2022, 
                            drivers and delivery people earned a total of $7.8 billion since 2012 12 . However, the company 
                            faced criticism over labor practices, with drivers advocating for better wages, benefits, and 
                            job security. Legal battles ensued over the classification of drivers as independent 
                            contractors versus employees, highlighting the complexities of worker rights in the gig economy.
                        </p>
                        <h4>Food</h4>
                        <p>
                            DoorDash emerged as a dominant player in the food delivery space, capitalizing on the 
                            growing demand for on-demand dining experiences. Founded in 2013, DoorDash quickly 
                            gained traction by offering a vast selection of restaurant options and efficient 
                            delivery services. As of 2023, DoorDash held approximately 45% of the food delivery 
                            market in Canada 13 . Through its user-friendly app, DoorDash connected consumers with 
                            nearby restaurants, allowing them to order meals for delivery or pickup. This convenience 
                            resonated with busy professionals, families, and individuals seeking hassle-free dining 
                            options. For gig workers, DoorDash provided a flexible income opportunity, enabling 
                            individuals to earn money by delivering food on their own schedule. However, there were 
                            issues on worker pay and conditions. Delivery drivers voiced concerns over low wages, 
                            inconsistent earnings, and lack of benefits, sparking debates over labor rights and fair 
                            treatment in the gig economy.
                        </p>
                        <h4>Hospitality</h4>
                        <p>
                            Airbnb revolutionized the hospitality industry by offering a peer-to-peer lodging 
                            marketplace that disrupted traditional hotel accommodations. Founded in 2008, 
                            Airbnb empowered individuals to monetize their homes or spare rooms by renting 
                            them out to travelers seeking unique and personalized lodging experiences. In 2021, 
                            the typical Host on Airbnb in Canada earned approximately $10,300 14 . But cities 
                            now grapple with issues related to zoning laws, taxation, housing affordability, 
                            and the impact of short-term rentals on local neighborhoods.
                        </p>
                        <h4>Technology</h4>
                        <p>
                            Upwork transformed the tech industry by pioneering a freelance marketplace that 
                            connects businesses with a global network of skilled professionals. Founded in 
                            2015, Upwork disrupted traditional employment models by enabling remote work and 
                            project-based engagements. Businesses can easily hire freelancers for short-term 
                            projects or ongoing collaborations, accessing specialized skills without the 
                            constraints of traditional hiring processes. In 2022, freelancers collectively 
                            earned over $200 million through the Upwork platform 15 . But there are raised 
                            questions about job security, income stability, and benefits provided to gig workers.
                        </p>
                        <h2>Recommendations for Businesses or Workers on Adapting to gig economies</h2>
                        <h4>For Business</h4>
                        <p>
                            1. Project-Centric Model: Shift from hours to outcomes—focus on the completion of projects or tasks rather than the number of hours worked.
                            2. Scheduling Freedom: Implement flexible work arrangements that allows employees to choose where they work, when and how they work.
                            3. Platforms for Seamless Collaboration: Embrace technology for efficient collaboration which is essential in a gig-centric environment.
                        </p>
                        <h4>Fow Workers</h4>
                        <p>
                            1. Education and Training: Upskilling through education and training for the evolving market.
                            2. Financial Planning: As gig work often doesn’t come with traditional benefits like healthcare and retirement plans, it’s important to plan and manage finances effectively.
                            3. Community: Connect with other gig workers for support and shared learning.
                            4. Place and Routine: Establish a dedicated workspace and routine for productivity and performance.
                        </p>
                    </div>
                    <section className="reference-section">
                        <h2>References</h2>
                            <ul>
                                <li><a href="https://www.payments.ca/canadas-gig-economy-has-been-fuelled-pandemic-workers-and-businesses-are-challenged-payments" target="_blank" rel="noopener noreferrer">[1] https://www.payments.ca/canadas-gig-economy-has-been-fuelled-pandemic-workers-and-businesses-are-challenged-payments</a></li>
                                <li><a href="https://www.statista.com/statistics/1034564/gig-economy-projected-gross-volume/" target="_blank" rel="noopener noreferrer">[2] https://www.statista.com/statistics/1034564/gig-economy-projected-gross-volume/</a></li>
                                <li><a href="https://www.worldbank.org/en/news/press-release/2023/09/07/demand-for-online-gig-work-rapidly-rising-in-developing-countries" target="_blank" rel="noopener noreferrer">[3] https://www.worldbank.org/en/news/press-release/2023/09/07/demand-for-online-gig-work-rapidly-rising-in-developing-countries</a></li>
                                <li><a href="https://openknowledge.worldbank.org/entities/publication/ebc4a7e2-85c6-467b-8713-e2d77e954c6c" target="_blank" rel="noopener noreferrer">[4] https://openknowledge.worldbank.org/entities/publication/ebc4a7e2-85c6-467b-8713-e2d77e954c6c</a></li>
                                <li><a href="https://www.hrreporter.com/focus-areas/compensation-and-benefits/number-of-gig-workers-doubles-in-2022/374149" target="_blank" rel="noopener noreferrer">[5] https://www.hrreporter.com/focus-areas/compensation-and-benefits/number-of-gig-workers-doubles-in-2022/374149</a></li>
                                <li><a href="https://fastercapital.com/content/Technology-Disruption–Transforming-the-World-Economic-Outlook.html#The-Rise-of-the-Gig-Economy" target="_blank" rel="noopener noreferrer">[6] https://fastercapital.com/content/Technology-Disruption–Transforming-the-World-Economic-Outlook.html#The-Rise-of-the-Gig-Economy</a></li>
                                <li><a href="https://www.weforum.org/press/2020/10/recession-and-automation-changes-our-future-of-work-but-there-are-jobs-coming-report-says-52c5162fce/" target="_blank" rel="noopener noreferrer">[7] https://www.weforum.org/press/2020/10/recession-and-automation-changes-our-future-of-work-but-there-are-jobs-coming-report-says-52c5162fce/</a></li>
                                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9278314/" target="_blank" rel="noopener noreferrer">[8] https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9278314/</a></li>
                                <li><a href="https://www.statista.com/statistics/921593/gig-economy-number-of-freelancers-us/#:~:text=This%20statistic%20shows%20the%20number,of%20the%20total%20U.S.%20workforce." target="_blank" rel="noopener noreferrer">[9] https://www.statista.com/statistics/921593/gig-economy-number-of-freelancers-us/#:~:text=This%20statistic%20shows%20the%20number,of%20the%20total%20U.S.%20workforce.</a></li>
                                <li><a href="https://www.brainzmagazine.com/post/adapting-to-disruptive-technology-strategies-for-business-strategy-success#:~:text=2.,ongoing%20market%20research%20and%20analysis" target="_blank" rel="noopener noreferrer">[10] https://www.brainzmagazine.com/post/adapting-to-disruptive-technology-strategies-for-business-strategy-success#:~:text=2.,ongoing%20market%20research%20and%20analysis</a></li>
                                <li><a href="https://www.uber.com/en-CA/newsroom/uber-celebrates-10-years-in-canada/" target="_blank" rel="noopener noreferrer">[11] https://www.uber.com/en-CA/newsroom/uber-celebrates-10-years-in-canada/</a></li>
                                <li><a href="https://www.statista.com/forecasts/998501/online-food-delivery-bookings-by-brand-in-canada#:~:text=In%202023%2C%20a%20Statista%20survey,using%20the%20food%20delivery%20platform" target="_blank" rel="noopener noreferrer">[12] https://www.statista.com/forecasts/998501/online-food-delivery-bookings-by-brand-in-canada#:~:text=In%202023%2C%20a%20Statista%20survey,using%20the%20food%20delivery%20platform</a></li>
                                <li><a href="https://news.airbnb.com/canadayearinreview/" target="_blank" rel="noopener noreferrer">[13] https://news.airbnb.com/canadayearinreview/</a></li>
                                <li><a href="https://investors.upwork.com/static-files/f251fbeb-0851-47e9-b295-65c478999999" target="_blank" rel="noopener noreferrer">[14] https://investors.upwork.com/static-files/f251fbeb-0851-47e9-b295-65c478999999</a></li>
                            </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GigEconomy;