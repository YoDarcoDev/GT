import { useEffect, useRef, useLayoutEffect } from 'react'
// import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './assets/scss/app.scss'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

export default function App() {


    /* * * * Scroll Horizontal Intro * * * */
    const sections = useRef([])
    const wrapper = useRef()
    let horizontalScroll

    const createSectionsRefs = (section, index) => {
        sections.current[index] = section
    }
    
    useGSAP(() => {
        const totalSections = sections.current.length

        horizontalScroll = gsap.to(sections.current, {
            xPercent: -100 * (totalSections - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper.current,
                start: 'top top',
                pin: true,
                scrub: 1,
                end: () => "+=" + wrapper.current.offsetWidth,
            }
        })
    }, [])



    /* * * * Header Intro * * * */
    const intro = useRef()

    useGSAP(() => {
        const timeline = gsap.timeline()
        timeline
            .to('.right', { xPercent: 100, duration: 0.5 }) 
            .to('.title', { yPercent: -100 }, "<")
            .to('.name', { y: '-100vh' }, "<")
            .to ('.intro', { 
                background: 'transparent', 
                backgroundImage: "url('images/background-paper.jpg')", 
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                opacity: 1, 
                duration: 0.4 }, 
            '<')
        
        ScrollTrigger.create({
            animation: timeline,
            trigger: intro.current,
            scrub: 1,
            pin: true,
            pinSpacing: false,
            start: 'top top',
        })
    })



    /* * * * * Intro : Section 1 * * * * */
    // useGSAP(() => {
    //     gsap.to('#intro-section1', {
    //         x: '100%',
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '#intro-section1',
    //             start: 'top top',
    //             end: 'bottom top',
    //             scrub: 1,
    //         }
    //     })
    // })


    useGSAP(() => {
        gsap.from('#intro-section1-text', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section1',
                start: 'top center+=10%',
                end: 'top 30%',  
                scrub: 1,
            }
        })
        
        
        gsap.from('#intro-section1-img1', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section1',
                start: 'top 40%',
                end: 'top 20%',  
                scrub: 1,
            }
        })
        
        gsap.from('#intro-section1-img2', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section1',
                start: 'top 30%',
                end: 'top 10%',  
                scrub: 1,
            }
        })
    })


    /* * * * * Intro : Section 3 * * * * */
    useGSAP(() => {
        gsap.from('#intro-section3-text', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section3',
                start: 'left 80%',
                end: 'left center',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
        
        gsap.from('#intro-section3-img1', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section3',
                start: 'left 70%',
                end: 'left center',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
        
        gsap.from('#intro-section3-img2', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section3',
                start: 'left 60%',
                end: 'left center-=10%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
        
        gsap.from('#intro-section3-legend', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section3',
                start: 'left 50%',
                end: 'left center-=20%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
        
        
        gsap.from('#intro-section3-img3', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section3',
                start: 'left center-=10%',
                end: 'left 10%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
    })

    
    
    /* * * * * Intro : Section 4 * * * * */
    useGSAP(() => {
        gsap.set("#intro-section4 > span", {
            x: 0
        });
        
        gsap.from('#intro-section4 > span', {
            x: '120%',
            scrollTrigger: {
                trigger: '#intro-section4',
                start: 'left center',
                end: 'left 10%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
        
        gsap.from('#intro-section4 > div', {
            clipPath: "inset(0 0 0 60%)", // top right bottom left
            scale: 0.3,
            scrollTrigger: {
                trigger: '#intro-section4',
                start: 'left 90%',
                end: 'left center',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
    })



    /* * * * * Intro : Section 5 * * * * */
    useGSAP(() => {


        gsap.fromTo('#intro-section5', {
            background: 'transparent', 
            backgroundImage: "url('images/background-paper.jpg')", 
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat', 
            }, 
            {
                scrollTrigger: {
                    trigger: '#intro-section5',
                    start: 'left 70%',
                    end: 'left center',
                    scrub: 1,
                    containerAnimation: horizontalScroll,
            },
            background: '#363636', 
        })

        gsap.fromTo('#intro-section5-text', {
                color: 'black'
            }, 
            {
                scrollTrigger: {
                    trigger: '#intro-section5',
                    start: 'left 70%',
                    end: 'left center',
                    scrub: 1,
                    containerAnimation: horizontalScroll,
            },
            color: 'white', 
        })


        gsap.from('#intro-section5-text', {
            x: 100,
            scrollTrigger: {
                trigger: '#intro-section5',
                start: 'left 70%',
                end: 'left 40%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })
        
        
        gsap.from('#intro-section5-img', {
            x: 100,
            opacity: 0,
            scale: 0.1,
            scrollTrigger: {
                trigger: '#intro-section5',
                start: 'left 30%',
                end: 'left 10%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
    })



    /* * * * * Intro : Section 6 * * * * */
    useGSAP(() => {
        gsap.to('#intro-section6-img', {
            scaleX: 1.5,
            x: -100,
            scrollTrigger: {
                trigger: '#intro-section6',
                start: 'left right',
                end: 'left 50%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })
        
        
        gsap.set("#intro-section6 span", {
            x: 0
        });
        
        gsap.from('#intro-section6 span', {
            x: '-100%',
            scrollTrigger: {
                trigger: '#intro-section6',
                start: 'left 70%',
                end: 'left 30%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })

        gsap.from('#intro-section6 h2', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section6',
                start: 'left 30%',
                end: 'left 10%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })

        gsap.from('#intro-section6-text', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section6',
                start: 'left 20%',
                end: 'left left',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
    })



    /* * * * * Intro : Section 7 * * * * */
    useGSAP(() => {

        gsap.from('#intro-section7 h2', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section7',
                start: 'left 70%',
                end: 'left 50%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })


        gsap.from('#intro-section7-text', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section7',
                start: 'left 60%',
                end: 'left 4 0%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })


        gsap.from('#intro-section7-img1', {
            yPercent: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section7',
                start: 'left 30%',
                end: 'left 20%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })


        gsap.from('#intro-section7-img2', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section7',
                start: 'left 20%',
                end: 'left 10%',
                scrub: 1,
                containerAnimation: horizontalScroll,
            }
        })
    })




    /* * * * * Intro : Section 8 * * * * */
    useGSAP(() => {
        gsap.from(['#intro-section8-img', '#intro-section8-legend'], {
            yPercent: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section8',
                start: 'left 80%',
                end: 'left 60%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })

        gsap.from('#intro-section8-text', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section8',
                start: 'left 60%',
                end: 'left 40%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })


        gsap.from('#intro-section8-img2', {
            yPercent: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section8',
                start: 'left center',
                end: 'left 30%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })


        gsap.from('#intro-section8-img3', {
            yPercent: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section8',
                start: 'left 30%',
                end: 'left 20%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })


        gsap.from('#intro-section8-legend2', {
            xPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#intro-section8',
                start: 'left 20%',
                end: 'left 10%',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })
    })


    /* * * * * Intro : Section 9 * * * * */
    useGSAP(() => {
        gsap.from('#intro-section9-img', {
            filter: 'blur(10px)',
            scrollTrigger: {
                trigger: '#intro-section9',
                start: 'left 20%',
                end: 'left left',
                scrub: true,
                containerAnimation: horizontalScroll,
                markers: true
            }
        })


        gsap.from('#intro-section9 span', {
            left: 0,
            scrollTrigger: {
                trigger: '#intro-section9',
                start: 'left 10%',
                end: 'left left',
                scrub: 1,
                containerAnimation: horizontalScroll
            }
        })


    
    })





    return (
        <>

            {/* * * * * * * * * HEADER INTRO * * * * * * * * */}
            <div className="intro bg-black-custom" ref={ intro }>
                <div className="left">
                    <h2 className="title uppercase text-[36px] text-white futura-extrabold pt-[45px] pl-[50px]">Un historien au Luxembourg</h2>
                    <h1 className="name uppercase text-[7vw] leading-[93%] text-white futura-extrabold pl-[40px] pb-[60px]">Gilbert Trausch</h1>
                </div>
                <div className="right">
                    <img src="./src/assets/images/intro/GT-intro.png" alt=""/>
                </div>
            </div>



            {/* * * * * * * * * WRAPPER HORIZONTAL SCROLL * * * * * * * * */}
            <div className="wrapper" ref={ wrapper }>
        
                {/* * * * * * * * * SECTION 1 : Qui était Gilbert Trausch * * * * * * * * */}
                <section className="bg-paper" id="intro-section1" ref={(e) => createSectionsRefs(e, 0)}>
                    <div className="grid grid-cols-12 gap-x-[40px]">
                        <div className="col-span-6">
                            <div className="grid grid-cols-6 documents">
                                <div className="col-span-2 col-start-2 pt-[450px] flex flex-col items-center" id="intro-section1-img1">
                                    <div className="h-[165px] w-[120px]">
                                        <img src="./src/assets/images/intro/interview.jpeg" />
                                    </div>
                                    <h3 className="angie text-[22px] uppercase text-center mt-[30px] leading-[24px] mb-[20px]">Interview <br/> de Cathy Jaeger</h3>
                                    <span className="uppercase text-[11px] cursor-pointer">Voir</span>
                                </div>

                                <div className="col-span-2 col-start-4 pt-[300px] flex flex-col items-center" id="intro-section1-img2">
                                    <div className="h-[165px] w-[120px]">
                                        <img src="./src/assets/images/intro/interview.jpeg" />
                                    </div>
                                    <h3 className="angie text-[22px] uppercase text-center mt-[30px] leading-[24px] mb-[20px]">Curricullum vitae <br/> de Gilbert Trausch</h3>
                                    <span className="uppercase text-[11px] cursor-pointer">Voir</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 col-start-7" id="intro-section1-text">
                            <h2 className="mt-[130px] mb-[260px] text-[34px] leading-[120%] font-bold">Qui était Gilbert Trausch, l'historien aux milles facettes</h2>
                            <p className="leading-[135%]">
                                L’historien Gilbert Trausch est encore largement connu du public luxembourgeois. Pendant des décennies, ses incontournables interventions dans les médias ont contribué à faire découvrir l’histoire du Luxembourg à toute une génération.
                                <br/><br/>Ce n’est pourtant là qu’une des nombreuses facettes d’un historien prolifique de la seconde moitié du XXe siècle qui, en plus d’avoir renouvelé le paysage historiographique luxembourgeois, bénéficiait aussi d’une renommée solide en dehors des frontières du petit grand-duché. Formateur de toute une génération d’historien, tour à tour directeur de la Bibliothèque nationale, du Centre Universitaire (ancêtre de l’Uni), et du Centre d’Études Robert Schuman, habitué des dîners où se côtoyaient ministres et ambassadeurs, Gilbert Trausch était une personnalité omniprésente de la société luxembourgeoise.
                            </p>
                        </div>
                    </div>
                </section>


                {/* * * * * * * * * SECTION 2 : Image plein écran * * * * * * * * */}
                <section id="intro-section2" ref={(e) => createSectionsRefs(e, 1)}>
                    <div style={{ background: 'url(./src/assets/images/intro/GT-2.jpeg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%' }}></div>
                </section>

  

                {/* * * * * * * * * SECTION 3 : Naissance * * * * * * * * */}
                <section className="pt-[130px] bg-paper relative" id="intro-section3" ref={(e) => createSectionsRefs(e, 2)}>
                    
                    {/* Texte */}
                    <div className="grid grid-cols-12 gap-x-[40px]">
                        <div className="col-span-3 col-start-3" id="intro-section3-text">
                            <p>Né le 20 septembre 1931, il passe une partie de son enfance à Differdange 1 avant que sa famille s’installe au Limpertsberg, quartier que Gilbert Trausch ne quittera plus jusqu’à son décès le 3 juin 2018.</p>
                            <br/>
                            <p>De son père, ingénieur à la S. A. des Hauts-Fourneaux et Aciéries de Differdange, St. Ingbert, Rumelange (HADIR) 2, il hérite certainement sa culture du débat et son intérêt pour l’histoire de la sidérurgie luxembourgeoise. Du côté maternel, qui ne comptait pas moins de trois religieuses au sein de la famille proche 3, lui viennent ses attaches et valeurs chrétiennes. Ses grands-parents, puis sa mère tenaient une librairie spécialisée dans les objets catholiques et de piété 4.</p>
                            
                            {/* Images */}
                            <div className="grid grid-cols-3 mt-[120px] mb-[30px] gap-x-[40px]">
                                <div className="col-span-1">
                                    <img src="./src/assets/images/intro/interview.jpeg" alt="" id="intro-section3-img1" />
                                </div>
                                <div className="col-span-1 col-start-2">
                                    <div className="">
                                        <img src="./src/assets/images/intro/interview.jpeg" alt="" id="intro-section3-img2" />
                                    </div>
                                </div>
                            </div>

                            {/* Légende */}
                            <div id="intro-section3-legend">
                                <span className="uppercase text-[11px] pb-[10px] block font-semibold">Ci-dessous</span>
                                <span className="italic font-light text-[13px]">lettres Schummer avec la cour grand-ducale en 1919</span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-span-4 col-start-7" id="intro-section3-img3">
                            <img src="./src/assets/images/intro/voyage.png" alt="" className="max-h-[950px]" />
                        </div>
                    </div>
                </section>



                {/* * * * * * * * * SECTION 4 : Image rue * * * * * * * * */}
                <section className="relative bg-paper" id="intro-section4" ref={(e) => createSectionsRefs(e, 3)}>
                    <div style={{ background: 'url(./src/assets/images/intro/city-1931.jpeg)', backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%' }}></div>
                    <span className="block text-[200px] leading-[200px] futura-extrabold text-white absolute bottom-[70px]">1931</span>
                </section>



                {/* * * * * * * * * SECTION 5 : Le professeur * * * * * * * * */}
                <section className="text-white pb-[180px]" id="intro-section5" ref={(e) => createSectionsRefs(e, 4)}>
                    <div className="grid grid-cols-12 gap-x-[40px] pb-[180px]">
                        <div className="col-span-4 col-start-2 pt-[90px]" id="intro-section5-text">
                            <h2 className="text-[34px] mb-[260px] leading-[120%] font-bold">Gilbert Trausch,<br/> le professeur</h2>
                            <p>Rêvant enfant de devenir contrôleur de tramway, c’est au lycée qu’il découvre l’histoire entre l’âge de 15 et 17 ans. Il effectue ses études d’abord aux Cours supérieurs au Luxembourg, ensuite à la Sorbonne à Paris et, de manière plus étonnante pour l’époque, à l’Université d’Exeter en Angleterre. En 1956, il prépare son doctorat en philosophie et lettres et devient professeur au Lycée de garçons à Luxembourg deux ans plus tard.</p>
                            <br/>
                            <p> Malgré le cumul de nombreuses tâches, Gilbert Trausch ne délaissa jamais sa vocation première, qui était celle d’enseigner. À partir de 1964, il enseigne l'histoire à l'Institut pédagogique et, à partir de 1966 et pendant les trois décennies suivantes, aux Cours supérieurs et au Centre universitaire de Luxembourg (CUL). De 1970 à 1997, Trausch donne également des cours d'histoire luxembourgeoise et d'histoire de l'intégration européenne à l'université de Liège, où il obtient en 1990 la chaire d'histoire de l'intégration européenne. À partir de 1991, il enseigne également pendant 14 ans au Collège d'Europe à Bruges.</p>
                        </div>
                        <div className="col-span-3 col-start-7 pt-[180px]" id="intro-section5-img">
                            <img src="./src/assets/images/intro/GT-prof.jpeg" alt="Gilbert Trausch professeur" className="max-h-[850px]" />
                        </div>
                    </div>
                </section>



                {/* * * * * * * * * SECTION 6 : Carrière * * * * * * * * */}
                <section className="py-[80px] bg-paper" id="intro-section6" ref={(e) => createSectionsRefs(e, 5)}>
                    <div className="grid grid-cols-12 gap-x-[40px] h-full border-r border-black">
                        <div className="col-span-5 relative" id="intro-section6-img">
                            <img src="./src/assets/images/intro/biblitoheque.jpeg" className='h-full' alt="Bibliothque" style={{ height: '100%!important' }} />
                            <span className="block text-[200px] leading-[200px] font-extrabold text-white absolute bottom-[70px] right-[50px] futura">1972</span>
                        </div>
                        <div className="col-span-4 col-start-7 pt-[30px]">
                            <h2 className="text-[34px] mb-[260px] leading-[120%] font-bold">Une longue carrière <br/> au service du Luxembourg <br/> et de l’Europe</h2>
                            <p id="intro-section6-text">À côté de ses activités d’enseignant,il dirige la Bibliothèque nationale du Luxembourg de 1972 à 1983, où il s’emploie à accentuer le caractère scientifique et documentaire des fonds. De 1984 à 1990, il occupe la fonction de directeur administratif duCentreUniversitaire de Luxembourg. Ensuite, entre 1989 et 2001, il dirige le Centre d'études et de recherches européennes RobertSchuman (CERE).Entre 1991 et 1996, il est également Premier Conseiller de Gouvernement. Il a été membre de nombreuses organisations scientifiques. Dès 1957, il rejoint l’ACADEMIA, l’Association des étudiants catholiques luxembourgeois, en 1963 il devient membre du comité de rédaction de la revue d'histoire luxembourgeoise Hémecht, ensuite de la section historique de l'Institut grand-ducal, du conseil de recherche de l'Institut universitaire européen de Florence et du Comité de liaison des historiens de la Communauté européenne, dont il est le président de 1989 à 2001.</p>
                        </div>
                    </div>
                </section>



                {/* * * * * * * * * SECTION 7 : Parcours 1 * * * * * * * * */}
                <section className="bg-paper" id="intro-section7" ref={(e) => createSectionsRefs(e, 6)}>
                    <div className="grid grid-cols-12 gap-x-[40px]">
                        <div className="col-span-4 col-start-3 pt-[110px]">
                            <h2 className="text-[34px] mb-[260px] leading-[120%] font-bold">Parcours de recherche: de la Révolution française à l’histoire de la construction européenne</h2>
                            <div id="intro-section7-text">
                                <p>Lors de son séjour à la Sorbonne, Gilbert Trausch est influencé parla première génération de l’école des Annales qui prônait une analyse plus anthropocentrique de l’histoire sur la longue durée. Cette influence se retrouve surtout dans la première phase de ses travaux scientifiques qui se focalise sur la période moderne, avec notamment son travail de doctorat sur «La suppression des couvents de la Ville de Luxembourg sous le Directoire»en 1958.</p>
                                <p>Mais c’est surtout la publication en 1967 de son étude sur le Klëppelkrich (guerre desGourdins), qui lance véritablement sa carrière de chercheur.Gilbert Trausch y démystifie l’ancienne idée selon laquelle la révolte populaire de 1798 aurait été une première manifestation d’une unité nationale contre l’envahisseur français en montrant que les révoltes paysannes étaient spontanées et dépourvues de sentiment national qui ne pouvait pas exister à l’époque.</p>
                            </div>
                        </div>
                        <div className="col-span-3 col-start-8 pt-[110px]">
                            <div className="grid grid-cols-3 gap-x-[40px]" id='intro-section7-img1'>
                                <div className="col-span-1">
                                    <img src="./src/assets/images/intro/livre-kleppelkrich.png" alt="Couverture du livre Kleppelkrich"/>
                                </div>   
                                
                                <div className="col-span-3 mt-[35px] mb-[130px]">
                                    <span className="uppercase text-[11px] pb-[10px] block font-semibold">Ci-dessus</span>
                                    <span className="italic font-light text-[13px]">Couverture du livre Kleppelkrich</span>
                                </div>
                            </div>    

                            <div className='grid grid-cols-3 gap-x-[40px]' id='intro-section7-img2'>
                                <div className="col-span-3">
                                    <img src="./src/assets/images/intro/paysans-kloppelkrich.jpeg" alt="Couverture du livre Kleppelkrich"/>
                                    <span className="uppercase text-[11px] pb-[10px] block font-semibold mt-[40px]">Ci-dessus</span>
                                    <span className="italic font-light text-[13px]">Paysans du Kleppelkrich</span>
                                </div>   
                            </div>
                        </div>
                    </div>
                </section>



                {/* * * * * * * * * SECTION 8 : Parcours 2 * * * * * * * * */}
                <section className="bg-paper" id="intro-section8" ref={(e) => createSectionsRefs(e, 7)}>
                    <div className="grid grid-cols-12 pt-[130px] gap-x-[40px]">
                        <div className="col-span-4">
                            <div className="grid grid-cols-4 gap-x-[40px]">
                                <div className="col-span-1 col-start-2" id="intro-section8-img">
                                    <img src="./src/assets/images/intro/histoire-du-luxembourg.jpeg" alt="Couverture du livre Kleppelkrich"/>
                                </div>
                                <div className="col-span-3 col-start-2" id="intro-section8-legend">
                                    <span className="uppercase text-[11px] pb-[10px] block font-semibold mt-[40px]">Ci-dessus</span>
                                    <span className="italic font-light text-[13px]">Couverture du livre Histoire du Luxembourg</span>
                                </div>
                                <div className="col-span-4 mt-[130px]" id="intro-section8-text">
                                    <p>
                                        Ce livre, qui fait l’unanimité dans le contexte des années 1960 qui voient au Luxembourg le commencement tardif d’un renouveau des méthodes en histoire et d’une professionnalisation du métier, place Gilbert Trausch résolument comme historien émergent. C’est ainsi que quelques années plus tard, il devient directeur de la BnL et que dans les années 1970, il est chargé par le ministère de l’Éducation nationale de rédiger les parties moderne et contemporaine de nouveaux manuels scolaires.
                                        C’est à partir de ces années-là qu’il délaisse l’époque moderne et se tourne définitivement vers l’histoire contemporaine, avec une prédilection pour les questions sociales, économiques et politiques. À partir des années 1980, son narratif se centre de plus en plus sur la question d’une nation luxembourgeoise tout en s’engageant de plus en plus dans l’histoire de la construction européenne. Sortiront progressivement plusieurs histoires du Luxembourg, qu’il écrit soit seul, soit en coopération. À côté d’innombrables discours et conférences, il est l’auteur d’une vingtaine d’ouvrages et de plus de cent articles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 col-start-5">
                            <div className="grid grid-cols-2 gap-x-[40px]">
                                <div className="col-span-1" id="intro-section8-img2">
                                    <img src="./src/assets/images/intro/livre-ancien-regime.jpeg" alt="Couverture du livre Kleppelkrich"/>
                                </div>
                                <div className="col-span-1 col-start-2" id="intro-section8-img3">
                                    <img src="./src/assets/images/intro/livre-epoque-contemporaine.jpeg" alt="Couverture du livre Kleppelkrich"/>
                                </div>
                            </div>
                            <div id="intro-section8-legend2">
                                <span className="uppercase text-[11px] pb-[10px] block font-semibold mt-[40px]">Ci-dessus</span>
                                <span className="italic font-light text-[13px]">Manuels scolaires III et IV</span>
                            </div>
                        </div>
                    </div>
                </section>




                {/* * * * * * * * * SECTION 9 : Image full GT * * * * * * * * */}
                <section id="intro-section9" className="bg-black-custom" ref={(e) => createSectionsRefs(e, 8)}>
                    <div className="grid grid-cols-12 h-[100%] py-[50px]">
                        <div id="intro-section9-img" className="col-span-10 col-start-2 relative" style={{ background: 'url(./src/assets/images/intro/GT-menu-1.jpeg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%' }}>
                            <span className="block text-[200px] leading-[200px] futura-extrabold text-white absolute bottom-[70px] -right-[50px]">1989</span>
                        </div>
                    </div>
                </section>



                {/* * * * * * * * * SECTION 10 : Sur le devant de la scène * * * * * * * * */} 
                <section className="bg-black-custom text-white pb-[180px]" id="" ref={(e) => createSectionsRefs(e, 9)}>
                    <div className="grid grid-cols-12 gap-x-[40px] pb-[180px]">
                        <div className="col-span-4 col-start-2 pt-[90px]" id="intro-section5-text">
                            <h2 className="text-[34px] mb-[260px] leading-[120%] font-bold">Gilbert Trausch,<br/> sur le devant de la scène </h2>
                            <p>
                                Le summum de sa carrière est atteint en 1989, lorsqu’il est le principal organisateur de la grande exposition sur les 150 ans de l’indépendance du Luxembourg. Déjà habitué des plateaux de télévision, notamment dans ses fréquentes apparitions dans l’émission Hei Elei, Kuck Elei de RTL, son discours d’ouverture de l’exposition de 1989 devant un public composé de dirigeants européens, le place encore plus sur le devant de la scène luxembourgeoise. Désormais, il sera sollicité dans les médias pour donner son avis sur les thèmes de société les plus divers, des attentats du 11 septembre 2001 au rôle de la monarchie dans le monde d’aujourd’hui, en passant par le référendum sur la constitution européenne en 2005.
                            </p>
                            <br/>
                            <p>
                                Ce qui suit vise à illustrer certains de ces aspects en profondeur. Le premier chapitre s’intéresse au personnage public qu’est avant tout Gilbert Trausch, ce qui se manifeste non seulement à travers ses interventions dans les médias, que ce soit dans la presse écrite ou à la télévision, mais aussi par le rôle social en tant qu’historien qu’il s’est soit forgé, soit lui a été imposé. Le deuxième chapitre entre dans la sphère plus privée de l’historien en offrant un aperçu dans ses méthodes de travail, notamment par l’importance de sa bibliothèque personnelle. Enfin, le troisième chapitre analyse son œuvre, ses centres d’intérêt et ses idées.
                            </p>
                        </div>
                        <div className="col-span-3 col-start-7 pt-[180px]" id="intro-section5-img">
                            <div className="pb-[30px] w-[60%]">
                                <span className="uppercase text-[11px] pb-[10px] block font-semibold">Ci-dessous</span>
                                <span className="italic font-light text-[13px] w-[80%]">Gilbert Trausch lors de son discours d’ouverture de l’exposition de 1989.</span>
                            </div>

                            <img src="./src/assets/images/intro/GT-discours.jpeg" alt="Gilbert Trausch professeur" className="max-h-[600px] object-cover"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


