import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">YUM,YUM</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#section1"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                섹션 1
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                섹션 2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
