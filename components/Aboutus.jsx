import '../App.css'
import Evbg from '../Images/AboutUsImages/Evbg.jpg'
import Base from '../Images/AboutUsImages/Base.jpg'
import Product from '../Images/AboutUsImages/Product.jpg'
import Product2 from '../Images/AboutUsImages/Product2.jpg'
import Product3 from '../Images/AboutUsImages/Product3.jpg'
import Product4 from '../Images/AboutUsImages/Product4.jpg'
import Product5 from '../Images/AboutUsImages/Product5.jpg'
import { useEffect } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export default function Aboutus() {
  useEffect(() => {
    document.title = "Aboutus-Verdant"
  })
  return (
    <>
      <div className='flex flex-wrap items-center justify-center bg-black'>
        <img src={Evbg} className='absolute top-0 w-full h-full object-cover brightness-50 bg-center' alt="Background" />
        <div className='w-full md:w-11/12 my-20 md:my-40 h-fit z-10 px-4'>
          <div className='p-5 bottom-0 font-bold'>
            <h1 className='text-sm md:text-lg text-white mx-3'>Founded in 2024</h1>
            <h1 className='text-3xl md:text-6xl text-white inline m-3'>About</h1>
            <h1 className='text-3xl md:text-6xl text-green-600 inline m-3'>Verdant</h1>
          </div>
          <div className='flex flex-wrap'>
            <div className="px-4 md:px-8 my-4 text-white font-sans">
              <p>Founded in March 2016, CCIG (formerly known as “CRRC Urban Transportation Co., Ltd”) is a mixed ownership, state-owned capital holding enterprise established as a joint venture between CRRC and local state-owned capital and strategic investors in the Yangtze River Delta region.</p>
            </div>
            <div className="px-4 md:px-8 my-4 text-white font-sans">
              <p>The company is headquartered in Fenhu, Wujiang, Suzhou, a demonstration zone of Yangtze River Delta integration, with total assets of nearly 50 billion yuan, net assets of more than 28 billion yuan, and nearly 10,000 employees. The group has five major sectors: Greenway Heavy Industries, GS Mechatronics, Greenway Electric, CRRC MRT and Galactic Development, and two A-share main board listed companies: Thinker Agricultural Machinery and Heshun Electric (Harmonic Electric).</p>
            </div>
            <div className="px-4 md:px-8 my-4 text-white font-sans">
              <p>The company carries the mission of the pilot field of state enterprises mixed reform and the pathfinder of state-owned capital innovation, and is committed to the investment in intelligent manufacturing industry and the transformation and upgrading service of regional traditional industries; it has important manufacturing and service bases in Yangtze River Delta, Pearl River Delta, Bohai Rim, Central China and Hungary, Malaysia and Singapore, with electromechanical and electrical research and development institutes in Germany and Japan.</p>
            </div>
            <Link className="text-white w-fit rounded-full hover:bg-white hover:text-black border-2 p-3 md:p-4 mx-4 md:mx-10 my-5 duration-300">
              OUR DEVELOPMENT HISTORY &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-green-600 px-4 md:px-16 py-10 md:py-14'>
        <div className=' text-white flex flex-wrap'>
          <div className="box1 my-5 md:my-10 w-full md:w-1/2 flex flex-wrap">
            <div className='w-1/6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
              </svg>
            </div>
            <div className='w-5/6 md:w-4/6 px-4 md:px-0'>
              <p className='text-xl md:text-2xl'>
                Enterprise mission</p>
              <p className='text-base'>
                Enterprise mission
                Experimental land for state capital investment
                The organizer of intensive industrial development
                A practitioner of building a strong manufacturing country
              </p>
            </div>
          </div>
          <div className="box2 my-5 md:my-10 w-full md:w-1/2 flex flex-wrap">
            <div className='w-1/6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-16 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <div className='w-4/6  px-4 md:px-0'>
              <p className='text-xl md:text-2xl'>
                Enterprise vision</p>
              <p className='text-base'>
                Digital Transportation Service Provider Regional Strategic Transforming Industries Organizer
              </p>
            </div>
          </div>
          <div className="box3 my-5 md:my-10 w-full md:w-1/2 flex flex-wrap">
            <div className='w-1/6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

            </div>
            <div className='w-4/6  px-4 md:px-0'>
              <p className='text-xl md:text-2xl'>
                Enterprise core values</p>
              <p className='text-base'>
                Industry To Serve The Country, Righteousness, Good For Good
              </p>
            </div>
          </div>
          <div className="box4 my-5 md:my-10 w-full md:w-1/2 flex flex-wrap">
            <div className='w-1/6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
              </svg>

            </div>
            <div className='w-4/6  px-4 md:px-0'>
              <p className='text-xl md:text-2xl'>
                Enterprise organizational climate</p>
              <p className='text-base'>
                Open And Inclusive, Collaborative, International
              </p>
            </div>
          </div>
        </div>
      </div>



        <div className="International min-h-lvh bg-cover">
        <div className="flex md:flex-wrap flex-wrap-reverse items-center md:justify-between justify-center md:p-16 px-4 py-10 bg-transparent backdrop-brightness-50">
          <div className="content text-white w-full md:w-4/6 text-center md:text-start">
            <p className='text-4xl md:text-5xl font-semibold my-10 md:my-12'>Verdant International</p>
            <p className='text-sm md:text-lg my-3 md:my-6'>
            CCIG INT positioned as a high-end commercial vehicle export platform, responsible for the development, operation and functioning of the international market.
            </p>
            <p className='text-sm md:text-lg my-3 md:my-6'>
            Relying on the flexible mechanism of its parent company, CCIG, and the advantage of its first layout in overseas, and relying on the rich overseas business development ability of its team and years of industry precipitation, the company insists on the two-wheel drive of market and technology by focusing on the overseas market development and taking customization and technical services as its hands.
            </p>
            <p className='text-sm md:text-lg my-3 md:my-6'>
            In the field of new energy vehicles, CCIG INT has built an open platform for overseas commercial vehicles adapted to different OEMs and products, varying needs, customized production and manufacturing as well around new energy bus complete vehicles, electrified chassis and key components.
            </p>
          </div>
          <div className="w-80 m-auto">
            <img src={Base} className='rounded-full' alt="Base" />
          </div>
        </div>
      </div>



      <div className="flex flex-wrap items-center md:justify-between justify-center md:p-16">
        <div className='w-80 m-auto'>
          <img src={Product} alt="Product" className='rounded-full' />
        </div>
        <div className='md:w-2/3 w-svw tracking-wider text-center md:text-left'>
          <p className='text-black md:text-5xl text-4xl font-medium md:m-2
          mx-2 my-4'>AUTOMOBILE MANUFACTURING</p>
          <p className='text-black md:text-5xl text-4xl font-medium md:m-2
          mx-2'>SEGMENT</p>
          <p className='m-2 my-4 md:text-lg '>Greenway Automobile Ltd. And CCIG Equipment Group represent the commercial & specialized vehicle industry platform of CCIG, with headquarters in Deqing, Huzhou.</p>
          <p className='m-2 my-4 text-lg'>The automobile manufacturing segment, with its subsidiaries Chusheng Auto, Qihang Auto, Tenglong Auto, Hanjiang Auto, Tongda Auto, Ruichi Auto, has built a commercial specialized vehicle industrial interconnection manufacturing platform and a full ecological industrial park of CCIG, with an annual production capacity of 50,000 units of complete vehicles, 10,000 units of core components of commercial vehicles and 3,000 units of respective vehicles.</p>
          <p className='m-2 my-4 text-lg'>With An Annual Production Capacity Of</p>
          <p className='m-2 my-4 text-4xl font-bold text-green-600'>50,000 Units</p>
          <p className='m-2 my-4 text-lg'>Of Complete Vehicles</p>
          <p className='m-2 my-4 text-4xl font-bold text-green-600'>10,000 Units</p>
          <p className='m-2 my-4 text-lg'>Of Core Components Of Commercial Vehicles</p>
        </div>
      </div>

      <div className="EES min-h-lvh">
        <div className="flex flex-wrap-reverse md:flex-wrap items-center md:justify-between justify-center md:p-16 py-32  bg-transparent backdrop-brightness-50">
          <div className="content text-white md:w-4/6 p-2 md:text-left text-center w-full">
            <p className='md:text-5xl text-3xl font-semibold md:my-12 my-6'>
              ELECTRICAL AND ENERGY SEGMENT</p>
            <p className='text-lg my-6'>Heshun Electric is the main company of the smart electric segment. Founded in 1998 and listed on the Shenzhen Stock Exchange Venture Exchange in November 2010 (stock code 300141).</p>
            <p className='text-lg my-6'>The company focuses on the field of electric power equipment and is a national high-tech enterprise specializing in the research and development, manufacture and sales of high-voltage and low-voltage power equipment, high-voltage capacitor compensation equipment, high-voltage and low-voltage power electronic equipment, intelligent power secondary measurement and control equipment and technical services. Meanwhile, Heshun Electric grasps the opportunity of new energy development, actively promotes new energy EPC projects, and vigorously develops power quality equipment and electric vehicle charging equipment.</p>
          </div>
          <div className="w-80 m-auto">
            <img src={Product2} className='rounded-full' />
          </div>
        </div>
      </div>


      <div className="flex flex-wrap items-center md:justify-between justify-center md:p-16 m-4">
        <div className='w-80 m-auto'>
          <img src={Product3} alt="Product" className='rounded-full' />
        </div>
        <div className='md:w-2/3 w-svw tracking-wider text-center md:text-left'>
          <p className='text-black md:text-5xl text-xl font-medium m-2 my-4'>ELEVATOR MANUFACTURING</p>
          <p className='text-black text-5xl font-medium m-2'>SEGMENT</p>
          <p className='m-2 my-4 text-lg'>ELEVATOR MANUFACTURING GROUP，with its subsidiaries Syney, Seloon, CNIM China, etc. Has a full comprehensive platform of</p>
          <p className='text-lg'>– R&D design</p>
          <p className='text-lg'>– Intelligent manufacturing</p>
          <p className='text-lg'>– Sales and operation control</p>
          <p className='text-lg'>– After-market service and professional technical training of elevators and escalators</p>
          <p className='m-2 my-4 text-lg'>Annual delivery is over</p>
          <p className='m-2 my-4 text-4xl font-bold text-green-600'>35,000 units</p>
        </div>
      </div>


      <div className="AGRITECH min-h-lvh bg-cover">
        <div className="flex flex-wrap-reverse md:flex-wrap items-center md:justify-between justify-center md:p-16 py-32  bg-transparent backdrop-brightness-50">
          <div className="content text-white md:w-4/6 w-full md:text-left text-center p-4">
            <p className='md:text-5xl text-4xl font-semibold my-12'>
              AGRITECH SEGMENT</p>
            <p className='text-lg my-6'>Founded in 2004, Thinker Agricultural Machinery is a leading enterprise specializing in the production of agricultural machinery, which was successfully listed on the main board of SSE (stock code: 603789) in 2015, covering an area of more than 400 mu and employing more than 330 people. Now it is a high-tech enterprise with national key support; a secondary safety quality standardized enterprise; a leading backbone enterprise in Huzhou industrial industry, etc. The company’s products are widely used in high-end fields such as agricultural machinery and its equipment manufacturing industry.</p>
            <p className='text-lg my-6'>The company has a research platform such as enterprise research institute, industrial technology alliance, academician expert workstation, postdoctoral workstation, etc. It has participated in drafting a number of national and industry technical standards, has 277 patents, of which 69 are invention patents, and has won the first prize of China Machinery Industry Science and Technology Award, AAA grade contract-abiding and trustworthy enterprise in Zhejiang Province, as well as the first and second prizes of provincial scientific and technological progress for many times, etc.</p>
          </div>
          <div className="w-80 m-auto">
            <img src={Product4} className='rounded-full' />
          </div>
        </div>
      </div>



      <div className="MSB min-h-lvh">
        <div className="flex flex-wrap items-center md:justify-between justify-center md:p-16 py-32  bg-transparent backdrop-brightness-50 h-lvh">
          <div className="w-80 m-auto">
            <img src={Product5} className='rounded-full' />
          </div>
          <div className="content text-white md:w-4/6 w-full md:text-left text-center p-4">
            <p className='md:text-5xl text-4xl font-semibold my-12'>
              MOBILUS SDN BHD</p>
            <p className='text-lg my-6'>MOBILUS, a digital transport service platform company established as a joint venture between Green Urban Transport (Europe) Ltd. and a leading Malaysian local company, located in Kuala Lumpur, Malaysia.</p>
            <p className='text-lg my-6'>With over 55 years of experience in the construction, infrastructure and property development sectors, the company is committed to providing efficient urban transportation solutions to cities and municipalities through the deployment of innovative new energy vehicles and technologies, including electric and hydrogen fuel cell vehicles; winning the order for the integration of electromechanical systems for the ART(Autonomous Rail Transport) line in Sarawak in 2022.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
