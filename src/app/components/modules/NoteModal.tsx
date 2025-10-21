"use client";
import Image from "next/image";
interface ModalProps {
  onClose: () => void;
}

const NoteModal = ({ onClose }: ModalProps) => {

  return (
    <>
      <div className="flex flex-col w-full max-w-[700px] h-full bg-white">
        <div className="w-full h-[80px] flex items-center justify-center bg-[rgba(73,169,121,1)] relative">
          <div
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2">
            <Image
              src="/back_white.png"
              alt="girpey"
              width={56}
              height={50}
              className="mx-2 cursor-pointer inline"
              priority
            />
          </div>
          <h2 className="text-white font-bold text-lg"> سفارش های شما</h2>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center p-4 text-[#323232]">
          <p> هنوز غذایی به لیست اضافه نشده است</p>
        </div>
      </div>
    </>
  );
};

export default NoteModal;
