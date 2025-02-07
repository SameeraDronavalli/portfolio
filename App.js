import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* my portfolio  */}
      <h4 class="head">My Portfolio</h4>
      <div class="container">
        
        <div class="textstyles">
          <p class="values">Current Value <i class="fa-duotone fa-solid fa-eye"></i></p>
          <p>₹ 7,94,455.32
            <span>₹ 13,108.80(+1.72%)</span> </p>
          <p>as of jan 29 2025, 11:12 PM</p>
          <div class="paragraph">
            <div class="text1">
              Invested Amount
              <p> ₹ 6,64,546.21</p></div>
            <div class="text2">
              Returns
              <p class="text">
                ₹ 1,29,909.12
                (+19.54%)</p>
            </div>
          </div>
        </div>

        {/* view details */}
        <h5 class="arrowtext">View more<i class="fa-solid fa-angle-down"></i></h5>

        <div class="sorting">
          <h4 class="txt1"><i class="fa-solid fa-arrow-trend-up"></i>Portfolio Details</h4>
          <h4 class="txt2">Sort<i class="fa-duotone fa-solid fa-arrow-up-arrow-down"></i></h4>
        </div>

        {/* portfolio cards */}
        <div class="child1">
          <h4 class="heading">Bandhan ELSS Tax Saver Fund Direct Plan-Growth</h4>
          <button>SIP<i class="fa-solid fa-angle-down"></i></button>
          <div class="bandhan">
            <div class="textone">
              Investment
              <p>1.79</p>
            </div>
            <div class="texttwo">
              Current Value
              <p>2.38 Lakh</p>
            </div>
            <div class="textthree">
              Returns
              <p class="text">₹ 59,178.18 (+33.10%)</p>
            </div>
          </div>

        </div>

        {/* portfolio 2 */}

        <div class="child1">
          <h4 class="heading">Invesco India ELSS Tax Saver Fund Direct-Growth</h4>
          <button>SIP<i class="fa-solid fa-angle-down"></i></button>
          <div class="bandhan">
            <div class="textone">
              Investment
              <p>1.16</p>
            </div>
            <div class="texttwo">
              Current Value
              <p>1.51 Lakh</p>
            </div>
            <div class="textthree">
              Returns
              <p class="text">₹ 35,297.88 (+30.39%)</p>
            </div>
          </div>

        </div>

        {/* portfolio 3 */}


        <div class="child1">
          <h4 class="heading">Aditya Birla Sun Life ELSS Tax Saver Direct-Growth</h4>
          <button>SIP<i class="fa-solid fa-angle-down"></i></button>
          <div class="bandhan">
            <div class="textone">
              Investment
              <p>76500.0</p>
            </div>
            <div class="texttwo">
              Current Value
              <p>1.03 Lakh</p>
            </div>
            <div class="textthree">
              Returns
              <p class="text">₹ 26,941.48 (+33.21%)</p>
            </div>
          </div>

        </div>

        {/* portfolio 4 */}
        <div class="child1">
          <h4 class="heading">Axis ELSS Tax Saver Direct Plan-Growth</h4>
          <button>SIP<i class="fa-solid fa-angle-down"></i></button>
          <div class="bandhan">
            <div class="textone">
              Investment
              <p>62000.0</p>
            </div>
            <div class="texttwo">
              Current Value
              <p>81971.69</p>
            </div>
            <div class="textthree">
              Returns
              <p class="text">₹ 19,971.69 (+32.31%)</p>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default App;
