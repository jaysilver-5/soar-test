'use client';
import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '@/app/store/slices/userSlice';
import { FaPencilAlt } from 'react-icons/fa';
import Input from './ui/Input';
import DateInput from './ui/DateInput';
import { RootState } from '@/app/store';

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  'present-address': string;
  'permanent-address': string;
  city: string;
  'postal-code': string;
  country: string;
}

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [activeTab, setActiveTab] = useState<string>('Edit Profile');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    password: '',
    dob: '',
    'present-address': '',
    'permanent-address': '',
    city: '',
    'postal-code': '',
    country: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  console.log(formSubmitted);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    // Clear the error for the field being edited
    setFormErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
  };

  const handleDateChange = (date: string) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));

    setFormErrors((prevErrors) => ({ ...prevErrors, dob: '' }));
  };

  const validateForm = (): Partial<FormData> => {
    const errors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key as keyof FormData] = 'This field is required.';
      }
    });
    return errors;
  };

  const handleSave = () => {
    setFormSubmitted(true);
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setFormSubmitted(false); // Reset submission state after success
    setTimeout(() => {
      dispatch(updateUserProfile(formData));
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };

  const tabs = [
    { name: 'Edit Profile', id: 'edit-profile' },
    { name: 'Preference', id: 'preference' },
    { name: 'Security', id: 'security' },
  ];

  return (
    <div className="overflow-y-scroll h-full flex justify-center bg-[#f5f7fa] 3xl:p-8 p-6">
      <div className="w-full max-w-[1440px] bg-white rounded-[25px] shadow-lg overflow-y-scroll scrollbar-hide">
        {/* Tabs */}
        <div className="flex space-x-4 items-center border-b border-gray-100 px-6 sm:px-8 sticky top-0 bg-white z-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-2 py-[10px] xl:text-[1rem] font-primary text-[13px] font-medium transition-all ${
                activeTab === tab.name
                  ? 'border-b-[3px] border-[#232323] text-[#232323]'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Edit Profile Content */}
        {activeTab === 'Edit Profile' && (
          <div className="p-6 sm:p-8 grid grid-cols-1 xl:grid-cols-[200px_1fr] gap-8">
            <div className="flex justify-center xl:justify-start px-12">
              <div className="relative w-[100px] h-[100px] xl:w-[90px] xl:h-[90px]">
                <img
                  src="/profile-placeholder.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                />
                <button
                  className="absolute bottom-0 right-0 bg-[#232323] text-white p-2 rounded-full text-xs"
                  title="Edit"
                >
                  <FaPencilAlt />
                </button>
              </div>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Your Name"
                placeholder="Charlene Reed"
                id="name"
                onChange={handleInputChange}
                isFull={!!formData.name.trim()}
                formSubmitted={formSubmitted}
              />
              <Input
                label="User Name"
                placeholder="Charlene"
                id="username"
                onChange={handleInputChange}
                isFull={!!formData.username.trim()}
                formSubmitted={formSubmitted}
              />
              <Input
                label="Email"
                placeholder="charlenereed@gmail.com"
                id="email"
                onChange={handleInputChange}
                isFull={!!formData.email.trim()}
                formSubmitted={formSubmitted}
              />
              <Input
                label="Password"
                placeholder="********"
                id="password"
                onChange={handleInputChange}
                isFull={!!formData.password.trim()}
                formSubmitted={formSubmitted}
              />
              <DateInput
                value={formData.dob}
                onChange={(date) => handleDateChange(date || '')}
                required
                isFull={!!formData.dob.trim()}
              />
              <Input
                label="Present Address"
                placeholder="San Jose, California, USA"
                id="present-address"
                onChange={handleInputChange}
                isFull={!!formData['present-address'].trim()}
                formSubmitted={formSubmitted}
              />
              <Input
                label="Permanent Address"
                placeholder="San Jose, California, USA"
                id="permanent-address"
                onChange={handleInputChange}
                isFull={!!formData['permanent-address'].trim()}
                formSubmitted={formSubmitted}
              />
              <Input
                label="City"
                placeholder="San Jose"
                id="city"
                onChange={handleInputChange}
                isFull={!!formData.city.trim()}
                formSubmitted={formSubmitted}
              />
              <Input
                label="Postal Code"
                placeholder="45962"
                id="postal-code"
                onChange={handleInputChange}
                isFull={!!formData['postal-code'].trim()}
                formSubmitted={formSubmitted}
              />
              <Input
                label="Country"
                placeholder="USA"
                id="country"
                onChange={handleInputChange}
                isFull={formSubmitted && !!formData.country.trim()}
              />
            </div>

            {/* Save Button */}
            <div className="col-span-full flex justify-end">
              <button
                onClick={handleSave}
                className={`px-6 py-3 bg-black text-white rounded-lg flex items-center justify-center transition ${
                  loading
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:bg-gray-800'
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="loader-border w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="fixed inset-0 bg-white opacity-70 flex items-center justify-center border">
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <button
                onClick={() => setSuccess(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-lg font-bold mb-4 text-black">
                Profile Updated Successfully!
              </h3>
              <p className="text-black">Name: {user.name}</p>
              <p className="text-black">Email: {user.email}</p>
              <p className="text-black">Username: {user.username}</p>

              <p className="mt-4">
                This is to demonstrate the use of redux and redux state persist.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {formSubmitted && Object.keys(formErrors).length > 0 && (
          <div className="fixed inset-0 text-black flex items-center justify-center border">
            <div className="bg-white border flex justify-center items-center p-8 rounded-lg shadow-lg relative">
              <button
                onClick={() => {
                  setFormErrors({});
                }}
                className="absolute top-2 right-2 text-gray-500 text-xl hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-lg font-bold mb-4 text-black">
                Please fill all required fields.
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
