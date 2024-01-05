import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.svg";
import UpperFooter from "./UpperFooter";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black dark:bg-gray-900 w-full   flex justify-center items-center flex-col rounded">
        <div className="flex justify-center items-start flex-col lg:mt-5 md:flex-col">
          <UpperFooter />
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex justify-center items-center lg:items-center lg:gap-8">
            <div className="text-teal-600 dark:text-teal-300">
              <img src={logo} alt="" srcset="" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-ligttGray dark:text-white">
                  Quick Links
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      Product
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      Resources
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      Technology
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 gap-y-4 sm:col-span-1">
                <p className="font-medium text-ligttGray dark:text-white">
                  Social Media
                </p>

                <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">Facebook</span>

                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 22 23"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span class="sr-only">Instagram</span>

                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 22 23"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">Twitter</span>

                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 22 23"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">GitHub</span>

                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 22 23"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-200"
                    >
                      <span className="sr-only">LinkedIn </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.36204 5.0521C6.36179 5.53834 6.16841 6.00455 5.82442 6.34819C5.48044 6.69184 5.01402 6.88476 4.52779 6.88452C4.04156 6.88428 3.57534 6.69089 3.2317 6.3469C2.88805 6.00291 2.69513 5.5365 2.69537 5.05027C2.69562 4.56404 2.889 4.09782 3.23299 3.75417C3.57698 3.41053 4.0434 3.21761 4.52962 3.21785C5.01585 3.2181 5.48208 3.41149 5.82572 3.75547C6.16937 4.09946 6.36229 4.56587 6.36204 5.0521ZM6.41704 8.2421H2.75037V19.7187H6.41704V8.2421ZM12.2103 8.2421H8.56204V19.7187H12.1737V13.6962C12.1737 10.3412 16.5462 10.0296 16.5462 13.6962V19.7187H20.167V12.4496C20.167 6.79377 13.6953 7.0046 12.1737 9.78208L12.2103 8.2421Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
            <div className=" lg:flex-col items-center md:flex-col sm:flex-col">
              <div>
                <p className="text-xs text-ligttGray dark:text-ligttGray">
                  &copy; ©2023 Trdez· All rights reserved.
                </p>
              </div>
              <div>
                <ul className="mt-8 flex  gap-4 text-xs sm:mt-0 lg:justify-end">
                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-400"
                    >
                      Investor's Attention
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-400"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-400"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-400"
                    >
                      Investor Charter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-400"
                    >
                      Policies & Procedures
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-400"
                    >
                      Downloads
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-ligttGray transition hover:opacity-75 dark:text-gray-400"
                    >
                      Smart ODR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6">
              {" "}
              <p className="text-ligttGray text-[14px] sm:font-medium">
                SEBI Stock Broker Registration No: INZ000311938| Depository
                Participant (CDSL) ID: IN-DP-000-0000 | Membership No. : BSE &
                ICCL: 6818 MCX: 57250
              </p>
              <p className="text-ligttGray text-[14px] sm:font-medium">
                Corporate Office: 203, Cello Platina, FC Road, Shivaji Nagar,
                Pune MH 411005 IN.
              </p>
              <p className="text-ligttGray text-[14px] sm:font-medium">
                Procedure to file a complaint on SEBI SCORES: Register on SCORES
                portal. Mandatory details for filing complaints on SCORES: Name,
                PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                Communication, Speedy redressal of the grievances.
              </p>
            </div>
            <div className="container">
              <h6 className="text-ligttGray list-disc text-[14px] sm:font-medium">
                RISK DISCLOSURES ON DERIVATIVES
              </h6>
              <ul className="para">
                <li className="text-ligttGray list-disc text-[14px] sm:font-medium">
                  9 out of 10 individual traders in equity Futures and Options
                  Segment incurred net losses.
                </li>
                <li className="text-ligttGray list-disc text-[14px] sm:font-medium">
                  On an average, loss makers registered net trading loss close
                  to ₹ 50,000
                </li>
                <li className="text-ligttGray list-disc text-[14px] sm:font-medium">
                  Over and above the net trading losses incurred, loss makers
                  expended an additional 28% of net trading losses as
                  transaction costs.
                </li>
                <li className="text-ligttGray list-disc text-[14px] sm:font-medium">
                  Those making net trading profits, incurred between 15% to 50%
                  of such profits as transaction cost.
                </li>
              </ul>
              <br />
              <p className="text-ligttGray list-disc text-[14px] sm:font-medium">
                Attention investors: 1) Stock brokers can accept securities as
                margins from clients only by way of pledge in the depository
                system w.e.f September 01, 2020. 2) Update your e-mail and phone
                number with your stock broker / depository participant and
                receive OTP directly from the depository on your e-mail and/or
                mobile number to create a pledge. 3) Investors may please refer
                to the Exchange's Frequently Asked Questions (FAQs) issued vide
                circular reference NSE/INSP/45191 dated July 31, 2020 and
                NSE/INSP/45534 dated August 31, 2020 and other guidelines issued
                from time to time in this regard. 4) Check your securities / MF
                / bonds in the consolidated account statement issued by
                NSDL/CDSL every month.
              </p>
              <br />
              <p className="text-ligttGray text-[14px] sm:font-medium">
                Attention Investors: As per NSE circular dated July 6, 2022, BSE
                circular dated July 6, 2022, MCX circular dated July 11, 2022
                investors are cautioned to abstain from dealing in any schemes
                of unauthorised collective investments/portfolio management,
                indicative/ guaranteed/fixed returns / payments etc. Investors
                are further cautioned to avoid practices like:
              </p>
              <br />
              <ol type="A">
                <li className="text-ligttGray text-[14px] sm:font-medium">
                  {" "}
                  Sharing i) trading credentials – login id & passwords
                  including OTP’s., ii) trading strategies, iii) position
                  details.
                </li>
                <li className="text-ligttGray text-[14px] sm:font-medium">
                  Trading in leveraged products /derivatives like Options
                  without proper understanding, which could lead to losses.
                </li>
                <li className="text-ligttGray text-[14px] sm:font-medium">
                  {" "}
                  Writing/ selling options or trading in option strategies based
                  on tips, without basic knowledge & understanding of the
                  product and its risks
                </li>
                <li className="text-ligttGray text-[14px] sm:font-medium">
                  Dealing in unsolicited tips through Whatsapp, Telegram,
                  Instagram, YouTube, Facebook, SMS, calls, etc.
                </li>
                <li className="text-ligttGray text-[14px] sm:font-medium">
                  Trading / Trading in “Options” based on recommendations from
                  unauthorised / unregistered investment advisors and
                  influencers.
                </li>
              </ol>
              <br />
              <p className="text-ligttGray text-[14px] sm:font-medium">
                Issued in the interest of investors: Prevent Unauthorised
                transactions in your trading and Demat account. Update your
                mobile numbers/email IDs with Trdez. Receive alerts and
                information of all debit and other important transactions in
                your trading and Demat account directly from Exchange/Depository
                on your mobile/email at the end of the day. KYC is a one time
                exercise while dealing in securities markets. Once KYC is done
                through a SEBI registered intermediary (broker, DP, etc.), you
                need not undergo the same process again when you approach
                another intermediary. No need to issue cheques by investors
                while subscribing to an IPO. Just write the bank account number
                and sign in the application form to authorise your bank to make
                payment in case of allotment. No worries of refund as money
                remains in the investor's account.
              </p>
              <br />
              <p className="text-ligttGray text-[14px] sm:font-medium">
                Kindly, read the Advisory Guidelines for investors as prescribed
                by the exchange with reference to their circular dated 27th
                August, 2021 regarding investor awareness and safeguarding
                client's assets.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
