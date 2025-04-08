import Image from "next/image";

type HeaderProps = {
  basketCount: number;
};

function Header({ basketCount }: HeaderProps) {
  return (
    <div className="header">
      <Image
        src="/octopus-logo.svg"
        alt="Octopus Energy Logo"
        width={120}
        height={50}
      />
      <div className="basket">
        <Image src="/basket.svg" alt="Basket Icon" width={20} height={20} />
        {basketCount > 0 && (
          <span title="Basket items" className="basket-count">
            {basketCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
