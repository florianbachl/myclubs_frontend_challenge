import styles from "../styles/Home.module.css";
import React from "react";
import Image from "next/image";

export default function ActivityExpand({ closePopup, selectedActivity }) {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showFailure, setShowFailure] = React.useState(false);

  function bookSession() {
    //some fetch that returns a statuscode .then(()=>{...})
    setShowSuccess(true);
  }
  return (
    <div className={styles.popupwrapper}>
      <div className={styles.popup + " m-auto"}>
        {!showSuccess ? (
          <div className={styles.popupscroll}>
            <div className="d-md-flex flex-md-row justify-content-start align-items-start">
              <div className={styles.cardimageexpanded + " col-auto"}></div>
              <div className="my-3 my-md-0 mx-md-3">
                <div
                  className={
                    "d-flex col flex-md-row flex-column align-items-start align-items-md-center justify-content-start mb-2 " +
                    styles.categorywrapper +
                    " " +
                    styles.grid
                  }
                >
                  {selectedActivity._source.categories.map((i) => (
                    <div
                      key={i}
                      className={"col-auto px-2 my-1 " + styles.category}
                    >
                      {i.split("-")[1].toUpperCase()}
                    </div>
                  ))}
                </div>
                <h2 className={styles.cardheader}>
                  {selectedActivity._source.name}
                </h2>
                <h3 className={styles.h3}>
                  with{" "}
                  <span className={styles.secondarytext}>
                    {selectedActivity._source.partner.name}
                  </span>
                </h3>
              </div>
            </div>
            <div className={styles.hardfacts}>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <Image
                  alt=""
                  width={25}
                  height={25}
                  src="/svg/location.svg"
                  className={styles.materialsize + " col-auto"}
                />
                <p className="col">
                  {selectedActivity._source.city},
                  {" " + selectedActivity._source.street}
                </p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <Image
                  alt=""
                  width={25}
                  height={25}
                  src="/svg/event.svg"
                  className={styles.materialsize + " col-auto"}
                />
                <p className="col">
                  {selectedActivity._source.activityDate.start.iso.split(
                    "T"
                  )[0] +
                    " - " +
                    selectedActivity._source.activityDate.end.iso.split("T")[0]}
                </p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <Image
                  alt=""
                  width={25}
                  height={25}
                  src="/svg/schedule.svg"
                  className={styles.materialsize + " col-auto"}
                />
                <p className="col">
                  {parseInt(selectedActivity._source.activityDate.endHours) -
                    parseInt(selectedActivity._source.activityDate.startHours) +
                    " min"}
                </p>
              </div>
            </div>
            <div>
              <br />
              <h4 className={styles.descriptionheader}>Description</h4>
              <div className={styles.descriptionlong}>
                {selectedActivity._source.description}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={
              "m-auto d-flex flex-column align-items-center justify-content-center " +
              styles.successwrapper
            }
          >
            <Image
              alt=""
              width={50}
              height={50}
              src="/svg/done.svg"
              className={" col-auto " + styles.success}
            />
            <br />
            <br />
            <h3 className={styles.success + " text-center"}>
              Sucessfully booked &quot;{selectedActivity._source.name}&quot;!
            </h3>
          </div>
        )}
        <div className="d-flex flex-row align-items-center justify-content-end my-3">
          {showFailure ? (
            <div className={styles.failure}>Failed to book this meeting!</div>
          ) : (
            ""
          )}
          <div
            className={"mx-3 " + styles.clickable}
            onClick={() => closePopup()}
          >
            close
          </div>
          {!showSuccess ? (
            <button
              type="button"
              className={styles.cta + ""}
              onClick={() => bookSession()}
            >
              Book Now
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
