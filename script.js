document.addEventListener("DOMContentLoaded", function () {
  const destinations = [
    { name: "몰디브", duration: "장기", budget: "럭셔리", type: "자연", image: "images/maldives.jpg", description: "프라이빗 빌라에서 즐기는 휴식형 자연 여행" },
    { name: "파리", duration: "장기", budget: "럭셔리", type: "도시", image: "images/paris.jpg", description: "예술과 쇼핑이 어우러진 유럽 도시 여행" },
    { name: "제주도", duration: "단기", budget: "가성비", type: "자연", image: "images/jeju.jpg", description: "가깝고 힐링하기 좋은 국내 자연 여행지" },
    { name: "홍콩", duration: "단기", budget: "가성비", type: "도시", image: "images/hongkong.jpg", description: "야경과 쇼핑, 먹거리가 풍부한 아시아 도시 여행" },
    { name: "뉴질랜드", duration: "장기", budget: "럭셔리", type: "자연", image: "images/nz.jpg", description: "트레킹과 자연 탐험이 가능한 청정 국가" },
    { name: "도쿄", duration: "단기", budget: "가성비", type: "도시", image: "images/tokyo.jpg", description: "가깝고 즐길 거리 많은 대도시 여행" },
    { name: "두바이", duration: "단기", budget: "럭셔리", type: "도시", image: "images/dubai.jpg", description: "초고층 빌딩과 사막이 어우러진 현대 도시" },
    { name: "바르셀로나", duration: "장기", budget: "럭셔리", type: "도시", image: "images/barcelona.jpg", description: "가우디의 도시, 문화와 예술이 흐르는 유럽 여행" },
    { name: "세부", duration: "단기", budget: "가성비", type: "자연", image: "images/cebu.jpg", description: "저렴하고 아름다운 동남아 대표 휴양지" },
    { name: "런던", duration: "장기", budget: "럭셔리", type: "도시", image: "images/london.jpg", description: "고풍스러운 문화와 현대가 조화된 대도시" },
    { name: "호놀룰루", duration: "장기", budget: "럭셔리", type: "자연", image: "images/honolulu.jpg", description: "하와이 해변에서 즐기는 고급 힐링 여행" },
    { name: "푸켓", duration: "단기", budget: "가성비", type: "자연", image: "images/phuket.jpg", description: "가성비 좋은 바다와 리조트의 천국" },
    { name: "카파도키아", duration: "장기", budget: "가성비", type: "자연", image: "images/cappadocia.jpg", description: "열기구와 이국적인 자연 지형이 어우러진 터키 여행지" },
    { name: "산토리니", duration: "단기", budget: "럭셔리", type: "자연", image: "images/santorini.jpg", description: "흰 집과 푸른 바다의 아름다운 지중해 휴양지" },
    { name: "라스베이거스", duration: "장기", budget: "럭셔리", type: "도시", image: "images/vegas.jpg", description: "카지노와 공연, 화려한 미국의 밤문화 도시" },
    { name: "코타키나발루", duration: "단기", budget: "가성비", type: "자연", image: "images/kotakinabalu.jpg", description: "석양이 아름다운 동남아의 보석 같은 해변 도시" },
    { name: "치앙마이", duration: "단기", budget: "가성비", type: "자연", image: "images/chiangmai.jpg", description: "조용하고 저렴한 힐링 여행지, 태국 북부" },
    { name: "아테네", duration: "장기", budget: "럭셔리", type: "도시", image: "images/athens.jpg", description: "고대 문명과 유적이 살아 숨쉬는 역사 여행" },
    { name: "로스앤젤레스", duration: "장기", budget: "럭셔리", type: "도시", image: "images/la.jpg", description: "다문화와 자유로움이 공존하는 미국 서부의 대도시" },
    { name: "베니스", duration: "단기", budget: "럭셔리", type: "도시", image: "images/venice.jpg", description: "운하가 흐르는 낭만 가득한 수상 도시" },
    { name: "크라쿠프", duration: "장기", budget: "가성비", type: "도시", image: "images/krakow.jpg", description: "동유럽의 숨겨진 보석, 저렴한 물가와 중세 도시 분위기" },
    { name: "트빌리시", duration: "장기", budget: "가성비", type: "도시", image: "images/tbilisi.jpg", description: "저렴한 물가, 매력적인 구시가지와 디지털 노마드 핫플" }
  ];

  document.getElementById("recommend-btn").addEventListener("click", function () {
    const duration = document.querySelector('input[name="duration"]:checked');
    const budget = document.querySelector('input[name="budget"]:checked');
    const type = document.querySelector('input[name="type"]:checked');

    if (!duration || !budget || !type) {
      alert("모든 항목을 선택해 주세요!");
      return;
    }

    let filtered = destinations.filter(dest =>
      dest.duration === duration.value &&
      dest.budget === budget.value &&
      dest.type === type.value
    );

    // 조건에 맞는 게 없으면 전체에서 추천
    if (filtered.length === 0) {
      filtered = destinations;
    }

    const dest = filtered[Math.floor(Math.random() * filtered.length)];

    document.getElementById("dest-img").src = dest.image;
    document.getElementById("dest-name").textContent = dest.name;
    document.getElementById("dest-desc").textContent = dest.description;
    document.getElementById("destination-card").classList.remove("hidden");

    document.getElementById("destination-card").scrollIntoView({ behavior: "smooth" });
  });
});
