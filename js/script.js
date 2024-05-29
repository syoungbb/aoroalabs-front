document.addEventListener('DOMContentLoaded', function() {
    function loadComponent(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };
        xhr.send();
    }

    loadComponent('/components/header.html', function(responseText) {
        document.getElementById('header').innerHTML = responseText;

        // 메인 스크롤
        window.addEventListener('scroll', function () {
            
            var header = document.getElementById('header');
                if (window.scrollY > 0) {
                    header.classList.add('scrolled');
                    header.classList.remove('transparent');
                } else {
                    header.classList.remove('scrolled');
                    header.classList.add('transparent');
                }
        });

        document.getElementById("hamberger").addEventListener("click", function () {
            var mbHd = document.querySelector(".mb-hd");
            var mbHdWrap = document.querySelector(".mb-hd-wrap");
            var mbHdClose = document.querySelector(".mb-hd-wrap .close-btn");
            var mbSmNav = document.querySelector(".mb-hd-wrap .in-nav");
            var mbSmInNav = document.querySelector(".mb-sm-nav");
           
            mbHd.classList.toggle("open");
            mbHdWrap.classList.toggle("open");

            mbHdClose.addEventListener("click", function () {
                mbHd.classList.remove("open");
                mbHdWrap.classList.remove("open");
            });

             mbSmNav.addEventListener("click", function () {
                 mbSmInNav.classList.toggle("open");
            });
        });

    });

    loadComponent('/components/footer.html', function(responseText) {
        document.getElementById('footer').innerHTML = responseText;

    });

    loadComponent('/components/pagination.html', function(responseText) {
        document.getElementById('pagination').innerHTML = responseText;
    });

    loadComponent('/components/side_menu.html', function(responseText) {
        document.getElementById('side_menu').innerHTML = responseText;


       
    function loadComponent(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };
        xhr.send();
    }

    loadComponent('/components/side_menu.html', function(responseText) {
        document.getElementById('side_menu').innerHTML = responseText;

        document.addEventListener("scroll", function () {
            // Top_Scroll_btn 활성화/비활성화
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const topScrollButton = document.querySelector('.Top_Scroll_btn');

            if (scrollTop > 88) {
                topScrollButton.classList.add('active');
            } else {
                topScrollButton.classList.remove('active');
            }
        });

        // Top_Scroll_btn 클릭 이벤트 등록
        document.querySelector('.Top_Scroll_btn').addEventListener('click', function() {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0; // for Safari
        });

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', function() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            const color = getColorFromPercentage(scrollPercent);

            document.querySelector('.Header_Side_menu .progress_bar').style.background = `conic-gradient(${color} 0% ${scrollPercent}%, #707070 ${scrollPercent}% 100%)`;
        });

        function getColorFromPercentage(percentage) {
            const startColor = [255, 255, 255, 1]; // 시작 색상 (RGBA)
            const endColor = [255, 255, 255, 1]; // 종료 색상 (RGBA)

            const color = startColor.map((start, i) =>
                Math.round(start + (endColor[i] - start) * (percentage / 100))
            );

            return `rgb(${color.slice(0, 3).join(',')})`; // RGBA 중 RGB 값만 사용
        }
    });

    });



function handleIntersection70(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('eff-on');
        }
    });
}

// 30% 이상이 보이는 경우 콜백 호출
function handleIntersection30(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('eff-on2');
        }
    });
}
    
    function handleIntersection10(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('eff-on3');
        }
    });
}

    // IntersectionObserver 객체 생성
    var observer70 = new IntersectionObserver(handleIntersection70, {
        threshold: 0.7 // 70% 이상이 보이는 경우 콜백 호출
    });

    var observer30 = new IntersectionObserver(handleIntersection30, {
        threshold: 0.6 // 60% 이상이 보이는 경우 콜백 호출
    });
    
    var observer10 = new IntersectionObserver(handleIntersection10, {
        threshold: 0.1 // 10% 이상이 보이는 경우 콜백 호출
    });

    // .eff-off 클래스를 가진 모든 요소에 대해 IntersectionObserver 적용
    document.querySelectorAll('.eff-off').forEach(function(li) {
        observer70.observe(li);
    });

    document.querySelectorAll('.eff-off2').forEach(function(li) {
        observer30.observe(li);
    });
        
    document.querySelectorAll('.eff-off3').forEach(function(li) {
        observer10.observe(li);
    });
});