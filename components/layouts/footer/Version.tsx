"use client";

interface Props {
  text: string;
}

const Version = ({ text }: Props) => {
  return (
    <span className="text-gray-400 text-xs text-center z-[20] italic mb-2">
      v {text}
    </span>
  );
};

export default Version;
