import { linkify } from "../utils/linkify.tsx";

export default function ProjectModal(props) {
  return (
    <>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-50 !m-auto flex h-[80%] w-[75%] items-center justify-center rounded-2xl bg-red-500/50 text-white"
      >
        <div className="small-scrollbar z-50 h-full w-full overflow-y-auto rounded-xl !p-2">
          <div
            onClick={props.onClose}
            className="absolute top-3 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-400 hover:bg-red-500"
          >
            ✕
          </div>
          <div className="overflow-hidden rounded-xl !border-b-2 !border-gray-400 bg-teal-900 text-left">
            <div className="overflow-hidden">
              <div className="max-h-[32rem] w-full overflow-hidden">
                <img src={props.banner} alt="banner" className="w-full"></img>
              </div>
              <div className="!p-2 text-center">{props.title}</div>
            </div>
            <div className="bg-white !px-16 !py-4 text-black xl:!px-32">
              <div className="!mx-auto">
                <div className="!border-b-2 !border-b-gray-400 !p-2 sm:flex">
                  <div className="min-w-[20%] font-bold">Client</div>
                  {props.type} for {props.company}
                </div>
                <div className="!border-b-2 !border-b-gray-400 !p-2 sm:flex">
                  <div className="min-w-[20%] font-bold">My role</div>
                  {props.role}
                </div>
                <div className="!border-b-2 !border-b-gray-400 !p-2 sm:flex">
                  <div className="min-w-[20%] font-bold">duration</div>
                  {props.duration}
                </div>
              </div>
              <div className="!pt-12 !pb-4 whitespace-pre-line xl:!px-12">
                {props.challenge}
              </div>
            </div>
            <div className="bg-teal-900 !px-12 !py-4 text-white xl:!px-42">
              <div className="!mb-4 text-2xl font-bold">Workflow:</div>
              <div className="whitespace-pre-line">
                {props.workflow.map((workflow, i) => {
                  return (
                    <div
                      key={i}
                      className="!my-4 rounded-2xl bg-white !px-4 !py-2 text-black drop-shadow-lg sm:!mx-8"
                    >
                      <div className="!border-b-1 !border-b-gray-400 text-xl font-bold">
                        {workflow.title}:
                      </div>
                      <div className="!pt-2">{workflow.summary}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white !px-12 !py-4 text-black xl:!px-42">
              <div></div>
              <div className="whitespace-pre-line">
                {linkify(props.results)}
              </div>
            </div>
            <div className="columns-1 gap-8 !px-12 !py-4 text-black md:columns-2 xl:columns-3 xl:!px-42">
              {props.images.map((image, i) => {
                return (
                  <div
                    key={i}
                    className="!mb-8 overflow-hidden rounded-xl bg-white drop-shadow-lg"
                  >
                    <div className="bg-gray-100">
                      <img
                        className="object-cover"
                        src={image.source}
                        alt={image.text}
                      />
                    </div>
                    <div className="!p-2">{image.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
