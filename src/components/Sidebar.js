import React from "react";
import {Link} from 'react-router-dom';
import t4e_lg from "./lg-t4e.svg";

function Sidebar () {
    return (
        <div id="desktop-nav-sidebar"
          class="group hidden md:flex md:flex-col h-screen py-5 pt-8 bg-surface-default border-r border-subdued transition-all duration-700 ease-in-out relative md:w-48">
          <div class="flex-shrink-0 flex items-center px-4"><a class="outline-none"
              href="">Polymer Gift</a></div>
          <div class="mt-6 flex flex-col overflow-y-auto h-full">
            <nav class="mt-8">
              <div class="space-y-3">
                <Link to="/" id="sidebar-item-Stake"
                  class="group flex items-center px-4 py-2 hover:bg-surface-subdued relative text-subdued"
                  >
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
                </Link>
                <Link to="/claim" id="sidebar-item-Send &amp; Receive"
                  class="group flex items-center px-4 py-2 hover:bg-surface-subdued relative text-subdued"
                  >
                  <div class="flex justify-center items-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                      height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-subdued">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg></div><span class="truncate">Gift Creation</span>
                </Link></div>
            </nav>
          </div><a id="terms-of-service-desktop" target="_blank" href=""
            class="py-4 -mb-5 border-t border-subdued flex text-subdued cursor-pointer items-center hover:bg-surface-subdued px-6">
            <img width="24" height="24" src={t4e_lg}></img>
            <div class="font-medium text-sm mr-2"  >   T4E Team</div>
          </a>
        </div>
    );
}

export default Sidebar;