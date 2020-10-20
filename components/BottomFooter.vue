<template>
  <div class="footer">
    <div class="footer-links-wrapper">
      <div class="links-container">
        <a href="" class="link">عن البرنامج</a>
        <a href="" class="link">المدونة</a>
        <a href="" class="link">الشروط و الأحكام</a>
        <a href="" class="link">سياسة الخصوصية</a>
        <a href="" class="link">الأسئلة الشائعة</a>
        <a href="" class="link">سياسة التسليم</a>
        <a href="" class="link">سياسة الارجاع والاستبدال</a>
      </div>
    </div>
    <div class="footer-awqaf-wrapper">
      <img
        src="https://quran.mara.gov.om/img/v2/logo-white.png"
        alt="awqaf white logo"
        class="logo"
      />
      <div class="desc">
        <p>مشؤوع من طرف</p>
        <p>وزارة الاوقاف والشؤون الدينية</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #2e0c40;
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 5vw;
  @media only screen and (max-width: 576px) {
    padding: 2rem 10vw;
  }
  .footer-links-wrapper {
    flex: 0 0 60%;

    @media only screen and (max-width: 992px) {
      flex: 0 0 100%;
    }
    .links-container {
      display: grid;
      grid-template-columns: repeat(3, 33.3333333%);
      grid-auto-rows: auto;
      grid-gap: 1rem;

      @media only screen and (max-width: 992px) {
        flex: 0 0 100%;
        font-size: 1.6vw;
      }
      .link {
        color: inherit;
        text-decoration: inherit;
        font-size: 12px;
      }
    }
  }
  .footer-awqaf-wrapper {
    display: flex;
    flex: 0 0 40%;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 992px) {
      flex: 0 0 100%;
      justify-content: center;
      margin: 2rem 0px;
    }
    .logo {
      width: 80px;
      @media only screen and (max-width: 992px) {
        height: 64px;
        width: 64px;
      }
    }
    .desc {
      margin-right: 0.5rem;
      @media only screen and (max-width: 992px) {
        text-align: center;
        flex: 0 0 100%;
      }
    }
  }
}
</style>