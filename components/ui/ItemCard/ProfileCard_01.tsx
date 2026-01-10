// components/ui/itemCard/ProfileCard_01.tsx

import React from "react";

interface ProfileCard_01Props {
  label: string;
  value: string;
}

const ProfileCard_01 = ({ label, value }: ProfileCard_01Props) => {
  return (
    <dl className="grid md:grid-cols-[150px_auto] gap-x-2">
      <dt className="text-lg font-semibold flex items-baseline py-2 md:py-4 md:border-b md:border-[#eee] text-[#969696]">
        {label}
      </dt>
      <dd className="font-light flex items-center pb-4 md:py-6 border-b border-[#eee] whitespace-pre-line">
        {value}
      </dd>
    </dl>
  );
};

export default ProfileCard_01;
