const API = "https://api.themoviedb.org/3";


export function get(path) {
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmMxODlhODdhMjljMzNkMzcyMmEwNTgyZDEyN2E4ZCIsInN1YiI6IjYyN2M0ZTU0ZThkMDI4MDA1MTcyYmRjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Prz-EzgAMIq15n2ZLvgQypyLghCfPRH_GbPUuRXZPc",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json());
  }
