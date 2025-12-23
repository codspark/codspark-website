import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[80vh] px-3 md:h-[95vh] pt-[30px] hero-section flex flex-col justify-between items-center">
      <div><img src="/CodSpark.png" alt="CodSpark" width="220"/></div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl text-center lg:text-5xl font-bold text-primary">
          Site is Under Construction
        </h1>
        <a href="https://forms.gle/LtLjxtBav4i3Ednh7" target="_blank"><Button /></a>

      </div>
      <div>
        <p className="text-md text-gray-700 text-center my-5 lg:text-lg lg:my-10 max-w-4xl">Site will be available soon. Thank you for your patience!</p>
        <div className='flex gap-3 justify-center'>
          @codspark.in
        </div>
      </div>
      
    </div>
  );
}
