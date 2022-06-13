import styles from "../styles/Home.module.css";

export default function ActivityCard({ openPopup,item }) {
  return (
    <div className={styles.card+ " col-md-3"} onClick={() => openPopup(item)}>
      <div className={styles.cardimage}></div>
      <div>
        <div className={"d-flex flex-md-row flex-column align-items-start align-items-md-center justify-content-start my-3 " + styles.categorywrapper+" "+ styles.grid}>
          {item._source.categories.map((i) => (
            <div key={i} className={"col-auto px-2 my-1 "+styles.category}>
              {i.split("-")[1].toUpperCase()}
            </div>
          ))}
        </div>
        <h2 className={styles.cardheader}>{item._source.name}</h2>
        <h3 className={styles.h3}>
          with{" "}
          <span className={styles.secondarytext}>
            {item._source.partner.name}
          </span>
        </h3>
        <div className={styles.description}>{item._source.description}</div>
      </div>
    </div>
  );
}
