import "./App.css";
const imgSrc =
  "data:image/jpeg;base64,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";
export default function App() {
  return (
    <div>
      <div className="flex items-center justify-around">
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
                    className=""
                  >
                    {txt}
                  </span>
                ))}
              </p>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-4xl font-bold">
                Our <span className="text-[3.5rem]">AI</span> Sales Assistant!
              </h1>
              <h2 className="text-3xl font-bold">You can ask anything</h2>
              <h2 className="text-3xl font-bold">vehicle related!</h2>
              <input className="border-2 border-black" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center">
          <p className="font-bold">Listing of Day</p>
          <div
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // Add any other background properties as needed
              width: "12rem",
              height: "12rem",
              borderRadius: "14px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
                background: "linear-gradient(to bottom, transparent, blue)",
                color: "white",
                padding: "1.5rem",
                boxSizing: "border-box",
                borderBottomLeftRadius: "14px",
                borderBottomRightRadius: "14px",
              }}
            >
              Dummy Name
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
