"use client"

import React, { useEffect, Fragment } from "react"
import classNames from "classnames"
import Image from "next/image"
// components
import Modal from "@/components/Modal"
import { Dialog, Transition } from "@headlessui/react"

export default function Home() {
  let title: string | null

  let content: string | null

  const [isOpen, setIsOpen] = React.useState(false)

  const dialogRef = React.useRef(null)

  const formRef: any = React.useRef(null)

  const onResetPost = () => {
    formRef.current?.reset()
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(formRef.current.title.value)
    console.log(formRef.current.content.value)
  }

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
              <Transition show={isOpen} as={Fragment}>
                <Dialog
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  className="relative z-50"
                  initialFocus={dialogRef}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <div
                      className="fixed inset-0 bg-black/30"
                      aria-hidden="true"
                    />
                  </Transition.Child>

                  {/* Full-screen scrollable container */}
                  <div className="fixed inset-0 w-screen overflow-y-auto">
                    {/* Container to center the panel */}
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="mx-auto w-full max-w-lg rounded-lg bg-white p-6 text-black">
                          <Dialog.Title className="text-xl font-semibold">
                            New Task
                          </Dialog.Title>
                          <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="relative mt-4">
                              <input
                                type="text"
                                id="title"
                                className="peer block w-full appearance-none rounded-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-0 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:focus:border-pink-500"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="title"
                                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-pink-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-pink-500"
                              >
                                Title
                              </label>
                            </div>
                            <div className="relative mt-4">
                              <textarea
                                rows={5}
                                id="content"
                                placeholder=" "
                                className="peer block w-full appearance-none rounded-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-0 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:focus:border-pink-500"
                              />
                              <label
                                htmlFor="content"
                                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-pink-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-pink-500"
                              >
                                Content
                              </label>
                            </div>
                            <div className="mt-4 text-right">
                              <button
                                onClick={onResetPost}
                                className="mb-2 mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-pink-100 dark:border-gray-500  dark:hover:bg-gray-800 dark:focus:ring-gray-600 "
                              >
                                Reset
                              </button>
                              <button
                                type="submit"
                                className="mb-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-pink-100 dark:border-pink-500 dark:bg-pink-500  dark:hover:bg-pink-600 dark:focus:ring-pink-600 "
                              >
                                Post
                              </button>
                            </div>
                          </form>
                        </Dialog.Panel>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
              {/* <Modal open={open} onClose={() => setOpen(false)} size="lg">
                <form>
                  <div>
                    <label
                      htmlFor="title"
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      // placeholder="Task title..."
                      autoFocus
                      required
                    />
                  </div>
                </form>
                <div className="mt-6">
                  <label
                    htmlFor="content"
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  >
                    Notes
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your notes here..."
                    className="sm:text-md block w-full rounded-md border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
              </Modal> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#ec4899"
                className="inline-block h-5 w-5 cursor-pointer hover:fill-pink-600"
                onClick={() => setIsOpen(true)}
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
