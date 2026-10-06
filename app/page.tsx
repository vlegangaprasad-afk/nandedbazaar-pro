'use client';
import { useState } from 'react';
import { Search, MapPin, ShoppingBag, Store, ArrowRight, Globe, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<'mr' | 'en'>('mr');

  const t = {
    mr: {
      tag: 'स्थानिक डिजिटल बाजार',
      searchPlaceholder: 'उत्पादने किंवा दुकाने शोधा (उदा. कपडे, किराणा)...',
      vendorRegister: 'दुकानदार नोंदणी',
      heroTitle: 'आपल्या नांदेड जिल्ह्यातील सर्व दुकाने आता एका क्लिकवर!',
      heroSubtitle: 'स्थानिक दुकानदारांना डिजिटल ओळख आणि ग्राहकांना घरपोच किंवा थेट दुकानाची माहिती.',
      exploreShops: 'दुकाने पहा',
      registerShop: 'तुमचे दुकान नोंदवा',
      goldRate: 'गोल्ड (२४K): ₹ ७४,५००/१०ग्रॅम | चांदी: ₹ ८८,०००/किलो',
      mandiTitle: 'नांदेड कृषी उत्पन्न बाजार समिती - लाईव्ह बाजारभाव',
      categories: 'प्रमुख श्रेणी (Categories)',
      cat1: 'कपडे व फॅशन',
      cat2: 'किराणा व डेली नीड्स',
      cat3: 'शेती साहित्य व अवजारे',
      cat4: 'इलेक्ट्रॉनिक्स व मोबाईल',
      newProducts: 'नवीन उत्पादने',
      viewAll: 'सर्व पहा',
      inquire: 'चौकशी करा',
      productName: 'स्टायलिश मेन्स शर्ट',
      footer: '© २०२६ NandedBazaar.in | नांदेड, महाराष्ट्र. सर्व हक्क सुरक्षित.',
    },
    en: {
      tag: 'Local Digital Market',
      searchPlaceholder: 'Search products or shops (e.g., clothing, grocery)...',
      vendorRegister: 'Vendor Register',
      heroTitle: 'All shops in Nanded district are now just a click away!',
      heroSubtitle: 'Digital identity for local vendors and direct store info for customers.',
      exploreShops: 'Explore Shops',
      registerShop: 'Register Your Shop',
      goldRate: 'Gold (24K): ₹ 74,500/10g | Silver: ₹ 88,000/kg',
      mandiTitle: 'Nanded Mandi Market - Live Rates',
      categories: 'Main Categories',
      cat1: 'Clothing & Fashion',
      cat2: 'Grocery & Daily Needs',
      cat3: 'Agricultural Tools',
      cat4: 'Electronics & Mobiles',
      newProducts: 'New Products',
      viewAll: 'View All',
      inquire: 'Inquire',
      productName: 'Stylish Mens Shirt',
      footer: '© 2026 NandedBazaar.in | Nanded, Maharashtra. All rights reserved.',
    }
  };

  const currentText = t[lang];

  // नांदेड मंडी बाजारातील काही प्रातिनिधिक लाईव्ह दर (डेटाबेसशी पुढे जोडता येईल)
  const mandiRates = [
    { cropMrp: 'सोयाबीन (Soybean)', price: '₹ ४,६०० - ४,९००', trend: '+५०' },
    { cropMrp: 'हरभरा (Gram)', price: '₹ ५,४०० - ५,७००', trend: '+३०' },
    { cropMrp: 'कापूस (Cotton)', price: '₹ ७,२०० - ७,६००', trend: '+१००' },
    { cropMrp: 'ज्वारी (Jowar)', price: '₹ ३,१०० - ३,५००', trend: 'स्थिर' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* ०. गोल्ड व सिल्वर लाईव्ह रेट्स स्ट्रिप */}
      <div className="bg-amber-900 text-amber-100 text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center space-x-2">
        <Award className="w-4 h-4 text-amber-400" />
        <span>{currentText.goldRate}</span>
      </div>

      {/* १. टॉप हेडर आणि नेव्हिगेशन */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-600">NandedBazaar</span>
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-medium">
              {currentText.tag}
            </span>
          </div>

          {/* लोकेशन आणि सर्च बार */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-xl mx-8">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-l-lg text-sm text-gray-600 border-r">
              <MapPin className="w-4 h-4 text-orange-500 mr-1" />
              <span>{lang === 'mr' ? 'नांदेड' : 'Nanded'}</span>
            </div>
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder={currentText.searchPlaceholder} 
                className="w-full bg-gray-100 px-4 py-2 text-sm focus:outline-none rounded-r-lg"
              />
              <button className="absolute right-2 top-2 text-gray-500 hover:text-orange-600">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ॲक्शन बटन्स आणि भाषा बदल */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
              className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition"
            >
              <Globe className="w-4 h-4 text-orange-600" />
              <span>{lang === 'mr' ? 'English' : 'मराठी'}</span>
            </button>

            <a href="/vendor/register" className="hidden sm:flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-2 rounded-lg">
              <Store className="w-4 h-4 mr-1.5" />
              {currentText.vendorRegister}
            </a>

            <div className="relative cursor-pointer">
              <ShoppingBag className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </header>

      {/* २. हिरो सेक्शन */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {currentText.heroTitle}
          </h1>
          <p className="text-lg text-orange-100 mb-8">
            {currentText.heroSubtitle}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-50 transition">
              {currentText.exploreShops}
            </button>
            <a href="/vendor/register" className="bg-orange-700 border border-orange-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-800 transition">
              {currentText.registerShop}
            </a>
          </div>
        </div>
      </section>

      {/* ३. नांदेड मंडी मार्केट लाईव्ह स्ट्रिप (मोठी पट्टी) */}
      <section className="max-w-7xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-5">
          <div className="flex items-center justify-between mb-4 border-b pb-2">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <h2 className="font-bold text-gray-800 text-base md:text-lg">{currentText.mandiTitle}</h2>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-semibold animate-pulse">
              ● Live Market
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mandiRates.map((item, index) => (
              <div key={index} className="bg-orange-50/50 border border-orange-100 p-3 rounded-xl flex flex-col justify-between">
                <span className="text-sm font-semibold text-gray-700">{item.cropMrp}</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-base font-bold text-gray-900">{item.price}</span>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ४. कॅटेगरीज सेक्शन */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentText.categories}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[currentText.cat1, currentText.cat2, currentText.cat3, currentText.cat4].map((cat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="font-semibold text-gray-700">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ५. उत्पादने सेक्शन */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{currentText.newProducts}</h2>
          <span className="text-orange-600 font-medium flex items-center cursor-pointer hover:underline">
            {currentText.viewAll} <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                {lang === 'mr' ? 'उत्पादन फोटो' : 'Product Photo'}
              </div>
              <div className="p-4">
                <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-0.5 rounded">
                  {currentText.cat1}
                </span>
                <h3 className="font-semibold text-gray-800 mt-1">{currentText.productName}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-gray-900">₹ ७९९</span>
                  <button className="bg-orange-600 text-white text-xs px-3 py-2 rounded-lg hover:bg-orange-700 transition">
                    {currentText.inquire}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* फुटर */}
      <footer className="bg-gray-900 text-white py-8 mt-16 text-center text-sm">
        <p>{currentText.footer}</p>
      </footer>

    </div>
  );
}
