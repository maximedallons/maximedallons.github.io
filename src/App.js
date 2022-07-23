import Banner from './assets/images/me1.jpg';
import Laptop from './assets/images/laptop.png';
import ThinkingGuy from './assets/images/thinkingGuy.png';

function App() {
  return (
    <div className="app">

        <nav>
            <div className="flex flex-row items-center justify-between p-4 md:p-8 bg-dark border-b-4 border-b-darker text-amber-50">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="h-32 w-32 rounded-full border-darker border-4 " src={Banner} alt="Me" />
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
                    <a href="#" className="nav-link">Story time</a>
                    <a href="#" className="nav-link">My skills</a>
                    <a href="#" className="nav-link">My work</a>
                    <a href="#" className="nav-link">Contact me</a>
                    <a href="#" className="nav-link">CV</a>
                </div>
            </div>
        </nav>

        <section className="mx-10 mt-10 grid grid grid-cols-3">
            <div className="col-span-2 flex flex-col justify-center items-center mb-10% mr-25%">
                <p className="w-sm font-sora text-5xl">Hi, I'm</p>
                <p className="w-sm font-sora text-7xl font-bold pt-3">MAXIME</p>
                <p className="w-sm font-sora text-5xl text-red-800 pt-10">Junior developer</p>
            </div>
            <img src={Laptop} className="col-span-1"></img>
        </section>

        <section className="w-full h-md bg-amber-50 border-t-4 border-darker text-dark overflow-hidden">
            <h1 className="w-full font-sora text-7xl font-bold text-center pt-10">Story time</h1>
            <div className="grid grid-cols-3">
                <img src={ThinkingGuy} className="col-span-1 h-75%"></img>
                <p className="col-span-2 m-32 text-left justify-self-center font-sora text-3xl">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
            </div>
        </section>

        <section className="w-full h-md flex flex-col justify-between items-center bg-neutral-900 border-t-4 border-darker text-amber-50">
            <h1 className="w-full font-sora text-7xl font-bold text-center pt-10">My skills</h1>
            <div className="w-full h-md flex flex-row justify-between items-center">
                <div className="flex flex-col ml-32 w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-amber-400 ">
                    <h2 className="w-full font-sora text-3xl font-bold text-center text-amber-400 pt-10">Software dev</h2>
                    <div className="w-full flex flex-col justify-center items-center font-sora text-xl my-5">
                        <p className="my-1">Java</p>
                        <p className="my-1">C#</p>
                        <p className="my-1">Python</p>
                        <p className="my-1">C++</p>
                    </div>
                </div>
                <div className="flex flex-col w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-red-600 ">
                    <h2 className="w-full font-sora text-3xl font-bold text-center pt-10 text-red-600">Mobile dev</h2>
                    <div className="w-full flex flex-col justify-center items-center font-sora text-xl my-5">
                        <p className="my-1">Android Studio</p>
                        <p className="my-1">Kotlin</p>
                        <p className="my-1">Firebase</p>
                    </div>
                </div>
                <div className="flex flex-col w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-blue-600 ">
                    <h2 className="w-full font-sora text-3xl font-bold text-center pt-10 text-blue-600">Web dev</h2>
                    <div className="w-full flex flex-col justify-center items-center font-sora text-xl my-5">
                        <p className="my-1">HTML / CSS</p>
                        <p className="my-1">PHP</p>
                        <p className="my-1">Javascript</p>
                        <p className="my-1">Node / React</p>
                    </div>
                </div>
                <div className="flex flex-col mr-32 w-96 h-72 bg-neutral-900 shadow-md shadow-black border-t-4 border-green-600 ">
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
