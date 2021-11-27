import Head from 'next/head'
import BlackHole from "../components/blackhole.js";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Schwarze Löcher</title>
                <meta name="Dies dient als Informationsseite zu Schwatzen Löchern" content="Schwarze Löcher"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <body className={"bg-black"}>
            <div className={"text-center"}>
                <h1 className={"text-white xl:text-9xl md:text-7xl text-5xl font-bold filter drop-shadow-2xl shadow-lg pt-24"}>
                    Schwarze Löcher
                </h1>
                <div className={"xl:pr-20 xl:pl-20 pr-10 pl-10"}>
                    <p className={"text-gray-400 xl:text-2xl text-xl"}>
                        Ein Schwarzes Loch ist <strong className={"bg-green-800 rounded"}>ein Objekt</strong>, dessen
                        Masse auf ein <strong className={"bg-green-800 rounded"}>extrem kleines
                        Volumen konzentriert</strong> ist und infolge dieser Kompaktheit in seiner unmittelbaren
                        Umgebung eine
                        so <strong className={"bg-green-800 rounded"}>starke Gravitation erzeugt</strong>, dass nicht
                        einmal das <strong className={"bg-green-800 rounded"}>Licht diesen
                        Bereich verlassen oder
                        durchlaufen kann</strong>.
                    </p>
                </div>

                <div>
                    <div className={"animate-bounce"}>
                        <h1 className={"text-9xl pt-28 text-center justify-center flex space-x-14"}>
                            <img
                                src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/skull_1f480.png"}
                                alt={"Emoji"}/>
                            <img
                                src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/skull_1f480.png"}
                                alt={"Emoji"}/>
                            <img className={"hidden md:block xl:block"}
                                 src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/skull_1f480.png"}
                                 alt={"Emoji"}/>
                            <img className={"hidden xl:block"}
                                 src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/skull_1f480.png"}
                                 alt={"Emoji"}/>
                        </h1>
                    </div>

                    <div className={"flex justify-center hidden xl:flex"}>
                        <div className={"pt-10 pr-4 animate-spin"}>
                            <BlackHole/>
                        </div>
                        <div className={"pt-5 pl-10 animate-bounce"}>
                            <BlackHole/>
                        </div>
                        <div className={"pt-14 pl-14 animate-bounce"}>
                            <BlackHole/>
                        </div>
                        <div className={"pb-20 pl-32 animate-spin"}>
                            <BlackHole/>
                        </div>
                    </div>
                    <div className={"flex justify-center xl:hidden block"}>
                        <div className={"pt-5 animate-spin"}>
                            <BlackHole/>
                        </div>
                    </div>
                </div>

                <div className={"mb-8"}>
                    <h2 className={"text-gray-700 xl:text-6xl md:text-5xl text-3xl font-bold"}>
                        Die Gravitation von Schwarzen Löchern ist so stark, dass nichts entkommen kann, nicht einmal
                        Licht...
                    </h2>
                    <p className={"xl:text-3xl md:text-3xl text-2xl text-indigo-200 opacity-60 xl:pl-24 xl:pr-24 pl-6 pr-6"}>
                        Ein Schwarzes Loch enthält <strong>stark zusammengepresste Materie</strong>. Weil die
                        Schwerkraft so groß ist,
                        <strong>saugt es immer mehr Materie an</strong> - wie ein kosmischer Staubsauger.
                        Es gibt Schwarze Löcher, die Millionen oder sogar <strong>Milliarden Mal die Masse der Sonne
                        haben</strong>.
                    </p>
                </div>
                <div className={"hidden xl:flex justify-center"}>
                    <img
                        src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/face-in-clouds_1f636-200d-1f32b-fe0f.png"}
                        alt={"Image Logo"}/>
                </div>
                <div className={"mb-16"}>
                    <h1 className={"xl:mt-14 md:mt-12 mt-7 text-white opacity-40 xl:text-8xl md:text-6xl text-5xl font-bold italic"}>
                        Was hast du verstanden?
                    </h1>
                    <form className={"xl:pt-10 pt-6 xl:pl-0 xl:pr-0 pl-10 pr-10"}>
                        <textarea
                            className={"rounded xl:w-1/2 md:w-1/2 w-full resize-none text-2xl text-white bg-black"}
                            placeholder={"Ich verstehe..."}/>
                        <div className={"pt-3"}>
                            <button className={"bg-gray-500 p-3 rounded text-xl text-gray-200"}>
                                In die Welt senden
                            </button>
                            <p className={"pt-3 text-gray-500 text-xl opacity-70"}>
                                Wenn du deinen Text absendest wird er Öffentlich <br/>auf dieser Website für jeden Nutzer angezeigt.
                            </p>
                        </div>
                    </form>
                </div>
                <div className={"flex justify-center"}>
                    <img className={"w-1/12"} src={"https://i.imgur.com/j9XmjTS.png"} alt={"Logo"}/>
                </div>
            </div>
            </body>
        </div>
    )
}

