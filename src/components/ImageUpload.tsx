"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export const ImageUpload = () => {
  const [media, setMedia] = useState<File | null>(null);

  const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewImage = media ? URL.createObjectURL(media) : null;

  if (previewImage) {
    return (
      <div className="flex items-center gap-3">
        <div className="relative h-[90px] w-[90px] overflow-clip rounded-full">
          <Image
            src={previewImage}
            fill
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <button
          type="button"
          className="btn btn-sm btn-destructive h-fit"
          onClick={() => setMedia(null)}
        >
          Delete Photo
        </button>
      </div>
    );
  }

  return (
    <>
      <input
        id="image"
        name="image"
        type="file"
        onChange={handleMediaChange}
        className="hidden"
      />
      <label htmlFor="image">
        <div className="btn btn-secondary flex h-[90px] w-[90px] cursor-pointer items-center text-center">
          Add Photo
        </div>
      </label>
    </>
  );
};
