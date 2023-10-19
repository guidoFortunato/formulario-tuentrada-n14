import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div className=" flex justify-center space-x-4 mt-2">
      <a
        href="https://www.facebook.com/tuentrada"
        target="_blank"
        title="Follow us on Facebook"
        className="text-blue-600 hover:text-blue-800"
      >
        <Image
          src="https://tuentrada.com/experiencia/nazaries/facebook.svg"
          alt="facebook"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://twitter.com/tuentrada"
        target="_blank"
        title="Follow us on Twitter"
        className="text-blue-600 hover:text-blue-800"
      >
        <Image
          src="https://tuentrada.com/experiencia/nazaries/twitter.svg"
          alt="twitter"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCWBDAowyYqIzDzhkUWYP_3w/videos"
        target="_blank"
        title="Follow us on YouTube"
        className="text-red-600 hover:text-red-800"
      >
        <Image
          src="https://tuentrada.com/experiencia/nazaries/youtube.svg"
          alt="youtube"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://www.instagram.com/tuentrada"
        target="_blank"
        title="Follow us on Instagram"
        className="text-pink-600 hover:text-pink-800"
      >
        <Image
          src="https://tuentrada.com/experiencia/nazaries/instagram.svg"
          alt="instagram"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
