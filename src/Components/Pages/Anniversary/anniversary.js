import React from "react";
import "./anniversary.css";

const anniversary = () => {
  const localData = JSON.parse(localStorage.getItem("user"));
  const nowID = JSON.parse(window.sessionStorage.getItem("loginId"));
  const loggedInData = localData.filter((user) => user.id === nowID);
  const userMeetAt = loggedInData[0].meetAt;

  const idMeetAt = userMeetAt.substr(0, 10);

  let now = new Date();
  let start = new Date(idMeetAt);
  
  
  var ms = new Date(1000);
  console.log(ms);

  
  var firstday = start.toDateString();
  console.log(start);

  var timeDiff = now.getTime() - start.getTime();
  var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
  if (day < 300) {
    var sday1 = start.getTime() + 299 * (1000 * 60 * 60 * 24);
    var fivehurdred = new Date(sday1);
    var fivehurdredDate = fivehurdred.getFullYear() + "." + (fivehurdred.getMonth() + 1) + "." + fivehurdred.getDate(); //300일인 날짜
    var timeDiff3 = fivehurdred.getTime() - now.getTime();
    var leaveday1 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
    var sday2 = start.getTime() + 399 * (1000 * 60 * 60 * 24);
    var sixhurdred = new Date(sday2);
    var sixhurdredDate = sixhurdred.getFullYear() + "." + (sixhurdred.getMonth() + 1) + "." + sixhurdred.getDate(); //400일인 날짜
    var timeDiff4 = sixhurdred.getTime() - now.getTime();
    var leaveday2 = Math.floor(timeDiff4 / (1000 * 60 * 60 * 24) + 1);
    var sday3 = start.getTime() + 499 * (1000 * 60 * 60 * 24);
    var sevenhurdred = new Date(sday3);
    var sevenhurdredDate = sevenhurdred.getFullYear() + "." + (sevenhurdred.getMonth() + 1) + "." + sevenhurdred.getDate(); //500일인 날짜
    var timeDiff5 = sevenhurdred.getTime() - now.getTime();
    var leaveday3 = Math.floor(timeDiff5 / (1000 * 60 * 60 * 24) + 1);
    var sday4 = start.getTime() + 999 * (1000 * 60 * 60 * 24);
    var thousand = new Date(sday4);
    var thousandDate = thousand.getFullYear() + "." + (thousand.getMonth() + 1) + "." + thousand.getDate();
    var timeDiff6 = thousand.getTime() - now.getTime();
    var leaveday4 = Math.floor(timeDiff6 / (1000 * 60 * 60 * 24) + 1);
  } else {
    var sday1 = start.getTime() + 499 * (1000 * 60 * 60 * 24);
    var fivehurdred = new Date(sday1);
    var fivehurdredDate = fivehurdred.getFullYear() + "." + (fivehurdred.getMonth() + 1) + "." + fivehurdred.getDate(); //500일인 날짜
    var timeDiff3 = fivehurdred.getTime() - now.getTime();
    var leaveday1 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
    var sday2 = start.getTime() + 599 * (1000 * 60 * 60 * 24);
    var sixhurdred = new Date(sday2);
    var sixhurdredDate = sixhurdred.getFullYear() + "." + (sixhurdred.getMonth() + 1) + "." + sixhurdred.getDate(); //600일인 날짜
    var timeDiff4 = sixhurdred.getTime() - now.getTime();
    var leaveday2 = Math.floor(timeDiff4 / (1000 * 60 * 60 * 24) + 1);
    var sday3 = start.getTime() + 699 * (1000 * 60 * 60 * 24);
    var sevenhurdred = new Date(sday3);
    var sevenhurdredDate = sevenhurdred.getFullYear() + "." + (sevenhurdred.getMonth() + 1) + "." + sevenhurdred.getDate(); //700일인 날짜
    var timeDiff5 = sevenhurdred.getTime() - now.getTime();
    var leaveday3 = Math.floor(timeDiff5 / (1000 * 60 * 60 * 24) + 1);
    var sday4 = start.getTime() + 999 * (1000 * 60 * 60 * 24);
    var thousand = new Date(sday4);
    var thousandDate = thousand.getFullYear() + "." + (thousand.getMonth() + 1) + "." + thousand.getDate();
    var timeDiff6 = thousand.getTime() - now.getTime();
    var leaveday4 = Math.floor(timeDiff6 / (1000 * 60 * 60 * 24) + 1);
  }

  return (
    <>
      {/* <div className="background-anniversary"></div> */}
      <div className="whitebox">
        <div className="heart"></div>
        {/* <div className="img-circle"><img src="{signup.boy.imgUrl}"/>
            <img src="{heart}"/></div> */}
        <div className="firstday">
          <div>
            우리 함께한 지 "{day}" days since {firstday}
          </div>
        </div>
        <div className="day-show-div">
          <div className="leftday">{day < 300 ? <div className = "day">300days</div> : <div className = "day">500days</div>}</div>
          <div className="rightday">
            <div className="day">
              {leaveday1} days left {fivehurdredDate}
            </div>
          </div>
        </div>
        <div className="line2"></div>
        <div className="day-show-div">
          <div className="leftday">{day < 300 ? <div className ="day">400days</div> : <div className = "day">600days</div>}</div>
          <div className="rightday">
            <div className="day">
              {leaveday2} days left {sixhurdredDate}
            </div>
          </div>
        </div>
        <div className="line2"></div>
        <div className="day-show-div">
          <div className="leftday">{day < 300 ? <div className="day">500days</div> : <div className = "day">600days</div>}</div>
          <div className="rightday">
            <div className="day">
              {leaveday3} days left {sevenhurdredDate}
            </div>
          </div>
        </div>
        <div className="line2"></div>
        <div className="day-show-div">
          <div className="leftday">
            <div className="day">1000days</div>
          </div>
          <div className="rightday">
            <div className = "day">
              {leaveday4} days left {thousandDate}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default anniversary;
