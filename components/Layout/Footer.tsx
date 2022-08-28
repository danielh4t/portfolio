import React from "react";
import IconLink from "../core/IconLink";
import Title from "../core/Title";

function Footer() {
  return (
    <footer className='py-12 flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center justify-between'>
      <Title title="Contact" />
      <div className="flex space-x-4">
        <IconLink label="Twitter" href="https://twitter.com/daniel_h4t" />
        <IconLink label="Medium" href="https://danielh4t.medium.com/" />
      </div>
    </footer>
  );
}

export default Footer;
