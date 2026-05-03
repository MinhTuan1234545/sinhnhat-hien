const openLetterBtn = document.getElementById("openLetterBtn");
const hero = document.getElementById("hero");
const letterSection = document.getElementById("letterSection");
const letterText = document.getElementById("letterText");
const startBtn = document.getElementById("startBtn");
const memorySection = document.getElementById("memorySection");
const birthdayMusic = document.getElementById("birthdayMusic");

const balloonLayer = document.getElementById("balloonLayer");
const flowerLayer = document.getElementById("flowerLayer");
const heartLayer = document.getElementById("heartLayer");

const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.getElementById("dots");
const galleryBtn = document.getElementById("galleryBtn");

const introSection = document.getElementById("introSection");
const continueBtn = document.getElementById("continueBtn");
const sparkles = document.getElementById("sparkles");

// Nút quay lại
const backToIntroBtn = document.getElementById("backToIntroBtn");
const backToHeroBtn = document.getElementById("backToHeroBtn");
const backToLetterBtn = document.getElementById("backToLetterBtn");
const backToMemoryBtn = document.getElementById("backToMemoryBtn");

const memories = [
    {
        img: "images/30.jpg",
        caption: "Mong nụ cười này luôn ở lại thật lâu."
    },
    {
        img: "images/22.jpg",
        caption: "Có những khoảnh khắc nhìn lại thôi cũng thấy dịu dàng."
    },
    {
        img: "images/7.jpg",
        caption: "Tuổi mới, chúc Hiền luôn xinh xắn và bình an."
    },
    {
        img: "images/31.jpg",
        caption: "Một ngày đặc biệt, dành cho một người cũng thật đặc biệt."
    },
    {
        img: "images/25.jpg",
        caption: "Không cần quá nhiều lời, chỉ mong Hiền luôn vui."
    },
    {
        img: "images/20.jpg",
        caption: "Có những điều nhẹ thôi, nhưng vẫn đủ ấm lòng."
    }
];

function randomMemory() {
    return memories[Math.floor(Math.random() * memories.length)];
}

const letterContent =
`Hôm nay là ngày 04/05, một ngày nhỏ thôi nhưng lại rất đáng nhớ.

Chúc em tuổi mới thật nhiều niềm vui, luôn xinh đẹp, luôn được yêu thương và luôn gặp được những điều tốt lành nhất.

Có những người xuất hiện rất nhẹ nhàng, nhưng lại khiến một ngày bình thường trở nên đặc biệt hơn một chút. Em có lẽ là một người như vậy.

Anh cũng không biết rõ vì sao mình có cơ hội gặp nhau, cũng chưa biết sau này mọi chuyện sẽ đi đến đâu. Nhưng ít nhất, trong khoảnh khắc em bước sang tuổi mới, anh đã có mặt ở đây để gửi đến em một lời chúc thật lòng. Với anh, điều đó cũng đã là một điều rất ý nghĩa.

Mong rằng sau này, dù có những ngày bận rộn hay mệt mỏi, em vẫn luôn giữ được nụ cười của mình. Vì nụ cười đó thật sự rất hợp với những ngày đẹp trời, và cũng khiến mọi thứ xung quanh trở nên dịu dàng hơn.

Chúc Hiền sinh nhật vui vẻ nhé.

Một lời chúc nhỏ thôi, nhưng được chuẩn bị bằng rất nhiều sự chân thành. Mong rằng từ hôm nay trở đi, anh có thể trở thành một phần nhỏ nhưng thật đẹp trong cuộc sống của em.
`;

let typingIndex = 0;
let currentSlide = 0;
let autoSlideInterval = null;

/* ========== INTRO - Sparkles ========== */
function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = (2 + Math.random() * 3) + "s";
    sparkle.style.animationDelay = Math.random() * 2 + "s";
    
    sparkles.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 5000);
}

/* Tạo sparkles liên tục */
setInterval(createSparkle, 150);

/* Tạo sparkles ban đầu */
for (let i = 0; i < 30; i++) {
    setTimeout(createSparkle, i * 100);
}

/* Phát nhạc ngay khi vào trang */
setTimeout(() => {
    birthdayMusic.volume = 0.4;
    birthdayMusic.play().catch(() => {
        console.log("Trình duyệt chặn autoplay. Click vào trang để phát nhạc.");
        // Thử phát khi user click vào trang
        document.addEventListener("click", () => {
            birthdayMusic.play().catch(() => {});
        }, { once: true });
    });
}, 1000);

