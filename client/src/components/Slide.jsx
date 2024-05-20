import grad1 from '../img/grad1.png';


const Slide = () => {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" id='nosotros'>
            <div className="absolute inset-0 -z-10 overflow-hidden">
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Quienes somos?</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Agua mineral GRAD</h1>
                        <p className="mt-3 text-lg text-gray-500">Somos una Empresa Familiar de origen Encarnaceno!! ✨<br/> Nuestra Misión y Visión 🎯🔜💙<br/> 💧Dar al cliente un agua de calidad y a un valor accesible. Ya sea que lo consuma por salud o porque confía en nosotros, un grupo que busca seguir creciendo y mejorando;<br/> 💧Ser la empresa de distribución de agua mineral, en que la gente deposite su confianza. Con productos de calidad que otorguen al cliente satisfacción al consumirlo… refrescantemente natural;<br/> Pedidos al (0975) 655 - 014 📲 te lo entregamos en la puerta de tu casa 🏡 🚚💨</p>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]" src={grad1} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slide;
