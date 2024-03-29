import Me from './assets/images/me.jpg';
import Laptop from './assets/images/laptop.png';
import ThinkingGuy from './assets/images/thinkingGuy.png';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = "Maxime Dallons | Portfolio";
        document.description = "A developper's portfolio containing my work, projects, and more.";
    }, []);
  return (
    <div className="app">
        <div className="hidden xl:block xl:w-full xl:h-40">
            <nav className="hidden xl:inline xl:w-full xl:fixed">
                <div className="flex flex-row items-center justify-between p-2 bg-dark border-b-4 border-b-darker text-amber-50">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-24 h-24 rounded-full border-darker border-4 " src={Me} alt="Me" />
                        </div>
                        <div className="ml-4">
                            <div className="w-64">
                                <a href="#" className="font-sora text-2xl font-semibold">
                                    Dallons Maxime
                                </a>
                                <p className="font-sora text-md font-light">
                                    Junior Developer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-32 mx-64 flex flex-row items-center justify-between text-center">
                        <a href="#StoryTime" className="nav-link">Story time</a>
                        <a href="#Skills" className="nav-link">My skills</a>
                        <a href="#" className="nav-link">My work</a>
                        <a href="#" className="nav-link">Contact me</a>
                        <a href="#" className="nav-link">CV</a>
                    </div>
                </div>
            </nav>
        </div>

        <section id="Introduction" className="xl:grid xl:grid-cols-3">
            <div className="col-span-2 flex flex-col justify-center items-center">
                <div className="w-full flex flex-row items-center justify-center sm:mr-32">
                    <img className="h-24 h-24 rounded-full border-darker border-4 mt-5 xl:hidden" src={Me} alt="Me" />
                    <div className="flex flex-col ml-4">
                        <p className="w-auto font-sora text-3xl xl:text-5xl pt-3">Hi, I'm</p>
                        <p className="w-full font-sora text-5xl xl:text-7xl font-bold pt-3">MAXIME</p>
                    </div>
                </div>
                <p className="w-full font-sora text-3xl xl:text-5xl text-red-800 py-5 text-center">Junior developer</p>
                <div className="hidden button text-center xl:flex justify-center items-center mb-10 2xl:mb-0 2xl:mt-10">
                    <a href="#StoryTime">Learn more</a>
                </div>

            </div>
            <img src={Laptop} className="hidden xl:inline xl:col-span-1"></img>
        </section>

        <section id="StoryTime" className="w-full h-full bg-amber-50 border-t-4 border-darker text-dark overflow-hidden">
            <h1 className="w-full font-sora text-5xl xl:text-7xl font-bold text-center pt-10">Story time</h1>
            <div className="xl:grid xl:grid-cols-3">
                <img src={ThinkingGuy} className="hidden 2xl:inline 2xl:col-span-1 2xl:h-full"></img>
                <div className="col-span-full 2xl:col-span-2 m-5 2xl:m-32 text-center 2xl:text-left font-sora text-xl 2xl:text-4xl">
                    <p>
                        Depuis très jeune, j'ai dévelopé une passion pour tout ce qui se rapproche à l'informatique. Dés que j'ai eu un ordinateur en face de moi, j'ai ressenti un besoin de découvrir ce monde numérique.
                    </p>
                    <p className="my-5">
                        L'envie de programmer a commencé chez moi par les jeux vidéos, notamment 'Minecraft'. Ce jeu étant un réel bac à sable, je me suis renseigné pour pouvoir y ajouter du contenu pour pouvoir jouer au jeu à ma manière.
                    </p>
                    <p className="my-5">
                        De là a commencé ma passion pour la programmation. Depuis, je réalise plusieurs projets personnels pour me divertir et me permettre d'agrandir mes horizons et peut-être un jour faire ce que j'aime depuis si longtemps dans un milieu professionnel.
                    </p>
                </div>
            </div>
        </section>

        <section id="Skills" className="w-full h-full xl:h-md flex flex-col justify-between items-center bg-neutral-900 border-t-4 border-darker text-amber-50">
            <h1 className="w-full font-sora text-7xl font-bold text-center pt-10">My skills</h1>

            <div className="w-full h-full xl:h-md flex flex-col xl:flex-row justify-between items-center">

                <div className="flex flex-col my-5 xl:my-0 xl:mx-16 w-75% xl:w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-amber-400">
                    <h2 className="w-full font-sora text-3xl font-bold text-center text-amber-400 pt-10">Software dev</h2>
                    <div className="w-full flex flex-col justify-center items-center font-sora text-xl my-5">
                        <p className="py-">Java</p>
                        <p className="py-1">C#</p>
                        <p className="py-1">Python</p>
                        <p className="py-1">C++</p>
                    </div>
                </div>
                <div className="flex flex-col my-5 xl:my-0 xl:mx-16 w-75% xl:w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-red-600 ">
                    <h2 className="w-full font-sora text-3xl font-bold text-center pt-10 text-red-600">Mobile dev</h2>
                    <div className="w-full flex flex-col justify-center items-center font-sora text-xl my-5">
                        <p className="my-1">Android Studio</p>
                        <p className="my-1">Kotlin</p>
                        <p className="my-1">Firebase</p>
                    </div>
                </div>
                <div className="flex flex-col my-5 xl:my-0 xl:mx-16 w-75% xl:w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-blue-600 ">
                    <h2 className="w-full font-sora text-3xl font-bold text-center pt-10 text-blue-600">Web dev</h2>
                    <div className="w-full flex flex-col justify-center items-center font-sora text-xl my-5">
                        <p className="my-1">HTML / CSS</p>
                        <p className="my-1">PHP</p>
                        <p className="my-1">Javascript</p>
                        <p className="my-1">Node / React</p>
                    </div>
                </div>
                <div className="flex flex-col my-5 xl:my-0 xl:mx-16 xl:mr-32 w-75% xl:w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-green-600 ">
                    <h2 className="w-full font-sora text-3xl font-bold text-center pt-10 text-green-600">Game dev</h2>
                    <div className="w-full flex flex-col justify-center items-center font-sora text-xl my-5">
                        <p className="my-1">Unreal Engine</p>
                        <p className="my-1">Unity</p>
                    </div>
                </div>

            </div>
        </section>
    </div>
  );
}

export default App;
