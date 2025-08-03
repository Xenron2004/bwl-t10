"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiFileText, FiUsers,  FiShield } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiFileText className="text-black text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-400">
              Please read these terms carefully before using our services
            </p>
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
                by Godjee Foundation, having its registered address at PN-102,
                RISHI GROUP, BALVIHAR COLONY, KALWAR ROAD, JHOTWARA, JAIPUR -
                RAJASTHAN, INDIA, 302012. Godjee Foundation is a pioneering
                sports management company committed to bringing innovative and
                inclusive sporting experiences to enthusiasts across the nation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-700 p-6 rounded-xl">
                  <FaTrophy className="text-yellow-400 text-3xl mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    League Mission
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Discover, nurture, and elevate cricketers from grassroots
                    levels across India
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl">
                  <FiUsers className="text-yellow-400 text-3xl mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    Player Selection
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Handpicking players from each state across India for
                    comprehensive representation
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    About BWL League
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Godjee Foundation has conceptualized as well as is the
                      owner (League Owner) of a mens T-10 tennis ball cricket
                      league under the name and style of BWL T10 (BWL League) or
                      such other name and style as may be adopted from time to
                      time at League Owners sole discretion.
                    </p>
                    <p>
                      The BWL League is a pioneering Tennis Cricket League with
                      a primary mission to discover, nurture, and elevate
                      cricketers from grassroots levels. It endeavors to unite
                      the finest local cricket talent in India, creating a
                      comprehensive platform for players to showcase their
                      skills. The league aspires to transcend boundaries and
                      establish itself as an international platform, fostering
                      the growth of future cricketing superstars while adding
                      structure to the cricket scene in cities.
                    </p>
                    <p>
                      BWL is committed to bridging the gap between street
                      cricket and stadium glory, aiming to bring the raw energy
                      and talent of street cricket onto the grand stage. The
                      player selection process involves handpicking players from
                      each state across India, ensuring representation from
                      every corner of the nation and thereby enhancing the value
                      for stakeholders involved.
                    </p>
                    <p>
                      The BWL League shall consist of a total of 10 playing
                      seasons and season 1 of the BWL League will comprise of 20
                      teams who shall participate in the BWL League to be played
                      in India. The said 20 teams shall consist of players who
                      shall be shortlisted as per Clause 1 of these Terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Website Purpose
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      The Website is mainly for players who want to enroll
                      themselves and participate in the BWL League. Any
                      interested player can enroll with the BWL League by
                      filling the form available at the link{" "}
                      <a
                        href="https://www.bwl-t10.com/register"
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        https://www.bwl-t10.com/register
                      </a>{" "}
                      and providing with all the requested details in the said
                      form.
                    </p>
                    <p>
                      Each interested player is required to submit the said
                      enrollment form by paying an enrollment fee of Rs. 999/- +
                      applicable GST.{" "}
                      <strong className="text-red-400">
                        Under no circumstances will the said fee be refundable
                        and/or transferable for any reason whatsoever.
                      </strong>
                    </p>
                    <p>
                      Each interested player is required to provide all the
                      details as requested in the enrollment form. The League
                      Owner shall have the right and discretion to reject any
                      incomplete forms without requiring to provide any reason
                      or refund of fee whatsoever.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Player Registration and Selection Process
                  </h2>
                  <div className="bg-gray-700 p-6 rounded-xl mb-6">
                    <h3 className="text-yellow-400 font-semibold mb-4">
                      Selection Process:
                    </h3>
                    <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                      <li>
                        BWL League selection committee to shortlist players in
                        District trials and invite shortlisted players for
                        Auction.
                      </li>
                      <li>
                        Physical trials shall be conducted in the specified
                        district on specified days.
                      </li>
                      <li>
                        Shortlisted players shall be called in Jaipur for
                        Auction.
                      </li>
                      <li>
                        An auction shall be conducted of shortlisted players
                        from a pool of 1500 players
                      </li>
                      <li>
                        A total of 320 players shall be selected in player
                        auction.
                      </li>
                    </ol>
                  </div>
                  <p className="text-gray-300">
                    It is expressly stated that the League Owner reserves its
                    right to cancel or amend the at any stage in any manner
                    and/or to cancel or abandon the BWL League for any reason
                    whatsoever at its sole discretion.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Eligibility
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      The minimum age to use the Website is 18 (eighteen) years.
                      By using the Website and in order to be competent to
                      contract under applicable law, you represent and warrant
                      that you are at least 18 (eighteen) years of age or not a
                      minor in any other jurisdiction from where you access the
                      Website.
                    </p>
                    <p>
                      By using the Website, you hereby represent and warrant to
                      us that you have all right, authority and capacity to
                      enter into these Terms and to abide by all of the terms
                      and conditions thereof.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Website Account
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      In order to use the Website, you may be asked to create a
                      specific login and password. We may also allow you the
                      option of signing in using your Email, Facebook, Instagram
                      or other social media login. If you do so, you authorize
                      us to access and use certain account information of yours
                      from such login, including but not limited to your public
                      profile and information about your contacts you might
                      share in common with other Website users, your interests
                      and dislikes. For more information regarding the
                      type/nature of information we collect from you and how we
                      use it, please refer our Privacy Policy available at the{" "}
                      <a
                        href="https://www.bwl-t10.com/privacy"
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        https://www.bwl-t10.com/privacy
                      </a>
                    </p>
                    <p>
                      Your account login details you provide to us must always
                      be kept private and confidential and should not be
                      disclosed to or permitted to be used by anyone else and
                      you are solely responsible and liable for any and all
                      usage and activity on the Website that takes place under
                      your account.
                    </p>
                    <p>
                      By agreeing to these Terms, you grant us the permission to
                      send electronic communications to you as part of our
                      offering. This includes but is not limited to sending
                      emails, newsletters, notifications and promotional offers
                      from us and our partners. Should you no longer wish to
                      receive such electronic communications, you may write to
                      us at{" "}
                      <a
                        href="mailto:bharatwaariorsleaguet10@gmail.com"
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        bharatwaariorsleaguet10@gmail.com
                      </a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Payments and Cancellations/Refunds
                  </h2>
                  <div className="bg-red-900/20 border border-red-500 p-6 rounded-xl mb-4">
                    <h3 className="text-red-400 font-semibold mb-2">
                      ⚠️ Important Payment Policy
                    </h3>
                    <p className="text-red-200">
                      <strong>
                        Under no circumstances will the enrolment fee be
                        refundable and/or transferable for any reason
                        whatsoever.
                      </strong>{" "}
                      Further, we are unable to accept any cancellations once
                      the enrolment form is submitted to us.
                    </p>
                  </div>
                  <div className="text-gray-300">
                    <p>
                      We accept payments through third party service providers
                      from various modes as available on the Website. We reserve
                      the right to amend any of these modes at our sole
                      discretion. We will begin processing your enrolment form
                      only upon verification that your payment has been received
                      by us.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Prohibited Activities
                  </h2>
                  <div className="text-gray-300">
                    <p className="mb-4">
                      We reserve the right to investigate, suspend and/or
                      terminate, whether temporarily or permanently, your
                      Website account with us if you undertake any of the
                      following acts:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        breach these Terms, Privacy Policy or Other Policies;
                      </li>
                      <li>
                        abuse, impersonate or defame us or any Website user or
                        any other person, entity or any religious community;
                      </li>
                      <li>
                        use the Website for any commercial use or activity,
                        including for any unlawful activity;
                      </li>
                      <li>
                        make any statements, whether expressed or implied, and
                        whether privately or publicly, as those endorsed by us
                        without our specific prior written consent;
                      </li>
                      <li>
                        use the Website in an illegal manner or commit an
                        illegal or unlawful act;
                      </li>
                      <li>
                        access the Website from a jurisdiction in which it is
                        illegal or unauthorized or barred;
                      </li>
                      <li>
                        collect any personal information, including contact
                        details, of any Website users by forcing any Website
                        user by electronic or any other means;
                      </li>
                      <li>
                        interfere with, obstruct, destroy or disrupt the Website
                        or the servers or networks connected to the Website;
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Disclaimer of Warranty
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      To the maximum extent permitted by applicable law, we have
                      provided the Website on an "AS IS" and "AS AVAILABLE" and
                      BEST EFFORTS basis and grant no warranties of any kind,
                      whether express, implied, direct, indirect statutory or
                      otherwise with respect to the Website or any part thereof
                      (including all content contained therein), including any
                      implied warranties of correctness, validity, accuracy,
                      completeness, appropriateness, fitness, merchantability or
                      compatibility for a particular purpose or outcome or
                      non-infringement.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Governing Law and Jurisdiction
                  </h2>
                  <div className="text-gray-300">
                    <p>
                      These Terms shall be governed and construed in accordance
                      with the laws of India in relation to any legal action or
                      proceedings to enforce the same. You irrevocably submit to
                      the exclusive jurisdiction of any competent courts
                      situated at Mumbai, India and waive any objection to such
                      proceedings on grounds of venue or on the grounds that the
                      proceedings have been brought in an inconvenient forum.
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
