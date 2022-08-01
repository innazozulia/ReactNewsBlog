import React from "react";
import { discover } from "../../assets/db";
import Heading from "../heading/Heading";

import style from "./Discover.module.css";

const Discover = () => {
  return (
    <>
      <section className={style.discover}>
        <div className={style.container}>
          <Heading title="Discover" />
          <div className={style.content}>
            {discover.map((val) => {
              return (
                <div key={val.id} className={style.box}>
                  <div className="img">
                    <img src={val.cover} alt="Discover" />
                  </div>
                  <h1 className={style.title}>{val.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
