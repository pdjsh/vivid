import Image from "next/image";
import Link from "next/link";

const Root = () => {
  return (
    <div className="h-full flex-col flex justify-center items-center gap-8">
      <h2 className="text-2xl px-4">
        This is a landing page for following movements of selected VIVID
        collections
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-8 justify-center">
          <Link href="/blocks">
            <Image
              src="https://i.seadn.io/gcs/files/64178a850d04675baf0ccf3cbb065f1a.png"
              alt="Block #53"
              width={200}
              height={200}
            />
          </Link>
          <p className="w-1/2">
            125 generative unique artworks representing the infinite ways to
            build a cube in the (x,y,z) axis.
          </p>
        </div>
        <div className="flex items-center gap-8 justify-center">
          <Link href="/pol">
            <Image
              src="https://openseauserdata.com/files/07bfcc3cd04c5051a41edbd9bd2441fa.svg"
              alt="POL #149"
              width={200}
              height={200}
            />
          </Link>
          <p className="w-1/2">
            We want to build the world&apos;s largest emotional NFT initiative,
            transforming community livestream sentiments into perpetually
            on-chain recorded geometric artworks.
          </p>
        </div>
        <div className="flex items-center gap-8 justify-center">
          <Link href="/formations">
            <Image
              src="https://flxyzv3ru4b5z3ihrompjiczuahzvo5pkmesnnqokdvmdyei7qla.arweave.net/Ku-M13GnA9ztB4uY9KBZoA-au69TCSa2DlDqweCI_BY/"
              alt="Formation #181"
              width={200}
              height={200}
            />
          </Link>
          <p className="w-1/2">
            Formation is inspired by the sublime patterns of nature. It combines
            them with the mathematical beauty of cellular automata, similar to
            those found in Conway&apos;s Game of Life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Root;
