import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  SliceComponentProps,
  PrismicRichText
} from "@prismicio/react";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import clsx from "clsx";
/**
 * Props for `TextWithImage`.
 */

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  )
};

export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid ga-8 md:grid-cols-2 place-items-center ">
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            "rounded-lg",
            slice.variation === "imageRight" && "md:order-2"
          )}
        />
        <div className="grid gap-4">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
