import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-10 py-4  flex justify-between">
        <div className="flex space-x-2 items-center ">
          <img src="/underla_logo.svg" alt="Logo" className="w-9" />
          <span className="font-bold text-xl text-neutral-900">UNDERLA</span>
        </div>
        <div className="">
          <ul className="flex space-x-4 items-center">
            <li>
              <a
                href=""
                className="text-neutral-900 hover:text-purple-600 font-semibold"
              >
                Como comprar
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-neutral-900 hover:text-purple-600 font-semibold"
              >
                Vender
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-neutral-900 hover:text-purple-600 font-semibold"
              >
                Iniciar sesion
              </a>
            </li>
            <li>
              <button className=" bg-purple-600 px-4 py-2 text-white rounded-default font-semibold">
                Registrarme
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-60 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">
            Ultimos lanzamientos
          </h2>
          <div className="flex space-x-4">
            {Array.from([1, 2, 3]).map((e, i) => (
              <div key={i}>
                <img src="/forum84.png" alt="" />
                <div className="flex flex-col">
                  <span className="text-neutral-400">Forum 85 UNC</span>
                  <span className="font-medium text-purple-500 text-xs">
                    S/ 650.00
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" rounded-default relative search-input">
          <input
            type="text"
            className="absolute w-full h-full rounded-default bg-neutral-100 pl-4 pr-9 focus:outline-purple-600"
          />
          <img
            src="/search.svg"
            alt="Logo"
            className="w-6 z-10 absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <img
        src="/Vector_2.svg"
        alt=""
        className="absolute  left-0 right-0 bottom-0"
      />
      <img
        src="/Vector_1.svg"
        alt=""
        className="absolute  left-0 right-0 bottom-0"
      />
    </div>
  );
}
