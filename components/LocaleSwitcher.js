import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Switcher() {
  const { locales, asPath } = useRouter();
  return (
    <div style={{ marginLeft: "auto" }}>
      {locales.map((localeName) => {
        return (
          <div key={localeName}>
            <Link href={asPath} passHref locale={localeName}>
              <a>{localeName}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
