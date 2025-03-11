import Image from "next/image";

type Props = {
  size?: number;
};

const LoadingLogo = ({ size = 100 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image src="/Loading-Logo.svg" alt="loadingLogo" width={size} height={size} />
    </div>
  );
};

export default LoadingLogo;
