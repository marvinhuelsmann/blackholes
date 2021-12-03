import Head from 'next/head'
import Card from '../components/card.js'
import {useEffect} from "react";

export function callbackAnimation(entries) {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
        } else entry.target.classList.remove("animate-fadeIn");
    });
}

export default function Home() {
    useEffect(() => {
        // On page scroll animations
        const callbackSmall = function (entries) {
            callbackAnimation(entries, false)
        };

        const observerSmall = new IntersectionObserver(callbackSmall)

        const targetsSmall = document.querySelectorAll(".show-on-scroll");
        targetsSmall.forEach(function (targetsSmall) {
            targetsSmall.classList.add("opacity-0");
            observerSmall.observe(targetsSmall);
        });
    })
    return (
        <div>
            <Head>
                <title>Schwarze Löcher</title>
                <meta name="Dies dient als Informationsseite zu Schwatzen Löchern" content="Schwarze Löcher"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className={"text-center text-white xl:text-9xl md:text-7xl text-5xl font-black filter drop-shadow-2xl shadow-lg pt-24"}>
                    Schwarze<br/> Löcher
                </h1>
                <div className={"mt-12 w-full justify-center flex show-on-scroll"}>
                    <div
                        className="
        xl:p-0 p-2
        mb-3
        lg:space-y-0
        md:space-y-0
        space-y-3
        grid-cols-3
        gap-3
        lg:flex lg:flex-wrap
        md:flex md:flex-wrap
        mt-4
        lg:text-xl
        md:text-xl
        text-md
        font-sans
        text-gray-400
      "
                    >
                        <Card
                            text={"Ein schwarzes Loch hat keine Oberfläche wie ein Planet oder ein Stern. Es ist hingegen ein Gebiet im Weltraum, dieser Kollaps von katastrophalen Ausmaßen bewirkt, dass sich eine enorme Menge Masse auf einem unglaublich winzigen Raum konzentriert."}/>
                        <Card
                            text={"Die Anziehungskraft eines Schwarzen Lochs ist so stark, dass ihm nicht einmal Licht entkommen kann. Daher sind Schwarze Löcher kosmische Einbahnstraßen. Die Gravitation von Schwarzen Löchern ist so stark, dass nichts entkommen kann, nicht einmal Licht."}/>
                        <Card
                            text={"Ein Schwarzes Loch enthält stark zusammengepresste Materie. Weil die Schwerkraft so groß ist, saugt es immer mehr Materie an - wie ein kosmischer Staubsauger. Es gibt Schwarze Löcher, die Millionen oder sogar Milliarden Mal die Masse der Sonne haben."}/>
                    </div>
                </div>
                <div className={"pt-10 mb-32 flex justify-center animate-bounce text-center"}>
                    <img className={"text-xl opacity-70"}
                         src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/backhand-index-pointing-down_light-skin-tone_1f447-1f3fb_1f3fb.png"}
                         alt={"Apple Emoji Icon"}/>
                </div>
                <div className={"xl:mt-64 md:mt-32 mt-48"}>
                    <h1 className={"text-center show-on-scroll xl:text-9xl font-bold text-white opacity-100 md:text-8xl text-7xl"}>
                        Unser.
                    </h1>
                    <h2 className={"text-center show-on-scroll xl:text-8xl font-medium text-white opacity-60 md:text-7xl text-6xl"}>
                        Universum.
                    </h2>
                    <h4 className={"text-center show-on-scroll xl:text-6xl text-white opacity-40 md:text-6xl text-5xl"}>
                        ist unfassbar.
                    </h4>
                    <h3 className={"pt-8 text-center flex justify-center show-on-scroll xl:text-7xl text-white opacity-60 md:text-6xl text-5xl"}>
                        <img
                            src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/skull_1f480.png"}
                            alt={"Apple Emoji Icon"}/>
                    </h3>
                </div>
            </main>

            <footer className={"mt-64"}>
                <a target={"_blank"} className={"cursor-pointer"} href={"https://marvhuelsmann.com"}>
                <div className={"flex justify-center"}>
                        <img className={"lg:w-1/12 md:w-1/6 w-1/4"} src={"https://i.imgur.com/j9XmjTS.png"}
                             alt={"Logo"}/>
                </div>
                </a>
                <p className={"text-gray-500 text-center pb-10 text-md"}>
                    <a className={"hover:text-gray-400"} href={"https://marvhuelsmann.com"} target={"_blank"}>Marvin Hülsmann</a> 2021 © Informations Website - Schwarze Löcher
                </p>
            </footer>
        </div>
    )
}

