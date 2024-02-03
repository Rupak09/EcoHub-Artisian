import { Cpu, Paperclip, Construction, GlassWater, InspectionPanel } from 'lucide-react';

export function FeatureOne() {
    return (
        <div className="px-2 py-2 md:px-6 md:py-10 mt-10 mb-4 ml-6">
            <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
                Getting your materials made easy.
            </h1>
            <p className="my-2 text-gray-600">
                Waste materials can be discovered and purchased.
            </p>
            <hr />
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
                {/* Item 1 */}
                <div className="space-y-3">
                    <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                        <Cpu size={40} />
                    </span>
                    <h1 className="text-xl font-semibold capitalize text-black">E-Wastes</h1>
                    <p className="text-sm text-gray-500">
                        Damaged electronic devices, from personal gadgets.  </p>
                </div>

                {/* Item 3 */}
                <div className="space-y-3">
                    <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                        <Paperclip size={40} />
                    </span>
                    <h1 className="text-xl font-semibold capitalize text-black">Paper Wastes</h1>
                    <p className="text-sm text-gray-500">
                        Old paper and used paper. </p>
                </div>

                {/* Item 4 */}
                <div className="space-y-3">
                    <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                        <Construction size={40} />
                    </span>
                    <h1 className="text-xl font-semibold capitalize text-black">Wood Wastes</h1>
                    <p className="text-sm text-gray-500">

                        Unutilized or damaged wooden materials, encompassing small-scale items to large-scale structures.  </p>
                </div>

                {/* Item 5 */}
                <div className="space-y-3">
                    <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                        <GlassWater size={40} />
                    </span>
                    <h1 className="text-xl font-semibold capitalize text-black">Glass Wastes</h1>
                    <p className="text-sm text-gray-500">
                        Discarded or shattered glass items, spanning household products to industrial remnants. </p>
                </div>

                {/* Item 6 */}
                <div className="space-y-3">
                    <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                        <InspectionPanel size={40} />
                    </span>
                    <h1 className="text-xl font-semibold capitalize text-black">Metal Wastes</h1>
                    <p className="text-sm text-gray-500">
                        Residual or damaged metal items ranging from small to large scale. </p>
                </div>
            </div>
        </div>
    );
}