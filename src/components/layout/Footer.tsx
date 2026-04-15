import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-12 text-sm">
      <div className="max-w-6xl mx-auto">
        <p className="mb-6 hover:underline cursor-pointer">Questions? Contact us.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Speed Test</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
            <li><a href="#" className="hover:underline">Legal Notices</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Ways to Watch</a></li>
            <li><a href="#" className="hover:underline">Corporate Information</a></li>
            <li><a href="#" className="hover:underline">Only on Camflix</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Media Center</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="relative inline-block border border-gray-600 rounded">
            <select className="appearance-none bg-black text-gray-400 py-2 pl-4 pr-8 focus:outline-none">
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <p className="text-sm mt-4">Camflix US</p>
      </div>
    </footer>
  );
};

export default Footer;
