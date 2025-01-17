import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Yum,Yum!</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#section1"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Section 1
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Section 2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
