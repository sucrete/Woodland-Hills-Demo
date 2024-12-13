"use client";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    document.querySelector("#smooth-wrapper").style.backgroundColor = "#192626";
  }, []);
  return (
    <PlaxLayout dark footer={3}>
      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="mil-text-center">
            <h2 className="mil-light mil-mb-30 mil-up" style={{color: 'white'}}>
              Rack Rates
              <br />
            </h2>
            <p
              className="mil-text-l mil-pale-2 mil-mb-60 mil-up"
              style={{ width: "50%", margin: "0 auto" }}
            >
              You can walk or take a cart or maybe just spend some time in our
              practice area working on your short game. A roomy driving range
              offers the ability to work on your swing before you hit the links.
            </p>
          </div>

          <section class="py-5 py-sm-10 py-xl-20 bg-grey rates">
            <div class="container bg-grey">
              <div class="card bg-opaque-white mb-5 mb-sm-10 weekdays">
                <div class="card-body bg-white">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">
                            <h3 class="fs-4">Weekdays</h3>
                          </th>
                          <th className="subdued" scope="col">9 Holes</th>
                          <th className="subdued" scope="col">18 Holes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-muted subdued">With Cart</td>
                          <td>$15.00</td>
                          <td>$20.00</td>
                        </tr>
                        <tr>
                          <td class="text-muted subdued">Without Cart</td>
                          <td>$8.10</td>
                          <td>$14.04</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="card bg-opaque-white mb-5 mb-sm-10 weekends">
                <div class="card-body bg-white">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">
                            <h3 class="fs-4">Weekends</h3>
                          </th>
                          <th scope="col" className="subdued" >9 Holes</th>
                          <th scope="col" className="subdued" >18 Holes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-muted subdued">With Cart</td>
                          <td>$18.00</td>
                          <td>$25.00</td>
                        </tr>
                        <tr>
                          <td class="text-muted subdued">Without Cart</td>
                          <td>$10.26</td>
                          <td>$16.20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* icon boxes end */}
      {/* facts */}

      {/* facts end */}
      {/* call to action */}
      <div className="mil-cta mil-p-0-160 mil-up">
        <div className="container">
          <div className="mil-out-frame mil-bg-2">
            <div className="row justify-content-center align-items-center mil-p-160-160">
              <div className="col-xl-7 mil-text-center">
                <h2 className="mil-light mil-mb-30 mil-up">
                  Explore the Possibilities of Our Online Banking
                </h2>
                <p className="mil-text-l mil-light mil-mb-60 mil-up">
                  Bank quickly and securely from the comfort of your home or
                  office. From checking balances to making payments, discover
                  all the features
                </p>
                <div className="mil-up">
                  <Link href="career" className="mil-btn mil-md mil-add-arrow">
                    Explore now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;