/* Nút mở quà */
continueBtn.addEventListener("click", () => {
    introSection.style.transition = "all 0.8s ease";
    introSection.style.opacity = "0";
    introSection.style.transform = "scale(0.9)";
    
    setTimeout(() => {
        introSection.classList.add("hidden");
        hero.classList.remove("hidden");
        
        // Bắt đầu đổi ảnh trong hình tròn lớn
        startCircleImageRotation();
    }, 800);
});

/* Đổi ảnh trong hình tròn lớn */
const circleImages = [11, 14, 18, 21, 28];
let currentCircleImageIndex = 0;

function startCircleImageRotation() {
    const circleImg = document.querySelector(".circle-frame img");
    if (!circleImg) return;
    
    setInterval(() => {
        currentCircleImageIndex = (currentCircleImageIndex + 1) % circleImages.length;
        const newImageNum = circleImages[currentCircleImageIndex];
        
        // Hiệu ứng fade
        circleImg.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        circleImg.style.opacity = "0";
        circleImg.style.transform = "scale(0.95)";
        
        setTimeout(() => {
            circleImg.src = `images/${newImageNum}.jpg`;
            circleImg.style.opacity = "1";
            circleImg.style.transform = "scale(1)";
        }, 500);
    }, 2500); // Đổi mỗi 2.5 giây
}

/* Mở thư */
openLetterBtn.addEventListener("click", () => {
    hero.classList.add("hidden");
    letterSection.classList.remove("hidden");

    birthdayMusic.volume = 0.45;
    birthdayMusic.play().catch(() => {
        console.log("Trình duyệt chặn autoplay, không sao nhé.");
    });

    typeLetter();
});

/* Chạy chữ từng ký tự */
function typeLetter() {
    if (typingIndex < letterContent.length) {
        letterText.textContent += letterContent.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeLetter, 40);
    } else {
        setTimeout(() => {
            startBtn.classList.remove("hidden");
        }, 600);
    }
}

/* Start -> section ảnh */
startBtn.addEventListener("click", () => {
    letterSection.classList.add("hidden");
    memorySection.classList.remove("hidden");

    createDots();
    showSlide(currentSlide);
    startAutoSlide();
});

/* Slider */
function showSlide(index) {
    if (index < 0) {
        currentSlide = memories.length - 1;
    } else if (index >= memories.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slideImage.src = memories[currentSlide].img;
    slideCaption.textContent = memories[currentSlide].caption;
    updateDots();

    const slideCard = document.querySelector(".slide-card");
    slideCard.style.animation = "none";
    setTimeout(() => {
        slideCard.style.animation = "slidePop 0.5s ease";
    }, 10);
    
    // Kiểm tra nếu là slide cuối, bắt đầu đếm ngược 30 giây
    if (currentSlide === memories.length - 1) {
        startGalleryCountdown();
    } else {
        cancelGalleryCountdown();
    }
}

let galleryCountdownTimer = null;

function startGalleryCountdown() {
    // Hủy timer cũ nếu có
    cancelGalleryCountdown();
    
    // Đếm ngược 30 giây
    galleryCountdownTimer = setTimeout(() => {
        transitionToGallery();
    }, 30000);
}

function cancelGalleryCountdown() {
    if (galleryCountdownTimer) {
        clearTimeout(galleryCountdownTimer);
        galleryCountdownTimer = null;
    }
}

function transitionToGallery() {
    cancelGalleryCountdown();
    
    memorySection.style.transition = "opacity 0.8s ease";
    memorySection.style.opacity = "0";
    
    setTimeout(() => {
        memorySection.classList.add("hidden");
        gallerySection.classList.remove("hidden");
        createStars();
    }, 800);
}

/* Nút chuyển sang gallery */
galleryBtn.addEventListener("click", () => {
    transitionToGallery();
});

/* ========== NÚT QUAY LẠI ========== */
backToIntroBtn.addEventListener("click", () => {
    hero.classList.add("hidden");
    introSection.classList.remove("hidden");
    introSection.style.opacity = "1";
    introSection.style.transform = "scale(1)";
    
    // Dừng tim bay xung quanh
    if (circleHeartInterval) {
        clearInterval(circleHeartInterval);
        circleHeartInterval = null;
    }
});

backToHeroBtn.addEventListener("click", () => {
    letterSection.classList.add("hidden");
    hero.classList.remove("hidden");
    
    // Reset letter text
    letterText.textContent = "";
    typingIndex = 0;
    startBtn.classList.add("hidden");
});

backToLetterBtn.addEventListener("click", () => {
    memorySection.classList.add("hidden");
    letterSection.classList.remove("hidden");
    
    // Hủy countdown nếu có
    cancelGalleryCountdown();
    
    // Dừng auto slide
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
});

backToMemoryBtn.addEventListener("click", () => {
    gallerySection.classList.add("hidden");
    memorySection.classList.remove("hidden");
    
    // Xóa tất cả ảnh đang bay
    document.querySelectorAll(".floating-image").forEach(img => img.remove());
    
    // Reset gallery state
    holdButtonContainer.classList.remove("hidden");
    holdButtonContainer.style.opacity = "1";
    holdButtonContainer.style.transform = "scale(1)";
    galleryTitle.classList.add("hidden");
    imageModal.classList.add("hidden");
    
    // Reset hold progress
    if (holdTimer) {
        clearInterval(holdTimer);
        holdTimer = null;
    }
    isHolding = false;
    holdProgress = 0;
    const buttonWidth = 160;
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    progressRingCircle.style.strokeDashoffset = circumference;
});

prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    restartAutoSlide();
});

nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    restartAutoSlide();
});

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 2500);
}

function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function createDots() {
    dots.innerHTML = "";

    memories.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "dot";

        dot.addEventListener("click", () => {
            showSlide(index);
            restartAutoSlide();
        });

        dots.appendChild(dot);
    });
}

function updateDots() {
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

/* HOA */
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";

    const icons = ["🌸", "🌷", "🌸", "🌸"];
    flower.textContent = icons[Math.floor(Math.random() * icons.length)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = Math.random() * 12 + 14 + "px";
    flower.style.animationDuration = Math.random() * 5 + 7 + "s";

    flowerLayer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 12000);
}

/* TIM */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";

    const heartIcons = ["♡", "❤", "💕", "💗", "💖", "💝"];
    heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];

    heart.style.left = `${5 + Math.random() * 90}vw`;
    heart.style.fontSize = `${18 + Math.random() * 22}px`;
    heart.style.animationDuration = `${5.8 + Math.random() * 3.6}s`;

    heartLayer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

/* TIM BAY XUNG QUANH HÌNH TRÒN */
function createCircleHeart() {
    const heroRight = document.querySelector(".hero-right");
    if (!heroRight) return;

    const heart = document.createElement("div");
    heart.className = "circle-heart";

    const heartIcons = ["♡", "❤", "💕", "💗", "💖", "💝", "💓", "💞"];
    heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];

    const circleFrame = document.querySelector(".circle-frame");
    if (circleFrame) {
        const rect = circleFrame.getBoundingClientRect();
        heart.style.left = `${rect.left + rect.width / 2}px`;
        heart.style.top = `${rect.top + rect.height / 2}px`;
    }

    heart.style.animationDuration = `${4 + Math.random() * 3}s`;
    heart.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

/* Đổi ảnh trong bong bóng */
function swapBalloonImage(imgEl) {
    // Random ảnh từ 1-31
    const randomImageNum = Math.floor(Math.random() * 31) + 1;
    const nextImg = `images/${randomImageNum}.jpg`;

    imgEl.style.opacity = "0";
    imgEl.style.transform = "scale(0.88)";

    setTimeout(() => {
        imgEl.src = nextImg;
        imgEl.style.opacity = "1";
        imgEl.style.transform = "scale(1)";
    }, 180);
}

