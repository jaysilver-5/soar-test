'use client';
import React, { useRef, useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { GrSend } from 'react-icons/gr';

interface User {
  id: number;
  name: string;
  role: string;
  imgSrc: string;
}

const QuickTransfer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number | null>(10.0);
  const [amountError, setAmountError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<'success' | 'error' | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/quick-transfer');
        const data = await response.json();
        setUsers(data);
        setSelectedUserId(data[0]?.id || null); // Default to the first user
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const handleAmountSubmit = () => {
    if (amount === null || amount === 0) {
      setAmountError('Amount cannot be empty or zero');
      setShowModal('error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal('success');
    }, 2000);
  };

  const handleUserClick = (id: number) => {
    setSelectedUserId(id);
  };

  return (
    <div className="relative">
      <div className="flex justify-between flex-col 3xl:w-[445px] 3xl:h-[276px] 2xl:h-[240px] xl:h-[276px] 2xl:w-[400px] w-full bg-white h-[195px] items-center rounded-[25px] 3xl:py-10 3xl:px-6 xl:py-10 lg:py-6 lg:px-10 xl:px-6 2xl:py-8 p-5 relative">
        {/* Scrollable User Profiles */}
        <div className="flex items-center w-full relative overflow-visible">
          <div
            className="flex flex-nowrap space-x-4 3xl:space-x-8 overflow-x-scroll h-full overflow-y-hidden inset scrollbar-hide pr-[60px] overflow-visible"
            ref={scrollContainerRef}
          >
            {users.map((user) => (
              <div
                key={user.id}
                className={`flex flex-col items-center justify-center flex-shrink-0 cursor-pointer transition-transform duration-300 ${
                  selectedUserId === user.id
                    ? 'scale-105 font-bold text-black z-10'
                    : 'scale-100 text-[#232323]'
                }`}
                onClick={() => handleUserClick(user.id)}
              >
                <img
                  src={user.imgSrc}
                  className={`h-[50px] xl:w-[75px] xl:h-[75px] w-[50px] rounded-full transition-transform duration-300 ${
                    selectedUserId === user.id ? 'scale-100 z-10' : 'scale-100'
                  }`}
                  alt={user.name}
                />
                <div className="flex flex-col items-center justify-center">
                  <h3
                    className={`font-primary 3xl:text-[16px] 2xl:text-[16px] text-[12px] ${
                      selectedUserId === user.id ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    {user.name}
                  </h3>
                  <p
                    className={`text-[#718EBF] font-primary 3xl:text-[16px] 2xl:text-[16px] text-[12px] 3xl:leading-[18px] leading-[15px] ${
                      selectedUserId === user.id ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    {user.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed Right Scroll Button */}
          <button
            className="3xl:w-[50px] 3xl:h-[50px] w-10 h-10 shadow-md rounded-full border border-gray-50 flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 bg-white"
            onClick={scrollRight}
          >
            <FaAngleRight className="text-[20px] font-light text-[#718EBF]" />
          </button>
        </div>

        {/* Input and Button Section */}
        <div className="w-full flex justify-between items-center">
          <h1 className="3xl:text-[16px] 2xl:text-[16px] text-[12px] text-[#718EBF]">
            Write Amount
          </h1>
          <div className="relative 3xl:w-[265px] 3xl:h-[50px] w-[187px] h-[40px]">
            <input
              type="number"
              placeholder="525.50"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount || null!}
              className="3xl:w-[265px] 3xl:h-[50px] w-full h-[40px] rounded-full pl-5 bg-[#EDF1F7] focus:outline-none outline-none text-[#718EBF]"
            />
            <button
              className="bg-black absolute top-0 right-0 rounded-full h-full 3xl:w-[125px] w-[100px] flex justify-center items-center space-x-2 hover:bg-[#3461B2]"
              onClick={handleAmountSubmit}
            >
              {loading ? (
                <div className="loader-border w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <p className="text-white">Send</p>
                  <GrSend className="text-[20px] text-white" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal === 'success' && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <h2 className="text-black font-bold text-lg">Success</h2>
            <p className="text-[#718EBF]">Transaction Completed Successfully!</p>
            <button
              className="mt-4 px-5 py-2 bg-black text-white rounded-lg hover:bg-[#3461B2]"
              onClick={() => setShowModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showModal === 'error' && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <h2 className="text-black font-bold text-lg">Error</h2>
            <p className="text-[#718EBF]">{amountError}</p>
            <button
              className="mt-4 px-5 py-2 bg-black text-white rounded-lg"
              onClick={() => setShowModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickTransfer;
