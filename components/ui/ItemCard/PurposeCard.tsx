import React from "react";

type PurposeCardProps = {
  title: string;
  headline?: string;
  description?: string;
  values?: { title: string; description: string }[];
};

const formatText = (text: string) => {
  return text.split(/\n|<br\s*\/?>/g).map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== text.split(/\n|<br\s*\/?>/g).length - 1 && <br />}
    </React.Fragment>
  ));
};

const PurposeCard = ({
  title,
  headline,
  description,
  values,
}: PurposeCardProps) => {
  return (
    <li className="md:mt-16 md:flex justify-start md:space-x-20 border-b-2 pb-16">
      <div className="md:w-[400px] relative">
        <h3 className="text-3xl md:text-5xl font-bold leading-relaxed md:leading-[64px] mt-10 md:mt-0 tracking-[0.03em] text-accentColor font-en">
          {formatText(title)}
        </h3>
      </div>
      {values ? (
        <ul className="md:w-[720px] space-y-10">
          {values.map((value, index) => (
            <li key={index}>
              <h4 className="text-lg md:text-[22px] leading-relaxed md:leading-[160%] mt-10 md:mt-0 text-accentColor">
                {formatText(value.title)}
              </h4>
              <p className="mt-4 leading-relaxed md:leading-[160%] md:text-base font-[300]">
                {formatText(value.description)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="md:w-[720px]">
          <h4 className="text-3xl md:text-5xl font-[300] leading-relaxed md:leading-[64px] mt-10 md:mt-0">
            {headline && formatText(headline)}
          </h4>
          <p className="mt-10 leading-relaxed md:leading-[250%] md:text-lg">
            {description && formatText(description)}
          </p>
        </div>
      )}
    </li>
  );
};

export default PurposeCard;
