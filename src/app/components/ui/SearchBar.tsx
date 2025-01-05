import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div
      className="flex justify-center items-center w-full 3xl:w-[255px] h-[50px]"
      style={{ boxSizing: "border-box" }}
    >
      <div className="relative w-full h-full">
        {/* Icon Container */}
        <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-400 z-50">
          <CiSearch className="text-[20px]" aria-hidden="true" />
        </span>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search for something"
          className="w-full h-full pl-12 pr-4 rounded-full bg-[#F5F7FA] text-gray-700 placeholder:text-[15px] placeholder:font-normal outline-none border-none"
          style={{
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}
