import styled from "styled-components";
import { useState } from "react";
import Form from "./components/Form";

import Success from "./components/Success";
function App() {
  const [isSuccess, setIsSuccess] =
    useState(false);
  return (
    <>
      <section class="flex items-center  flex-col bg-[#FF7979;] mr-[24px] ml-[24px] lg:flex-row lg:ml-[165px]   ">
        <div class=" ">
          <h1 class="text-[#FFF] font-poppins text-[28px] text-center mt-[88px] ml-[1%] lg:w-[525px] lg:text-[50px]  ">
            Learn to code by watching others
          </h1>
          <h2 class="text-[#FFF] font-poppins text-[16px] mt-[16px] text-center lg:w-[525px]   lg:text-[16px]   lg:text-center  ">
            See how experienced developers solve
            problems in real-time. Watching
            scripted tutorials is great, but
            understanding how developers think is
            invaluable.
          </h2>
        </div>
        <div class="lg:mt-[121px] ">
          <div class="bg-[#5E54A4] w-[100%] h-[60px] rounded-[10px] text-center mt-[12px]  lg:ml-[200px] lg:w-[540px] lg:h-[60px]  ">
            <p class="text-[#FFF] text-[15px] font-bold pt-[3.5%]   ">
              Try it free 7 days{" "}
              <span class="text-[#FFF] text-[15px] font-normal">
                then $20/mo. thereafter
              </span>
            </p>
          </div>
          <Form
            Success={Success}
            setIsSuccess={setIsSuccess}
          />
        </div>
      </section>
    </>
  );
}

export default App;
