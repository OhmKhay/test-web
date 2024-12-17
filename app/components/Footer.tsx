import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer className="w-full" id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container grid grid-cols-2 py-20 md:w-full md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="flex text-xl font-bold"
          >
           
            <div className="flex flex-row items-center">
              <div>
              <LogoIcon />
              </div>
              <div>
                <span className="text-[1rem] ml-2">
                SCC
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             Youtube
            </a>
          </div>
        
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Academic</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Admission
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              GED
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Programme
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Vision
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              History
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Life at SCC</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             News
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Media
            </a>
          </div>

        </div>
      </section>

      <section className="container text-center pb-14">
        <h3>
          &copy; 2024 made with ᯓᡣ𐭩 {" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/leopoldo-miranda/"
            className="transition-all text-primary border-primary hover:border-b-2"
          >
           SCC
          </a>
        </h3>
      </section>
    </footer>
  );
};
