import { PaintBucket, Heart, Globe } from 'lucide-react'

export function FeatureTwo() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-2 lg:px-8 mb-20 mt-20 ml-8">
                <div className="mb-4 max-w-lg">
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
                        OUR MISSION
                    </h2>
                </div>
                <hr />
                <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-start">
                        <Globe className="h-11 w-11 text-gray-700" />
                        <div className="ml-5">
                            <h3 className="text-xl font-semibold text-black">Upcycle Eco-friendly products</h3>
                            <p className="mt-3 text-base text-gray-600">
                                To make a global marketplace for the trade and exchange of a diverse range of upcycled products and have a responsible consumption.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <PaintBucket className="h-11 w-11 text-gray-700" />
                        <div className="ml-5">
                            <h3 className="text-xl font-semibold text-black">Artisian Crafts</h3>
                            <p className="mt-3 text-base text-gray-600">
                                To provide and empower Artisians to utilize our platform for fostering both eco-friendly initiatives and commercial success.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Heart className="h-9 w-9 text-gray-700" />
                        <div className="ml-5">
                            <h3 className="text-xl font-semibold text-black">School & Institutions</h3>
                            <p className="mt-3 text-base text-gray-600">
                                To promote craft activities in children by providing them free raw materials and be able to sell them in the Market App. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}