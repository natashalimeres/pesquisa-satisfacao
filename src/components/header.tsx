import { AlignLeft, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-mainNavy-900 h-[316px] shadow-sm">
      <div>
        <div className="flex justify-between px-8">
          <div className="flex mt-4 relative items-centers">
            <AlignLeft className="text-white mr-2" size={24} />
            <h2 className="uppercase text-2xl leading-none text-white font-extralight">
              sua<span className="text-mainYellow font-bold"> logo</span>
            </h2>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-mainNavy-700 flex items-center justify-center">
              <span className="text-white">F</span>
            </div>
            <span className="hidden md:block text-white text-xs mt-1 ml-2">
              Fabio C Pinto
            </span>
            <ChevronDown
              className="hidden md:block text-white mr-2 ml-2 mt-1"
              size={24}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block mt-10 px-8">
        <small className="text-mainGray-700 pl-8">Pesquisa de satisfação</small>
      </div>
    </div>
  );
}
