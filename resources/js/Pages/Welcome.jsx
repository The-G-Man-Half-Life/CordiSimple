import { Head, Link } from '@inertiajs/react';
import Footer from '@/Layouts/Footer'
import WelcomeHeader from '@/Layouts/WelcomeHeader';


export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

                <Head title="Welcome" />
                <WelcomeHeader />
                <main className="h-full overflow-x-hidden overflow-y-auto md:px-6">
                    {/* Hero Section */}
                    
                    <section className="w-full min-h-[60vh] gap-8 bg-primary dark:bg-primary-dark mt-12 border border-secondary flex flex-col md:flex-row justify-around">
                        <div className='md:px-8 w-full md:w-1/2 flex flex-col justify-center space-y-8'>
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter text-secondary sm:text-5xl xl:text-6xl">
                                    What do we do?
                                </h1>
                                <p className="text-xl text-secondary md:text-2xl">
                                    We are CordiSimple an event management company.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-title">
                                    we provide these services
                                </h2>
                                <ul className="space-y-2 text-dark">
                                    <li className="flex items-center">
                                        • Personalized planning of events.
                                    </li>
                                    <li className="flex items-center">
                                        • Management of guests and attendees.
                                    </li>
                                    <li className="flex items-center">
                                        • Efficient and swift logistic.
                                    </li>
                                    <li className="flex items-center">
                                        • Complete support under the event.
                                    </li>
                                    <li className="flex items-center">
                                        • Zero stress for you.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='relative w-full md:w-1/2 h-[300px] md:h-auto flex justify-center items-center mt-8 md:mt-0'>
                            <div className='absolute w-1/2 h-full' style={{
                                clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                                backgroundImage: 'url(https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain?height=800&width=600)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                left: '0',
                                top: '0',
                                transform: 'translateX(-10%)'
                            }}>
                            </div>

                            <div className='absolute w-1/2 h-full' style={{
                                clipPath: 'polygon(50% 0, 0 100%, 100% 100%)',
                                backgroundImage: 'url(https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain?height=800&width=600)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                left: '25%',
                                top: '0',
                                transform: 'translateX(-5%)'
                            }}>
                            </div>

                            <div className='absolute w-1/2 h-full' style={{
                                clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                                backgroundImage: 'url(https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain?height=800&width=600)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                left: '50%',
                                top: '0',
                                transform: 'translateX(0%)'
                            }}>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="w-full py-12 dark:bg-primary-dark mt-12 flex flex-col mx-auto">
                        <div className="w-full flex flex-col md:flex-row mb-12">
                            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 mb-8 md:mb-0">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-text sm:text-4xl text-center leading-tight">
                                    Take care of enjoying <br /> with the ones you <br /> love the most
                                </h2>
                            </div>
                            <div className="w-full md:w-1/2 flex p-4">
                                <div className="relative w-full h-full max-w-md">
                                    <div className="absolute inset-0 translate-x-4 translate-y-4 bg-secondary rounded-xl z-0"></div>
                                    <img
                                        alt="People enjoying event"
                                        className="aspect-video w-full h-full rounded-xl object-cover shadow-lg relative z-10"
                                        src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 flex justify-center p-4 mb-8 md:mb-0 order-2 md:order-1">

                                <div className="relative w-full h-full max-w-md">
                                    <div className="absolute inset-0 translate-x-4 translate-y-4 bg-secondary rounded-xl z-0"></div>
                                    <img
                                        alt="Event planning"
                                        className="aspect-video w-full h-full rounded-xl object-cover shadow-lg relative z-10"
                                        src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 order-1 md:order-2">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-text sm:text-4xl text-center leading-tight">
                                    while we worry about the <br /> management and control <br /> behind it
                                </h2>
                            </div>
                        </div>
                    </section>

                    {/* Story Section */}
                    <section className="w-full mt-12 py-12 md:py-24 bg-primary">
                        <div className="container px-4 md:px-6 mx-auto">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-text mb-8">
                                Our story
                            </h2>
                            <div className="flex flex-col lg:flex-row items-start gap-8">
                                <div className="bg-secondary p-8 rounded-2xl flex-grow w-full lg:max-w-[65%]">
                                    <div className="space-y-4 text-white">
                                        <p>
                                            CordiSimple was founded out of a passion for creating unforgettable experiences. Starting with community
                                            gatherings, our dedicated team quickly gained a loyal following.
                                        </p>
                                        <p>
                                            As demand grew, we expanded into corporate events, weddings, and festivals, always focusing on
                                            personalized service. Our innovative approach blends creativity with efficient logistics, ensuring seamless
                                            execution. Today, CordiSimple is known for its attention to detail and commitment to making every occasion
                                            special. We believe every event, big or small, deserves a touch of magic!
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex-shrink-0 w-full lg:w-[35%] h-[200px] lg:h-[300px] overflow-hidden mt-8 lg:mt-0">
                                    <img
                                        src="/images/CordiSimpleLogo.jpg"
                                        alt="CordiSimple Logo"
                                        className="absolute right-0 bottom-0 w-full h-full object-contain object-right-bottom opacity-90"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                <Footer />
            </div>

        </>
    );
}
