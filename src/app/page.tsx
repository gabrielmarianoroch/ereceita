<<<<<<< HEAD
import Header from './components/header';
import RecipeCard from './components/RecipeCard'

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-xl font-semibold text-red-600 mb-4">Receitas em destaque</h1>
        {/* Aqui futuramente vão os cards de receita */}
        <p className="text-gray-700"></p>

      <RecipeCard title='titulo' time="tempo" slug="teste" image="/Linux_logo.jpg"></RecipeCard>


      </main>
    </>
  );
=======
import Header from './_components/header';
import Footer from './_components/footer';
import CarouselDemo from './_components/carrossel'

export default function Home() {
  return (
  <div className='min-h-screen flex flex-col'>
    <Header/>
    
    <main className="flex-1 flex justify-center items-center">  
      <CarouselDemo/>
    </main>

    <Footer/>
    </div>
  )
>>>>>>> 92e5b24 (Carousel)
}
