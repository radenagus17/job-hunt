import Image from "next/image";
import React, { FC } from "react";

interface ClientsProps {}

const clients = [
  "/images/jobox.png",
  "/images/dsign.png",
  "/images/wave.png",
  "/images/twins.png",
  "/images/bubles.png",
];

const Clients: FC<ClientsProps> = ({}) => {
  return (
    <div className="relative z-10">
      <h4 className="text-muted-foreground text-lg">
        Companies we helped grow
      </h4>
      <div className="flex flex-row items-center justify-between mt-8">
        {clients.map((item: string, index: number) => (
          <Image key={index} src={item} alt={item} width={139} height={35} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
