import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className=" overflow-y-auto  pb-20 sticky left-0 top-20 h-[100vh]  bg-white shadow-md min-w-[20vw]">
      <div id="first-section" className="shadow m-3 w-2xs">
        <div
          id="home"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* home svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 432 384"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M171 363H64V192H0L213 0l214 192h-64v171H256V235h-85v128z"
            />
          </svg>
          <p className="mx-10">Home</p>
        </div>

        <div
          id="shorts"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* yt shorts svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.504 4.504 0 0 0-2.402 4.193a4.521 4.521 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.528 4.528 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.494 4.494 0 0 0 2.39-4.192a4.525 4.525 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z"
            />
          </svg>
          <p className="mx-10">Shorts</p>
        </div>

        <div
          id="subscriptions"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* Subscription svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M4 22q-.825 0-1.413-.588T2 20V10q0-.825.588-1.413T4 8h16q.825 0 1.413.588T22 10v10q0 .825-.588 1.413T20 22H4Zm6-3l6-4l-6-4v8ZM4 7V5h16v2H4Zm3-3V2h10v2H7Z"
            />
          </svg>
          <p className="mx-10">Subscription</p>
        </div>
      </div>
      <div id="you-section" className="shadow m-3 w-2xs">
        <div
          id="history"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* history svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M22.5 12c0-5.799-4.701-10.5-10.5-10.5c-1.798 0-3.493.453-4.975 1.251A10.55 10.55 0 0 0 3.5 5.834V2.5h-2v7h7v-2H4.787a8.545 8.545 0 0 1 3.187-2.988A8.458 8.458 0 0 1 12 3.5a8.5 8.5 0 1 1-8.454 9.396l-.104-.995l-1.989.209l.104.994C2.11 18.384 6.573 22.5 12 22.5c5.799 0 10.5-4.701 10.5-10.5ZM11 6v6.414l3.5 3.5l1.414-1.414L13 11.586V6h-2Z"
            />
          </svg>
          <p className="mx-10">History</p>
        </div>

        <div
          id="playlists"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* yt Playlists svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 5.5h16m-16 6h16m-16 6h8m3.513-2.462v4.922a.54.54 0 0 0 .871.428l3.408-2.65a.54.54 0 0 0-.033-.877l-3.407-2.272a.54.54 0 0 0-.839.45"
            />
          </svg>
          <p className="mx-10">Playlists</p>
        </div>

        <div
          id="watch-later"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* Watch later svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
            />
          </svg>
          <p className="mx-10">Watch later</p>
        </div>
        <div
          id="liked-videos"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* Liked videos svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <g fill="none">
              <path
                fill="currentColor"
                d="m15 10l-.986-.164A1 1 0 0 0 15 11v-1ZM4 10V9a1 1 0 0 0-1 1h1Zm16.522 2.392l.98.196l-.98-.196ZM6 21h11.36v-2H6v2ZM18.56 9H15v2h3.56V9Zm-2.573 1.164l.805-4.835L14.82 5l-.806 4.836l1.973.328ZM14.82 3h-.214v2h.214V3Zm-3.543 1.781L8.762 8.555l1.664 1.11l2.516-3.774l-1.665-1.11ZM7.93 9H4v2h3.93V9ZM3 10v8h2v-8H3Zm17.302 8.588l1.2-6l-1.96-.392l-1.2 6l1.96.392ZM8.762 8.555A1 1 0 0 1 7.93 9v2a3 3 0 0 0 2.496-1.336l-1.664-1.11Zm8.03-3.226A2 2 0 0 0 14.82 3v2l1.972.329ZM18.56 11a1 1 0 0 1 .981 1.196l1.961.392A3 3 0 0 0 18.561 9v2Zm-1.2 10a3 3 0 0 0 2.942-2.412l-1.96-.392a1 1 0 0 1-.982.804v2ZM14.606 3a4 4 0 0 0-3.329 1.781l1.665 1.11A2 2 0 0 1 14.606 5V3ZM6 19a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Z"
              />
              <path stroke="currentColor" stroke-width="2" d="M8 10v10" />
            </g>
          </svg>
          <p className="mx-10">Liked videos</p>
        </div>
      </div>
      <div id="last-section" className="shadow m-3 w-2xs">
        <div
          id="Settings"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* Settings svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
            />
          </svg>
          <p className="mx-10">Settings</p>
        </div>

        <div
          id="report-history"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* yt Report history svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M3 2h10v2h8v14H11v-2H5v6H3V2zm2 12h8v2h6V6h-8V4H5v10z"
            />
          </svg>
          <p className="mx-10">Report history</p>
        </div>

        <div
          id="Help"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* Help svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 432 432"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3zM235 365v-42h-43v42h43zm44-165q20-20 20-48q0-35-25-60t-60.5-25T153 92t-25 60h43q0-18 12.5-30.5t30-12.5t30 12.5T256 152t-13 30l-26 27q-25 25-25 60v11h43q0-22 5.5-34.5T260 220z"
            />
          </svg>
          <p className="mx-10">Help</p>
        </div>

        <div
          id="Send-feedback"
          className="flex w-3xs mx-6 my-3 hover:bg-slate-300 hover:rounded-full p-3"
        >
          {/* Send feedback svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className="h-6 w-fit"
          >
            <path
              fill="currentColor"
              d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM11 13v2h2v-2h-2Zm0-6v5h2V7h-2Z"
            />
          </svg>
          <p className="mx-10">Send feedback</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