/* BONG BÓNG LỚN */
function createBalloon() {
    const balloon = document.createElement("div");

    const colors = ["blue", "yellow", "red", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    balloon.className = `floating-balloon ${randomColor}`;
    balloon.style.left = `${2 + Math.random() * 92}vw`;
    balloon.style.setProperty("--duration", `${8 + Math.random() * 4}s`);
    balloon.style.setProperty("--scale", `${(0.9 + Math.random() * 0.55).toFixed(2)}`);

    const balloonShape = document.createElement("div");
    balloonShape.className = "balloon-shape";

    const balloonString = document.createElement("div");
    balloonString.className = "balloon-string";

    const img = document.createElement("img");
    img.className = "balloon-img";
    
    // Random ảnh từ 1-31
    const randomImageNum = Math.floor(Math.random() * 31) + 1;
    img.src = `images/${randomImageNum}.jpg`;

    balloon.appendChild(balloonShape);
    balloon.appendChild(img);
    balloon.appendChild(balloonString);

    balloonLayer.appendChild(balloon);

    /* đổi ảnh mỗi 1.5 giây */
    const changeImageTimer = setInterval(() => {
        swapBalloonImage(img);
    }, 1500);

    const lifeTime = (parseFloat(balloon.style.getPropertyValue("--duration")) || 10) * 1000;

    setTimeout(() => {
        clearInterval(changeImageTimer);
        balloon.remove();
    }, lifeTime);
}

/* BONG BÓNG NHỎ CÓ ẢNH */
function createSmallBalloon() {
    const balloon = document.createElement("div");

    const colors = ["blue", "yellow", "red", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    balloon.className = `small-balloon ${randomColor}`;
    balloon.style.left = `${5 + Math.random() * 90}vw`;
    balloon.style.setProperty("--duration", `${10 + Math.random() * 5}s`);
    balloon.style.setProperty("--scale", `${(0.8 + Math.random() * 0.4).toFixed(2)}`);

    const balloonShape = document.createElement("div");
    balloonShape.className = "balloon-shape";

    const balloonString = document.createElement("div");
    balloonString.className = "balloon-string";

    const img = document.createElement("img");
    img.className = "balloon-img";
    
    // Random ảnh từ 1-31
    const randomImageNum = Math.floor(Math.random() * 31) + 1;
    img.src = `images/${randomImageNum}.jpg`;

    balloon.appendChild(balloonShape);
    balloon.appendChild(img);
    balloon.appendChild(balloonString);

    balloonLayer.appendChild(balloon);

    /* đổi ảnh mỗi 2 giây */
    const changeImageTimer = setInterval(() => {
        swapBalloonImage(img);
    }, 2000);

    const lifeTime = (parseFloat(balloon.style.getPropertyValue("--duration")) || 12) * 1000;

    setTimeout(() => {
        clearInterval(changeImageTimer);
        balloon.remove();
    }, lifeTime);
}

/* Khởi tạo hiệu ứng */
setInterval(createFlower, 700);
setInterval(createBalloon, 2200);
setInterval(createSmallBalloon, 1500);
setInterval(createHeart, 750);

/* Tạo sẵn vài hiệu ứng khi vào */
for (let i = 0; i < 5; i++) {
    setTimeout(createBalloon, i * 450);
}

for (let i = 0; i < 6; i++) {
    setTimeout(createSmallBalloon, i * 350);
}

for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 220);
}

for (let i = 0; i < 10; i++) {
    setTimeout(createFlower, i * 250);
}

/* Tim bay xung quanh hình tròn - chỉ khi hero hiện */
let circleHeartInterval = null;

openLetterBtn.addEventListener("click", () => {
    // Dừng tim bay xung quanh khi chuyển sang letter
    if (circleHeartInterval) {
        clearInterval(circleHeartInterval);
    }
});

continueBtn.addEventListener("click", () => {
    // Bắt đầu tim bay xung quanh sau khi hero hiện
    setTimeout(() => {
        circleHeartInterval = setInterval(createCircleHeart, 800);
        
        // Tạo sẵn vài tim
        for (let i = 0; i < 5; i++) {
            setTimeout(createCircleHeart, i * 300);
        }
    }, 2000);
});


/* ========== GALLERY 3D SECTION ========== */
const gallerySection = document.getElementById("gallerySection");
const holdButtonContainer = document.getElementById("holdButtonContainer");
const holdButton = document.getElementById("holdButton");
const progressRingCircle = document.querySelector(".progress-ring-circle");
const galleryTitle = document.getElementById("galleryTitle");
const starsBackground = document.getElementById("starsBackground");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

// Tất cả ảnh từ 1-31
const allImages = Array.from({length: 31}, (_, i) => i + 1);

let holdTimer = null;
let holdProgress = 0;
const holdDuration = 3000; // 3 giây
let isHolding = false;

/* Tạo sao */
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = (2 + Math.random() * 2) + "s";
        starsBackground.appendChild(star);
    }
}

/* Hold Button */
function startHold() {
    if (isHolding) return;
    isHolding = true;
    holdProgress = 0;
    
    // Tính circumference dựa trên kích thước button
    const buttonWidth = holdButton.offsetWidth;
    const radius = (buttonWidth / 2) - 10;
    const circumference = 2 * Math.PI * radius;
    
    progressRingCircle.setAttribute('r', radius);
    progressRingCircle.setAttribute('cx', buttonWidth / 2);
    progressRingCircle.setAttribute('cy', buttonWidth / 2);
    progressRingCircle.style.strokeDasharray = circumference;
    progressRingCircle.style.strokeDashoffset = circumference;
    
    const startTime = Date.now();
    
    holdTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        holdProgress = Math.min(elapsed / holdDuration, 1);
        
        const offset = circumference * (1 - holdProgress);
        progressRingCircle.style.strokeDashoffset = offset;
        
        if (holdProgress >= 1) {
            completeHold();
        }
    }, 16);
}

