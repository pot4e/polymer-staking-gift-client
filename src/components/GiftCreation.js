import React from "react";

function GiftCreation () {
    return (
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
    );
}

export default GiftCreation;