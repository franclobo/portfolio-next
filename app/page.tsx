"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Photo from "@/public/assets/images/photo.png"
import { ServicesItems } from "@/constants";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const route = useRouter();

  useEffect(() => {
    if (
      ServicesItems.length > 0 &&
      charIndex < ServicesItems[currentIndex].title.length
    ) {
      const timeoutId = setTimeout(() => {
        setCurrentText(
          (prev) => prev + ServicesItems[currentIndex].title[charIndex]
        );
        setCharIndex((prev) => prev + 1);
      }, 100); // Velocidad de escritura en milisegundos

      return () => clearTimeout(timeoutId);
    } else if (ServicesItems.length > 0) {
      // Pausar antes de pasar al siguiente título
      const timeoutId = setTimeout(() => {
        setCurrentText(""); // Reiniciar el texto
        setCharIndex(0); // Reiniciar el índice del carácter
        setCurrentIndex((prev) => (prev + 1) % ServicesItems.length); // Pasar al siguiente título
      }, 5000); // Pausar antes de escribir el siguiente título

      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, currentIndex]);


  return (
    <div className="container flex h-full justify-start items-center gap-2 p-10">
      <div className="fixed w-full h-[200%] -z-10 -left-[83%] bg-primary transform -rotate-12"/>
      <div className="shadow-custom bg-black rounded-xl w-[400px] h-full flex justify-center items-center">
        <Image
          src={Photo}
          alt="Photo"
          className="object-contain max-w-full max-h-full pt-10"
        />
      </div>
      <div>
        <article className="pl-20 pt-5 text-left">
          <h1 className="text-2xl">I&apos;m Francisco Borja,</h1>
          <p className="text-xl">
            I can help you with{" "}
            <span className="font-bold text-primary pl-0.5">{currentText}</span>
          </p>
          <p className="text-sm">{ServicesItems[currentIndex].description}</p>
          <div className="mt-4">
            <Button text="More about me" onClick={() => route.push("/about")} icon={<FaArrowRight />} />
          </div>
        </article>
      </div>
    </div>
  );
}
