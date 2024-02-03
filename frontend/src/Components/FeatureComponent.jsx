import { useEffect } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { CheckSquare, Zap, DollarSign, ArrowBigUpDash } from 'lucide-react';

export function FeatureThree() {
  const { scrollYProgress } = useScroll();
  const widthAnimation = useAnimation();

  useEffect(() => {
    const updateProgress = (latest) => {
      widthAnimation.start({ scaleX: latest });
    };

    const unsubscribe = scrollYProgress.onChange(updateProgress);

    return () => unsubscribe();
  }, [scrollYProgress, widthAnimation]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            Environmental Initiative
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Assisting artisans in purchasing raw materials for craft.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          The platform features a straightforward navigation system, allowing artisans to easily browse, select, and order their required raw materials.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <ArrowBigUpDash className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Upcycle collection</h3>
          <p className="mt-4 text-sm text-gray-600">
            Waste materials such as metal, e-wastes, clothing, wood, etc. are available to get upcycled.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Zap className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Lightning Sales</h3>
          <p className="mt-4 text-sm text-gray-600">
            The Market app provides a seamless and swift platform for artisans, ensuring easy and lightning-fast sales.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <CheckSquare className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">User Friendly</h3>
          <p className="mt-4 text-sm text-gray-600">
            The platform prioritizes a seamless user experience, ensuring that artisans can effortlessly manage their storefronts and connect with potential buyers.</p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <DollarSign className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Low Commission Rates</h3>
          <p className="mt-4 text-sm text-gray-600">
            The low commission rates underscore our application dedication to empowering artisans by maximizing their profitability.
          </p>
        </div>
      </div>

      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          right: null,
          left: null,
          width: '100%',
          height: 7,
          transformOrigin: '0% 0%',
          backgroundColor: '#617a4f',
          zIndex: '9999',
        }}
        className="hidden md:block fixed inset-y-0 right-0 w-4 bg-gray-700">    
        </motion.div>
    </div>
  );
}