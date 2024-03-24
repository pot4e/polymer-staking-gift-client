import { ConnectButton } from '@rainbow-me/rainbowkit';
import './App.css';

const App = () => {
  return (
    <div>
        <div class="min-h-full bg-alternative flex relative max-h-screen">
        <div id="desktop-nav-sidebar"
          class="group hidden md:flex md:flex-col h-screen py-5 pt-8 bg-surface-default border-r border-subdued transition-all duration-700 ease-in-out relative md:w-48">
          <div class="flex-shrink-0 flex items-center px-4"><a class="outline-none"
              href="">Polymer Gift</a></div>
          <div class="mt-6 flex flex-col overflow-y-auto h-full">
            <nav class="mt-8">
              <div class="space-y-3"><a id="sidebar-item-Stake"
                  class="group flex items-center px-4 py-2 hover:bg-surface-subdued relative text-subdued"
                  href="https://portfolio.metamask.io/stake?tab=validator">
                  <div class="flex justify-center items-center mr-2"><svg width="20" height="20" viewBox="0 0 20 20"
                      class="h-5 w-5 stroke-icon-subdued" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_735_24127)">
                        <path
                          d="M3.99902 19C7.24796 17.5 8.87242 16.75 10.4969 16.75M16.9948 19C13.7458 17.5 12.1214 16.75 10.4969 16.75M10.4969 16.75V11.5M10.4969 11.5L10 10.4091M10.4969 11.5V9.5L10.9967 8.5M10 10.4091C10 10.4091 5.00889 11.0985 2.99935 9.5C1.29118 8.14126 1 4.5 1 4.5C1 4.5 5.55008 3.95155 7.54545 5.90909C8.91802 7.25563 10 10.4091 10 10.4091ZM10.9967 8.5C10.9967 8.5 11.5374 4.11404 13.4959 2.5C15.2137 1.08439 18.9941 1 18.9941 1C18.9941 1 19.1777 5.2683 17.4946 7C15.6792 8.86783 10.9967 8.5 10.9967 8.5Z"
                          stroke-width="1.5" stroke-linecap="round"></path>
                      </g>
                      <defs>
                        <clippath id="clip0_735_24127">
                          <rect width="20" height="20" fill="white"></rect>
                        </clippath>
                      </defs>
                    </svg></div><span class="truncate">Gift Claim</span>
                </a><a id="sidebar-item-Send &amp; Receive"
                  class="group flex items-center px-4 py-2 hover:bg-surface-subdued relative text-subdued"
                  href="">
                  <div class="flex justify-center items-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                      height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-subdued">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg></div><span class="truncate">Gift Creation</span>
                </a></div>
            </nav>
          </div><a id="terms-of-service-desktop" target="_blank" href="https://metamask.io/terms.html"
            class="py-4 -mb-5 border-t border-subdued flex text-subdued cursor-pointer items-center hover:bg-surface-subdued px-6">
            <div class="font-medium text-sm mr-2">T4E Team</div>
          </a>
        </div>
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
                <div class="justify-center flex py-2 sm:py-3">
                  <div id="swap-element"
                    class="!bg-inherit dark:md:!bg-portfolio-slateGray-500 md:!bg-white w-full rounded-2xl sm:max-w-md py-4 sm:px-3 md:px-8 sm:py-8">
                    <div id="build-quote" class="space-y-3">
                      <div class="flex justify-between items-end">
                        <div class="font-bold text-left dark:text-white">Receiver Address</div>
                      </div>
                      <div >
                        <div class="relative mt-1">
                          <div class="flex relative h-16">
                            <div class="flex flex-1 text-left items-center relative">
                                <input className='pl-6 py-2 w-full h-full rounded-r-lg border dark:border-slate-600 border-slate-300 text-lg bg-surface-default cursor-default dark:text-white focus:ring-1 focus:ring-primary-default' type='text' placeholder='0x... or any address'></input>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />

                    <div class="space-y-3">
                      <div class="flex justify-between">
                        <div class="font-bold text-left dark:text-white">Amount</div>
                      </div>
                      <div>
                        <div class="relative mt-1">
                          <div class="flex relative h-16">
                            <div class="flex flex-1 text-left items-center">
                                <input className='pl-6 py-2 w-full h-full rounded-r-lg border dark:border-slate-600 border-slate-300 text-lg bg-surface-default cursor-default dark:text-white focus:ring-1 focus:ring-primary-default' type='number' inputMode='decimals' placeholder='0'></input>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="justify-center text-center w-full mt-10"><button
                        class="transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm opacity-50 border-primary-default bg-primary-default text-inverse">
                          <span>
                          Create</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
