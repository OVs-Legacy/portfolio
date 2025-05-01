import { useEffect, useRef, useState } from "react";

export default function CVButton() {
  const [showCV, setShowCV] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutsideModal(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowCV(false);
      }
    }

    if (showCV) {
      document.addEventListener("mousedown", handleClickOutsideModal);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    }

    return () =>
      document.removeEventListener("mousedown", handleClickOutsideModal);
  }, [showCV]);

  return (
    <>
      <div className="group fixed top-12 right-24 z-50 flex h-12 w-32 items-center justify-center overflow-hidden rounded-xl text-red-500 shadow-lg outline-red-500 transition-all duration-300 ease-in-out outline-solid before:absolute before:top-full before:-left-[40%] before:h-[400%] before:w-[300%] before:-rotate-45 before:cursor-pointer before:bg-red-500 before:transition-all before:duration-300 before:ease-in-out hover:before:top-0 hover:before:-left-[160%] hover:before:h-[800%] hover:before:w-[380%]">
        <button
          onClick={() => setShowCV(true)}
          aria-label="Toggle CV"
          className="h-full w-full cursor-pointer overflow-hidden"
        >
          <h1
            data-text="Show CV"
            className="font-archivo relative block text-xl uppercase transition-all duration-300 ease-in-out group-hover:-translate-y-full after:absolute after:top-[200%] after:left-0 after:h-full after:w-full after:text-white after:transition-all after:duration-300 after:ease-in-out after:content-[attr(data-text)] group-hover:after:top-full"
          >
            Show CV
          </h1>
        </button>
      </div>
      {showCV && (
        <div className="fixed inset-0 z-50 !m-auto flex h-[80%] w-[50%] items-center justify-center rounded-2xl bg-red-500/50">
          <div
            ref={modalRef}
            className="z-50 h-full w-full overflow-hidden rounded-xl !p-2"
          >
            <iframe
              src="/pdf/cv-danny-den-ouden.pdf"
              className="h-full w-full rounded-xl"
              title="CV Danny den Ouden"
            />
            <div className="absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-400 text-white hover:bg-red-500">
              <button
                onClick={() => setShowCV(false)}
                className="cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="absolute z-10 text-xl text-white">Loading...</div>
        </div>
      )}
    </>
  );
}