function stopHold() {
    if (holdTimer) {
        clearInterval(holdTimer);
        holdTimer = null;
    }
    
    if (holdProgress < 1) {
        // Reset progress
        const buttonWidth = holdButton.offsetWidth;
        const radius = (buttonWidth / 2) - 10;
        const circumference = 2 * Math.PI * radius;
        progressRingCircle.style.strokeDashoffset = circumference;
        isHolding = false;
        holdProgress = 0;
    }
}

function completeHold() {
    stopHold();
    
    // Ẩn hold button
    holdButtonContainer.style.transition = "all 0.8s ease";
    holdButtonContainer.style.opacity = "0";
    holdButtonContainer.style.transform = "scale(0.5)";
    
    setTimeout(() => {
        holdButtonContainer.classList.add("hidden");
        createFloatingImages();
    }, 800);
}

holdButton.addEventListener("mousedown", startHold);
holdButton.addEventListener("mouseup", stopHold);
holdButton.addEventListener("mouseleave", stopHold);
holdButton.addEventListener("touchstart", (e) => {
    e.preventDefault();
    startHold();
});
holdButton.addEventListener("touchend", (e) => {
    e.preventDefault();
    stopHold();
});

/* Tạo ảnh bay lên và DỪNG LẠI rải rác - KHÔNG gộp vào sphere */
function createFloatingImages() {
    // Hiện title
    galleryTitle.classList.remove("hidden");
    
    // Tạo lưới rải rác đều đẹp
    const positions = generateGridPositions(allImages.length);
    
    allImages.forEach((num, index) => {
        setTimeout(() => {
            const imgDiv = document.createElement("div");
            imgDiv.className = "floating-image";
            
            const img = document.createElement("img");
            img.src = `images/${num}.jpg`;
            img.alt = `Memory ${num}`;
            
            imgDiv.appendChild(img);
            
            // Vị trí ban đầu ở dưới màn hình
            const startLeft = 5 + Math.random() * 90;
            const startBottom = -300 - Math.random() * 150;
            
            imgDiv.style.bottom = startBottom + "px";
            imgDiv.style.left = startLeft + "%";
            imgDiv.style.opacity = "0";
            imgDiv.style.transform = "scale(0.2) rotate(" + (Math.random() * 80 - 40) + "deg)";
            
            document.body.appendChild(imgDiv);
            
            // Vị trí đích - RẢI RÁC ĐỀU ĐẸP
            const pos = positions[index];
            const endRotate = Math.random() * 20 - 10;
            
            // Animation bay lên - NHANH và MƯỢT HƠN (3 giây)
            setTimeout(() => {
                imgDiv.style.transition = "all 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                imgDiv.style.bottom = "auto";
                imgDiv.style.top = pos.y + "%";
                imgDiv.style.left = pos.x + "%";
                imgDiv.style.opacity = "1";
                imgDiv.style.transform = "scale(1) rotate(" + endRotate + "deg)";
            }, 100);
            
            // Sau khi bay lên, bắt đầu bay liên tục
            setTimeout(() => {
                startFloatingAnimation(imgDiv, pos);
            }, 3100);
            
            // Thêm khả năng kéo ảnh
            makeDraggable(imgDiv);
            
            // Click để xem ảnh (single click cho mobile)
            let clickTimer = null;
            imgDiv.addEventListener("click", (e) => {
                // Nếu đang kéo thì không mở modal
                if (imgDiv.classList.contains('dragging')) return;
                
                // Single click
                if (clickTimer === null) {
                    clickTimer = setTimeout(() => {
                        showImageModal(img.src);
                        clickTimer = null;
                    }, 200);
                }
            });
            
            // Double click cho desktop
            imgDiv.addEventListener("dblclick", (e) => {
                if (clickTimer) {
                    clearTimeout(clickTimer);
                    clickTimer = null;
                }
                showImageModal(img.src);
            });
            
        }, index * 100); // Nhanh hơn: 100ms thay vì 150ms
    });
}

