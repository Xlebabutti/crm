export default async function Home() {
    return (
        <main className="">
            <section
                id="hero"
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url('/path/to/hero-image.jpg')` }}
            >
                <div className="container mx-auto flex justify-center items-center h-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-blue-500 mb-4">
                            Join Our Live Streams
                        </h1>
                        <p className="text-white mb-8">
                            Get access to exclusive live streams and interact
                            with our community
                        </p>
                        <button className="bg-blue-300 animate-pulse text-black py-2 px-4 rounded-lg hover:bg-gray-300">
                            Join Now
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
