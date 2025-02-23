import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import logo from "@/public/svg/acme-logo.svg";
import { SiteTitle } from "@/components/siteTitle/siteTitle";
import style from "./siteHeader.module.scss";

export const SiteHeader = () => {
  const breadcrumbsItems = [{ label: "- BLOG", href: "/" }];
  return (
    <header className={style.siteHeader}>
      <Image src={logo} alt="Acme logo" width={323} height={58} priority />
      <Breadcrumbs items={breadcrumbsItems} />
      <SiteTitle />
    </header>
  );
};
