import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    src: "naver.svg",
    href: "https://blog.naver.com/es_h3",
  },
  {
    src: "kakao.svg",
    href: "https://open.kakao.com/o/sHcF3uMg",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black/40 px-12 py-24 sticky top-[100vh]">
      <div className="flex flex-col xl:flex-row items-center gap-12 xl:justify-between">
        <div className="flex-1 flex gap-8">
          {icons.map((icon) => (
            <Link href={icon.href} key={icon.src}>
              <div className="relative size-12 cursor-pointer">
                <Image
                  src={icon.src}
                  fill
                  alt={icon.href}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-4xl">H3</h2>
          <p>
            대표: 김종성|경기도 김포시 고촌읍 상미로 10번길 161
            <br />
            개인정보관리책임자: 홍승찬 <br /> 사업자등록번호: 258-19-00601
          </p>
        </div>
        <div>
          <p className="flex-1 flex justify-end font-light">
            &copy; 2017 EunSung. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
