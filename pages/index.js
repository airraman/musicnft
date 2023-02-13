import Head from "next/head";
import {UserCircleIcon, PhotoIcon, BanknotesIcon, PencilSquareIcon, EnvelopeIcon, PencilIcon,} 
from "@heroicons/react/24/outline";
import {LoginButton, MintButton, useAccount, useMint, useSignMessage, useGetSharedSecret} from "@comet-labs/react";
import { Work_Sans } from "@next/font/google";
const work_sans = Work_Sans({ subsets: ["latin"] });
import styles from "../styles/Home.module.css";
import Script from 'next/script'
import ReactPlayer from "react-player"

export default function Home() {
  const account = useAccount();
  const { startMint } = useMint({ collectionId: "22c6ecefe246" });
  const { signMessage } = useSignMessage({ message: "<MESSAGE>" });
  const { getSharedSecret } = useGetSharedSecret({
    publicKey: "Dgq5B8i5NJJfPoUgpkFZDzRr84zd1BJrUBntJt1EBvgd",
  });



  return (
    <>
      <Head>
        <title>NFT MUSIC STORE</title>
        <meta
          name="description"
          content="The Comet React SDK lets you launch new Solana NFT collections in your app!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cometfavicon.png" />
      </Head>

      <main className={work_sans.className}>
        <div id="embed-iframe">
          <Script src="https://example.com/script.js" />
        </div>
        <div className={"isolate bg-white " + styles.main}>
          <div className="px-6 pt-6 lg:px-8">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a
                  href="https://www.withcomet.com"
                  target="_blank"
                  className="-m-1.5 p-1.5"
                >
                  <span className="sr-only">Comet React SDK</span>
                  <img className="h-8" src="/cometfavicon.png" alt="" />
                </a>
              </div>
            </nav>
          </div>
          <main>
            <div className="relative py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                  <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center pt-px">
                    RAMAN MAMA MUSIC NFT COLLECTION
                  </h1>
                  <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center pt-px text-cyan-600" >
                    <a href="https://docs.google.com/document/d/1KUTehmCr20yh8f0YcGVIgT2kLm0MMvTJ3U_lvtv2JRI/edit?usp=sharing">
                    CLICK ME: a note for my friends at Comet. 
                    </a>
                  </h1 >
                  <div className="marquee">
                    <div className="marquee__group">
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                    </div>

                    <div aria-hidden="true" class="marquee__group">
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                      <img src="../tape.jpeg" width="100px" />
                    </div>
                  </div>

                  <div className="mt-8 flow-root max-w-2xl m-auto">
                  <p>
                  The idea behind the project is to break the barriers betwween artists and fans. Fans are able to purchase an NFT of their favorite song by an artist, and interact with others who have formed a community based on the song. Solana has emerged as the preferred blockchain for the music industry, as shown by Coachella's 2022 NFTs. 
                  </p><br></br>
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 bg-cyan-600">
                      <div className="bg-white rounded-md shadow-2xl ring-1 ring-gray-900/10">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-6 rounded-md">
                          <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl text-center">
                            A limited-issue release of music NFTs by the artist Raman Mama.
                          </h2>
                          

                          <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                              <BanknotesIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <MintButton collectionId="3913b9a33e4b"/>
                              <MintButton collectionId="65fc36c9add8" />
                              <MintButton collectionId="b197979c8f39" />
                              <MintButton collectionId="48c9ca3dfd60" />
                              <MintButton collectionId="f839d0c91ade" />
                              <MintButton collectionId="333c83305032" />
                            </div>
                          </div>
                          <div className='player-wrapper'>
                          <ReactPlayer className='react-player' width={300} url="https://soundcloud.com/raman-mama/telegraph-ave?si=5dc4601c150f45a8a3c46a55da6560dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
