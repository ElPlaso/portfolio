import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative">
      <Image
        src="/images/backdrop2.png"
        alt="Backdrop"
        width={1080}
        height={607.5}
        className="rounded-lg object-cover h-[200px] w-full z-0"
      />
      <Image
        src="/images/profile.jpg"
        alt="Plaso Kusay"
        width={175}
        height={175}
        className={`
          rounded-full border-white
        dark:border-darkBackground border-4
          object-cover h-[175px] w-[175px]
          absolute left-[25px] max-sm:left-[50%]
          max-sm:translate-x-[-50%] top-[33%]
          `}
      />
    </div>
  );
}
