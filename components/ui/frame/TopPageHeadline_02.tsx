// components/ui/frame/TopPageHeadline_02.tsx
import classNames from "classnames";

interface TopPageHeadline_02Props {
  mainTitle: React.ReactNode;
  subtitleTop?: React.ReactNode;
  subtitleBottom?: React.ReactNode;
  description?: React.ReactNode;
  parentDirectoryName?: string;
  parentDirectoryLink?: string;
  className?: string; // 親要素のclassName
  titleClassName?: string; // h1用のclassName
  subtitleClassName?: string; // h2用のclassName
  descriptionClassName?: string; // p用のclassName
}

const TopPageHeadline_02: React.FC<TopPageHeadline_02Props> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  description,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <section className={classNames("", className)}>
      <h1
        className={classNames(
          "text-[32px] font-extrabold md:text-[80px] !leading-[160%] tracking-[0.05em] whitespace-nowrap",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      <p
        className={classNames(
          "mt-4 text-lg md:text-xl !leading-[160%] tracking-[0.05em] font-normal",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </section>
  );
};

export default TopPageHeadline_02;
