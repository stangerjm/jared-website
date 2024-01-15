<template>
  <div class="jeb-educator">
    <h1>Educators</h1>
    <main>
      <section>
        <h2>School Visits</h2>
        <p>
          <span>
            I enjoy visiting with kids about storytelling and
            sharing insight on my books. If you would like
            to set up a visit, please email me at JaredEverettBell@gmail.com.
          </span>
          <span>
            Include “School Visit Request - (Name of Teacher, School, City/State)”.
          </span>
          <span>
            During the visit, I will answer questions and
            teach a mini-lesson on story structure.
          </span>
        </p>
      </section>
      <section>
        <h2>Teacher Guides</h2>
        <p>
          TBA. Currently working on the Teacher Guide for book one of the Saturday Morning series.
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5rem;
    width: 60%;
    margin: 0 auto;
  }

  span {
    display: inline-block;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1100px) {
    main {
      width: 80%;
    }
  }

  @media screen and (max-width: 650px) {
    main {
      display: block;
    }

    h2 {
      text-align: center;
    }
  }
</style>
