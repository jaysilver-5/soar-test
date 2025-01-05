import React from 'react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  isFull?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  required = false,
  isFull,
}) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">Date of Birth</label>
      <input
        id="date-input"
        type="date"
        className={`border border-gray-300 text-black mt-2 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
          isFull ? 'border-gray-300' : 'border-red-500'
        }`}
        value={value}
        onChange={handleDateChange}
        required={required}
      />
    </div>
  );
};

export default DateInput;
