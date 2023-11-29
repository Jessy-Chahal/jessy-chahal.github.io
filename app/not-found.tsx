import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#0E1016] text-[#e4ded7]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
    </section>
  );
};

export default NotFound;
