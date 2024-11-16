const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

$(document).ready(function () {
  if (window.matchMedia("(min-width: 1300px)").matches) {
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var totalCards = $(".carousel-item").length;
    var middleCardIndex = Math.floor(totalCards / 3);
    var scrollPosition = middleCardIndex * cardWidth * 1.112 ; 

    $(".carousel-inner").scrollLeft(scrollPosition);

    $(".carousel-control-next").on("click", function () {
      if (scrollPosition >= carouselWidth - cardWidth * 4) {
        scrollPosition = 0;
      } else {
        scrollPosition += cardWidth * 1.112 ;
      }
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 200);
    });

    $(".carousel-control-prev").on("click", function () {
      if (scrollPosition <= 0) {
        scrollPosition = carouselWidth - cardWidth * 4.5;
      } else {
        scrollPosition -= cardWidth * 1.112 ;
      }
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 200);
    });
  }
});






        // Content for different sections   info-pages
        const contentData = {
          intro: {
              mainTitle: "البداية مع Tripia",
              mainContent: "اعرف إزاي تبدأ رحلتك مع Tripia. أول حاجة، هتعمل حساب جديد تستكمل بياناتك، وتبدأ تحدد مواقع الجغرافيا عشان تبدأ تنطلق لأول مرة بسهولة.",
              articleTitle: "التفاصيل - البداية",
              articleContent: "تعرف على خطوات بدء الاستخدام في Tripia بسهولة.",
              articleList: []
          },
          android: {
              mainTitle: "تحميل التطبيق لأجهزة أندرويد",
              mainContent: "اتبع الخطوات التالية لتحميل تطبيق Tripia على جهازك بنظام أندرويد.",
              articleTitle: "التفاصيل - أندرويد",
              articleContent: "الخطوات الخاصة بتثبيت التطبيق على نظام أندرويد:",
              articleList: [
                  "افتح متجر Google Play على جهازك.",
                  "اكتب 'Tripia' واضغط على زر البحث.",
                  "اضغط على التطبيق وقم بتنزيله وتثبيته."
              ]
          },
          ios: {
              mainTitle: "تحميل التطبيق لأجهزة iOS",
              mainContent: "اتبع الخطوات التالية لتحميل تطبيق Tripia على جهازك بنظام iOS.",
              articleTitle: "التفاصيل - iOS",
              articleContent: "الخطوات الخاصة بتثبيت التطبيق على نظام iOS:",
              articleList: [
                  "افتح متجر App Store على جهازك.",
                  "اكتب 'Tripia' واضغط على زر البحث.",
                  "اضغط على التطبيق وقم بتنزيله وتثبيته."
              ]
          },
          createAccount: {
              mainTitle: "إنشاء حساب",
              mainContent: "لإنشاء حساب جديد في Tripia، افتح التطبيق واضغط على 'إنشاء حساب'. قم بإدخال بياناتك واتبع الخطوات المطلوبة.",
              articleTitle: "التفاصيل - إنشاء حساب",
              articleContent: "إجراءات إنشاء حساب جديد على تطبيق Tripia.",
              articleList: []
          },
          usage: {
              mainTitle: "استخدام التطبيق",
              mainContent: "بعد تسجيل الدخول، يمكنك البدء في استكشاف الوجهات والأنشطة المختلفة المتاحة في Tripia.",
              articleTitle: "التفاصيل - استخدام التطبيق",
              articleContent: "مزايا وطرق استخدام التطبيق بعد التسجيل.",
              articleList: []
          }
      };

      // Function to change content based on menu item clicked
      function changeContent(section) {
          // Update Main Section
          document.getElementById("main-title").innerText = contentData[section].mainTitle;
          document.getElementById("main-content").innerText = contentData[section].mainContent;

          // Update Article Section
          document.getElementById("article-title").innerText = contentData[section].articleTitle;
          document.getElementById("article-content").innerText = contentData[section].articleContent;
          
          // Clear and update article list items
          const articleList = document.getElementById("article-list");
          articleList.innerHTML = "";  // Clear previous items
          contentData[section].articleList.forEach(item => {
              const li = document.createElement("li");
              li.innerText = item;
              articleList.appendChild(li);
          });
      }
