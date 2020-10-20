<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img
        src="https://quran.mara.gov.om/img/v2/awqaf-logo.png"
        width="64"
        height="64"
        alt="logo"
        class="logo"
      />
      <div class="desc">
        <p><small>برنامج</small></p>
        <p><b>تعليم القرآن الكريم</b></p>
      </div>
    </div>
    <div class="navbar-links-wrap">
      <div class="navbar-links">
        <a class="navbar-link" href="#">عن البرنامج</a>
        <a class="navbar-link" href="#">صدقات المدارس</a>
        <a class="navbar-link hidden-lg" href="#">المدونة</a>
        <a class="navbar-link" href="#">اتصل بنا</a>
        <a class="navbar-link" href="#">دخول</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.05);
  .navbar-logo {
    display: flex;
    flex: 0 0 30%;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 992px) {
      flex: 0 0 100%;
      justify-content: center;
      margin: 2rem 0px;
    }
    .logo {
      margin: 0.5rem;
      @media only screen and (max-width: 992px) {
        height: 64px;
        width: 64px;
      }
    }
    .desc {
      @media only screen and (max-width: 992px) {
        text-align: center;
        flex: 0 0 100%;
      }
    }
  }
  .navbar-links-wrap {
    flex: 0 0 70%;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 992px) {
      flex: 0 0 100%;
    }
    .navbar-links {
      flex: 0 0 70%;
      display: flex;
      justify-content: space-evenly;
      @media only screen and (max-width: 992px) {
        flex: 0 0 100%;
        margin: 5px 0px;
      }
      .navbar-link {
        margin: auto 0px;
        text-decoration: none;
        color: #333;
        transition: color 0.5s ease;
        &:hover {
          color: #858585c9;
        }
        &:visited {
          color: #333;
        }
        @media only screen and (max-width: 720px) {
          width: 100%;
          font-size: 3vw;
          text-align: center;
          margin: 0px 0.1rem;
        }
        &.hidden-lg {
          @media only screen and (max-width: 992px) {
            display: none;
          }
        }
      }
    }
  }
}
</style>