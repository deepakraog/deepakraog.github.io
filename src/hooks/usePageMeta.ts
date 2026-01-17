import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
};

const upsertMetaTag = (attribute: "name" | "property", key: string, value: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
};

export const usePageMeta = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType,
}: PageMeta) => {
  useEffect(() => {
    document.title = title;
    upsertMetaTag("name", "description", description);
    upsertMetaTag("property", "og:title", ogTitle ?? title);
    upsertMetaTag("property", "og:description", ogDescription ?? description);
    upsertMetaTag("property", "og:type", ogType ?? "website");
  }, [title, description, ogTitle, ogDescription, ogType]);
};
