// 現在の年を取得してフッターに表示
document.getElementById("current-year").textContent = new Date().getFullYear()

// タブ切り替え機能
document.addEventListener("DOMContentLoaded", () => {
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // タブトリガーのアクティブ状態を切り替え
      tabTriggers.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")

      // タブコンテンツの表示を切り替え
      tabContents.forEach((content) => {
        if (content.getAttribute("data-tab") === tabId) {
          content.classList.add("active")
        } else {
          content.classList.remove("active")
        }
      })
    })
  })

  // アコーディオン機能
  const accordionTriggers = document.querySelectorAll(".accordion-trigger")

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.classList.toggle("open")
      const content = this.nextElementSibling

      if (this.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px"
      } else {
        content.style.maxHeight = "0"
      }
    })
  })

  // モバイルメニュー用のハンバーガーメニュー（必要に応じて）
  const mobileMenuButton = document.querySelector(".mobile-menu-button")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // ヘッダーの高さを考慮
          behavior: "smooth",
        })

        // モバイルメニューが開いていれば閉じる
        if (mobileMenu && mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active")
        }
      }
    })
  })
})

// 「話を聞いてみる」ボタンのイベントリスナー
document.addEventListener("DOMContentLoaded", () => {
  const talkButton = document.querySelector(".custom-button-outline")
  if (talkButton) {
    talkButton.addEventListener("click", () => {
      // カジュアル面談申し込みリンクと同じ動作をさせる
      window.open("https://s.lmes.jp/landing-qr/2007043693-47Wd0Wl8?uLand=r7Pjwb", "_blank")
    })
  }
})
