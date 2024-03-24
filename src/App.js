import { ConnectButton } from '@rainbow-me/rainbowkit';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GiftCreation from './components/GiftCreation';
import GiftClaim from './components/GiftClaim';

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <div class="min-h-full bg-alternative flex relative max-h-screen">
        <Sidebar />
        <div id="desktop-main-content" class="flex flex-col min-h-screen w-full overflow-y-auto relative">
          <div class="flex flex-col border-b md:border-b-0 dark:border-slate-700">
            <div class="md:hidden flex justify-between lg:justify-start top-0 z-10 flex-shrink-0 h-16 sm:h-20 ">
              <div class="flex items-center flex-shrink-0 px-4 lg:hidden"><a href="https://portfolio.metamask.io/"><img
                    class="h-8 w-auto outline-none" src="./MetaMask Portfolio - Swap._files/metamask-fox-b8558514.svg"
                    alt="MetaMask" /></a></div>

              <div class="mx-6 flex gap-4 items-center lg:hidden text-slate-600 text-xl"><svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="cursor-pointer h-5 w-5 dark:text-white">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <div id="notifications-mobile-button"><button
                    class="cursor-pointer disabled:cursor-auto transition rounded-full border flex items-center justify-center text-center text-sm border-transparent bg-inherit text-default hover:bg-alternative p-0"
                    aria-label="Show Notifications">
                    <div class="relative isolate leading-none"><svg aria-hidden="true" focusable="false"
                        data-prefix="far" data-icon="bell" class="svg-inline--fa fa-bell fa-fw w-5 h-5" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z">
                        </path>
                      </svg></div>
                  </button></div><a href="https://portfolio.metamask.io/settings/accounts">
                  <div class="relative">
                    <div
                      class="flex items-center justify-center w-4 h-4 rounded-full object-cover absolute ring-1 ring-slate-100 dark:ring-slate-900 -top-1 -right-1">
                      <img src="./MetaMask Portfolio - Swap._files/ethereum.svg" alt="Network Avatar"
                        class="overflow-hidden rounded-full" />
                    </div>
                    <div class="rounded-full flex flex-shrink-0">
                      <div class="paper">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="24" width="24">
                          <rect x="0" y="0" rx="0" ry="0" height="24" width="24"
                            transform="translate(0.49383071997832245 -2.3558349151443836) rotate(355.0 12 12)"
                            fill="#15aff2"></rect>
                          <rect x="0" y="0" rx="0" ry="0" height="24" width="24"
                            transform="translate(-10.563393474759803 2.107661155800811) rotate(206.7 12 12)"
                            fill="#f3ab00"></rect>
                          <rect x="0" y="0" rx="0" ry="0" height="24" width="24"
                            transform="translate(-15.130176416762048 7.232453672777916) rotate(242.7 12 12)"
                            fill="#2479e1"></rect>
                          <rect x="0" y="0" rx="0" ry="0" height="24" width="24"
                            transform="translate(-26.643885498989164 -0.9015786210948187) rotate(324.2 12 12)"
                            fill="#03585d"></rect>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a><button type="button" class=" text-slate-600 lg:hidden" aria-label="Menu"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-6 w-6 dark:text-white">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg></button>
              </div>
            </div>
          </div>
          <main class="flex-1 isolate">
          <div id="page-card" class="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
              <div class="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4">
                <div id="page-header" class="relative flex justify-between pb-4 md:pb-9 -mx-4 px-4 items-center">
                  <div
                    class="flex justify-start w-full md:w-max md:flex-col md:space-y-2 space-x-3 md:space-x-0 flex-1">
                    <div
                      class="flex w-full justify-between md:justify-start items-center md:space-x-4 whitespace-nowrap">
                      <h3 class="text-xl sm:text-2xl text-default font-bold">Gift Creation</h3>
                      <div class=""></div>
                    </div>
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "flex-end"
                  }}>
                    <ConnectButton />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <Routes>
                  <Route path="/" element= {<GiftCreation />}></Route>
                  <Route path="/claim" element={<GiftClaim />}></Route>
                </Routes>

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
