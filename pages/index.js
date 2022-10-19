import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <div className="absolute bg-gradient-to-t from-[#f5f5f5] to-[#8affffb4] h-[20vw] w-[60vw]  rounded-br-full "></div>
      <div className="flex  flex-col xl:flex-row">
        <div>
          <div className=" top-[10vh] w-[100vw] xl:w-[60vw]  xl:ml-20 p-5 xl:relative">
            <div className="flex flex-col xl:flex-row">
              {" "}
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "100%"],
                }}
                transition={{
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  duration: 2,
                }}
                className="relative rounded-full hover:scale-150  flex items-center  justify-center content-center h-[15vh] w-[15vh] bg-gradient-to-b from-[#24ede8] to-[#ece90b] drop-shadow-2xl shadow-[#2b8685]  shadow-xl"
              >
                {" "}
                <img
                  className="p-2 mt-4 ml-1 "
                  src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ic7defqune831dh9orwm/memoji-2?fimg-client-default"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col font-Inspiration">
                <div className="xl:ml-10 text-[#333333]   font-semibold text-[30px]">
                  Mbonea Mjema
                </div>
                <div className="xl:ml-10 text-gray-500  font-Inspiration text-[18px]">
                  Electrical and Electronics Engineer & Full Stack Developer
                </div>
              </div>
            </div>
            <div>
              <div className="mt-20  text-[#222222] font-Inspiration  text-[18px]  flex">
                {" "}
                Experience
              </div>
              <h4 className="mt-10 text-[#222222] font-Inspiration font-bold">
                Designer, Framer
              </h4>
              <h1 className="mt-2 text-[##8F8F8F] font-Inspiration">
                2017 - Present
              </h1>
              <h1 className="mt-8  font-Inspiration text-justify">
                From which we spring invent the universe corpus callosum the
                only home we\'ve ever known decipherment dispassionate
                extraterrestrial observer. Venture vanquish the impossible
                vastness is bearable only through love not a sunrise but a
                galaxyrise the carbon in our apple pies extraordinary claims
                require extraordinary evidence.
              </h1>
              <h1 className="mt-8   font-Inspiration">
                View <span className="font-Hepta">→</span>
              </h1>
            </div>
          </div>
        </div>
        <motion.div
          animate={{
            x: [200, 0],
            duration: 2,
          }}
          className=" bg-black h-screen ml-1 w-[100vw] xl:w-[40vw] "
        >
          <div className="content w-full xl:relative top-[10vh]">
            <h1 className=" ml-10 text-white opacity-50 font-Inspiration text-[18px]">
              {" "}
              About
            </h1>

            <h1 className=" ml-10 text-white opacity-50 font-Inspiration text-[18px]">
              {" "}
              About
            </h1>
            <h1 className=" ml-10 text-white opacity-50 font-Inspiration text-[18px]">
              {" "}
              About
            </h1>
            <h1 className=" ml-10 text-white opacity-50 font-Inspiration text-[18px]">
              {" "}
              About
            </h1>
            <h1 className=" ml-10 text-white opacity-50 font-Inspiration text-[18px]">
              {" "}
              About
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}
