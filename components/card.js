export default function Card({text}) {
    if (text != null) {
        return (
            <div
                className="bg-gray-500 opacity-60 rounded-2xl xl:w-96 xl:w-64 w-full h-auto relative overflow-hidden">
                <p className="p-6 xl:text-2xl md:text-2xl text-xl text-white text-center" typeof="document.text">
                    {text}
                </p>
            </div>
        )
    }
}