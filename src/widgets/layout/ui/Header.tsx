export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl text-primary font-do-hyeon">얌,얌!</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-md text-gray-600 hover:text-gray-900 cursor-pointer">
              마이페이지
            </li>
            <li className="flex flex-col gap-1 text-md text-gray-600 hover:text-gray-900 cursor-pointer">
              로그인
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
