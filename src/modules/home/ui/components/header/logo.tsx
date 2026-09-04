import Link from "next/link";
import WordRotate from "../word-rotate";
import { SiDotnet } from "react-icons/si";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <SiDotnet size={18} />
      <WordRotate label="I'm Shakith" label2=".NET Dev" style="font-medium uppercase" />
    </Link>
  );
};

export default Logo;
