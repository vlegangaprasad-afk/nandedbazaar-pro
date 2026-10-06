'use client';
import { useState } from 'react';
import { Store, User, Phone, MapPin, Lock, Mail, Globe, ArrowLeft } from 'lucide-react';

export default function VendorRegister() {
  const [lang, setLang] = useState<'mr' | 'en'>('mr');

  const t = {
    mr: {
      title: 'नांदेडबाजार - दुकानदार / वेंडर नोंदणी',
      subtitle: 'तुमचे दुकान आमच्या प्लॅटफॉर्मवर नोंदवा आणि हजारो ग्राहकांपर्यंत पोقىचा!',
      businessName: 'दुकानाचे नाव (Business Name)',
      ownerName: 'मालकाचे नाव (Owner Name)',
      phone: 'मोबाईल नंबर (WhatsApp Number)',
      email: 'ईमेल आयडी (Email Address)',
      taluka: 'तालुका (Taluka)',
      password: 'पासवर्ड (Password)',
      registerBtn: 'नोंदणी करा (Register)',
      backHome: 'मुख्य, पानावर जा',
      successMsg: 'तुमची नोंदणी यशस्वी झाली आहे!',
      selectTaluka: 'तालुका निवडा',
    },
    en: {
      title: 'NandedBazaar - Vendor Registration',
      subtitle: 'Register your shop on our platform and reach thousands of customers!',
      businessName: 'Business / Shop Name',
      ownerName: 'Owner Name',
      phone: 'Mobile Number (WhatsApp Number)',
      email: 'Email Address',
      taluka: 'Taluka / Region',
      password: 'Password',
      registerBtn: 'Register Now',
      backHome: 'Back to Home',
      successMsg: 'Registration Successful!',
      selectTaluka: 'Select Taluka',
    }
  };

  const currentText = t[lang];

  const talukas = [
    'नांदेड (Nanded)', 'बिलोली (Biloli)', 'हदगाव (Hadgaon)', 
    'मुखेड (Mukhed)', 'किनवट (Kinwat)', 'देगलूर (Deglur)', 
    'लोहा (Loha)', 'उमरी (Umri)', 'अर्धापूर (Ardhapur)', 
    'मुदखेड (Mudkhed)', 'धर्माबाद (Dharmabad)', 'कुंडलवाडी (Kundalwadi)', 
    'माहूर (Mahur)', 'हि-यात नगर (Himayatnagar)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(currentText.successMsg);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* टॉप बार आणि भाषा बदल */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <a href="/" className="flex items-center text-sm text-gray-600 hover:text-orange-600 font-medium">
            <ArrowLeft className="w-4 h-4 mr-1" /> {currentText.backHome}
          </a>
          <button 
            onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
            className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium transition"
          >
            <Globe className="w-4 h-4 text-orange-600" />
            <span>{lang === 'mr' ? 'English' : 'मराठी'}</span>
          </button>
        </div>

        {/* हेडर्स */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Store className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{currentText.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{currentText.subtitle}</p>
        </div>

        {/* रजिस्ट्रेशन फॉर्म */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* दुकानाचे नाव */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.businessName}</label>
            <div className="relative">
              <Store className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input 
                type="text" 
                required 
                placeholder="उदा. विष्णू क्लोथ सेंटर" 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* मालकाचे नाव */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.ownerName}</label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input 
                type="text" 
                required 
                placeholder="तुमचे पूर्ण नाव" 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* मोबाईल नंबर */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.phone}</label>
            <div className="relative">
              <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input 
                type="tel" 
                required 
                placeholder="१० अंकी मोबाईल नंबर" 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* ईमेल */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.email}</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input 
                type="email" 
                required 
                placeholder="example@email.com" 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* तालुका निवडा */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.taluka}</label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <select className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500">
                <option value="">{currentText.selectTaluka}</option>
                {talukas.map((t, index) => (
                  <option key={index} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* पासवर्ड */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{currentText.password}</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input 
                type="password" 
                required 
                placeholder="सुरक्षित पासवर्ड टाка" 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* सबमिट बटण */}
          <button 
            type="submit" 
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-lg shadow-md transition duration-200 mt-2"
          >
            {currentText.registerBtn}
          </button>

        </form>

      </div>
    </div>
  );
}
