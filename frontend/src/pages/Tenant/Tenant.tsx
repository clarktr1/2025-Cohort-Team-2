
const TenantPage = () => {

    return (
        <div className="bg-neutral-950 h-screen p-2">
            <div className="flex h-2/5 rounded-lg overflow-hidden gap-2">
                <div className="w-full rounded-lg overflow-hidden relative">
                    {/* Background Image */}
                    <img
                        src="/apartment_bg_img.jpg"
                        alt="Background"
                        className="absolute inset-0 object-cover w-full h-full"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-neutral-900/75" />
                    {/* Hero Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-medium text-orange-200 drop-shadow-lg text-center">
                            Welcome to <span className='text-orange-600 font-bold'>Smart Living</span>
                        </h1>
                        <h2 className="mt-4 text-2xl font-bold text-orange-200 drop-shadow-md text-center">
                            Experience comfort, embrace innovation.
                        </h2>
                    </div>
                </div>

                <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
                    <p className="text-white mb-2">
                        Notification 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="text-white mb-2">
                        Notification 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-white">
                        Notification 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TenantPage