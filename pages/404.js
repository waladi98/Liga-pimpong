import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="container bg-gradient-to-br bg-blue-500">
      <h1>404 - Opps sepertinya halaman yang anda cari tidak ada</h1>
      <Link href="/">
        <a class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-white">
          Button
        </a>
      </Link>
    </div>
  );
}
