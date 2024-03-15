export default function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex ">
        <div className="flex flex-col gap-2 text-left max-w-[7rem]">
          <p className="text-center text-3xl w-full font-semibold max-w-[7rem] ">
            Meet
          </p>
          <p className="flex max-w-[7rem] w-full min-h-[180px] h-full">
            <p className="mt-[4rem] -ml-[4.5rem] text-[5rem] -rotate-90  font-bold">
              {"Turbo!".split("").map((txt) => (
                <span
                  key={txt}
                  className="transition duration-300 ease-in-out transform hover:-translate-x-1"
                >
                  {txt}
                </span>
              ))}
            </p>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold">Our AI Sales Assistant!</h1>
            <h2 className="text-3xl font-bold">You can ask anything</h2>
            <h2 className="text-3xl font-bold">vehicle related!</h2>
            <input className="border-2 border-black" />
          </div>
        </div>
      </div>

      
    </div>
  );
}