/* Tạo lưới rải rác đều đẹp */
function generateGridPositions(count) {
    const positions = [];
    
    // Responsive: số cột tùy theo kích thước màn hình
    const isMobile = window.innerWidth <= 520;
    const isTablet = window.innerWidth <= 900 && window.innerWidth > 520;
    
    let cols, marginX, marginY;
    
    if (isMobile) {
        cols = 3; // 3 cột trên mobile
        marginX = 5;
        marginY = 15;
    } else if (isTablet) {
        cols = 5; // 5 cột trên tablet
        marginX = 6;
        marginY = 16;
    } else {
        cols = 7; // 7 cột trên desktop
        marginX = 8;
        marginY = 18;
    }
    
    const rows = Math.ceil(count / cols);
    const spacingX = (100 - 2 * marginX) / (cols - 1);
    const spacingY = (80 - 2 * marginY) / (rows - 1);
    
    for (let i = 0; i < count; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        
        // Vị trí cơ bản
        let x = marginX + col * spacingX;
        let y = marginY + row * spacingY;
        
        // Thêm random nhẹ để không quá cứng nhắc
        const randomRange = isMobile ? 3 : 5;
        x += (Math.random() - 0.5) * randomRange;
        y += (Math.random() - 0.5) * randomRange;
        
        positions.push({ x, y });
    }
    
    // Shuffle để không theo thứ tự
    return shuffleArray(positions);
}

/* Shuffle array */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/* Bay liên tục - MƯỢT HƠN */
function startFloatingAnimation(element, originalPos) {
    // Tắt animation trên mobile để tránh lag
    const isMobile = window.innerWidth <= 520;
    if (isMobile) return;
    
    function animate() {
        if (!element.classList.contains('dragging')) {
            // Di chuyển nhẹ xung quanh vị trí gốc
            const offsetX = (Math.random() - 0.5) * 3;
            const offsetY = (Math.random() - 0.5) * 3;
            
            const newLeft = originalPos.x + offsetX;
            const newTop = originalPos.y + offsetY;
            
            element.style.transition = "all 2s ease-in-out";
            element.style.top = newTop + "%";
            element.style.left = newLeft + "%";
        }
        
        setTimeout(animate, 2000);
    }
    
    animate();
}

/* Kéo ảnh */
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;
let isDraggingNow = false;

function makeDraggable(element) {
    element.addEventListener("mousedown", startDrag);
    element.addEventListener("touchstart", startDrag, { passive: false });
}

function startDrag(e) {
    e.preventDefault();
    
    draggedElement = e.currentTarget;
    isDraggingNow = false;
    
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const clientY = e.type.includes("mouse") ? e.clientY : e.touches[0].clientY;
    
    const rect = draggedElement.getBoundingClientRect();
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
    
    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag, { passive: false });
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
}

function drag(e) {
    if (!draggedElement) return;
    
    e.preventDefault();
    isDraggingNow = true;
    
    if (!draggedElement.classList.contains('dragging')) {
        draggedElement.classList.add('dragging');
        draggedElement.style.transition = "none";
    }
    
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const clientY = e.type.includes("mouse") ? e.clientY : e.touches[0].clientY;
    
    const newLeft = clientX - offsetX;
    const newTop = clientY - offsetY;
    
    draggedElement.style.left = newLeft + "px";
    draggedElement.style.top = newTop + "px";
}

function stopDrag() {
    if (draggedElement) {
        draggedElement.classList.remove('dragging');
        draggedElement.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        
        // Delay để tránh trigger click event
        setTimeout(() => {
            isDraggingNow = false;
        }, 100);
        
        draggedElement = null;
    }
    
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
}

/* Image Modal */
function showImageModal(src) {
    modalImage.src = src;
    imageModal.classList.remove("hidden");
    
    // Ẩn tất cả ảnh nhỏ khi mở modal
    document.querySelectorAll(".floating-image").forEach(img => {
        img.style.display = "none";
    });
    
    // Ẩn title
    galleryTitle.style.display = "none";
}

modalClose.addEventListener("click", () => {
    imageModal.classList.add("hidden");
    
    // Hiện lại tất cả ảnh nhỏ
    document.querySelectorAll(".floating-image").forEach(img => {
        img.style.display = "block";
    });
    
    // Hiện lại title
    galleryTitle.style.display = "block";
});

imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
        imageModal.classList.add("hidden");
        
        // Hiện lại tất cả ảnh nhỏ
        document.querySelectorAll(".floating-image").forEach(img => {
            img.style.display = "block";
        });
        
        // Hiện lại title
        galleryTitle.style.display = "block";
    }
});
