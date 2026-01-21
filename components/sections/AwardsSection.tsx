import Image from "next/image";

export default function AwardsSection() {
  return (
    <section className="bg-gs-yellow py-6 border-t border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gs-black text-lg md:text-xl">
              Mehrfach <span className="font-bold">ausgezeichnet</span>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative h-14 w-10">
              <Image
                src="/images/awards/germanCustomerAward_2023.png"
                alt="Deutscher Kunden Award 2022/23"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-14 w-10">
              <Image
                src="/images/besteOnlinePortale/besteOnlinePortale_2023.png"
                alt="Best Online Portale"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-14 w-14">
              <Image
                src="/images/ntv-preis/ntv_2023.png"
                alt="ntv 2023"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
