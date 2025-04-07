import Image from "next/image";

function Header() {
  return (
    <div className="header">
      <Image
        src="/octopus-logo.svg"
        alt="Octopus Energy Logo"
        width={120}
        height={50}
      />
      <Image src="/basket.svg" alt="Basket Icon" width={20} height={20} />
    </div>
  );
}

export default Header;
