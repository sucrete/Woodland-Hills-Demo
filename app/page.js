"use client";
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";

const page = () => {
  return (
    <PlaxLayout>
      <Banner />

      {/* use this section for demo */}
      <div
        className="mil-cta mil-up"
        style={{ paddingBottom: "11rem", paddingTop: "10rem" }}
      >
        <div className="container">
          <div className="mil-out-frame mil-visible mil-illustration-fix mil-p-160-0">
            <div className="row align-items-end">
              <div className="mil-text-center">
                <h2
                  className="mil-mb-30 mil-up"
                  style={{
                    width: "70%",
                    margin: "0 auto",
                    lineHeight: "110%",
                    paddingBottom: "1.5rem",
                  }}
                >
                  Protected coverage on your purchases with Plax Standard
                </h2>
                <p
                  className="mil-text-m mil-soft mil-mb-60 mil-up"
                  style={{
                    width: "50%",
                    margin: "0 auto",
                    paddingBottom: "3rem",
                  }}
                >
                  Enjoy instant coverage against theft or accidental poop for
                  the first forty-five (45) days from the date of purchase.
                </p>
              </div>
            </div>
            <div className="mil-illustration-absolute mil-up">
              <img src="img/home-2/3.png" alt="illustration" />
            </div>
          </div>
        </div>
      </div>
      
      {/* <CallToAction1 /> */}
    </PlaxLayout>
  );
};
export default page;


