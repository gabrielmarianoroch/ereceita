import Header from './_components/header';
import Footer from './_components/footer';

import Carrosselv2 from './_components/carrosselv2';



export default function Home() {

  return (

  <div className='min-h-screen flex flex-col'>
    <Header/>
    
    <main className="flex-1 flex justify-center items-center">  
      {/* <CarouselDemo/> */}
      <Carrosselv2/>
    </main>

    <Footer/>
    </div>
  )
}
