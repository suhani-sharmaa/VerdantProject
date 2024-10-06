import { useEffect, useState } from 'react';
import '../style3.css'
  const thoughts = [
    "want news,i am here",
    "You can always contact us for more details.",
    "Have a question? Don't hesitate to ask!",
    "I'm just a robot, but I know a thing or two.",
    "Queries? Let's get them solved!",
    "Feel free to drop a message!",
    "Looking for answers? Let's chat!",
    "I'm always here for your inquiries!",
    "Got any questions? Let's work on them!"
  ];
export default function News() {
  const[thought , setThought] = useState( "Queries? Let's get them solved!");
  function updateThought() {
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    setThought(randomThought);
    setTimeout(()=>{
        updateThought();
    },5000)
  }
  useEffect(()=>{
    updateThought();
      window.scrollTo(0,0);
      document.title = "News-Verdant"
  })
  return (
    <div className='font-Ankori'>
    {/* Contact Us Section */}
    <section className="contact-header">
      <div className="hello">
        <div className="subhello">
          <h2>Company News - Verdant</h2>
        </div>
      </div>
    </section>

    <section className="news-section">
      <div className="news-content">
        {/* Main News Item */}
        <div className="main-news">
          <img
            src="https://www.volvogroup.com/content/dam/volvo-group/markets/master/news/2022/jan/image-1860x1050-volvo-vnr-electric.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>
              Volvo Unveils New Electric Truck Model for Heavy-Duty Hauling
            </h2>
            <p className="date">September 25, 2024</p>
            <p className="description">
              Volvo has introduced its latest fully electric truck designed
              for heavy-duty long-haul operations. The new model comes with
              improved battery capacity, offering a range of up to 300
              kilometers on a single charge. This launch is part of Volvo’s
              broader commitment to achieving carbon neutrality by 2030. With
              governments worldwide pushing for stricter emission standards,
              Volvo aims to lead the market with innovative, zero-emission
              trucks suitable for various industrial uses.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://wri-india.org/sites/default/files/Expanding-Footprint-Grand-Challenge-across-Tier-II-India.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>
              India’s First Electric Bus Service Expands to Tier 2 Cities
            </h2>
            <p className="date">September 20, 2024</p>
            <p className="description">
              After a successful rollout in metro cities, India’s electric bus
              service is set to expand to tier 2 cities across the country.
              The initiative aims to promote sustainable public transport,
              reduce carbon emissions, and curb air pollution. These new
              electric buses are equipped with fast-charging technology and
              can run for up to 250 kilometers on a single charge. This move
              will help reduce dependence on fossil fuels and foster cleaner
              air in urban areas.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://assets.new.siemens.com/siemens/assets/api/uuid:13595096-4e3b-4cee-8da4-3537c4bd3e32/width:2000/quality:high/Z715624-1.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>
              Siemens Develops Intelligent Lifting Systems for Heavy Industry
            </h2>
            <p className="date">September 28, 2024</p>
            <p className="description">
              Siemens has developed a state-of-the-art intelligent lifting
              system that enhances operational efficiency in heavy industries
              such as construction and manufacturing. The system uses AI
              algorithms to monitor load weights, balance, and positioning in
              real-time, reducing the risk of accidents and improving
              accuracy. This innovation is set to revolutionize how
              large-scale projects manage lifting operations by increasing
              safety and efficiency.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://www.robotics247.com/images/article/ExactEmerge_Resize.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>John Deere Unveils New Electric Agricultural Machines</h2>
            <p className="date">September 30, 2024</p>
            <p className="description">
              John Deere has introduced a new range of fully electric
              agricultural machines aimed at improving sustainability in
              farming. The machines, which include electric tractors and
              harvesters, offer zero-emission operation and are equipped with
              smart sensors for improved productivity. Farmers can now manage
              crops more efficiently while reducing their carbon footprint.
              These innovations are part of John Deere&#39;s broader vision of
              transforming agriculture through sustainable technology.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://eepower.com/uploads/articles/tesla-megapacks-to-power-one-of-worlds-largest-energy-storage-facilities-fig1.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>
              Tesla Expands Energy Storage System for Homes and Industries
            </h2>
            <p className="date">October 1, 2024</p>
            <p className="description">
              Tesla has announced an upgrade to its energy storage systems,
              including the Powerwall and Powerpack, designed for residential
              and industrial use. The new systems offer greater energy
              capacity and can store up to 50% more renewable energy, making
              them ideal for both homes and large businesses. With the global
              push for renewable energy, Tesla’s advanced storage solutions
              provide reliable, long-term energy storage to support grids
              worldwide.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://img2.chinadaily.com.cn/images/201712/28/5a443796a31008cfb2e8cc50.jpeg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>China Rolls Out Autonomous Rail Rapid Transit System</h2>
            <p className="date">September 26, 2024</p>
            <p className="description">
              China&#39;s first fully autonomous rail rapid transit system has
              been launched in several key cities. The new system uses AI to
              manage train scheduling, passenger flow, and safety operations
              without human intervention. This development aims to improve
              urban transportation efficiency and reduce delays, contributing
              to a smarter, more sustainable public transportation network.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://www.worldhighways.com/sites/wh/files/2022-10/Caterpillar%20320%20medium%20excavator%206.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>
              Caterpillar Launches Electric Excavators for Construction
              Industry
            </h2>
            <p className="date">October 3, 2024</p>
            <p className="description">
              Caterpillar has introduced its first line of electric excavators
              designed for construction and mining operations. These machines
              feature zero-emission engines and enhanced operational
              efficiency, cutting down on noise and air pollution on job
              sites. With an impressive battery life of up to 8 hours, they
              are set to transform the construction industry by offering a
              greener alternative to traditional diesel-powered equipment.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://resources.news.e.abb.com/images/2018/11/14/1/PQ_launch_1280.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>
              ABB Unveils New Smart Energy Storage System for Electric Grids
            </h2>
            <p className="date">October 2, 2024</p>
            <p className="description">
              ABB has released its latest smart energy storage system aimed at
              stabilizing electric grids and enhancing renewable energy
              integration. The system uses AI to predict energy demand and
              optimize storage, ensuring grid stability during peak hours.
              With an increased focus on green energy, ABB’s solution allows
              energy providers to store solar and wind power more effectively,
              contributing to a sustainable energy future.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>

        <div className="main-news">
          <img
            src="https://cdn.continental.com/fileadmin/_processed_/e/3/csm_schnittmodell_e-bus_nur_bus_d6ba2fdf56.jpg"
            alt="Main News Image"
          />
          <div className="main-news-text">
            <h2>Ford Invests in Autonomous Electric Buses for Public Transit</h2>
            <p className="date">September 27, 2024</p>
            <p className="description">
              Ford has announced a significant investment in autonomous
              electric buses for urban public transit systems. These buses are
              designed to operate without drivers and are equipped with
              advanced sensors for safe navigation in congested cities. Ford&#39;s
              initiative is part of a broader strategy to address urban
              mobility challenges while reducing carbon emissions through
              electric-powered transportation.
            </p>
            <button className="read-more-btn">Continue Reading</button>
          </div>
        </div>
      </div>

      <aside className="news-sidebar">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Looking for..." aria-label="Search" />
        </div>

        {/* Recent Posts */}
        <div className="recent-posts">
          <h3>Recent Posts</h3>
          <div className="post-item">
            <img
              src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/186187/infographics0.jpeg?isig=1"
              alt="Recent Post Image"
              className="post-thumb"
            />
            <div className="post-text">
              <p className="post-date">October 5, 2024</p>
              <a href="#">Mahindra Unveils First Electric Tractor for Sustainable Farming</a>
            </div>
          </div>
          <div className="post-item">
            <img
              src="https://www.nbmcw.com/images/38-Construction-Equipments/41214-Tata-Hitachi-1.webp"
              alt="Recent Post Image"
              className="post-thumb"
            />
            <div className="post-text">
              <p className="post-date">October 4, 2024</p>
              <a href="#">Hitachi Introduces Smart Autonomous Lifting Systems for Shipping</a>
            </div>
          </div>
          <div className="post-item">
            <img
              src="https://tech.hyundai-rotem.com/en/wp-content/uploads/sites/2/2022/11/01-1.jpg"
              alt="Recent Post Image"
              className="post-thumb"
            />
            <div className="post-text">
              <p className="post-date">September 29, 2024</p>
              <a href="#">Hyundai Debuts Autonomous Rail System for Urban Transit</a>
            </div>
          </div>
        </div>
      </aside>
    </section>

    <div className="robot-container">
      <img
        src="https://github.com/ayushkjangid/contaactuspage/blob/main/haha.png?raw=true"
        alt="Friendly Robot"
        className="robot-image"
      />
      <div className="thought-bubble">
        <p id="thought-text">{thought}</p>
      </div>
    </div>
  </div>
  )
}
