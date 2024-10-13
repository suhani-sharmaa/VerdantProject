import { useEffect } from 'react';
import NewsCard from './NewsCard';
const newsData =[
  {
    imgUrl:"https://www.volvogroup.com/content/dam/volvo-group/markets/master/news/2022/jan/image-1860x1050-volvo-vnr-electric.jpg",
    date:'September 25, 2024',
    heading:" Volvo Unveils New Electric Truck Model for Heavy-Duty Hauling",
    description:"  Volvo has introduced its latest fully electric truck designed for heavy-duty long-haul operations. The new model comes with improved battery capacity, offering a range of up to 300 kilometers on a single charge. This launch is part of Volvo’s broader commitment to achieving carbon neutrality by 2030. With governments worldwide pushing for stricter emission standards, Volvo aims to lead the market with innovative, zero-emission trucks suitable for various industrial uses."
  },
  {
    imgUrl:"https://wri-india.org/sites/default/files/Expanding-Footprint-Grand-Challenge-across-Tier-II-India.jpg",
    date:'September 20, 2024',
    heading:"India’s First Electric Bus Service Expands to Tier 2 Cities",
    description:"After a successful rollout in metro cities, India’s electric bus service is set to expand to tier 2 cities across the country.The initiative aims to promote sustainable public transport,reduce carbon emissions, and curb air pollution. These new electric buses are equipped with fast-charging technology and can run for up to 250 kilometers on a single charge. This move will help reduce dependence on fossil fuels and foster cleaner air in urban areas."
  },
  {
    imgUrl:"https://assets.new.siemens.com/siemens/assets/api/uuid:13595096-4e3b-4cee-8da4-3537c4bd3e32/width:2000/quality:high/Z715624-1.jpg",
    date:'September 28, 2024',
    heading:"Siemens Develops Intelligent Lifting Systems for Heavy Industry",
    description:"Siemens has developed a state-of-the-art intelligent lifting system that enhances operational efficiency in heavy industries such as construction and manufacturing. The system uses AI algorithms to monitor load weights, balance, and positioning in real-time, reducing the risk of accidents and improving accuracy. This innovation is set to revolutionize how large-scale projects manage lifting operations by increasing safety and efficiency."
  },
  {
    imgUrl:"https://www.robotics247.com/images/article/ExactEmerge_Resize.jpg",
    date:'September 30, 2024',
    heading:"John Deere Unveils New Electric Agricultural Machines",
    description:"John Deere has introduced a new range of fully electric agricultural machines aimed at improving sustainability in farming. The machines, which include electric tractors and harvesters, offer zero-emission operation and are equipped with smart sensors for improved productivity. Farmers can now manage crops more efficiently while reducing their carbon footprint. These innovations are part of John Deere&#39;s broader vision of transforming agriculture through sustainable technology."
  },
  {
    imgUrl:"https://www.robotics247.com/images/article/ExactEmerge_Resize.jpg",
    date:'September 30, 2024',
    heading:"John Deere Unveils New Electric Agricultural Machines",
    description:"John Deere has introduced a new range of fully electric agricultural machines aimed at improving sustainability in farming. The machines, which include electric tractors and harvesters, offer zero-emission operation and are equipped with smart sensors for improved productivity. Farmers can now manage crops more efficiently while reducing their carbon footprint. These innovations are part of John Deere&#39;s broader vision of transforming agriculture through sustainable technology."
  },
  {
    imgUrl:"https://www.robotics247.com/images/article/ExactEmerge_Resize.jpg",
    date:'September 30, 2024',
    heading:"John Deere Unveils New Electric Agricultural Machines",
    description:"John Deere has introduced a new range of fully electric agricultural machines aimed at improving sustainability in farming. The machines, which include electric tractors and harvesters, offer zero-emission operation and are equipped with smart sensors for improved productivity. Farmers can now manage crops more efficiently while reducing their carbon footprint. These innovations are part of John Deere&#39;s broader vision of transforming agriculture through sustainable technology."
  }
  ]
  const headerImg = 'https://imgs.search.brave.com/WDEtTN1gWhHnqFcgFUZOCIIPsa-rgGJw7y2E1Nwz8RA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzM5LzYxLzY2/LzM2MF9GXzgzOTYx/NjYxNl9jR3hjVnQ2/ZTJVVmk5aU9lTzhi/SGZiWEJEaHc1UkZ3/aS5qcGc';
  export default function News() {
    useEffect(()=>{
      window.scrollTo(0,0);
      document.title = "News-Verdant"
    })
    return (
      <div className='font-Ankori flex flex-wrap'>
        <div className="h-80 bg-gray-900 w-full flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${headerImg})` }}>
          <h1 className='md:text-6xl text-5xl font-Ankori font-bold text-white w-fit'>Verdant - News</h1>
        </div>


        {/* <aside className="news-sidebar md:w-1/3 w-full md:m-0 my-4 mx-2">
        <div className="search-bar w-full text-center">
          <input type="text" className='m-2 w-4/5 h-14 rounded-md px-4 text-xl border-black border-2' placeholder="Looking for..." aria-label="Search"/>
        </div>

        <div className="recent-posts">
          <h3>Recent Posts</h3>
          <div className="w-fit flex m-2">
            <img
              src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/186187/infographics0.jpeg?isig=1"
              alt="Recent Post Image"
              className="h-14 w-16"
            />
             <p className='px-2'>Mahindra Unveils First Electric Tractor for Sustainable Farming</p>
          </div>




          <div className="w-fit flex m-2">
            <img
              src="https://www.nbmcw.com/images/38-Construction-Equipments/41214-Tata-Hitachi-1.webp"
              alt="Recent Post Image"
              className="h-14 w-16"
            />
             <p className='px-2'>Hitachi Introduces Smart Autonomous Lifting Systems for Shipping</p>
          </div>

          <div className="w-fit flex m-2">
            <img
              src="https://tech.hyundai-rotem.com/en/wp-content/uploads/sites/2/2022/11/01-1.jpg"
              alt="Recent Post Image"
              className="h-14 w-16"
            />
             <p className='px-2'>Hyundai Debuts Autonomous Rail System for Urban Transit</p>
          </div>
        </div>
      </aside> */}
<section className="w-full grid md:grid-cols-3 grid-cols-1">
      {newsData.map((news,index)=>{
        return(
        <NewsCard 
        key={index}
        imgUrl={news.imgUrl}
        date={news.date}
        heading={news.heading}
        description={news.description}/>
      )})}
    </section>
  </div>
  )
}
