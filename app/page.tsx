import classNames from "classnames"
import Image from "next/image"

export default function Home() {
  let title: string | null

  let content: string | null

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="my-4 text-center font-semibold text-gray-900 dark:text-white">
        Todo List
      </div>
      <div className="relative mx-auto flex w-full max-w-[70rem] flex-row justify-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <div className="flex flex-row">
            <h6 className="mb-4 basis-3/4 p-6 pb-0 font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              tasks
            </h6>
            <div className="align mb-4 grid basis-1/4 justify-end p-6 pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#ec4899"
                className="inline-block h-5 w-5 cursor-pointer hover:fill-pink-600"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </div>
          </div>

          {task(0, "My Homework")}
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            detail
          </h6>
          <h4 className="text-blue-gray-900 mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
            Lyft launching cross-platform service this week
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}

function task(index: number, task: string) {
  return (
    <div
      className={classNames({
        "p-6": true,
        "pt-0": index === 0 ? true : false,
      })}
    >
      <div className="cursor-pointer rounded-md hover:bg-slate-100">
        <p className="p-2">{task}</p>
        <hr />
      </div>
    </div>
  )
}
