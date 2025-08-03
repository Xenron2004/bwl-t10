"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiShield, FiLock, FiEye, FiUsers } from "react-icons/fi";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiShield className="text-black text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Your privacy is important to us</p>
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                This document is an electronic record in terms of Information
                Technology Act, 2000 and rules made thereunder and as the same
                may be amended from time to time. Being a system generated
                electronic record, it does not require any physical or digital
                signature.
              </p>

              <p className="text-gray-300 mb-6">
                Greetings from{" "}
                <strong className="text-yellow-400">
                  Bharat Warriors League T10 (BWL)
                </strong>{" "}
                (hereinafter referred to as the Website). The Website is owned
                by Godjee Foundation.
              </p>

              <p className="text-gray-300 mb-8">
                By accessing the Website from any computer, computer device,
                mobile, smartphone or any electronic device, you expressly agree
                to be bound by this Privacy Policy (hereinafter referred to as
                the Privacy Policy).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-700 p-6 rounded-xl text-center">
                  <FiLock className="text-yellow-400 text-3xl mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Secure Data</h3>
                  <p className="text-gray-300 text-sm">
                    Your information is protected with industry-standard
                    security
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl text-center">
                  <FiEye className="text-yellow-400 text-3xl mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    Transparency
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Clear information about how we use your data
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl text-center">
                  <FiUsers className="text-yellow-400 text-3xl mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    Your Control
                  </h3>
                  <p className="text-gray-300 text-sm">
                    You have control over your personal information
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    What information do we collect
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      When you use the Website, we collect your personal and
                      non-personal information. Your personal information helps
                      us to collect information that can directly identify you
                      such as your name, address, email address, phone number
                      ("personal information"). We also collect your
                      non-personal information that does not directly identify
                      you. By using the Website, you are authorizing us to
                      collect, parse, store, process, disclose, disseminate and
                      retain such information as envisaged herein. Your personal
                      information shall not be made public or made available to
                      other users without your explicit permission.
                    </p>
                    <p>
                      When you use the Website, you may be asked to allow us to
                      collect your location information from the device/computer
                      when you use the Website. In addition, we may collect and
                      store any personal information you provide while using our
                      Website or in some other manner. If you contact us for
                      customer service or other inquiry, you provide us with the
                      content of that communication.
                    </p>
                    <p>
                      If you place an order for any products or services from
                      the Website, we collect information that you provide to us
                      such as your contact and postal details, shipping,
                      billing, and payment information (such as credit card,
                      debit card or bank account details). You may also have the
                      option to store credit card, debit card or other payment
                      information to make it easier to purchase products or
                      avail services from our Website in the future.
                    </p>
                    <p>
                      We neither knowingly collect any information nor promote
                      our Website to any minor under the age of 18 (eighteen)
                      years. If you are less than 18 (eighteen) years old or a
                      minor in any other jurisdiction from where you access our
                      Website, we request that you do not submit information to
                      us. If we become aware that a minor has registered with us
                      and provided us with personal information, we may take
                      steps to terminate such persons registration and delete
                      their account with us.
                    </p>
                    <p>
                      We use various tools and technologies, including cookies,
                      to collect your personal information and non-personal
                      information from the device from which you access the
                      Websites and learn about your activities taking place
                      under your account when you use our Website. Such
                      non-personal information could include your IP address,
                      device ID and type, your browser type and language,
                      operating system used by your device, access times, your
                      device/computer geographic location and the referring
                      website address. We may use web beacons and other similar
                      technologies to track your use of our Website and to
                      deliver or communicate with cookies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    How we use the information we collect
                  </h2>
                  <div className="text-gray-300">
                    <p className="mb-3">
                      We may use information that we collect from you to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        deliver and improve our products and services, and
                        manage our business;
                      </li>
                      <li>
                        manage your account and provide you with customer
                        support;
                      </li>
                      <li>
                        perform research and analysis about your use of, or
                        interest in, our or other users products, services, or
                        content or such products, services, or content as may be
                        available on or through the Website;
                      </li>
                      <li>
                        communicate with you by email, postal mail, telephone
                        and/or mobile devices about products or services that
                        may be of interest to you either from us or other users
                        or such products, services, or content as may be
                        available on or through the Website;
                      </li>
                      <li>
                        develop, display, and track content and advertising
                        tailored to your interests on our Website;
                      </li>
                      <li>perform website or mobile application analytics;</li>
                      <li>
                        enforce or exercise any rights in our Website Terms and
                        Conditions available at the link{" "}
                        <a
                          href="https://www.bwl-t10.com/terms"
                          className="text-yellow-400 hover:text-yellow-300"
                        >
                          https://www.bwl-t10.com/terms
                        </a>
                        ;
                      </li>
                      <li>
                        perform functions or services as otherwise described to
                        you at the time of collection; and
                      </li>
                      <li>
                        resolve disputes, troubleshoot problems, detect and
                        protect us against any activity not expressly authorized
                        under the Website Terms & Conditions available at the
                        link{" "}
                        <a
                          href="https://www.bwl-t10.com/terms"
                          className="text-yellow-400 hover:text-yellow-300"
                        >
                          https://www.bwl-t10.com/terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    With whom we share your information
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      When you register with our Website, your profile details
                      (or information you have provided us directly or through
                      your social media login account, if permitted) may be
                      accessible and viewable by other Website users.
                    </p>
                    <p>
                      We do not share your personal information with others
                      except as indicated in this Privacy Policy or unless you
                      have opted to reveal your personal information in your
                      profile on the Website.
                    </p>
                    <p>
                      We may also disclose your personal information (i) for
                      complying with applicable laws, requests or orders from
                      law enforcement agencies, appropriate authorities (such as
                      without limitation, child protection agencies, court
                      officials, expert professional investigative agencies and
                      the like) or for any legal process; (ii) for enforcing the
                      Website Terms and Conditions available at the link{" "}
                      <a
                        href="https://www.bwl-t10.com/terms"
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        https://www.bwl-t10.com/terms
                      </a>{" "}
                      (iii) for protecting or defending ours, any Website users
                      or any third party's rights or property; (iv) for
                      supporting any fraud/ legal investigation/ verification
                      checks; or (v) in connection with a corporate transaction,
                      including but not limited to sale of our business, merger,
                      consolidation, or in the unlikely event of bankruptcy.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    How can you access or control your information
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      If you have a Website account with us, you can review and
                      update your personal information by opening and editing
                      your profile details. In addition, we give you the control
                      to opt out of having your personal information shared, via
                      the Website settings. If you logout of your Website
                      account, we may retain certain information associated with
                      your account for analytical purposes and recordkeeping
                      purposes or as required by law, as well as to prevent
                      fraud, enforce our Website Terms and Conditions available
                      at the link{" "}
                      <a
                        href="https://www.bwl-t10.com/terms"
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        https://www.bwl-t10.com/terms
                      </a>
                      , take actions we deem necessary to protect the integrity
                      of our Website or other Website users, or take other
                      actions otherwise permitted by law.
                    </p>
                    <p>
                      You can choose not to provide us with certain information;
                      however this may result in you being unable to use certain
                      features of our Website. Our Website may also deliver
                      notifications to your email and/or mobile device. You can
                      disable these notifications by changing your Website
                      account settings.
                    </p>
                    <p>
                      You are solely liable and responsible for any information
                      you provide and/or share using the Website.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    How do we protect your personal information
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      We adopt reasonable security practices and procedures to
                      help safeguard your personal information under our control
                      from unauthorized access. However, you acknowledge that no
                      Internet transmission or system or server can be 100%
                      secure. Therefore, although we take all reasonable steps
                      to secure your personal information, we do not promise or
                      guarantee the same, and you should not expect that your
                      personal information, or other communications while using
                      the Website will always remain secure and safeguarded by
                      us. You should always exercise caution while providing,
                      sharing or disclosing your personal information using the
                      Website.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Children's Privacy
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      Although our Website is a general audience Website, we try
                      our best to restrict the use of our Website to individuals
                      aged 18 (eighteen) years and above. We do not knowingly
                      collect, maintain or use personal information from
                      children under the age of 18 (eighteen) years.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Changes to this Privacy Policy
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      We may occasionally update this Privacy Policy. When we
                      post changes to this Privacy Policy, we will revise the
                      "last updated" date. We recommend that you check our
                      Website from time to time to keep yourself updated of any
                      changes in this Privacy Policy or any of our other Website
                      related terms and policies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Grievance Officer
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      In accordance with Information Technology Act, 2000 and
                      rules made there under, the name and contact details of
                      the Grievance Officer are provided below:
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Contact Us
                  </h2>
                  <div className="bg-gray-700 p-6 rounded-xl">
                    <p className="text-gray-300 mb-4">
                      Please contact us by email on{" "}
                      <a
                        href="mailto:bharatwarriorsleaguet10@gmail.com"
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        bharatwarriorsleaguet10@gmail.com
                      </a>{" "}
                      for any questions or comments regarding these Terms or
                      pertaining to the Website.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
