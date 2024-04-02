import { ConnectButton } from '@rainbow-me/rainbowkit';
import './App.css';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          <main class="flex-1 isolate">
            <div id="page-card" class="pb-10 md:mx-4 my-4 lg:mx-8 lg:my-0">
              <div class="bg-alternative px-4 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-4">
                <div id="page-header" class="relative flex justify-between pb-4 md:pb-9 -mx-4 px-4 items-center">
                  <div
                    class="flex justify-start w-full md:w-max md:flex-col md:space-y-2 space-x-3 md:space-x-0 flex-1">
                    <div
                      class="flex w-full justify-between md:justify-start items-center md:space-x-4 whitespace-nowrap">
                      <h3 class="text-xl sm:text-2xl text-default font-bold">Gift Creation</h3>
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
                <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme='light'
              />
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
