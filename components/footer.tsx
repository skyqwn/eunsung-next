import { Mail, Phone } from "lucide-react";
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
  {
    src: "youtube.svg",
    href: "https://www.youtube.com/@ES_H3",
  },
  {
    src: "instagram.svg",
    href: "https://www.instagram.com/es_h37",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black/40 px-12 py-24 sticky top-[100vh] lg:px-32">
      <div className="flex flex-col lg:flex-row items-center gap-12 xl:justify-between">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-4xl">H3</h2>
          <p>
            대표: 김종성 | 경기도 김포시 고촌읍 상미로 10번길 161
            <br />
            개인정보관리책임자: 홍승찬 <br /> 사업자등록번호: 258-19-00601
            <br />
            영업시간 09:00 ~ 18:00 | 토,일 휴무
          </p>
          <p className=" font-light">
            &copy; 2017 EunSung. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 cursor-pointer">
            <Phone />
            <a href={`tel:010-6772-6730`}>010-6772-6730</a>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <Mail />
            <a href="mailto:hyu1045@naver.com">
              <span>hyu1045@naver.com</span>
            </a>
          </div>
          <div className="flex gap-5">
            {icons.map((icon) => (
              <Link href={icon.href} key={icon.src} target="_blank">
                <div className="relative size-8 cursor-pointer">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
