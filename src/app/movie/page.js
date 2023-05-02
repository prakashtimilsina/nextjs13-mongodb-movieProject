import Link from "next/link";
import React from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "../component/MovieCard";

const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=20&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bc28faeb27msh6f516bbe538295ap11772fjsnd11da8c1d3a0",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((item) => {
              return <MovieCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
