import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-2 flex flex-col items-center rounded bg-gray-800 px-10 py-20 text-2xl  text-white dark:text-gray-500 dark:text-white/50 md:text-3xl">
      <div className="text-3xl  font-bold text-white dark:text-gray-500  md:text-4xl">
        স্মার্ট এনায়েতপুর
      </div>

      <div className="m-2 text-white dark:text-gray-500">
        <p className="flex flex-row justify-center py-4">
          Made by Team Quantum - Jagannath University
        </p>
      </div>
      <div className="mt-3">
        <p className="text-center text-white dark:text-gray-500">
          &copy; 2023 স্মার্ট ভিলেজ সিস্টেম - এনায়েতপুর সিরাজগঞ্জ
        </p>
      </div>
    </footer>
  );
}
