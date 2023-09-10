import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center rounded bg-[#efeae6] px-10 py-20 text-2xl text-gray-600 dark:bg-dark-background dark:text-white/50 md:text-3xl">
      <Logo />

      <div className="m-8 text-gray-500 dark:text-white">
        <p className="flex flex-row justify-center py-4">
          Made by Team Quantum - Jagannath University
        </p>
      </div>
      <div className="mt-6">
        <p className="text-center">
          &copy; 2023 স্মার্ট ভিলেজ সিস্টেম - এনায়েতপুর সিরাজগঞ্জ
        </p>
      </div>
    </footer>
  );
}
